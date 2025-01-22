import { serve } from "https://deno.land/std@0.190.0/http/server.ts"
import { corsHeaders } from "../_shared/cors.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3"

interface ScheduleEmailRequest {
  to: string
  templateName: string
  userData: {
    name?: string
    dateOfBirth?: string
    template?: string
  }
  sendAt: string
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { to, templateName, userData, sendAt }: ScheduleEmailRequest = await req.json()
    console.log("Received schedule email request:", { to, templateName, userData, sendAt })

    // Calculate delay in seconds from now until sendAt
    const sendAtDate = new Date(sendAt)
    const delaySeconds = Math.floor((sendAtDate.getTime() - Date.now()) / 1000)

    if (delaySeconds < 0) {
      throw new Error("Cannot schedule email in the past")
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")

    if (!supabaseUrl || !supabaseKey) {
      throw new Error("Missing Supabase configuration")
    }

    console.log("Supabase URL:", supabaseUrl)

    // Initialize Supabase client with service role key
    const supabase = createClient(supabaseUrl, supabaseKey)

    // Create a unique job name using the email and timestamp
    const jobName = `send-${templateName}-${to}-${Date.now()}`

    // Ensure the URL is properly formatted without any trailing slashes
    const baseUrl = supabaseUrl.replace(/\/+$/, '')
    const functionUrl = `${baseUrl}/functions/v1/send-styled-email`
    
    console.log("Function URL constructed:", functionUrl)

    const command = {
      url: functionUrl,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${supabaseKey}`
      },
      body: {
        to: [to],
        templateName,
        userData,
        scheduledTime: sendAt
      }
    }

    console.log("Scheduling command:", JSON.stringify(command, null, 2))

    // Schedule the job using pg_cron via RPC
    const { data: scheduleData, error: scheduleError } = await supabase.rpc('schedule_email', {
      p_job_name: jobName,
      p_schedule: '* * * * *', // Run every minute
      p_command: JSON.stringify(command)
    })

    if (scheduleError) {
      console.error("Error scheduling email:", scheduleError)
      throw scheduleError
    }

    console.log("Schedule response:", scheduleData)
    console.log(`Successfully scheduled ${templateName} email to ${to} at ${sendAt}`)

    return new Response(
      JSON.stringify({ 
        message: "Email scheduled successfully",
        data: scheduleData
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )
  } catch (error) {
    console.error("Error in schedule-email function:", error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )
  }
}

serve(handler)