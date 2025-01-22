import { serve } from "https://deno.land/std@0.190.0/http/server.ts"
import { corsHeaders } from "../_shared/cors.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const VERIFIED_FROM_EMAIL = "info@numerology33.com"

interface EmailRequest {
  to: string[]
  templateName: string
  userData: {
    name?: string
    dateOfBirth?: string
  }
}

const getEmailTemplate = (templateName: string) => {
  const templates: Record<string, { title: string, content: string }> = {
    rolex: {
      title: "The Secret Behind Rolex's Success: A Numerological Analysis",
      content: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>The Secret Behind Rolex's Success: A Numerological Analysis</title>
          </head>
          <body style="margin: 0; padding: 0; background-color: #121212; color: #E5E7EB; font-family: Arial, sans-serif; line-height: 1.6;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(to right, #006039, #007a49, #006039); padding: 40px 20px; border-radius: 8px; text-align: center; margin-bottom: 30px;">
                <h1 style="color: white; margin: 0; font-size: 28px; line-height: 1.3;">The Secret Behind Rolex's Success: A Numerological Analysis</h1>
                <div style="color: #E5E7EB; margin-top: 10px; font-size: 14px;">
                  March 29, 2024 • 8 min read
                </div>
              </div>
              <div style="background-color: rgba(26, 31, 44, 0.95); border: 1px solid rgba(134, 115, 111, 0.2); border-radius: 8px; padding: 30px; margin-bottom: 30px;">
                <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
                  When it comes to luxury and prestige, few brands resonate with success like Rolex. Beyond its impeccable craftsmanship and status as the ultimate symbol of achievement, Rolex uses a secret that many may not know about—numerology.
                </p>
                <div style="margin: 30px 0;">
                  <img src="https://numerology33.com/lovable-uploads/841cc51b-3942-436f-a692-be30a0b5b243.png" alt="Luxurious Rolex boutique" style="width: 100%; border-radius: 8px;">
                </div>
                <div style="text-align: center; margin-top: 40px;">
                  <a href="https://numerology33.com/numerology-reading" style="display: inline-block; padding: 16px 32px; font-size: 18px; font-weight: bold; text-decoration: none; color: white; background: linear-gradient(to right, #006039, #007a49); border-radius: 8px; transition: opacity 0.3s;">
                    Get Your Reading Now
                  </a>
                </div>
              </div>
            </div>
          </body>
        </html>
      `
    },
    kardashian: {
      title: "The Kardashian Empire: How They Used Numerology to Power Their Success",
      content: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>The Kardashian Empire: How They Used Numerology to Power Their Success</title>
          </head>
          <body style="margin: 0; padding: 0; background-color: #121212; color: #E5E7EB; font-family: Arial, sans-serif; line-height: 1.6;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(to right, #D4A391, #E5B8A6, #D4A391); padding: 40px 20px; border-radius: 8px; text-align: center; margin-bottom: 30px;">
                <h1 style="color: white; margin: 0; font-size: 28px; line-height: 1.3;">The Kardashian Empire: How They Used Numerology to Power Their Success</h1>
                <div style="color: #E5E7EB; margin-top: 10px; font-size: 14px;">
                  April 1, 2024 • 8 min read
                </div>
              </div>
              <div style="background-color: rgba(26, 31, 44, 0.95); border: 1px solid rgba(134, 115, 111, 0.2); border-radius: 8px; padding: 30px; margin-bottom: 30px;">
                <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
                  The Kardashian-Jenner family isn't just famous for their reality TV show—they are masters of numerology, using it as a key tool in creating their multi-billion dollar empire.
                </p>
                <div style="margin: 30px 0;">
                  <img src="https://numerology33.com/lovable-uploads/c62b9e91-15ac-4a47-b3af-580cc17a3756.png" alt="Kardashian family" style="width: 100%; border-radius: 8px;">
                </div>
                <div style="text-align: center; margin-top: 40px;">
                  <a href="https://numerology33.com/numerology-reading" style="display: inline-block; padding: 16px 32px; font-size: 18px; font-weight: bold; text-decoration: none; color: white; background: linear-gradient(to right, #D4A391, #E5B8A6); border-radius: 8px; transition: opacity 0.3s;">
                    Get Your Reading Now
                  </a>
                </div>
              </div>
            </div>
          </body>
        </html>
      `
    }
  };

  return templates[templateName] || null;
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const emailRequest: EmailRequest = await req.json();
    console.log("Received email request:", emailRequest);

    const template = getEmailTemplate(emailRequest.templateName);
    if (!template) {
      throw new Error("Template not found");
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: VERIFIED_FROM_EMAIL,
        to: emailRequest.to,
        subject: template.title,
        html: template.content,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      throw new Error(`Failed to send email: ${error}`);
    }

    const data = await res.json();
    console.log("Email sent successfully:", data);

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error in send-styled-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500 
      }
    );
  }
};

serve(handler);