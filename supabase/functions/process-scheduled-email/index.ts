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
  scheduledTime: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("[process-scheduled-email] Function started");

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!RESEND_API_KEY) {
      console.error("[process-scheduled-email] RESEND_API_KEY is not set");
      throw new Error("Server configuration error: RESEND_API_KEY is not set");
    }

    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      console.error("[process-scheduled-email] Missing Supabase configuration");
      throw new Error("Missing Supabase configuration");
    }

    const { to, name, template, scheduledTime } = await req.json() as EmailRequest;
    console.log("[process-scheduled-email] Processing request:", { to, name, template, scheduledTime });

    // Initialize Supabase client
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Check if this email was already sent
    const { data: existingStatus, error: statusError } = await supabase
      .from('email_sequence_status')
      .select('*')
      .eq('user_reading_id', to)
      .eq('sequence_position', getSequencePosition(template))
      .single();

    if (statusError) {
      console.error("[process-scheduled-email] Error checking email status:", statusError);
    }

    if (existingStatus?.last_email_sent) {
      console.log("[process-scheduled-email] Email already sent:", {
        template,
        to,
        sentAt: existingStatus.last_email_sent
      });
      return new Response(JSON.stringify({ success: true, alreadySent: true }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

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
      console.log(`[process-scheduled-email] Sending ${template} email to ${to}`);
      const emailResult = await sendEmail(RESEND_API_KEY, to, subject, htmlContent);
      console.log("[process-scheduled-email] Email sent successfully:", emailResult);

      // Update email sequence status
      const { error: updateError } = await supabase
        .from('email_sequence_status')
        .upsert({
          user_reading_id: to,
          sequence_position: getSequencePosition(template),
          last_email_sent: new Date().toISOString()
        });

      if (updateError) {
        console.error("[process-scheduled-email] Error updating email status:", updateError);
      }

    } catch (error) {
      console.error(`[process-scheduled-email] Error sending ${template} email:`, error);
      throw error;
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