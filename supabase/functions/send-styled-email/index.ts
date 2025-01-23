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
  console.log("Email function started");

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      throw new Error("Server configuration error: RESEND_API_KEY is not set");
    }

    const { to, name, dateOfBirth } = await req.json() as EmailRequest;
    console.log("Received request to send email sequence:", { to, name, dateOfBirth });

    // Send first email (Rolex)
    console.log("Sending first email (Rolex)");
    const firstEmailRes = await fetch("https://api.resend.com/emails", {
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

    if (!firstEmailRes.ok) {
      const errorText = await firstEmailRes.text();
      console.error("Error sending first email:", errorText);
      throw new Error(`Failed to send first email: ${errorText}`);
    }

    console.log("First email sent successfully");

    // Schedule second email (Kardashians) to be sent after 1 minute
    setTimeout(async () => {
      try {
        console.log("Sending second email (Kardashians)");
        const secondEmailRes = await fetch("https://api.resend.com/emails", {
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
      <div style="background: linear-gradient(to right, #e31937, #cc1830, #b31729); padding: 40px 20px; border-radius: 8px; text-align: center; margin-bottom: 30px;">
        <h1 style="color: white; margin: 0; font-size: 28px; line-height: 1.3;">The Kardashian Empire: How They Used Numerology to Power Their Success</h1>
      </div>
      <div style="background-color: rgba(26, 31, 44, 0.95); border: 1px solid rgba(134, 115, 111, 0.2); border-radius: 8px; padding: 30px; margin-bottom: 30px;">
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          Dear ${name},
        </p>
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          The Kardashian family has become a household name, not just for their reality TV show but for their business acumen and influence in popular culture. But what many may not realize is that their success is deeply intertwined with the principles of numerology. In this email, we will explore how the Kardashians have harnessed the power of numbers to build their empire.
        </p>
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          From Kim's strategic branding to Kris's management skills, numerology has played a significant role in their journey. Let's dive into the numbers that have shaped their success.
        </p>
        <div style="text-align: center; margin-top: 40px;">
          <a href="https://numerology33.com/kardashian-numerology" style="background: linear-gradient(to right, #e31937, #cc1830); color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold;">
            Discover the Numerology Behind the Kardashians
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

        if (!secondEmailRes.ok) {
          const errorText = await secondEmailRes.text();
          console.error("Error sending second email:", errorText);
        } else {
          console.log("Second email sent successfully");

          // Schedule third email (Elon Musk) to be sent 1 minute after the second
          setTimeout(async () => {
            try {
              console.log("Sending third email (Elon Musk)");
              const thirdEmailRes = await fetch("https://api.resend.com/emails", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${RESEND_API_KEY}`,
                },
                body: JSON.stringify({
                  from: "Numerology 33 <support@numerology33.com>",
                  to: [to],
                  subject: "How Elon Musk Uses Numerology to Get Rich: The Power of 8 and 28",
                  html: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>How Elon Musk Uses Numerology to Get Rich: The Power of 8 and 28</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #121212; color: #E5E7EB; font-family: Arial, sans-serif; line-height: 1.6;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(to right, #e31937, #cc1830, #b31729); padding: 40px 20px; border-radius: 8px; text-align: center; margin-bottom: 30px;">
        <h1 style="color: white; margin: 0; font-size: 28px; line-height: 1.3;">How Elon Musk Uses Numerology to Get Rich: The Power of 8 and 28</h1>
      </div>
      <div style="background-color: rgba(26, 31, 44, 0.95); border: 1px solid rgba(134, 115, 111, 0.2); border-radius: 8px; padding: 30px; margin-bottom: 30px;">
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          Dear ${name},
        </p>
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          Elon Musk is one of the most successful and innovative entrepreneurs of our time. But beyond his groundbreaking work with Tesla, SpaceX, and his ventures into the world of cryptocurrency, there's a fascinating aspect to his success that many people overlook: numerology. Yes, the world's richest man has been strategically leveraging the power of numbers, specifically the number 28 and 8 to fuel his meteoric rise.
        </p>
        <div style="margin: 30px 0;">
          <img src="https://numerology33.com/lovable-uploads/4c2bf36a-524f-4700-86f4-fcb7d217d5fd.png" alt="Elon Musk" style="width: 100%; border-radius: 8px;">
        </div>
        <h2 style="color: #cc1830; font-size: 24px; margin: 24px 0;">Elon Musk's Numerology Lotto: The Power of 28</h2>
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          Elon Musk was born on June 28, 1971, and as anyone who knows numerology can tell you, 28 is a highly significant number. In numerology, 28 is the number of wealth, success, and abundance. It's the number of those who are destined for financial prosperity. The number 28 is a powerful combination of 2 and 8, and together they bring great potential for material achievement.
        </p>
        <div style="background-color: rgba(227, 25, 55, 0.1); border: 1px solid rgba(227, 25, 55, 0.2); border-radius: 8px; padding: 20px; margin: 20px 0;">
          <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8;">
            Put the raw emotions of the number 2 and ruthless drive of the 8 together, and you have the perfect formula for building a fortune, which Musk has done brilliantly. As of now, Elon Musk's net worth is estimated at a staggering $416 billion, making him the richest person in the world, largely due to his work with Tesla, SpaceX, and his various ventures.
          </p>
        </div>
        <h2 style="color: #cc1830; font-size: 24px; margin: 24px 0;">Elon Musk and the Power of the Number 8</h2>
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          Elon Musk's business moves also align with numerology in very calculated ways. Take, for example, his purchase of Twitter for $44 billion in 2022. Why 44 billion? 44 reduces to 8 (4 + 4 = 8), and 8 is the number of wealth, business acumen, and material power.
        </p>
        <h2 style="color: #cc1830; font-size: 24px; margin: 24px 0;">The Master Number 22 and Elon Musk's Twitter Strategy</h2>
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          Another interesting numerological aspect of Musk's Twitter journey is the role of 22, the Master Number associated with visionary leadership and material success. The premium subscription to Twitter is priced at $22. Why 22? Because 22 is a Master Number that is all about ambition and building a legacy.
        </p>
        <h2 style="color: #cc1830; font-size: 24px; margin: 24px 0;">The 2022 Twitter Deal: A Perfect 22 Energy</h2>
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          Musk's purchase of Twitter didn't just happen at any random time. He closed the deal in 2022, which is an extraordinary year in numerology because it has an inherent 22 energy (2+0+2+2 = 6, which has strong ties to 2 and 4).
        </p>
        <h2 style="color: #cc1830; font-size: 24px; margin: 24px 0;">The Numerology of Musk's Success: A Calculated Formula for Wealth</h2>
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          Looking at Elon Musk's rise to the top through the lens of numerology, it's clear that numbers have played an integral role in shaping his journey. From his birth on the 28th, which is a wealthy number, to his $44 billion Twitter acquisition (a number connected to 8), to the $8 subscription fee and $22 premium charge, Musk has consistently aligned his business decisions with the energetic patterns of success.
        </p>
        <div style="background: linear-gradient(to right, rgba(227, 25, 55, 0.1), rgba(204, 24, 48, 0.1)); backdrop-filter: blur(8px); border: 1px solid rgba(227, 25, 55, 0.2); border-radius: 8px; padding: 32px; margin: 32px 0; text-align: center;">
          <p style="font-size: 20px; font-weight: 600; margin-bottom: 16px; color: #E5E7EB;">Want to discover your numerological path to success?</p>
          <p style="font-size: 16px; margin-bottom: 24px; color: #E5E7EB;">Learn how numbers can guide your path to achievement and prosperity.</p>
          <a href="https://numerology33.com/collect-info" style="background: linear-gradient(to right, #e31937, #cc1830); color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold;">
            Get Your Personal Reading
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

              if (!thirdEmailRes.ok) {
                const errorText = await thirdEmailRes.text();
                console.error("Error sending third email:", errorText);
              } else {
                console.log("Third email sent successfully");

                // Schedule fourth email (Bill Gates) to be sent 1 minute after the third
                setTimeout(async () => {
                  try {
                    console.log("Sending fourth email (Bill Gates)");
                    const fourthEmailRes = await fetch("https://api.resend.com/emails", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${RESEND_API_KEY}`,
                      },
                      body: JSON.stringify({
                        from: "Numerology 33 <support@numerology33.com>",
                        to: [to],
                        subject: "How Bill Gates Uses Numerology to Shape His Success",
                        html: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>How Bill Gates Uses Numerology to Shape His Success: A Look Into His Wealth, Companies, and Rivalry with Steve Jobs</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #121212; color: #E5E7EB; font-family: Arial, sans-serif; line-height: 1.6;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(to right, #9b87f5, #7E69AB, #6E59A5); padding: 40px 20px; border-radius: 8px; text-align: center; margin-bottom: 30px;">
        <h1 style="color: white; margin: 0; font-size: 28px; line-height: 1.3;">How Bill Gates Uses Numerology to Shape His Success: A Look Into His Wealth, Companies, and Rivalry with Steve Jobs</h1>
      </div>
      <div style="background-color: rgba(26, 31, 44, 0.95); border: 1px solid rgba(134, 115, 111, 0.2); border-radius: 8px; padding: 30px; margin-bottom: 30px;">
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          Dear ${name},
        </p>
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          When we think of the world's most successful and influential tech giants, Bill Gates is undoubtedly one of the first names that come to mind. The co-founder of Microsoft revolutionized the technology industry and amassed an unimaginable fortune over the decades. But what if we told you that Bill Gates' success wasn't just due to his business acumen and relentless drive?
        </p>
        <div style="margin: 30px 0;">
          <img src="https://numerology33.com/lovable-uploads/20c580ea-6bb0-4ee6-b9b9-a65bfbd4c503.png" alt="Bill Gates" style="width: 100%; border-radius: 8px;">
        </div>
        <h2 style="color: #9b87f5; font-size: 24px; margin: 24px 0;">Bill Gates and the Number 28: The Key to His Wealth</h2>
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          One of the most fascinating aspects of Bill Gates' numerology is the number 28, which plays a critical role in his life path and his wealth. Gates was born on October 28, 1955. In numerology, 28 is the number of wealth, success, and power. The number is connected to individuals who are destined for financial prosperity and significant accomplishments.
        </p>
        <div style="background-color: rgba(155, 135, 245, 0.1); border: 1px solid rgba(155, 135, 245, 0.2); border-radius: 8px; padding: 20px; margin: 20px 0;">
          <h3 style="color: #9b87f5; margin-top: 0;">Bill Gates' Numerological Profile:</h3>
          <ul style="list-style-type: none; padding: 0; margin: 0; color: #E5E7EB;">
            <li style="margin-bottom: 10px;">• Birth Date: October 28, 1955</li>
            <li style="margin-bottom: 10px;">• Life Path Number: 28/1</li>
            <li style="margin-bottom: 10px;">• Expression Number: 7</li>
            <li style="margin-bottom: 10px;">• Destiny Number: 8</li>
          </ul>
        </div>
        <h2 style="color: #9b87f5; font-size: 24px; margin: 24px 0;">Why Did Microsoft Skip Windows 9?</h2>
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          What's fascinating is that Bill Gates made a similar move years earlier, demonstrating that both men shared a deep understanding of numerology and used it in their decision-making processes. In fact Microsoft skipped over Windows 9. Instead of calling it Windows 9, Gates went straight from Windows 8 to Windows 10.
        </p>
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          This move was even before Jobs' move with Apple, as both tech moguls seemed to understand that 9 represented completion, and they wanted to avoid that finality energy in their product launches.
        </p>
        
        <h2 style="color: #9b87f5; font-size: 24px; margin: 24px 0;">The Power of 28 in the World of Wealth</h2>
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          Some of the wealthiest figures of our time were born on the 28th of the month. Take Elon Musk, born on June 28, 1971, who is currently the richest person in the world, with a net worth frequently surpassing $416 billion. His immense wealth and groundbreaking companies, including Tesla and SpaceX, align perfectly with the numerological energy of the number 28.
        </p>
        <h2 style="color: #9b87f5; font-size: 24px; margin: 24px 0;">More Wealthy Entities Linked to the Number 28</h2>
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          It's not just individuals who benefit from the numerology of 28. Major global corporations and organizations also use this powerful number. Take Vanguard, the world's largest asset management firm, managing more than $10 trillion in assets. Vanguard was incorporated in a 28 day, a deliberate alignment with the energy of wealth.
        </p>
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          Similarly, Apple, the world's most valuable company with an estimated worth of $3.5 trillion, was also incorporated in a 28 day. Apple's dominance in the tech industry and its financial power is a direct testament to the success and influence of the number 28.
        </p>
        <div style="background: linear-gradient(to right, rgba(155, 135, 245, 0.1), rgba(126, 105, 171, 0.1)); backdrop-filter: blur(8px); border: 1px solid rgba(155, 135, 245, 0.2); border-radius: 8px; padding: 32px; margin: 32px 0; text-align: center;">
          <p style="font-size: 20px; font-weight: 600; margin-bottom: 16px; color: #E5E7EB;">Want to discover your own numerological blueprint for success?</p>
          <p style="font-size: 16px; margin-bottom: 24px; color: #E5E7EB;">Learn how numbers can guide your path to achievement and prosperity.</p>
          <a href="https://numerology33.com/collect-info" style="background: linear-gradient(to right, #9b87f5, #7E69AB); color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold;">
            Get Your Personal Reading
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

                    if (!fourthEmailRes.ok) {
                      const errorText = await fourthEmailRes.text();
                      console.error("Error sending fourth email:", errorText);
                    } else {
                      console.log("Fourth email sent successfully");
                    }
                  } catch (fourthEmailError) {
                    console.error("Error sending fourth email:", fourthEmailError);
                  }
                }, 60000); // 60000 milliseconds = 1 minute after third email
              }
            } catch (thirdEmailError) {
              console.error("Error sending third email:", thirdEmailError);
            }
          }, 60000); // 60000 milliseconds = 1 minute after second email
        }
      } catch (secondEmailError) {
        console.error("Error sending second email:", secondEmailError);
      }
    }, 60000); // 60000 milliseconds = 1 minute after first email

    return new Response(JSON.stringify({ message: "Email sequence initiated successfully" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error in send-styled-email function:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error occurred" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
};

serve(handler);