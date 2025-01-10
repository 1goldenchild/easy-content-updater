import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { corsHeaders } from "../_shared/cors.ts";
import { welcomeTemplate } from "./templates/welcome.ts";
import { previewTemplate } from "./templates/preview.ts";

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');

interface EmailRequest {
  to: string[];
  templateName: "welcome" | "preview";
  userData: {
    name?: string;
    dateOfBirth?: string;
  };
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { to, templateName, userData }: EmailRequest = await req.json();
    console.log("Received email request:", { to, templateName, userData });

    let html: string;
    let subject: string;

    switch (templateName) {
      case "welcome":
        html = welcomeTemplate(userData);
        subject = "Welcome to Your Numerology Journey";
        break;
      case "preview":
        html = previewTemplate(userData);
        subject = "Your Complete Numerology Analysis Preview";
        break;
      default:
        throw new Error("Invalid template name");
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Numerology <hello@numerology33.com>',
        to,
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      throw new Error(`Failed to send email: ${error}`);
    }

    const data = await res.json();
    console.log("Email sent successfully:", data);

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error("Error in send-styled-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
}

serve(handler);