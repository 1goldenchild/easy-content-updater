import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { corsHeaders } from "./cors.ts";
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
  template?: 'rolex' | 'kardashian' | 'musk' | 'gates';
  scheduledTime?: string;
  dateOfBirth?: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("[send-styled-email] Function started");

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

    const { to, name, template, scheduledTime } = await req.json() as EmailRequest;
    console.log("[send-styled-email] Received request:", { to, name, template, scheduledTime });

    // Initialize Supabase client
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // If we have a template and scheduledTime, send the email immediately
    if (template && scheduledTime) {
      const now = new Date();
      const scheduleTime = new Date(scheduledTime);

      console.log("[send-styled-email] Processing immediate email:", {
        now: now.toISOString(),
        scheduledTime: scheduleTime.toISOString(),
        template,
        to
      });

      let subject: string;
      let htmlContent: string;

      switch (template) {
        case 'rolex':
          subject = "The Secret Behind Rolex's Success: A Numerological Analysis";
          htmlContent = generateRolexEmail(name);
          break;
        case 'kardashian':
          subject = "The Kardashian Empire: How They Used Numerology to Power Their Success";
          htmlContent = generateKardashianEmail(name);
          break;
        case 'musk':
          subject = "How Elon Musk Uses Numerology to Get Rich";
          htmlContent = generateMuskEmail(name);
          break;
        case 'gates':
          subject = "How Bill Gates Uses Numerology to Shape His Success";
          htmlContent = generateGatesEmail(name);
          break;
        default:
          throw new Error("Invalid template specified");
      }

      try {
        console.log(`[send-styled-email] Sending ${template} email to ${to}`);
        const emailResult = await sendEmail(RESEND_API_KEY, to, subject, htmlContent);
        console.log("[send-styled-email] Email sent successfully:", emailResult);
      } catch (error) {
        console.error(`[send-styled-email] Error sending ${template} email:`, error);
        throw error;
      }

      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // This is a new user registration, let's schedule all the emails
    console.log("[send-styled-email] Scheduling email sequence for new user:", { to, name });

    // Calculate schedule times - using shorter intervals for testing
    const now = new Date();
    const rolexTime = new Date(now.getTime() + 2 * 60 * 1000); // 2 minutes
    const kardashianTime = new Date(now.getTime() + 5 * 60 * 1000); // 5 minutes
    const muskTime = new Date(now.getTime() + 8 * 60 * 1000); // 8 minutes
    const gatesTime = new Date(now.getTime() + 11 * 60 * 1000); // 11 minutes

    const scheduleEmail = async (template: string, scheduleTime: Date) => {
      console.log(`[send-styled-email] Scheduling ${template} email for:`, scheduleTime.toISOString());
      
      const jobName = `${template}-email-${to}-${Date.now()}-${Math.random().toString(36).substring(7)}`;
      
      const { error } = await supabase.rpc('schedule_email', {
        p_job_name: jobName,
        p_schedule: '* * * * *', // Run every minute
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

    // Schedule all emails with shorter intervals for testing
    try {
      await scheduleEmail('rolex', rolexTime);
      await scheduleEmail('kardashian', kardashianTime);
      await scheduleEmail('musk', muskTime);
      await scheduleEmail('gates', gatesTime);
    } catch (error) {
      console.error("[send-styled-email] Error scheduling emails:", error);
      throw error;
    }

    console.log("[send-styled-email] Successfully scheduled all emails");
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