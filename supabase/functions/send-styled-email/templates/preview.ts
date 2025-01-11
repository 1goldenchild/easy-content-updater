export const previewTemplate = (userData: { name: string }) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Numerology Analysis Preview</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 20px;
      background: #f8f9fa;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: white;
      border-radius: 16px;
      padding: 32px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .header {
      text-align: center;
      margin-bottom: 32px;
    }
    .title {
      font-size: 24px;
      font-weight: bold;
      background: linear-gradient(to right, #8B5CF6, #D946EF);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 16px;
    }
    .preview-section {
      background: #1A1F2C;
      border-radius: 12px;
      padding: 24px;
      margin-bottom: 24px;
      color: white;
    }
    .section {
      margin-bottom: 20px;
      padding: 16px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 8px;
    }
    .section-title {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 12px;
      color: rgba(255, 255, 255, 0.9);
    }
    .button {
      display: inline-block;
      padding: 12px 24px;
      background: linear-gradient(to right, #8B5CF6, #D946EF);
      color: white;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 600;
      margin-top: 24px;
    }
    .feature {
      display: flex;
      align-items: center;
      margin-bottom: 12px;
      color: rgba(255, 255, 255, 0.8);
    }
    .feature:before {
      content: "•";
      margin-right: 8px;
      color: #D946EF;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 class="title">What's Included in Your Analysis?</h1>
    </div>
    
    <div class="preview-section">
      <div class="section">
        <div class="section-title">Core Numbers</div>
        <div class="feature">Life Path Number Analysis</div>
        <div class="feature">Expression Number Insights</div>
        <div class="feature">Soul Urge Number Reading</div>
      </div>

      <div class="section">
        <div class="section-title">Compatibility</div>
        <div class="feature">Love & Relationship Matches</div>
        <div class="feature">Career Compatibility</div>
        <div class="feature">Location Harmony Analysis</div>
      </div>

      <div class="section">
        <div class="section-title">Personal Growth</div>
        <div class="feature">Yearly Forecast</div>
        <div class="feature">Core Traits & Talents</div>
        <div class="feature">Life Purpose Guidance</div>
      </div>
    </div>

    <div style="text-align: center;">
      <a href="https://www.numerology33.com/checkout" class="button">
        Unlock Your Reading →
      </a>
    </div>
  </div>
</body>
</html>
`;

<lov-write file_path="supabase/functions/send-styled-email/index.ts">
import { serve } from "https://deno.land/std@0.190.0/http/server.ts"
import { corsHeaders } from "../_shared/cors.ts"
import { welcomeTemplate } from "./templates/welcome.ts"
import { previewTemplate } from "./templates/preview.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

interface EmailRequest {
  to: string[]
  templateName: "welcome" | "preview"
  userData: {
    name?: string
    dateOfBirth?: string
  }
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { to, templateName, userData }: EmailRequest = await req.json()
    console.log("Received email request:", { to, templateName, userData })

    let html: string
    let subject: string

    switch (templateName) {
      case "welcome":
        html = welcomeTemplate(userData)
        subject = "Welcome to Your Numerology Journey"
        break
      case "preview":
        html = previewTemplate(userData)
        subject = "Your Complete Numerology Analysis Preview"
        break
      default:
        throw new Error("Invalid template name")
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
    })

    if (!res.ok) {
      const error = await res.text()
      throw new Error(`Failed to send email: ${error}`)
    }

    const data = await res.json()
    console.log("Email sent successfully:", data)

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    console.error("Error in send-styled-email function:", error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    )
  }
}

serve(handler)