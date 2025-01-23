import { corsHeaders } from "./cors.ts";
import { sendEmail } from "./email-sender.ts";
import { generateRolexEmail } from "./templates/rolex-email.ts";
import { generateKardashianEmail } from "./templates/kardashian-email.ts";

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

    console.log("Rolex email sent successfully");

    // Schedule Kardashian email to be sent 1 minute later
    setTimeout(async () => {
      try {
        await sendEmail(
          RESEND_API_KEY,
          to,
          "The Kardashian Empire: How They Used Numerology to Power Their Success",
          generateKardashianEmail(name)
        );
        console.log("Kardashian email sent successfully");
      } catch (error) {
        console.error("Error sending Kardashian email:", error);
      }
    }, 60000); // 1 minute delay

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