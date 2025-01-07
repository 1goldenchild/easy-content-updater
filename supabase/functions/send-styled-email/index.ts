import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { corsHeaders } from "../_shared/cors.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

interface EmailRequest {
  to: string[];
  templateName: "welcome" | "analysis";
  userData?: {
    name?: string;
    dateOfBirth?: string;
  };
}

const getWelcomeTemplate = (name: string) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Your Numerology Journey</title>
    </head>
    <body style="
      margin: 0;
      padding: 0;
      background-color: #1a1f2c;
      color: #ffffff;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    ">
      <div style="
        max-width: 600px;
        margin: 0 auto;
        padding: 40px 20px;
      ">
        <div style="
          background: linear-gradient(135deg, #9b87f5 0%, #7E69AB 100%);
          padding: 2px;
          border-radius: 12px;
        ">
          <div style="
            background-color: #1a1f2c;
            padding: 30px;
            border-radius: 10px;
          ">
            <h1 style="
              background: linear-gradient(135deg, #9b87f5 0%, #7E69AB 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              margin: 0 0 20px 0;
              font-size: 24px;
              text-align: center;
            ">Welcome to Your Numerology Journey, ${name}!</h1>
            
            <p style="
              color: #ffffff;
              line-height: 1.6;
              margin-bottom: 20px;
            ">
              You've taken the first step towards understanding the hidden patterns in your life. Your numerological analysis is being prepared with care and precision.
            </p>

            <div style="
              background: linear-gradient(135deg, rgba(155, 135, 245, 0.1) 0%, rgba(126, 105, 171, 0.1) 100%);
              border: 1px solid rgba(155, 135, 245, 0.2);
              padding: 20px;
              border-radius: 8px;
              margin: 30px 0;
            ">
              <h2 style="
                color: #9b87f5;
                margin: 0 0 15px 0;
                font-size: 18px;
              ">What's Next?</h2>
              <ul style="
                color: #ffffff;
                padding-left: 20px;
                margin: 0;
              ">
                <li style="margin-bottom: 10px">Your personal numerology reading is being calculated</li>
                <li style="margin-bottom: 10px">You'll receive insights about your life path number</li>
                <li style="margin-bottom: 10px">Discover your compatibility with different aspects of life</li>
              </ul>
            </div>

            <p style="
              color: #9b87f5;
              text-align: center;
              font-style: italic;
              margin: 30px 0;
            ">
              "Numbers are the universal language offered by the deity to humans as confirmation of the truth."
            </p>

            <div style="text-align: center;">
              <a href="https://your-website.com/portal" style="
                display: inline-block;
                background: linear-gradient(135deg, #9b87f5 0%, #7E69AB 100%);
                color: #ffffff;
                text-decoration: none;
                padding: 12px 30px;
                border-radius: 6px;
                font-weight: bold;
              ">View Your Dashboard</a>
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>
`;

const getAnalysisTemplate = (name: string, dateOfBirth: string) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your Numerology Analysis</title>
    </head>
    <body style="
      margin: 0;
      padding: 0;
      background-color: #1a1f2c;
      color: #ffffff;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    ">
      <div style="
        max-width: 600px;
        margin: 0 auto;
        padding: 40px 20px;
      ">
        <div style="
          background: linear-gradient(135deg, #9b87f5 0%, #7E69AB 100%);
          padding: 2px;
          border-radius: 12px;
        ">
          <div style="
            background-color: #1a1f2c;
            padding: 30px;
            border-radius: 10px;
          ">
            <h1 style="
              background: linear-gradient(135deg, #9b87f5 0%, #7E69AB 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              margin: 0 0 20px 0;
              font-size: 24px;
              text-align: center;
            ">Your Numerology Analysis Is Ready, ${name}!</h1>
            
            <div style="
              background: linear-gradient(135deg, rgba(155, 135, 245, 0.1) 0%, rgba(126, 105, 171, 0.1) 100%);
              border: 1px solid rgba(155, 135, 245, 0.2);
              padding: 20px;
              border-radius: 8px;
              margin: 30px 0;
            ">
              <p style="
                color: #ffffff;
                line-height: 1.6;
                margin: 0;
              ">
                Based on your birth date (${dateOfBirth}), we've prepared a comprehensive analysis of your numerological profile. Your unique numbers reveal fascinating insights about your life path, potential, and destiny.
              </p>
            </div>

            <div style="
              margin: 30px 0;
              padding: 20px;
              border: 1px solid rgba(155, 135, 245, 0.3);
              border-radius: 8px;
            ">
              <h2 style="
                color: #9b87f5;
                margin: 0 0 15px 0;
                font-size: 18px;
              ">Your Analysis Includes:</h2>
              <ul style="
                color: #ffffff;
                padding-left: 20px;
                margin: 0;
              ">
                <li style="margin-bottom: 10px">Life Path Number Analysis</li>
                <li style="margin-bottom: 10px">Personal Year Calculation</li>
                <li style="margin-bottom: 10px">Compatibility Insights</li>
                <li style="margin-bottom: 10px">Career Path Guidance</li>
              </ul>
            </div>

            <div style="text-align: center;">
              <a href="https://your-website.com/analysis" style="
                display: inline-block;
                background: linear-gradient(135deg, #9b87f5 0%, #7E69AB 100%);
                color: #ffffff;
                text-decoration: none;
                padding: 12px 30px;
                border-radius: 6px;
                font-weight: bold;
              ">View Full Analysis</a>
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>
`;

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { to, templateName, userData }: EmailRequest = await req.json();

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

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Numerology <onboarding@resend.dev>",
        to,
        subject,
        html: emailHtml,
      }),
    });

    const data = await res.json();

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