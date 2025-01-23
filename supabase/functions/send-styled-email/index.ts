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
  console.log("Email function started");

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      throw new Error("Server configuration error: RESEND_API_KEY is not set");
    }

    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error("Missing Supabase configuration");
    }

    const { to, name, template, scheduledTime } = await req.json() as EmailRequest;
    console.log("Received request:", { to, name, template, scheduledTime });

    // If we have a template and scheduledTime, this is a scheduled email that needs to be sent
    if (template && scheduledTime) {
      const now = new Date();
      const scheduleTime = new Date(scheduledTime);

      if (now >= scheduleTime) {
        console.log(`Processing ${template} email for ${to}`);
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

        await sendEmail(RESEND_API_KEY, to, subject, htmlContent);
        console.log(`Successfully sent ${template} email to ${to}`);
      } else {
        console.log(`Not yet time to send ${template} email to ${to}. Scheduled for ${scheduledTime}`);
      }

      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // This is a new user registration, let's schedule all the emails
    console.log("Scheduling email sequence for new user:", { to, name });

    // Initialize Supabase client
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Calculate schedule times
    const now = new Date();
    const rolexTime = new Date(now.getTime() + 8 * 60 * 1000); // 8 minutes
    const kardashianTime = new Date(now.getTime() + 24 * 60 * 60 * 1000); // 24 hours
    const muskTime = new Date(now.getTime() + 48 * 60 * 60 * 1000); // 48 hours
    const gatesTime = new Date(now.getTime() + 72 * 60 * 60 * 1000); // 72 hours

    // Schedule Rolex email
    console.log("Scheduling Rolex email for:", rolexTime.toISOString());
    const { error: rolexError } = await supabase.rpc('schedule_email', {
      p_job_name: `rolex-email-${to}-${Date.now()}`,
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
          template: 'rolex',
          scheduledTime: rolexTime.toISOString()
        }
      })
    });

    if (rolexError) {
      console.error("Error scheduling Rolex email:", rolexError);
      throw rolexError;
    }

    // Schedule Kardashian email
    console.log("Scheduling Kardashian email for:", kardashianTime.toISOString());
    const { error: kardashianError } = await supabase.rpc('schedule_email', {
      p_job_name: `kardashian-email-${to}-${Date.now()}`,
      p_schedule: '* * * * *',
      p_command: JSON.stringify({
        url: `${SUPABASE_URL}/functions/v1/process-scheduled-email`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
        },
        body: {
          to,
          name,
          template: 'kardashian',
          scheduledTime: kardashianTime.toISOString()
        }
      })
    });

    if (kardashianError) {
      console.error("Error scheduling Kardashian email:", kardashianError);
      throw kardashianError;
    }

    // Schedule Musk email
    console.log("Scheduling Musk email for:", muskTime.toISOString());
    const { error: muskError } = await supabase.rpc('schedule_email', {
      p_job_name: `musk-email-${to}-${Date.now()}`,
      p_schedule: '* * * * *',
      p_command: JSON.stringify({
        url: `${SUPABASE_URL}/functions/v1/process-scheduled-email`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
        },
        body: {
          to,
          name,
          template: 'musk',
          scheduledTime: muskTime.toISOString()
        }
      })
    });

    if (muskError) {
      console.error("Error scheduling Musk email:", muskError);
      throw muskError;
    }

    // Schedule Gates email
    console.log("Scheduling Gates email for:", gatesTime.toISOString());
    const { error: gatesError } = await supabase.rpc('schedule_email', {
      p_job_name: `gates-email-${to}-${Date.now()}`,
      p_schedule: '* * * * *',
      p_command: JSON.stringify({
        url: `${SUPABASE_URL}/functions/v1/process-scheduled-email`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
        },
        body: {
          to,
          name,
          template: 'gates',
          scheduledTime: gatesTime.toISOString()
        }
      })
    });

    if (gatesError) {
      console.error("Error scheduling Gates email:", gatesError);
      throw gatesError;
    }

    console.log("Successfully scheduled all emails");
    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Error in send-styled-email function:", error);
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