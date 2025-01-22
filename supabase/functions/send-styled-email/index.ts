import { serve } from "https://deno.land/std@0.190.0/http/server.ts"
import { corsHeaders } from "../_shared/cors.ts"

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")
const VERIFIED_FROM_EMAIL = "info@numerology33.com"

interface EmailRequest {
  to: string[]
  templateName: string
  userData: {
    name?: string
    dateOfBirth?: string
    template?: string
  }
  scheduledTime?: string
}

const getEmailTemplate = (templateName: string, userData: EmailRequest["userData"]) => {
  const templates: Record<string, { title: string, content: string }> = {
    rolex: {
      title: "The Secret Behind Rolex's Success: A Numerological Analysis",
      content: `When it comes to luxury and prestige, few brands resonate with success like Rolex. Beyond its impeccable craftsmanship and status as the ultimate symbol of achievement, Rolex uses a secret that many may not know about—numerology...`
    },
    kardashian: {
      title: "The Kardashian Empire: How They Used Numerology",
      content: `The Kardashian-Jenner family isn't just famous for their reality TV show or their social media empires—they are masters of numerology, using it as a key tool in creating their multi-billion dollar empire...`
    },
    elon: {
      title: "How Elon Musk Uses Numerology to Get Rich",
      content: `Elon Musk is one of the most successful and innovative entrepreneurs of our time. But beyond his groundbreaking work with Tesla, SpaceX, and his ventures into the world of cryptocurrency...`
    },
    gates: {
      title: "Bill Gates and the Power of Numerology",
      content: `When we think of the world's most successful and influential tech giants, Bill Gates is undoubtedly one of the first names that come to mind...`
    },
    jackson: {
      title: "Michael Jackson's Numerological Journey",
      content: `Michael Jackson, the King of Pop, forever changed the world with his groundbreaking music, unparalleled performances, and revolutionary style...`
    },
    jobs: {
      title: "Steve Jobs: A Numerological Success Story",
      content: `Steve Jobs, the co-founder of Apple, needs no introduction. His vision transformed the world of technology and consumer electronics...`
    },
    china: {
      title: "China's Numerological Success Secrets",
      content: `China's remarkable transformation over the past few decades is nothing short of extraordinary. From being the 15th largest economy in the world to becoming the 2nd largest...`
    },
    carrey: {
      title: "Jim Carrey's Numerological Path to Success",
      content: `Jim Carrey, the legendary actor and comedian, is known for his larger-than-life personality, unhinged humor, and, of course, his unforgettable roles...`
    }
  }

  const template = templates[templateName]
  if (!template) {
    throw new Error(`Template ${templateName} not found`)
  }

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>${template.title}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .content {
            margin-bottom: 32px;
          }
          .cta-button {
            background: linear-gradient(to right, #8B5CF6, #D946EF);
            color: white;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 5px;
            display: inline-block;
          }
        </style>
      </head>
      <body>
        <div class="content">
          <p>Dear ${userData.name || "there"},</p>
          <h2>${template.title}</h2>
          <p>${template.content}</p>
        </div>

        <div style="text-align: center;">
          <a href="https://numerology33.com/numerology-reading" class="cta-button">
            Discover Your Numerological Path to Success
          </a>
        </div>
      </body>
    </html>
  `
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured")
      throw new Error("Email service is not configured properly")
    }

    const { to, templateName, userData }: EmailRequest = await req.json()
    console.log("Received email request:", { to, templateName, userData })

    const html = getEmailTemplate(templateName, userData)
    const templates = {
      rolex: "The Secret Behind Rolex's Success: A Numerological Analysis",
      kardashian: "The Kardashian Empire: How They Used Numerology",
      elon: "How Elon Musk Uses Numerology to Get Rich",
      gates: "Bill Gates and the Power of Numerology",
      jackson: "Michael Jackson's Numerological Journey",
      jobs: "Steve Jobs: A Numerological Success Story",
      china: "China's Numerological Success Secrets",
      carrey: "Jim Carrey's Numerological Path to Success"
    }

    const subject = templates[templateName as keyof typeof templates] || "Your Numerology Analysis"

    console.log("Preparing to send email with:", {
      from: `Numerology33 <${VERIFIED_FROM_EMAIL}>`,
      to,
      subject,
      templateName
    })

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
        html,
      }),
    })

    const data = await res.json()
    console.log("Resend API response:", data)

    if (!res.ok) {
      console.error("Resend API error:", data)
      throw new Error(`Resend API error: ${JSON.stringify(data)}`)
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    })
  } catch (error: any) {
    console.error("Error in send-styled-email function:", error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    })
  }
}

serve(handler)