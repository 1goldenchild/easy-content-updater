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
                  When it comes to luxury and prestige, few brands resonate with success like Rolex. Beyond its impeccable craftsmanship and status as the ultimate symbol of achievement, Rolex uses a secret that many may not know about—numerology. In fact, Rolex has embedded certain numbers into their watches in a way that subtly aligns with wealth and prosperity.
                </p>
                <div style="margin: 30px 0;">
                  <img src="https://numerology33.com/lovable-uploads/841cc51b-3942-436f-a692-be30a0b5b243.png" alt="Luxurious Rolex boutique" style="width: 100%; border-radius: 8px;">
                </div>
                <h2 style="color: white; font-size: 24px; margin: 30px 0 20px;">Why the Number 28? The Numerology of Wealth</h2>
                <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
                  In the world of numerology, 28 holds significant power. It is the number of wealth, tied to financial prosperity, material abundance, and success. And it's directly linked to some of the wealthiest and most influential people and entities in the world.
                </p>
                <div style="background-color: rgba(0, 96, 57, 0.1); border: 1px solid rgba(0, 96, 57, 0.2); border-radius: 8px; padding: 20px; margin: 30px 0;">
                  <ul style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin: 0; padding-left: 20px;">
                    <li>The Datejust's date window at 28 - A subtle nod to prosperity</li>
                    <li>28-day power reserve - Featured in several prestigious models</li>
                    <li>28,800 beats per hour - The perfect frequency for many Rolex movements</li>
                  </ul>
                </div>
                <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
                  So, why does Rolex showcase the number 28 in the images of their watches? The answer lies in subtle numerological influence. In Rolex marketing photos, the date window often highlights the 28th day of the month—and it's no accident. By showcasing this number, Rolex is tapping in the number 28 and showing it to you which also drives you to making purchases.
                </p>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 30px 0;">
                  <img src="https://numerology33.com/lovable-uploads/91a23eb6-35ae-4850-a089-cc3e2438b65e.png" alt="Gold Rolex Watch" style="width: 100%; border-radius: 8px;">
                  <img src="https://numerology33.com/lovable-uploads/ec0bf53a-a535-42fa-a475-9a3588d1bb5c.png" alt="Two-Tone Rolex Watch" style="width: 100%; border-radius: 8px;">
                  <img src="https://numerology33.com/lovable-uploads/a6781e11-aee4-40d3-bca0-dcd105340118.png" alt="Black Rolex Watch" style="width: 100%; border-radius: 8px;">
                </div>
                <h2 style="color: white; font-size: 24px; margin: 30px 0 20px;">The Power of 28 in the World of Wealth</h2>
                <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
                  Some of the wealthiest figures of our time were born on the 28th of the month. Take Elon Musk, born on June 28, 1971, who is currently the richest person in the world, with a net worth frequently surpassing $416 billion. His immense wealth and groundbreaking companies, including Tesla and SpaceX, align perfectly with the numerological energy of the number 28.
                </p>
                <div style="background-color: rgba(0, 96, 57, 0.1); border: 1px solid rgba(0, 96, 57, 0.2); border-radius: 8px; padding: 20px; margin: 30px 0;">
                  <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin: 0; font-style: italic;">
                    Bill Gates, the richest man of the previous decade, was also born on October 28, 1955. Gates co-founded Microsoft and became a pioneer in the tech industry.
                  </p>
                </div>
                <h2 style="color: white; font-size: 24px; margin: 30px 0 20px;">More Wealthy Entities Linked to the Number 28</h2>
                <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
                  It's not just individuals who benefit from the numerology of 28. Major global corporations and organizations also use this powerful number. Take Vanguard, the world's largest asset management firm, managing more than $10 trillion in assets. Vanguard was incorporated in a 28 day, a deliberate alignment with the energy of wealth.
                </p>
                <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
                  Similarly, Apple, the world's most valuable company with an estimated worth of $3.5 trillion, was also incorporated in a 28 day. Apple's dominance in the tech industry and its financial power is a direct testament to the success and influence of the number 28.
                </p>
                <h2 style="color: white; font-size: 24px; margin: 30px 0 20px;">Rolex's Subtle Numerology: 28 and 10:11</h2>
                <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
                  Now, back to Rolex and the 28. When you look at a Rolex watch in marketing materials, you'll notice that the date window highlights the number 28. But that's not all. If you look carefully, Rolex also sets the time at 10:11, a powerful numerological sequence. In numerology, 111 is a number of manifestation, inspiration, and new beginnings—perfectly fitting for a brand that symbolizes elite success.
                </p>
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
                  The Kardashian-Jenner family isn't just famous for their reality TV show or their social media empires—they are masters of numerology, using it as a key tool in creating their multi-billion dollar empire. From their Life Path numbers to their names, everything about them has been meticulously aligned with the energetic properties of numbers.
                </p>
                <div style="margin: 30px 0;">
                  <img src="https://numerology33.com/lovable-uploads/c62b9e91-15ac-4a47-b3af-580cc17a3756.png" alt="Kardashian family" style="width: 100%; border-radius: 8px;">
                </div>
                <h2 style="color: white; font-size: 24px; margin: 30px 0 20px;">The Numerology Behind the Kardashian-Jenner Family</h2>
                <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
                  Each member of the Kardashian-Jenner family has a unique Life Path number that influences their decisions, shapes their personality, and has been an essential part of their rise to global stardom.
                </p>
                <div style="background-color: rgba(212, 163, 145, 0.1); border: 1px solid rgba(212, 163, 145, 0.2); border-radius: 8px; padding: 20px; margin: 30px 0;">
                  <ul style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin: 0; padding-left: 20px;">
                    <li>Kim Kardashian (Life Path 22): The most famous of the Kardashian clan, with the Master Number 22</li>
                    <li>Kylie Jenner (Life Path 8): Amassed a fortune over $1 billion, carries the powerful money frequency</li>
                    <li>Kris Jenner (Life Path 28): The matriarch with The Wealth Number</li>
                    <li>Kendall Jenner (Life Path 11): The supermodel with the Master Number of vision</li>
                    <li>Caitlyn Jenner (Life Path 33): Born on the 28th, combining powerful numbers</li>
                  </ul>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 30px 0;">
                  <img src="https://numerology33.com/lovable-uploads/f570fe28-0186-421f-8479-0176848678d5.png" alt="Team wearing jerseys with number 8" style="width: 100%; border-radius: 8px;">
                  <img src="https://numerology33.com/lovable-uploads/6c088c00-5135-4c6e-8c3f-840339f617a1.png" alt="Decorative number 8 sculpture" style="width: 100%; border-radius: 8px;">
                </div>
                <h2 style="color: white; font-size: 24px; margin: 30px 0 20px;">Numerology and the Power of the Letter "K"</h2>
                <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
                  One of the most fascinating aspects of the Kardashian-Jenner family's numerological strategy is their consistent use of the letter K in their names. But there's more to it than just a letter—it's the vibrational energy that the letter carries.
                </p>
                <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
                  In numerology, K is the 11th letter of the alphabet, and it resonates with the Master Number 11 which is a powerful source of intuition, and emotional depth. By using the letter K in their names—Kim Kardashian, Kylie Jenner, Kris Jenner, Kendall Jenner—they are intentionally tapping into this potent 11 energy, infusing their brand with its power.
                </p>
                <h2 style="color: white; font-size: 24px; margin: 30px 0 20px;">The Number 8: The Symbol of Wealth and Abundance</h2>
                <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
                  In addition to their Life Path numbers, the Kardashian-Jenner family often incorporates the number 8—a number associated with abundance, wealth, and success—into their branding, jersey numbers, decorations, and even their homes.
                </p>
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
    },
    gates: {
      title: "How Bill Gates Uses Numerology to Shape His Success",
      content: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>How Bill Gates Uses Numerology to Shape His Success</title>
          </head>
          <body style="margin: 0; padding: 0; background-color: #121212; color: #E5E7EB; font-family: Arial, sans-serif; line-height: 1.6;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(to right, #00A4EF, #7FBA00, #00A4EF); padding: 40px 20px; border-radius: 8px; text-align: center; margin-bottom: 30px;">
                <h1 style="color: white; margin: 0; font-size: 28px; line-height: 1.3;">How Bill Gates Uses Numerology to Shape His Success</h1>
                <div style="color: #E5E7EB; margin-top: 10px; font-size: 14px;">
                  March 30, 2024 • 10 min read
                </div>
              </div>
              <div style="background-color: rgba(26, 31, 44, 0.95); border: 1px solid rgba(134, 115, 111, 0.2); border-radius: 8px; padding: 30px; margin-bottom: 30px;">
                <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
                  Bill Gates, the co-founder of Microsoft, has been using numerology to influence his business decisions throughout his career. From choosing product launch dates to naming conventions, Gates has leveraged the power of numbers.
                </p>
                <div style="margin: 30px 0;">
                  <img src="https://numerology33.com/lovable-uploads/bc46eaf5-772c-48e1-8dd7-fdfd1952a3ae.png" alt="Bill Gates presenting" style="width: 100%; border-radius: 8px;">
                </div>
                <div style="text-align: center; margin-top: 40px;">
                  <a href="https://numerology33.com/numerology-reading" style="display: inline-block; padding: 16px 32px; font-size: 18px; font-weight: bold; text-decoration: none; color: white; background: linear-gradient(to right, #00A4EF, #7FBA00); border-radius: 8px; transition: opacity 0.3s;">
                    Get Your Reading Now
                  </a>
                </div>
              </div>
            </div>
          </body>
        </html>
      `
    },
    carrey: {
      title: "How Jim Carrey Uses Numerology to Shape His Life and Career",
      content: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>How Jim Carrey Uses Numerology to Shape His Life and Career</title>
          </head>
          <body style="margin: 0; padding: 0; background-color: #121212; color: #E5E7EB; font-family: Arial, sans-serif; line-height: 1.6;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(to right, #FF6B6B, #4ECDC4, #FF6B6B); padding: 40px 20px; border-radius: 8px; text-align: center; margin-bottom: 30px;">
                <h1 style="color: white; margin: 0; font-size: 28px; line-height: 1.3;">How Jim Carrey Uses Numerology to Shape His Life and Career</h1>
                <div style="color: #E5E7EB; margin-top: 10px; font-size: 14px;">
                  March 28, 2024 • 8 min read
                </div>
              </div>
              <div style="background-color: rgba(26, 31, 44, 0.95); border: 1px solid rgba(134, 115, 111, 0.2); border-radius: 8px; padding: 30px; margin-bottom: 30px;">
                <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
                  Jim Carrey's connection to numerology, particularly his fascination with the number 23, has played a significant role in shaping his career choices and personal philosophy.
                </p>
                <div style="margin: 30px 0;">
                  <img src="https://numerology33.com/lovable-uploads/fbe09605-e28e-4bb2-98d1-5266c9efa916.png" alt="Jim Carrey" style="width: 100%; border-radius: 8px;">
                </div>
                <div style="text-align: center; margin-top: 40px;">
                  <a href="https://numerology33.com/numerology-reading" style="display: inline-block; padding: 16px 32px; font-size: 18px; font-weight: bold; text-decoration: none; color: white; background: linear-gradient(to right, #FF6B6B, #4ECDC4); border-radius: 8px; transition: opacity 0.3s;">
                    Get Your Reading Now
                  </a>
                </div>
              </div>
            </div>
          </body>
        </html>
      `
    },
    china: {
      title: "How China Uses Numerology to Power Success: The 2008 Beijing Olympics",
      content: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>How China Uses Numerology to Power Success: The 2008 Beijing Olympics</title>
          </head>
          <body style="margin: 0; padding: 0; background-color: #121212; color: #E5E7EB; font-family: Arial, sans-serif; line-height: 1.6;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(to right, #DE2910, #FFDE00, #DE2910); padding: 40px 20px; border-radius: 8px; text-align: center; margin-bottom: 30px;">
                <h1 style="color: white; margin: 0; font-size: 28px; line-height: 1.3;">How China Uses Numerology to Power Success</h1>
                <div style="color: #E5E7EB; margin-top: 10px; font-size: 14px;">
                  March 29, 2024 • 8 min read
                </div>
              </div>
              <div style="background-color: rgba(26, 31, 44, 0.95); border: 1px solid rgba(134, 115, 111, 0.2); border-radius: 8px; padding: 30px; margin-bottom: 30px;">
                <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
                  China's remarkable transformation and the strategic use of numerology during the 2008 Beijing Olympics showcases how numbers can influence global success.
                </p>
                <div style="margin: 30px 0;">
                  <img src="https://numerology33.com/lovable-uploads/a15fb902-5972-4403-b638-89b8760626e1.png" alt="Beijing Olympics" style="width: 100%; border-radius: 8px;">
                </div>
                <div style="text-align: center; margin-top: 40px;">
                  <a href="https://numerology33.com/numerology-reading" style="display: inline-block; padding: 16px 32px; font-size: 18px; font-weight: bold; text-decoration: none; color: white; background: linear-gradient(to right, #DE2910, #FFDE00); border-radius: 8px; transition: opacity 0.3s;">
                    Get Your Reading Now
                  </a>
                </div>
              </div>
            </div>
          </body>
        </html>
      `
    },
    jackson: {
      title: "How Michael Jackson used the Power of Numerology: The Influence of the Number 7",
      content: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>How Michael Jackson used the Power of Numerology</title>
          </head>
          <body style="margin: 0; padding: 0; background-color: #121212; color: #E5E7EB; font-family: Arial, sans-serif; line-height: 1.6;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(to right, #4A148C, #311B92, #4A148C); padding: 40px 20px; border-radius: 8px; text-align: center; margin-bottom: 30px;">
                <h1 style="color: white; margin: 0; font-size: 28px; line-height: 1.3;">How Michael Jackson used the Power of Numerology</h1>
                <div style="color: #E5E7EB; margin-top: 10px; font-size: 14px;">
                  March 27, 2024 • 10 min read
                </div>
              </div>
              <div style="background-color: rgba(26, 31, 44, 0.95); border: 1px solid rgba(134, 115, 111, 0.2); border-radius: 8px; padding: 30px; margin-bottom: 30px;">
                <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
                  Michael Jackson, the King of Pop, used numerology throughout his career, with the number 7 playing a particularly significant role in his success.
                </p>
                <div style="margin: 30px 0;">
                  <img src="https://numerology33.com/lovable-uploads/787349e3-6668-40c9-90db-3dd2d0f8d6ef.png" alt="Michael Jackson" style="width: 100%; border-radius: 8px;">
                </div>
                <div style="text-align: center; margin-top: 40px;">
                  <a href="https://numerology33.com/numerology-reading" style="display: inline-block; padding: 16px 32px; font-size: 18px; font-weight: bold; text-decoration: none; color: white; background: linear-gradient(to right, #4A148C, #311B92); border-radius: 8px; transition: opacity 0.3s;">
                    Get Your Reading Now
                  </a>
                </div>
              </div>
            </div>
          </body>
        </html>
      `
    },
    jobs: {
      title: "How Steve Jobs Used Numerology to Shape His Success",
      content: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>How Steve Jobs Used Numerology to Shape His Success</title>
          </head>
          <body style="margin: 0; padding: 0; background-color: #121212; color: #E5E7EB; font-family: Arial, sans-serif; line-height: 1.6;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(to right, #A2AAAD, #666666, #A2AAAD); padding: 40px 20px; border-radius: 8px; text-align: center; margin-bottom: 30px;">
                <h1 style="color: white; margin: 0; font-size: 28px; line-height: 1.3;">How Steve Jobs Used Numerology to Shape His Success</h1>
                <div style="color: #E5E7EB; margin-top: 10px; font-size: 14px;">
                  March 25, 2024 • 12 min read
                </div>
              </div>
              <div style="background-color: rgba(26, 31, 44, 0.95); border: 1px solid rgba(134, 115, 111, 0.2); border-radius: 8px; padding: 30px; margin-bottom: 30px;">
                <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
                  Steve Jobs' journey from his early days in India studying numerology to building Apple into a $3.5 trillion empire was guided by his understanding of numbers.
                </p>
                <div style="margin: 30px 0;">
                  <img src="https://numerology33.com/lovable-uploads/73da4848-4fc6-412c-b1a9-0efc609335e3.png" alt="Steve Jobs" style="width: 100%; border-radius: 8px;">
                </div>
                <div style="text-align: center; margin-top: 40px;">
                  <a href="https://numerology33.com/numerology-reading" style="display: inline-block; padding: 16px 32px; font-size: 18px; font-weight: bold; text-decoration: none; color: white; background: linear-gradient(to right, #A2AAAD, #666666); border-radius: 8px; transition: opacity 0.3s;">
                    Get Your Reading Now
                  </a>
                </div>
              </div>
            </div>
          </body>
        </html>
      `
    },
    musk: {
      title: "How Elon Musk Uses Numerology to Get Rich: The Power of 8 and 28",
      content: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>How Elon Musk Uses Numerology to Get Rich</title>
          </head>
          <body style="margin: 0; padding: 0; background-color: #121212; color: #E5E7EB; font-family: Arial, sans-serif; line-height: 1.6;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(to right, #CC0000, #E31937, #CC0000); padding: 40px 20px; border-radius: 8px; text-align: center; margin-bottom: 30px;">
                <h1 style="color: white; margin: 0; font-size: 28px; line-height: 1.3;">How Elon Musk Uses Numerology to Get Rich</h1>
                <div style="color: #E5E7EB; margin-top: 10px; font-size: 14px;">
                  March 20, 2024 • 10 min read
                </div>
              </div>
              <div style="background-color: rgba(26, 31, 44, 0.95); border: 1px solid rgba(134, 115, 111, 0.2); border-radius: 8px; padding: 30px; margin-bottom: 30px;">
                <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
                  Elon Musk, the world's richest person, has been strategically leveraging the power of numbers, specifically 28 and 8, to fuel his meteoric rise.
                </p>
                <div style="margin: 30px 0;">
                  <img src="https://numerology33.com/lovable-uploads/4c2bf36a-524f-4700-86f4-fcb7d217d5fd.png" alt="Elon Musk" style="width: 100%; border-radius: 8px;">
                </div>
                <div style="text-align: center; margin-top: 40px;">
                  <a href="https://numerology33.com/numerology-reading" style="display: inline-block; padding: 16px 32px; font-size: 18px; font-weight: bold; text-decoration: none; color: white; background: linear-gradient(to right, #CC0000, #E31937); border-radius: 8px; transition: opacity 0.3s;">
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