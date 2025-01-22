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

const getEmailTemplate = (templateName: string, userData: EmailRequest["userData"]) => {
  const templates: Record<string, { title: string, content: string }> = {
    rolex: {
      title: "The Secret Behind Rolex's Success: A Numerological Analysis",
      content: `When it comes to luxury and prestige, few brands resonate with success like Rolex. Beyond its impeccable craftsmanship and status as the ultimate symbol of achievement, Rolex uses a secret that many may not know about—numerology. In fact, Rolex has embedded certain numbers into their watches in a way that subtly aligns with wealth and prosperity.

Let's take a deeper look at how Rolex incorporates numerology into their timepieces, especially through the strategic use of the number 28 in their marketing, and the powerful 10:11 on the dial—two numbers linked to abundance and success.

Why the Number 28? The Numerology of Wealth

In the world of numerology, 28 holds significant power. It is the number of wealth, tied to financial prosperity, material abundance, and success. And it's directly linked to some of the wealthiest and most influential people and entities in the world.

So, why does Rolex showcase the number 28 in the images of their watches? The answer lies in subtle numerological influence. In Rolex marketing photos, the date window often highlights the 28th day of the month—and it's no accident. By showcasing this number, Rolex is tapping in the number 28 and showing it to you which also drives you to making purchases.

The Power of 28 in the World of Wealth

Some of the wealthiest figures of our time were born on the 28th of the month. Take Elon Musk, born on June 28, 1971, who is currently the richest person in the world, with a net worth frequently surpassing $416 billion. His immense wealth and groundbreaking companies, including Tesla and SpaceX, align perfectly with the numerological energy of the number 28.

Bill Gates, the richest man of the previous decade, was also born on October 28, 1955. Gates co-founded Microsoft and became a pioneer in the tech industry. The success of both Musk and Gates reflects the numerological force of the number 28.

More Wealthy Entities Linked to the Number 28

It's not just individuals who benefit from the numerology of 28. Major global corporations and organizations also use this powerful number. Take Vanguard, the world's largest asset management firm, managing more than $10 trillion in assets. Vanguard was incorporated in a 28 day, a deliberate alignment with the energy of wealth.

Similarly, Apple, the world's most valuable company with an estimated worth of $3.5 trillion, was also incorporated in a 28 day. Apple's dominance in the tech industry and its financial power is a direct testament to the success and influence of the number 28.

Rolex's Subtle Numerology: 28 and 10:11

Now, back to Rolex and the 28. When you look at a Rolex watch in marketing materials, you'll notice that the date window highlights the number 28. But that's not all. If you look carefully, Rolex also sets the time at 10:11, a powerful numerological sequence. In numerology, 111 is a number of manifestation, inspiration, and new beginnings—perfectly fitting for a brand that symbolizes elite success. The positioning of the time on the dial reflects the brand's alignment with manifesting wealth and success and also directly passing that force onto the customers.`
    },
    kardashian: {
      title: "The Kardashian Empire: How They Used Numerology",
      content: `The Kardashian-Jenner family isn't just famous for their reality TV show or their social media empires—they are masters of numerology, using it as a key tool in creating their multi-billion dollar empire. From their Life Path numbers to their names, everything about them has been meticulously aligned with the energetic properties of numbers.

The Numerology Behind the Kardashian-Jenner Family

Each member of the Kardashian-Jenner family has a unique Life Path number that influences their decisions, shapes their personality, and has been an essential part of their rise to global stardom. Let's take a closer look at their Life Path numbers and what they reveal about them:

- Kim Kardashian (Life Path 22): The most famous of the Kardashian clan, with the Master Number 22
- Kylie Jenner (Life Path 8): Amassed a fortune over $1 billion, carries the powerful money frequency
- Kris Jenner (Life Path 28): The matriarch with The Wealth Number
- Kendall Jenner (Life Path 11): The supermodel with the Master Number of vision
- Caitlyn Jenner (Life Path 33): Born on the 28th, combining powerful numbers

Numerology and the Power of the Letter "K"

One of the most fascinating aspects of the Kardashian-Jenner family's numerological strategy is their consistent use of the letter K in their names. But there's more to it than just a letter—it's the vibrational energy that the letter carries.

In numerology, K is the 11th letter of the alphabet, and it resonates with the Master Number 11 which is a powerful source of intuition, and emotional depth. By using the letter K in their names—Kim Kardashian, Kylie Jenner, Kris Jenner, Kendall Jenner—they are intentionally tapping into this potent 11 energy, infusing their brand with its power.

The letter K in their names acts like a magnetic force, attracting attention, emotion, and intensity. When you say the letter K, you are unconsciously activating the energy of 11—a number that vibrates with creative vision and a deep sense of purpose. By embedding this energy into their personal and professional identities, the Kardashians have made 11 an integral part of their empire.

The Number 8: The Symbol of Wealth and Abundance

In addition to their Life Path numbers, the Kardashian-Jenner family often incorporates the number 8—a number associated with abundance, wealth, and success—into their branding, jersey numbers, decorations, and even their homes.

For instance, you'll find that many of their promotional images, home decor, and even jewelry feature the infinity symbol (which resembles the number 8) to represent the endless flow of abundance. The use of 8 energy is a powerful reminder that they are constantly in a cycle of growth and prosperity. By intentionally infusing this number into their lives, they are reinforcing the money frequency and the idea that wealth is limitless.`
    },
    elon: {
      title: "How Elon Musk Uses Numerology to Get Rich",
      content: `Elon Musk is one of the most successful and innovative entrepreneurs of our time. But beyond his groundbreaking work with Tesla, SpaceX, and his ventures into the world of cryptocurrency, there's a fascinating aspect to his success that many people overlook: numerology. Yes, the world's richest man has been strategically leveraging the power of numbers, specifically the number 28 and 8 to fuel his meteoric rise.

Elon Musk's Numerology Lotto: The Power of 28

Elon Musk was born on June 28, 1971, and as anyone who knows numerology can tell you, 28 is a highly significant number. In numerology, 28 is the number of wealth, success, and abundance. It's the number of those who are destined for financial prosperity. The number 28 is a powerful combination of 2 and 8, and together they bring great potential for material achievement.

Put the raw emotions of the number 2 and ruthless drive of the 8 together, and you have the perfect formula for building a fortune, which Musk has done brilliantly. As of now, Elon Musk's net worth is estimated at a staggering $416 billion, making him the richest person in the world, largely due to his work with Tesla, SpaceX, and his various ventures.

Elon Musk and the Power of the Number 8

Elon Musk's business moves also align with numerology in very calculated ways. Take, for example, his purchase of Twitter for $44 billion in 2022. Why 44 billion? 44 reduces to 8 (4 + 4 = 8), and 8 is the number of wealth, business acumen, and material power.

8 is also called the "number of money" because you can tap into the flow of financial energy. Musk's decision to buy Twitter for exactly 44 billion wasn't just a random figure—it was a move backed by what I called cosmic intelligence or what you might call numerology.

The Master Number 22 and Elon Musk's Twitter Strategy

Another interesting numerological aspect of Musk's Twitter journey is the role of 22, the Master Number associated with visionary leadership and material success. The premium subscription to Twitter is priced at $22. Why 22? Because 22 is a Master Number that is all about ambition and building a legacy.

The 2022 Twitter Deal: A Perfect 22 Energy

Musk's purchase of Twitter didn't just happen at any random time. He closed the deal in 2022, which is an extraordinary year in numerology because it has an inherent 22 energy (2+0+2+2 = 6, which has strong ties to 2 and 4).

The Numerology of Musk's Success: A Calculated Formula for Wealth

Looking at Elon Musk's rise to the top through the lens of numerology, it's clear that numbers have played an integral role in shaping his journey. From his birth on the 28th, which is a wealthy number, to his $44 billion Twitter acquisition (a number connected to 8), to the $8 subscription fee and $22 premium charge, Musk has consistently aligned his business decisions with the energetic patterns of success.`
    },
    gates: {
      title: "How Bill Gates Uses Numerology to Shape His Success",
      content: `When we think of the world's most successful and influential tech giants, Bill Gates is undoubtedly one of the first names that come to mind. The co-founder of Microsoft revolutionized the technology industry and amassed an unimaginable fortune over the decades. But what if we told you that Bill Gates' success wasn't just due to his business acumen and relentless drive?

Bill Gates and the Number 28: The Key to His Wealth

One of the most fascinating aspects of Bill Gates' numerology is the number 28, which plays a critical role in his life path and his wealth. Gates was born on October 28, 1955. In numerology, 28 is the number of wealth, success, and power. The number is connected to individuals who are destined for financial prosperity and significant accomplishments.

When we look at the numbers behind Gates' massive success, it's clear that 28 has been his guiding force. The wealth and success Gates has amassed through Microsoft and his various investments align perfectly with the energetic properties of 28.

As of now, Bill Gates has an estimated net worth of over $100 billion, making him one of the wealthiest individuals on the planet. The impact of 28 can't be understated here—his company, Microsoft, and his investments all seem to fall in line with the numerological power of the number.

Bill Gates and Steve Jobs: The Rivalry and Numerology Connection

Bill Gates' biggest competitor in the tech world was none other than Steve Jobs, the iconic co-founder of Apple. (Apple was also founded in 28 day.) While their rivalry is well-known in the business world, what's less commonly known is that both Gates and Jobs were deeply influenced by numerology in their respective careers.

Steve Jobs' Numerological Beliefs

Steve Jobs, like Gates, had an interest in the powers of numerology. In fact, Jobs went to India to learn more about numerology and astrology, which he integrated into his decisions throughout his career. One of the most telling examples of Jobs' numerological understanding came when he made the decision to skip the number 9 in Apple's iPhone lineup. He released the iPhone 8 and then jumped straight to the iPhone X, skipping over 9 entirely.

Why did he do this? The Number 9 is the number of completion. It creates the end of a cycle and is associated with perfection and finality. Jobs knew that the number 9 represented the final chapter, and as a result, he chose to skip it in favor of a new beginning—iPhone X, symbolizing a new era for Apple.

Bill Gates Does the Same Thing—Two Years Earlier

What's fascinating is that Bill Gates made a similar move years earlier, demonstrating that both men shared a deep understanding of numerology and used it in their decision-making processes. In fact Microsoft skipped over Windows 9. Instead of calling it Windows 9, Gates went straight from Windows 8 to Windows 10.

This move was even before Jobs' move with Apple, as both tech moguls seemed to understand that 9 represented completion, and they wanted to avoid that finality energy in their product launches.`
    },
    jackson: {
      title: "How Michael Jackson used the Power of Numerology",
      content: `Michael Jackson, the King of Pop, forever changed the world with his groundbreaking music, unparalleled performances, and revolutionary style. But beyond his global fame and musical genius, Jackson's connection to numerology and his fascination with certain numbers played a unique role in his rise to superstardom. One number in particular—7—appears over and over again in his life, from his name to his performances, to the very way he presented himself to the world.

The Significance of 7 in Michael Jackson's Life and Career

Michael Jackson was more than just a music icon; he was also deeply influenced by numerology, a system to read energies and force thru numbers. The number 7 is especially significant, and it showed up in countless ways throughout Jackson's career. Why 7? It's a spiritual number, with wisdom, spiritual awakening, and intelligence. These qualities match perfectly with Jackson's artistic vision, which was to not only entertain but to inspire and uplift.

7 in Michael Jackson's Name: A Personal Connection

First, let's look at Michael Jackson's name itself. There are exactly 7 letters in both Michael and Jackson—The first aspect of the number 7 in his life.

7 Everywhere: Michael Jackson's Love Affair with the Number

Jackson's connection to the number 7 wasn't limited to his name; it appeared all over his music, his performances, and even his fashion choices. It was almost as if he was using the energy of this number to fuel his creativity and success.

- 'Scream' Music Video: Michael Jackson wore the number 7 prominently on his top in the 'Scream' music video.
- 'Dangerous' Album Cover: The number 7 appears on a hat in the album cover.
- HIStory World Tour: Michael had 7 embossed on each leg guard.
- HIStory Album Statue: Features 777 on his arm.
- HIStory Promotional Video: The 777 symbol appears on his jacket.
- Plasters on His Fingers: Left his seventh finger free.
- 'Blood On The Dance Floor' Album: His body forms a number 7.

The Power of 7 in Numerology

In numerology, the number 7 is a deeply spiritual number linked to introspection, wisdom, and intelligence. It is considered the "number of the seeker," often associated with those who possess a desire for spiritual enlightenment and deeper understanding. It's not just a number of creativity but also of balance and healing.

This connection to 7 perfectly mirrors Jackson's approach to music. His songs weren't just about entertainment; they were about creating change, healing, and uniting people. Whether it was through his message of peace in "Heal the World" or his call for social justice in "Black or White," Michael Jackson's music had a way of speaking to people on a deeply emotional and spiritual level—much like the energy of the number 7 itself.

The Spiritual Power of 7 in Michael Jackson's Legacy

From the number 7 woven into his name to the 777 on his clothing and album covers, Michael Jackson's life was full of numerological significance. He didn't just create music—he crafted spiritual anthems, designed to heal, uplift, and unite people of all backgrounds.`
    },
    jobs: {
      title: "How Steve Jobs Used Numerology to Shape His Success",
      content: `Steve Jobs, the co-founder of Apple, needs no introduction. His vision transformed the world of technology and consumer electronics, leading Apple to become the largest company in the world, now valued at a staggering $3.5 trillion. However, what many may not know is that he used numerology as a driving force. From his early days of exploration into astrology and numerology in India right before the creation of the world's most valuable company, Jobs used numerology as an unseen guiding force.

Steve Jobs' Journey to India and learning the Power of Numbers

Before Steve Jobs became the tech icon we know today, he embarked on a life-changing journey to India. This trip, inspired by his interest in numerology and astrology, helped shape his view of the world and the way he approached business decisions. In India, Jobs delved deep into these ancient systems, and it was there that he discovered his Compound Life Path Number 28.

Jobs identified himself as a 28 Life Path, a potent number of wealth, power, and abundance. For Jobs, the number 28 was a gold mine, and it became a core part of his personal and business philosophy. But what makes this number so important, and how did it influence Apple's rise?

Apple and the Power of 28

Jobs' belief in the power of numerology manifested throughout Apple's history, from its inception to the launch of its most iconic products. Let's break down how the 28 energy played a key role in the company's rise:

- Apple's founding date: January 3, 1977 – When you add up the digits (1 + 3 + 1 + 9 + 7 + 7), you get 28.
- Apple's official incorporation: April 1, 1976 – Again, adding up the digits (4 + 1 + 1 + 9 + 7 + 6) gives you 28.
- Jobs' birthdate: February 24, 1955 also adds up to 28 (2 + 2 + 4 + 1 + 9 + 5 + 5 = 28).

The iPhone Launch: 28 Energy at Play

Apple's breakthrough product, the iPhone, launched on June 29, 2007, was another moment where numerology seemed to play a role. Adding the digits of the launch date (6 + 2 + 9 + 2 + 0 + 0 + 7) equals 28 once again. This pattern isn't just a coincidence. He is directly tapping into the 28 with precision.

Why Apple Skips the iPhone 9: The Significance of Number 9

One of the most interesting moves in Apple's history was the decision to skip the iPhone 9 entirely. Instead, after the iPhone 8, Apple went straight to the iPhone X (pronounced "iPhone Ten"). Why? According to numerology, 9 is considered the number of completion—a number that signifies the end of a cycle. By skipping the iPhone 9, Jobs avoided the energy of completion and instead embraced the transformative and innovative energy of the 10 (or X), which represents a new beginning, a new level of advancement.

Apple's Legacy: The $3.5 Trillion Empire

Today, Apple is the largest company in the world, valued at $3.5 trillion. The journey from its humble beginnings in a garage to global dominance has been fueled by a combination of visionary thinking, innovation, and a deep understanding of the unseen forces that shape success. For Jobs, numerology was one of these forces.

Final Thoughts: The Role of Numerology in Business Success

Steve Jobs' success wasn't just about innovation—it was about understanding and using the hidden energies of numerology to shape his destiny. Whether it was choosing product launch dates that aligned with 28, skipping the iPhone 9 to avoid the energy of completion, or using the power of numbers to fuel Apple's growth, Jobs was a true believer in the power of numerology.`
    },
    china: {
      title: "How China Uses Numerology to Power Success",
      content: `China's remarkable transformation over the past few decades is nothing short of extraordinary. From being the 15th largest economy in the world to becoming the 2nd largest in a matter of years, China's rise to global prominence has been driven by a combination of economic reforms, strategic vision, and—believe it or not—numerology.

The Power of the Number 8: Why China Chose 8:08 PM on 8/8/2008

China's use of numerology during the 2008 Beijing Olympics is one of the most striking examples of how deeply ingrained numerology is in their culture. The Beijing Olympics were set to begin on August 8, 2008, at exactly 8:08 PM. The 8th day of the 8th month of 2008 at 8pm and 8 minutes.

Number 8 Significance:
- Associated with wealth, prosperity, and good fortune
- Sounds like "fa" (發) meaning "wealth" and "prosper" in Mandarin
- Strategic Timing: 8:08 PM on 8/8/2008 for maximum prosperity energy
- Global Impact: Marked China's emergence as a global superpower

The Result: China's Meteoric Rise

The 2008 Olympics was not just a sporting event—it was a symbol of China's global ascent. Just a few years after hosting the Olympics, China went from being the 15th largest economy in the world to becoming the 2nd largest—and that meteoric rise was, in part, propelled by its deep connection to numerology and the power of the number 8.

China's Long History of Numerology and Success

China has a long-standing history of using numerology to influence everything from political decisions to military strategy. For thousands of years, Chinese leaders have understood the power of numbers and how they shape the energy of events. In the Qin Dynasty, for example, Emperor Qin Shi Huang used numerology and astrology to time his military campaigns and political reforms.

Modern Applications of the Number 8:
- Business Launches: Choosing auspicious dates with 8
- Phone Numbers: Premium pricing for numbers with 8
- Real Estate: Properties with 8 in address command higher prices
- Bank Accounts: Lucky account numbers incorporating 8

Numerology and China's Future

Since the 2008 Olympics, the number 8 has continued to play an important role in China's continued rise. The number 8 is still a symbol of wealth, prosperity, and success in modern Chinese society. Chinese businesses and individuals regularly align their ventures and decisions with this lucky number.`
    },
    carrey: {
      title: "How Jim Carrey Uses Numerology to Shape His Life and Career",
      content: `Jim Carrey, the legendary actor and comedian, is known for his larger-than-life personality, unhinged humor, and, of course, his unforgettable roles in films like Ace Ventura, The Truman Show, and The Mask. But behind the humor and the manic energy, Carrey's life is influenced by something far deeper: numerology.

While it's no secret that Carrey has always had a unique perspective on life, his fascination with numbers became especially apparent while filming the movie The Number 23 in 2007. The film, in which Carrey's character becomes obsessed with the number 23, sparked a genuine interest in numerology that has stayed with him ever since.

The Number 23: Jim Carrey's Fascination and the Cosmic Meaning Behind It

It all began with the number 23, a number that Carrey has repeatedly mentioned in interviews and public talks. According to Carrey, he became intrigued by the number while making The Number 23, a thriller where his character spirals into obsession with the number. But what's more interesting is how 23 kept appearing in his life outside of the film. It was as if the universe was sending him a message.

Earth's Axial Tilt: The Earth's axial tilt is 23 degrees, influencing our seasons
Blood Circulation: Blood circulates through the human body in 23 seconds
Birth Time: Born at 2:30 AM (2 + 3 = 5 in numerology)
Production Company: Named his company JC23 Entertainment

JC23 Entertainment: A Numerological Decision

Carrey's fascination with the number 23 wasn't just a passing interest—it became an integral part of his career. He even went as far as to rename his production company to JC23 Entertainment, cementing his connection to this number. By using the 23 he was tapping into the cosmic energy that had personal and professional significance.

33 Vertebrae and Beyond

While 23 may have been the number that first grabbed Carrey's attention, he has also explored the spiritual significance of 33, which has deep resonance in numerology and various religious traditions.

Spiritual Alignment: Humans have 33 vertebrae in their spine
Religious Significance: Jesus Christ's age at his death
Islamic Tradition: The perfect age in heaven according to Islamic belief
Master Number: 33 represents higher levels of consciousness`
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
          h2 {
            color: #8B5CF6;
            margin-top: 24px;
            margin-bottom: 16px;
          }
        </style>
      </head>
      <body>
        <div class="content">
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