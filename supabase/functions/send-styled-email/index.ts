import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { corsHeaders } from "./cors.ts";
import { sendEmail } from "./email-sender.ts";
import { generateRolexEmail } from "./templates/rolex-email.ts";
import { generateKardashianEmail } from "./templates/kardashian-email.ts";
import { generateMuskEmail } from "./templates/musk-email.ts";
import { generateGatesEmail } from "./templates/gates-email.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

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

    const { to, name, dateOfBirth } = await req.json() as EmailRequest;
    console.log("Received request to send email sequence:", { to, name, dateOfBirth });

    // Send Rolex email immediately
    await sendEmail(
      RESEND_API_KEY,
      to,
      "The Secret Behind Rolex's Success: A Numerological Analysis",
      generateRolexEmail(name)
    );
    console.log("Rolex email sent successfully at:", new Date().toISOString());

    // Schedule Kardashian email (1 minute later)
    setTimeout(async () => {
      try {
        console.log("Attempting to send Kardashian email at:", new Date().toISOString());
        await sendEmail(
          RESEND_API_KEY,
          to,
          "The Kardashian Empire: How They Used Numerology to Power Their Success",
          generateKardashianEmail(name)
        );
        console.log("Kardashian email sent successfully at:", new Date().toISOString());

        // Schedule Elon Musk email (1 minute after Kardashian)
        console.log("Scheduling Musk email for 1 minute after Kardashian");
        setTimeout(async () => {
          try {
            console.log("Attempting to send Musk email at:", new Date().toISOString());
            await sendEmail(
              RESEND_API_KEY,
              to,
              "How Elon Musk Uses Numerology to Get Rich",
              generateMuskEmail(name)
            );
            console.log("Elon Musk email sent successfully at:", new Date().toISOString());

            // Schedule Bill Gates email (1 minute after Musk)
            console.log("Scheduling Gates email for 1 minute after Musk");
            setTimeout(async () => {
              try {
                console.log("Attempting to send Gates email at:", new Date().toISOString());
                await sendEmail(
                  RESEND_API_KEY,
                  to,
                  "How Bill Gates Uses Numerology to Shape His Success",
                  generateGatesEmail(name)
                );
                console.log("Bill Gates email sent successfully at:", new Date().toISOString());
              } catch (error) {
                console.error("Error sending Bill Gates email:", error);
              }
            }, 60000);

          } catch (error) {
            console.error("Error sending Elon Musk email:", error, "at:", new Date().toISOString());
          }
        }, 60000);

      } catch (error) {
        console.error("Error sending Kardashian email:", error);
      }
    }, 60000);

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