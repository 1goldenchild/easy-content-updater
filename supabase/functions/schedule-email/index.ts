import { serve } from "https://deno.land/std@0.190.0/http/server.ts"
import { corsHeaders } from "../_shared/cors.ts"

interface ScheduleEmailRequest {
  to: string
  templateName: "welcome" | "analysis"
  userData: {
    name?: string
    dateOfBirth?: string
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

    // Schedule the email using pg_cron
    const supabaseUrl = Deno.env.get("SUPABASE_URL")
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")

    if (!supabaseUrl || !supabaseKey) {
      throw new Error("Missing Supabase configuration")
    }

    // Create a unique job name using the email and timestamp
    const jobName = `send-${templateName}-${to}-${Date.now()}`

    // Schedule the job using pg_cron
    const query = `
      SELECT cron.schedule(
        '${jobName}',
        '* * * * *', -- Run every minute (we'll check the sendAt time in the function)
        $$
        SELECT net.http_post(
          url:='${supabaseUrl}/functions/v1/send-styled-email',
          headers:='{"Content-Type": "application/json", "Authorization": "Bearer ${supabaseKey}"}'::jsonb,
          body:='{"to": ["${to}"], "templateName": "${templateName}", "userData": ${JSON.stringify(userData)}}'::jsonb
        ) WHERE NOW() >= '${sendAt}'::timestamptz;
        $$
      );
    `

    const dbUrl = Deno.env.get("SUPABASE_DB_URL")
    if (!dbUrl) {
      throw new Error("Database URL not configured")
    }

    // Execute the scheduling query
    const response = await fetch(dbUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${supabaseKey}`
      },
      body: JSON.stringify({
        query: query
      })
    })

    if (!response.ok) {
      throw new Error(`Failed to schedule email: ${await response.text()}`)
    }

    console.log(`Successfully scheduled ${templateName} email to ${to} at ${sendAt}`)

    return new Response(
      JSON.stringify({ message: "Email scheduled successfully" }),
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