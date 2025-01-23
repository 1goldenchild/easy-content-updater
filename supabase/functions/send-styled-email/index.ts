import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  to: string;
  name: string;
  dateOfBirth: string;
}

const supabase = createClient(
  SUPABASE_URL!,
  SUPABASE_SERVICE_ROLE_KEY!
);

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { to, name, dateOfBirth } = await req.json() as EmailRequest;
    console.log("Received request to send email:", { to, name, dateOfBirth });

    // Send first email (Rolex)
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Numerology 33 <support@numerology33.com>",
        to: [to],
        subject: "The Secret Behind Rolex's Success: A Numerological Analysis",
        html: `<!DOCTYPE html>
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
          Dear ${name},
        </p>
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          When it comes to luxury and prestige, few brands resonate with success like Rolex. Beyond its impeccable craftsmanship and status as the ultimate symbol of achievement, Rolex uses a secret that many may not know about—numerology. In fact, Rolex has embedded certain numbers into their watches in a way that subtly aligns with wealth and prosperity.
        </p>
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          Let's take a deeper look at how Rolex incorporates numerology into their timepieces, especially through the strategic use of the number 28 in their marketing, and the powerful 10:11 on the dial—two numbers linked to abundance and success.
        </p>
        <div style="margin: 30px 0;">
          <img src="https://numerology33.com/lovable-uploads/841cc51b-3942-436f-a692-be30a0b5b243.png" alt="Luxurious Rolex boutique with emerald green walls and display cases" style="width: 100%; border-radius: 8px;">
        </div>
        <h2 style="color: #a39490; font-size: 24px; margin: 24px 0;">Why the Number 28? The Numerology of Wealth</h2>
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          In the world of numerology, 28 holds significant power. It is the number of wealth, tied to financial prosperity, material abundance, and success. And it's directly linked to some of the wealthiest and most influential people and entities in the world.
        </p>
        <div style="background-color: rgba(134, 115, 111, 0.15); border: 1px solid rgba(134, 115, 111, 0.3); border-radius: 8px; padding: 20px; margin: 20px 0;">
          <ul style="list-style-type: none; padding: 0; margin: 0; color: #E5E7EB;">
            <li style="margin-bottom: 10px;">• The Datejust's date window at 28 - A subtle nod to prosperity</li>
            <li style="margin-bottom: 10px;">• 28-day power reserve - Featured in several prestigious models</li>
            <li style="margin-bottom: 10px;">• 28,800 beats per hour - The perfect frequency for many Rolex movements</li>
          </ul>
        </div>
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          So, why does Rolex showcase the number 28 in the images of their watches? The answer lies in subtle numerological influence. In Rolex marketing photos, the date window often highlights the 28th day of the month—and it's no accident. By showcasing this number, Rolex is tapping in the number 28 and showing it to you which also drives you to making purchases.
        </p>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin: 20px 0;">
          <img src="https://numerology33.com/lovable-uploads/91a23eb6-35ae-4850-a089-cc3e2438b65e.png" alt="Gold Rolex Watch" style="width: 100%; border-radius: 8px;">
          <img src="https://numerology33.com/lovable-uploads/ec0bf53a-a535-42fa-a475-9a3588d1bb5c.png" alt="Two-Tone Rolex Watch" style="width: 100%; border-radius: 8px;">
          <img src="https://numerology33.com/lovable-uploads/a6781e11-aee4-40d3-bca0-dcd105340118.png" alt="Black Rolex Watch" style="width: 100%; border-radius: 8px;">
        </div>
        <h2 style="color: #a39490; font-size: 24px; margin: 24px 0;">The Power of 28 in the World of Wealth</h2>
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          Some of the wealthiest figures of our time were born on the 28th of the month. Take Elon Musk, born on June 28, 1971, who is currently the richest person in the world, with a net worth frequently surpassing $416 billion. His immense wealth and groundbreaking companies, including Tesla and SpaceX, align perfectly with the numerological energy of the number 28.
        </p>
        <div style="border-left: 4px solid #86736f; padding-left: 20px; margin: 20px 0; font-style: italic; color: #a39490;">
          <p>Bill Gates, the richest man of the previous decade, was also born on October 28, 1955. Gates co-founded Microsoft and became a pioneer in the tech industry.</p>
        </div>
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          The success of both Musk and Gates reflects the numerological force of the number 28.
        </p>
        <h2 style="color: #a39490; font-size: 24px; margin: 24px 0;">More Wealthy Entities Linked to the Number 28</h2>
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          It's not just individuals who benefit from the numerology of 28. Major global corporations and organizations also use this powerful number. Take Vanguard, the world's largest asset management firm, managing more than $10 trillion in assets. Vanguard was incorporated in a 28 day, a deliberate alignment with the energy of wealth.
        </p>
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          Similarly, Apple, the world's most valuable company with an estimated worth of $3.5 trillion, was also incorporated in a 28 day. Apple's dominance in the tech industry and its financial power is a direct testament to the success and influence of the number 28.
        </p>
        <h2 style="color: #a39490; font-size: 24px; margin: 24px 0;">Rolex's Subtle Numerology: 28 and 10:11</h2>
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          Now, back to Rolex and the 28. When you look at a Rolex watch in marketing materials, you'll notice that the date window highlights the number 28. But that's not all. If you look carefully, Rolex also sets the time at 10:11, a powerful numerological sequence. In numerology, 111 is a number of manifestation, inspiration, and new beginnings—perfectly fitting for a brand that symbolizes elite success. The positioning of the time on the dial reflects the brand's alignment with manifesting wealth and success and also directly passing that force onto the customers.
        </p>
        <div style="text-align: center; margin-top: 40px;">
          <a href="https://numerology33.com/numerology-reading" style="background: linear-gradient(to right, #86736f, #a39490); color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold;">
            Discover Your Numerological Path to Success
          </a>
        </div>
      </div>
      <div style="text-align: center; margin-top: 2rem; padding-top: 2rem; border-top: 1px solid rgba(134, 115, 111, 0.2); color: #9CA3AF;">
        <p>© 2024 Numerology Insights. All rights reserved.</p>
      </div>
    </div>
  </body>
</html>`,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("Error sending first email:", error);
      throw new Error(`Failed to send first email: ${error}`);
    }

    const emailData = await res.json();
    console.log("First email sent successfully:", emailData);

    // Schedule second email (Kardashian) to be sent after 1 minute
    setTimeout(async () => {
      try {
        const secondRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Numerology 33 <support@numerology33.com>",
            to: [to],
            subject: "The Kardashian Empire: How They Used Numerology to Power Their Success",
            html: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Kardashian Empire: How They Used Numerology to Power Their Success</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #121212; color: #E5E7EB; font-family: Arial, sans-serif; line-height: 1.6;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(to right, #86736f, #a39490, #c4b5b1); padding: 40px 20px; border-radius: 8px; text-align: center; margin-bottom: 30px;">
        <h1 style="color: white; margin: 0; font-size: 28px; line-height: 1.3;">The Kardashian Empire: How They Used Numerology to Power Their Success</h1>
      </div>
      <div style="background-color: rgba(26, 31, 44, 0.95); border: 1px solid rgba(134, 115, 111, 0.2); border-radius: 8px; padding: 30px; margin-bottom: 30px;">
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          Dear ${name},
        </p>
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          The Kardashian-Jenner family isn't just famous for their reality TV show or their social media empires—they are masters of numerology, using it as a key tool in creating their multi-billion dollar empire. From their Life Path numbers to their names, everything about them has been meticulously aligned with the energetic properties of numbers.
        </p>
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          In this article, we'll explore how the Kardashian-Jenner clan uses numerology to their advantage, why certain numbers and letters play a pivotal role in their lives, and how they've tapped into the vibrational power of numbers like 11, 22, 33, and 8 to build their brand and influence.
        </p>
        <div style="margin: 30px 0;">
          <img src="https://numerology33.com/lovable-uploads/c62b9e91-15ac-4a47-b3af-580cc17a3756.png" alt="Kardashian-Jenner family in neutral tones" style="width: 100%; border-radius: 8px;">
        </div>
        <h2 style="color: #a39490; font-size: 24px; margin: 24px 0;">The Numerology Behind the Kardashian-Jenner Family</h2>
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          Each member of the Kardashian-Jenner family has a unique Life Path number that influences their decisions, shapes their personality, and has been an essential part of their rise to global stardom. Let's take a closer look at their Life Path numbers and what they reveal about them:
        </p>
        <div style="background-color: rgba(134, 115, 111, 0.15); border: 1px solid rgba(134, 115, 111, 0.3); border-radius: 8px; padding: 20px; margin: 20px 0;">
          <ul style="list-style-type: none; padding: 0; margin: 0; color: #E5E7EB;">
            <li style="margin-bottom: 10px;"><span style="color: #a39490;">Kim Kardashian (Life Path 22):</span> The most famous of the Kardashian clan, with the Master Number 22</li>
            <li style="margin-bottom: 10px;"><span style="color: #a39490;">Kylie Jenner (Life Path 8):</span> Amassed a fortune over $1 billion, carries the powerful money frequency</li>
            <li style="margin-bottom: 10px;"><span style="color: #a39490;">Kris Jenner (Life Path 28):</span> The matriarch with The Wealth Number</li>
            <li style="margin-bottom: 10px;"><span style="color: #a39490;">Kendall Jenner (Life Path 11):</span> The supermodel with the Master Number of vision</li>
            <li style="margin-bottom: 10px;"><span style="color: #a39490;">Caitlyn Jenner (Life Path 33):</span> Born on the 28th, combining powerful numbers</li>
          </ul>
        </div>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin: 30px 0;">
          <img src="https://numerology33.com/lovable-uploads/f570fe28-0186-421f-8479-0176848678d5.png" alt="Team wearing jerseys with number 8" style="width: 100%; border-radius: 8px;">
          <img src="https://numerology33.com/lovable-uploads/6c088c00-5135-4c6e-8c3f-840339f617a1.png" alt="Decorative number 8 sculpture" style="width: 100%; border-radius: 8px;">
        </div>
        <h2 style="color: #a39490; font-size: 24px; margin: 24px 0;">Numerology and the Power of the Letter "K"</h2>
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          One of the most fascinating aspects of the Kardashian-Jenner family's numerological strategy is their consistent use of the letter K in their names. But there's more to it than just a letter—it's the vibrational energy that the letter carries.
        </p>
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          In numerology, K is the 11th letter of the alphabet, and it resonates with the Master Number 11 which is a powerful source of intuition, and emotional depth. By using the letter K in their names—Kim Kardashian, Kylie Jenner, Kris Jenner, Kendall Jenner—they are intentionally tapping into this potent 11 energy, infusing their brand with its power.
        </p>
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          The letter K in their names acts like a magnetic force, attracting attention, emotion, and intensity. When you say the letter K, you are unconsciously activating the energy of 11—a number that vibrates with creative vision and a deep sense of purpose. By embedding this energy into their personal and professional identities, the Kardashians have made 11 an integral part of their empire.
        </p>
        <h2 style="color: #a39490; font-size: 24px; margin: 24px 0;">The Number 8: The Symbol of Wealth and Abundance</h2>
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          In addition to their Life Path numbers, the Kardashian-Jenner family often incorporates the number 8—a number associated with abundance, wealth, and success—into their branding, jersey numbers, decorations, and even their homes.
        </p>
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          For instance, you'll find that many of their promotional images, home decor, and even jewelry feature the infinity symbol (which resembles the number 8) to represent the endless flow of abundance. The use of 8 energy is a powerful reminder that they are constantly in a cycle of growth and prosperity. By intentionally infusing this number into their lives, they are reinforcing the money frequency and the idea that wealth is limitless.
        </p>
        <div style="background: linear-gradient(to right, rgba(134, 115, 111, 0.1), rgba(163, 148, 144, 0.1), rgba(196, 181, 177, 0.1)); backdrop-filter: blur(8px); border: 1px solid rgba(134, 115, 111, 0.2); border-radius: 8px; padding: 32px; margin: 32px 0; text-align: center;">
          <p style="font-size: 20px; font-weight: 600; margin-bottom: 16px; color: #E5E7EB;">Ready to discover your numerological path to success?</p>
          <p style="font-size: 16px; margin-bottom: 24px; color: #E5E7EB;">Get your personal numerology analysis today and unlock the power of numbers in your life.</p>
          <a href="https://numerology33.com/collect-info" style="background: linear-gradient(to right, #86736f, #c4b5b1); color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold;">
            Get Your Reading Now
          </a>
        </div>
      </div>
      <div style="text-align: center; margin-top: 2rem; padding-top: 2rem; border-top: 1px solid rgba(134, 115, 111, 0.2); color: #9CA3AF;">
        <p>© 2024 Numerology Insights. All rights reserved.</p>
      </div>
    </div>
  </body>
</html>`,
          }),
        });

        if (!secondRes.ok) {
          console.error("Error sending second email:", await secondRes.text());
        } else {
          console.log("Second email sent successfully");

          // Update email sequence status
          const { data: userReading } = await supabase
            .from("user_readings")
            .select("id")
            .eq("email", to)
            .eq("date_of_birth", dateOfBirth)
            .single();

          if (userReading) {
            const { error: sequenceError } = await supabase
              .from("email_sequence_status")
              .upsert({
                user_reading_id: userReading.id,
                sequence_position: 2,
                last_email_sent: new Date().toISOString(),
              });

            if (sequenceError) {
              console.error("Error updating sequence status:", sequenceError);
            }
          }
        }
      } catch (emailError) {
        console.error("Error sending second email:", emailError);
      }
    }, 60000); // 60000 milliseconds = 1 minute

    // Update email sequence status for first email
    const { data: userReading } = await supabase
      .from("user_readings")
      .select("id")
      .eq("email", to)
      .eq("date_of_birth", dateOfBirth)
      .single();

    if (userReading) {
      const { error: sequenceError } = await supabase
        .from("email_sequence_status")
        .upsert({
          user_reading_id: userReading.id,
          sequence_position: 1,
          last_email_sent: new Date().toISOString(),
        });

      if (sequenceError) {
        console.error("Error updating sequence status:", sequenceError);
      }
    }

    return new Response(JSON.stringify(emailData), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error in send-styled-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
};

serve(handler);