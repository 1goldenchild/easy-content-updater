import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { corsHeaders } from "../_shared/cors.ts";
import { sendEmail } from "./email-sender.ts";
import { generateRolexEmail } from "./templates/rolex-email.ts";
import { generateKardashianEmail } from "./templates/kardashian-email.ts";
import { generateMuskEmail } from "./templates/musk-email.ts";
import { generateGatesEmail } from "./templates/gates-email.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

interface EmailRequest {
  to: string;
  name: string;
  dateOfBirth?: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("[send-styled-email] Function started");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!RESEND_API_KEY) {
      console.error("[send-styled-email] RESEND_API_KEY is not set");
      throw new Error("Server configuration error: RESEND_API_KEY is not set");
    }

    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      console.error("[send-styled-email] Missing Supabase configuration");
      throw new Error("Missing Supabase configuration");
    }

    const { to, name, dateOfBirth } = await req.json() as EmailRequest;
    console.log("[send-styled-email] Processing request for:", { to, name, dateOfBirth });

    // Initialize Supabase client
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Calculate email schedule times
    const now = new Date();
    const firstEmailTime = new Date(now.getTime() + 4 * 60 * 1000); // 4 minutes
    const secondEmailTime = new Date(now.getTime() + 12 * 60 * 60 * 1000); // 12 hours
    const thirdEmailTime = new Date(secondEmailTime.getTime() + 24 * 60 * 60 * 1000); // 36 hours from start
    const fourthEmailTime = new Date(thirdEmailTime.getTime() + 24 * 60 * 60 * 1000); // 60 hours from start

    console.log("[send-styled-email] Calculated email times:", {
      firstEmail: firstEmailTime.toISOString(),
      secondEmail: secondEmailTime.toISOString(),
      thirdEmail: thirdEmailTime.toISOString(),
      fourthEmail: fourthEmailTime.toISOString(),
    });

    // Initialize email sequence status
    try {
      const { error: statusError } = await supabase
        .from('email_sequence_status')
        .insert([
          { 
            user_reading_id: to, 
            sequence_position: 1, 
            scheduled_for: firstEmailTime.toISOString(),
            sent: false 
          },
          { 
            user_reading_id: to, 
            sequence_position: 2, 
            scheduled_for: secondEmailTime.toISOString(),
            sent: false 
          },
          { 
            user_reading_id: to, 
            sequence_position: 3, 
            scheduled_for: thirdEmailTime.toISOString(),
            sent: false 
          },
          { 
            user_reading_id: to, 
            sequence_position: 4, 
            scheduled_for: fourthEmailTime.toISOString(),
            sent: false 
          }
        ]);

      if (statusError) {
        console.error("[send-styled-email] Error initializing email status:", statusError);
        throw statusError;
      }
    } catch (error) {
      console.error("[send-styled-email] Error in email sequence initialization:", error);
      throw error;
    }

    // Schedule all emails using pg_cron
    const scheduleEmail = async (template: string, scheduleTime: Date) => {
      console.log(`[send-styled-email] Scheduling ${template} email for:`, scheduleTime.toISOString());
      
      const jobName = `${template}-email-${to}-${Date.now()}-${Math.random().toString(36).substring(7)}`;
      
      const { error } = await supabase.rpc('schedule_email', {
        p_job_name: jobName,
        p_schedule: '* * * * *', // Check every minute
        p_command: JSON.stringify({
          url: `${SUPABASE_URL}/functions/v1/process-scheduled-email`,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
          },
          body: {
            to,
            name,
            template,
            scheduledTime: scheduleTime.toISOString()
          }
        })
      });

      if (error) {
        console.error(`[send-styled-email] Error scheduling ${template} email:`, error);
        throw error;
      }
      console.log(`[send-styled-email] Successfully scheduled ${template} email with job name: ${jobName}`);
    };

    // Schedule all emails
    try {
      await scheduleEmail('rolex', firstEmailTime);
      await scheduleEmail('kardashian', secondEmailTime);
      await scheduleEmail('musk', thirdEmailTime);
      await scheduleEmail('gates', fourthEmailTime);
      console.log("[send-styled-email] Successfully scheduled all emails");
    } catch (error) {
      console.error("[send-styled-email] Error scheduling emails:", error);
      throw error;
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("[send-styled-email] Error in function:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error occurred" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
};

serve(handler);