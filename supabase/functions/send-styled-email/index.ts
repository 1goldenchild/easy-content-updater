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
              <!-- Header Section -->
              <div style="background: linear-gradient(to right, #86736f, #a39490, #c4b5b1); padding: 40px 20px; border-radius: 8px; text-align: center; margin-bottom: 30px;">
                <h1 style="color: white; margin: 0; font-size: 28px; line-height: 1.3;">The Secret Behind Rolex's Success: A Numerological Analysis</h1>
                <div style="color: #E5E7EB; margin-top: 10px; font-size: 14px;">
                  March 29, 2024 • 8 min read
                </div>
              </div>

              <!-- Main Content -->
              <div style="background-color: rgba(26, 31, 44, 0.95); border: 1px solid rgba(134, 115, 111, 0.2); border-radius: 8px; padding: 30px; margin-bottom: 30px;">
                <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
                  When it comes to luxury and prestige, few brands resonate with success like Rolex. Beyond its impeccable craftsmanship and status as the ultimate symbol of achievement, Rolex uses a secret that many may not know about—numerology. In fact, Rolex has embedded certain numbers into their watches in a way that subtly aligns with wealth and prosperity.
                </p>

                <!-- Boutique Image -->
                <div style="margin: 30px 0;">
                  <img src="/lovable-uploads/841cc51b-3942-436f-a692-be30a0b5b243.png" alt="Luxurious Rolex boutique with emerald green walls and display cases" style="width: 100%; border-radius: 8px;">
                </div>

                <h2 style="color: #a39490; font-size: 24px; margin: 30px 0 20px;">Why the Number 28? The Numerology of Wealth</h2>
                <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
                  In the world of numerology, 28 holds significant power. It is the number of wealth, tied to financial prosperity, material abundance, and success. And it's directly linked to some of the wealthiest and most influential people and entities in the world.
                </p>

                <!-- Feature Box -->
                <div style="background-color: rgba(134, 115, 111, 0.1); border: 1px solid rgba(134, 115, 111, 0.2); border-radius: 8px; padding: 20px; margin: 30px 0;">
                  <ul style="color: #E5E7EB; list-style-type: none; padding: 0; margin: 0;">
                    <li style="margin-bottom: 10px;">✨ The Datejust's date window at 28 - A subtle nod to prosperity</li>
                    <li style="margin-bottom: 10px;">✨ 28-day power reserve - Featured in several prestigious models</li>
                    <li style="margin-bottom: 10px;">✨ 28,800 beats per hour - The perfect frequency for many Rolex movements</li>
                  </ul>
                </div>

                <!-- Watch Images Grid -->
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 30px 0;">
                  <img src="/lovable-uploads/91a23eb6-35ae-4850-a089-cc3e2438b65e.png" alt="Gold Rolex Watch" style="width: 100%; border-radius: 8px;">
                  <img src="/lovable-uploads/ec0bf53a-a535-42fa-a475-9a3588d1bb5c.png" alt="Two-Tone Rolex Watch" style="width: 100%; border-radius: 8px;">
                  <img src="/lovable-uploads/a6781e11-aee4-40d3-bca0-dcd105340118.png" alt="Black Rolex Watch" style="width: 100%; border-radius: 8px;">
                </div>

                <h2 style="color: #a39490; font-size: 24px; margin: 30px 0 20px;">The Power of 28 in the World of Wealth</h2>
                <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
                  Some of the wealthiest figures of our time were born on the 28th of the month. Take Elon Musk, born on June 28, 1971, who is currently the richest person in the world, with a net worth frequently surpassing $416 billion. His immense wealth and groundbreaking companies, including Tesla and SpaceX, align perfectly with the numerological energy of the number 28.
                </p>

                <div style="background-color: rgba(134, 115, 111, 0.1); border: 1px solid rgba(134, 115, 111, 0.2); border-radius: 8px; padding: 20px; margin: 30px 0;">
                  <p style="color: #a39490; font-style: italic; margin: 0;">
                    "Bill Gates, the richest man of the previous decade, was also born on October 28, 1955. Gates co-founded Microsoft and became a pioneer in the tech industry."
                  </p>
                </div>

                <h2 style="color: #a39490; font-size: 24px; margin: 30px 0 20px;">More Wealthy Entities Linked to the Number 28</h2>
                <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
                  It's not just individuals who benefit from the numerology of 28. Major global corporations and organizations also use this powerful number. Take Vanguard, the world's largest asset management firm, managing more than $10 trillion in assets. Vanguard was incorporated in a 28 day, a deliberate alignment with the energy of wealth.
                </p>

                <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
                  Similarly, Apple, the world's most valuable company with an estimated worth of $3.5 trillion, was also incorporated in a 28 day. Apple's dominance in the tech industry and its financial power is a direct testament to the success and influence of the number 28.
                </p>

                <h2 style="color: #a39490; font-size: 24px; margin: 30px 0 20px;">Rolex's Subtle Numerology: 28 and 10:11</h2>
                <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
                  Now, back to Rolex and the 28. When you look at a Rolex watch in marketing materials, you'll notice that the date window highlights the number 28. But that's not all. If you look carefully, Rolex also sets the time at 10:11, a powerful numerological sequence. In numerology, 111 is a number of manifestation, inspiration, and new beginnings—perfectly fitting for a brand that symbolizes elite success. The positioning of the time on the dial reflects the brand's alignment with manifesting wealth and success and also directly passing that force onto the customers.
                </p>

                <!-- CTA Section -->
                <div style="text-align: center; margin-top: 40px; padding: 30px; background: linear-gradient(to right, rgba(134, 115, 111, 0.1), rgba(163, 148, 144, 0.1)); border-radius: 8px;">
                  <p style="color: white; font-size: 20px; font-weight: bold; margin-bottom: 20px;">
                    Ready to discover your numerological path to success?
                  </p>
                  <a href="https://numerology33.com/numerology-reading" 
                     style="display: inline-block; padding: 16px 32px; font-size: 18px; font-weight: bold; text-decoration: none; color: white; background: linear-gradient(to right, #86736f, #a39490); border-radius: 8px; transition: opacity 0.3s;">
                    Get Your Reading Now
                  </a>
                </div>
              </div>

              <!-- Footer -->
              <div style="text-align: center; padding-top: 30px; border-top: 1px solid rgba(134, 115, 111, 0.2);">
                <p style="color: #9CA3AF; font-size: 14px;">
                  © 2024 Numerology Insights. All rights reserved.
                </p>
              </div>
            </div>
          </body>
        </html>
      `
    }
  }

  const template = templates[templateName]
  if (!template) {
    throw new Error(`Template ${templateName} not found`)
  }

  return template.content;
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

    const html = getEmailTemplate(templateName)
    const subject = "The Secret Behind Rolex's Success: A Numerological Analysis"

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