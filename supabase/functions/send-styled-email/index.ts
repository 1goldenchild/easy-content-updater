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
  dateOfBirth: string;
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

    const { to, name, dateOfBirth } = await req.json() as EmailRequest;
    console.log("Received request to send email sequence:", { to, name, dateOfBirth });

    // Initialize Supabase client with service role key for admin access
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Calculate schedule times
    const now = new Date();
    const rolexTime = new Date(now.getTime() + 8 * 60 * 1000); // 8 minutes
    const kardashianTime = new Date(now.getTime() + (24 * 60 * 60 * 1000) + (8 * 60 * 1000)); // 24h + 8m
    const muskTime = new Date(now.getTime() + (48 * 60 * 60 * 1000) + (8 * 60 * 1000)); // 48h + 8m
    const gatesTime = new Date(now.getTime() + (72 * 60 * 60 * 1000) + (8 * 60 * 1000)); // 72h + 8m

    // Schedule Rolex email
    console.log("Scheduling Rolex email for:", rolexTime.toISOString());
    const { error: rolexError } = await supabase.rpc('schedule_email', {
      p_job_name: `rolex-email-${to}-${Date.now()}`,
      p_schedule: '* * * * *', // Run every minute
      p_command: JSON.stringify({
        url: `${SUPABASE_URL}/functions/v1/send-styled-email`,
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

    if (rolexError) throw rolexError;

    // Schedule Kardashian email
    console.log("Scheduling Kardashian email for:", kardashianTime.toISOString());
    const { error: kardashianError } = await supabase.rpc('schedule_email', {
      p_job_name: `kardashian-email-${to}-${Date.now()}`,
      p_schedule: '* * * * *',
      p_command: JSON.stringify({
        url: `${SUPABASE_URL}/functions/v1/send-styled-email`,
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

    if (kardashianError) throw kardashianError;

    // Schedule Musk email
    console.log("Scheduling Musk email for:", muskTime.toISOString());
    const { error: muskError } = await supabase.rpc('schedule_email', {
      p_job_name: `musk-email-${to}-${Date.now()}`,
      p_schedule: '* * * * *',
      p_command: JSON.stringify({
        url: `${SUPABASE_URL}/functions/v1/send-styled-email`,
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

    if (muskError) throw muskError;

    // Schedule Gates email
    console.log("Scheduling Gates email for:", gatesTime.toISOString());
    const { error: gatesError } = await supabase.rpc('schedule_email', {
      p_job_name: `gates-email-${to}-${Date.now()}`,
      p_schedule: '* * * * *',
      p_command: JSON.stringify({
        url: `${SUPABASE_URL}/functions/v1/send-styled-email`,
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

    if (gatesError) throw gatesError;

    // If we get here, all emails were scheduled successfully
    console.log("All emails scheduled successfully");

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