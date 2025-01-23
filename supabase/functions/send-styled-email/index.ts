import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { corsHeaders } from "../_shared/cors.ts";
import { scheduleEmails } from "./email-scheduler.ts";

const handler = async (req: Request): Promise<Response> => {
  console.log("[send-styled-email] Function started");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!Deno.env.get("RESEND_API_KEY")) {
      console.error("[send-styled-email] RESEND_API_KEY is not set");
      throw new Error("Server configuration error: RESEND_API_KEY is not set");
    }

    const { to, name, dateOfBirth } = await req.json();
    console.log("[send-styled-email] Processing request for:", { to, name, dateOfBirth });

    if (!to || !name) {
      console.error("[send-styled-email] Missing required fields:", { to, name });
      throw new Error("Missing required fields: email and name are required");
    }

    try {
      await scheduleEmails(to, name);
      console.log("[send-styled-email] Emails scheduled successfully");

      return new Response(
        JSON.stringify({ success: true }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        }
      );
    } catch (scheduleError) {
      console.error("[send-styled-email] Error scheduling emails:", scheduleError);
      throw new Error(`Failed to schedule emails: ${scheduleError.message}`);
    }

  } catch (error) {
    console.error("[send-styled-email] Error in function:", error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : "Unknown error occurred",
        details: error instanceof Error ? error.stack : undefined
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
};

serve(handler);