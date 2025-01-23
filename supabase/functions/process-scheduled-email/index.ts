import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { corsHeaders } from "../_shared/cors.ts";
import { sendEmail } from "../send-styled-email/email-sender.ts";
import { generateRolexEmail } from "../send-styled-email/templates/rolex-email.ts";
import { generateKardashianEmail } from "../send-styled-email/templates/kardashian-email.ts";
import { generateMuskEmail } from "../send-styled-email/templates/musk-email.ts";
import { generateGatesEmail } from "../send-styled-email/templates/gates-email.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

interface EmailRequest {
  to: string;
  name: string;
  template: 'rolex' | 'kardashian' | 'musk' | 'gates';
  userReadingId: string;
  scheduledTime: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("[process-scheduled-email] Function started");

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!RESEND_API_KEY || !SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error("Missing required environment variables");
    }

    const { to, name, template, userReadingId, scheduledTime } = await req.json() as EmailRequest;
    console.log("[process-scheduled-email] Processing request:", { to, name, template, userReadingId, scheduledTime });

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
    const scheduleTime = new Date(scheduledTime);
    const now = new Date();

    // Check if it's time to send the email
    if (now < scheduleTime) {
      console.log("[process-scheduled-email] Not yet time to send email:", {
        now: now.toISOString(),
        scheduledTime: scheduleTime.toISOString()
      });
      return new Response(JSON.stringify({ status: "pending" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Check if email was already sent
    const { data: emailStatus, error: statusError } = await supabase
      .from('email_sequence_status')
      .select('*')
      .eq('user_reading_id', userReadingId)
      .eq('sequence_position', getSequencePosition(template))
      .single();

    if (statusError) {
      console.error("[process-scheduled-email] Error checking email status:", statusError);
      throw statusError;
    }

    if (emailStatus?.sent) {
      console.log("[process-scheduled-email] Email already sent:", {
        template,
        to,
        sentAt: emailStatus.last_email_sent
      });
      return new Response(JSON.stringify({ success: true, alreadySent: true }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Prepare email content
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

    // Send email
    console.log(`[process-scheduled-email] Sending ${template} email to ${to}`);
    const emailResult = await sendEmail(RESEND_API_KEY, to, subject, htmlContent);
    console.log("[process-scheduled-email] Email sent successfully:", emailResult);

    // Update email status
    const { error: updateError } = await supabase
      .from('email_sequence_status')
      .update({
        sent: true,
        last_email_sent: new Date().toISOString()
      })
      .eq('user_reading_id', userReadingId)
      .eq('sequence_position', getSequencePosition(template));

    if (updateError) {
      console.error("[process-scheduled-email] Error updating email status:", updateError);
      throw updateError;
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("[process-scheduled-email] Error in function:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error occurred" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
};

function getSequencePosition(template: string): number {
  switch (template) {
    case 'rolex':
      return 1;
    case 'kardashian':
      return 2;
    case 'musk':
      return 3;
    case 'gates':
      return 4;
    default:
      return 0;
  }
}

serve(handler);