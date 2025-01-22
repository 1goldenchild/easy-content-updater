import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { corsHeaders } from "../_shared/cors.ts";

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
const VERIFIED_FROM_EMAIL = "info@numerology33.com";

interface EmailRequest {
  to: string[];
  templateName: string;
  userData: {
    name?: string;
    dateOfBirth?: string;
  };
}

const getEmailTemplate = (templateName: string, userData: EmailRequest['userData']) => {
  const templates: Record<string, { subject: string, content: string }> = {
    rolex: {
      subject: "The Secret Behind Rolex's Success: A Numerological Analysis",
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
              </div>
              <div style="background-color: rgba(26, 31, 44, 0.95); border: 1px solid rgba(134, 115, 111, 0.2); border-radius: 8px; padding: 30px; margin-bottom: 30px;">
                <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
                  Dear ${userData.name},
                </p>
                <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
                  When it comes to luxury and prestige, few brands resonate with success like Rolex. Beyond its impeccable craftsmanship and status as the ultimate symbol of achievement, Rolex uses a secret that many may not know about—numerology.
                </p>
                <div style="margin: 30px 0;">
                  <img src="https://numerology33.com/lovable-uploads/841cc51b-3942-436f-a692-be30a0b5b243.png" alt="Luxurious Rolex watch" style="width: 100%; border-radius: 8px;">
                </div>
                <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8;">
                  Stay tuned for more fascinating insights into how numerology shapes the world around us.
                </p>
              </div>
            </div>
          </body>
        </html>
      `
    },
    // Add other email templates here
  };

  return templates[templateName] || templates.rolex;
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { to, templateName, userData } = await req.json() as EmailRequest;
    console.log('Received request to send email:', { to, templateName, userData });

    const template = getEmailTemplate(templateName, userData);
    console.log('Using template:', templateName);

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: VERIFIED_FROM_EMAIL,
        to,
        subject: template.subject,
        html: template.content,
      })
    });

    const data = await res.json();
    console.log('Resend API response:', data);

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: res.ok ? 200 : 400,
    });

  } catch (error) {
    console.error('Error in send-styled-email function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});