import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { corsHeaders } from "../_shared/cors.ts";
import { getWelcomeTemplate } from "./templates/welcome.ts";
import { getAnalysisTemplate } from "./templates/analysis.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const VERIFIED_EMAIL = "mafi28tv@gmail.com"; // Using your verified email

interface EmailRequest {
  to: string[];
  templateName: "welcome" | "analysis";
  userData?: {
    name?: string;
    dateOfBirth?: string;
  };
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Check if RESEND_API_KEY is configured
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      throw new Error("Email service is not configured properly");
    }

    const { to, templateName, userData }: EmailRequest = await req.json();
    console.log("Received email request:", { to, templateName, userData });

    let emailHtml = "";
    let subject = "";

    switch (templateName) {
      case "welcome":
        emailHtml = getWelcomeTemplate(userData?.name || "there");
        subject = "Welcome to Your Numerology Journey!";
        break;
      case "analysis":
        if (!userData?.dateOfBirth) {
          throw new Error("Date of birth is required for analysis template");
        }
        emailHtml = getAnalysisTemplate(userData.name || "there", userData.dateOfBirth);
        subject = "Your Numerology Analysis Is Ready!";
        break;
      default:
        throw new Error("Invalid template name");
    }

    console.log("Sending email with subject:", subject);

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Numerology <onboarding@resend.dev>", // Using Resend's default domain
        to: [VERIFIED_EMAIL], // For testing, always send to verified email
        subject,
        html: emailHtml,
      }),
    });

    const data = await res.json();
    console.log("Resend API response:", data);

    if (!res.ok) {
      throw new Error(`Resend API error: ${JSON.stringify(data)}`);
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Error in send-styled-email function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
};

serve(handler);