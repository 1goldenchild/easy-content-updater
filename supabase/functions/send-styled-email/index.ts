import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { corsHeaders } from "../_shared/cors.ts";
import { getWelcomeTemplate } from "./templates/welcome.ts";
import { getAnalysisTemplate } from "./templates/analysis.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const VERIFIED_FROM_EMAIL = "info@numerology33.com";

interface EmailRequest {
  to: string[];
  templateName: string;
  userData?: {
    name?: string;
    dateOfBirth?: string;
  };
  scheduledTime?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Starting email send process");
    
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      throw new Error("Email service is not configured properly");
    }

    const { to, templateName, userData, scheduledTime }: EmailRequest = await req.json();
    console.log("Received email request:", { to, templateName, userData, scheduledTime });

    let emailHtml = "";
    let subject = "";

    // Map template names to their corresponding subjects
    const templateConfig: Record<string, { title: string }> = {
      rolex: { title: "The Secret Behind Rolex's Success: A Numerological Analysis" },
      kardashian: { title: "The Kardashian Empire: How They Used Numerology" },
      elon: { title: "How Elon Musk Uses Numerology to Get Rich" },
      gates: { title: "Bill Gates and the Power of Numerology" },
      jackson: { title: "Michael Jackson's Numerological Journey" },
      jobs: { title: "Steve Jobs: A Numerological Success Story" },
      china: { title: "China's Numerological Success Secrets" },
      carrey: { title: "Jim Carrey's Numerological Path to Success" }
    };

    // Get template configuration
    const config = templateConfig[templateName];
    if (config) {
      subject = config.title;
      emailHtml = getAnalysisTemplate(userData?.name || "there", userData?.dateOfBirth || "");
    } else {
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
    }

    console.log("Sending email with subject:", subject);
    console.log("From email:", VERIFIED_FROM_EMAIL);

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: `Numerology33 <${VERIFIED_FROM_EMAIL}>`,
        to,
        subject,
        html: emailHtml,
      }),
    });

    const data = await res.json();
    console.log("Resend API response:", data);

    if (!res.ok) {
      console.error("Resend API error:", data);
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