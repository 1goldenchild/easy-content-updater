import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { corsHeaders } from "../_shared/cors.ts";
import { sendEmail } from "../send-styled-email/email-sender.ts";
import { generateRolexEmail } from "../send-styled-email/templates/rolex-email.ts";
import { generateKardashianEmail } from "../send-styled-email/templates/kardashian-email.ts";
import { generateMuskEmail } from "../send-styled-email/templates/musk-email.ts";
import { generateGatesEmail } from "../send-styled-email/templates/gates-email.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

interface ScheduledEmailRequest {
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
      throw new Error("RESEND_API_KEY is not set");
    }

    const { to, name, template, scheduledTime } = await req.json() as ScheduledEmailRequest;
    console.log("[process-scheduled-email] Processing scheduled email:", { to, name, template, scheduledTime });

    const scheduledDate = new Date(scheduledTime);
    const now = new Date();

    console.log("[process-scheduled-email] Time check:", {
      now: now.toISOString(),
      scheduledTime: scheduledDate.toISOString(),
      shouldSend: now >= scheduledDate
    });

    // Only send if we're past the scheduled time
    if (now >= scheduledDate) {
      console.log(`[process-scheduled-email] Processing ${template} email for ${to}`);

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
      }

      try {
        const result = await sendEmail(RESEND_API_KEY, to, subject, htmlContent);
        console.log(`[process-scheduled-email] Successfully sent ${template} email to ${to}:`, result);
      } catch (error) {
        console.error(`[process-scheduled-email] Error sending email:`, error);
        throw error;
      }
    } else {
      console.log(`[process-scheduled-email] Skipping ${template} email for ${to} - scheduled for ${scheduledTime}`);
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

serve(handler);