import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { corsHeaders } from "./cors.ts";
import { sendEmail } from "./email-sender.ts";
import { generateRolexEmail } from "./templates/rolex-email.ts";
import { generateKardashianEmail } from "./templates/kardashian-email.ts";
import { generateElonEmail } from "./templates/elon-email.ts";
import { generateGatesEmail } from "./templates/gates-email.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

interface EmailRequest {
  to: string;
  name: string;
  dateOfBirth: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Email function started");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Validate RESEND_API_KEY
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      throw new Error("Server configuration error: RESEND_API_KEY is not set");
    }

    const { to, name, dateOfBirth } = await req.json() as EmailRequest;
    console.log("Received request to send email sequence:", { to, name, dateOfBirth });

    // Send first email (Rolex)
    await sendEmail(
      RESEND_API_KEY,
      to,
      "The Secret Behind Rolex's Success: A Numerological Analysis",
      generateRolexEmail(name)
    );

    // Schedule subsequent emails
    setTimeout(async () => {
      try {
        await sendEmail(
          RESEND_API_KEY,
          to,
          "The Kardashian Empire: How They Used Numerology to Power Their Success",
          generateKardashianEmail(name)
        );

        setTimeout(async () => {
          try {
            await sendEmail(
              RESEND_API_KEY,
              to,
              "How Elon Musk Uses Numerology to Get Rich: The Power of 8 and 28",
              generateElonEmail(name)
            );

            setTimeout(async () => {
              try {
                await sendEmail(
                  RESEND_API_KEY,
                  to,
                  "How Bill Gates Uses Numerology to Shape His Success",
                  generateGatesEmail(name)
                );
              } catch (error) {
                console.error("Error sending fourth email:", error);
              }
            }, 60000); // 1 minute after third email
          } catch (error) {
            console.error("Error sending third email:", error);
          }
        }, 60000); // 1 minute after second email
      } catch (error) {
        console.error("Error sending second email:", error);
      }
    }, 60000); // 1 minute after first email

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