export const getAnalysisTemplate = (name: string, dateOfBirth: string) => {
  const blogPosts = {
    rolex: {
      title: "The Secret Behind Rolex's Success: A Numerological Analysis",
      content: `When it comes to luxury and prestige, few brands resonate with success like Rolex. Beyond its impeccable craftsmanship and status as the ultimate symbol of achievement, Rolex uses a secret that many may not know about—numerology...`
    },
    kardashian: {
      title: "The Kardashian Empire: How They Used Numerology to Power Their Success",
      content: `The Kardashian-Jenner family isn't just famous for their reality TV show or their social media empires—they are masters of numerology, using it as a key tool in creating their multi-billion dollar empire...`
    },
    elonMusk: {
      title: "How Elon Musk Uses Numerology to Get Rich: The Power of 8 and 28",
      content: `Elon Musk is one of the most successful and innovative entrepreneurs of our time. But beyond his groundbreaking work with Tesla, SpaceX, and his ventures into the world of cryptocurrency...`
    },
    billGates: {
      title: "How Bill Gates Uses Numerology to Shape His Success",
      content: `When we think of the world's most successful and influential tech giants, Bill Gates is undoubtedly one of the first names that come to mind...`
    },
    michaelJackson: {
      title: "How Michael Jackson used the Power of Numerology",
      content: `Michael Jackson, the King of Pop, forever changed the world with his groundbreaking music, unparalleled performances, and revolutionary style...`
    },
    steveJobs: {
      title: "How Steve Jobs Used Numerology to Shape His Success",
      content: `Steve Jobs, the co-founder of Apple, needs no introduction. His vision transformed the world of technology and consumer electronics...`
    },
    china: {
      title: "How China Uses Numerology to Power Success",
      content: `China's remarkable transformation over the past few decades is nothing short of extraordinary. From being the 15th largest economy in the world to becoming the 2nd largest...`
    },
    jimCarrey: {
      title: "How Jim Carrey Uses Numerology to Shape His Life and Career",
      content: `Jim Carrey, the legendary actor and comedian, is known for his larger-than-life personality, unhinged humor, and, of course, his unforgettable roles...`
    }
  };

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>${blogPosts.rolex.title}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #121212;
            color: #E5E7EB;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #1A1F2C;
          }
          .header {
            text-align: center;
            margin-bottom: 2rem;
            padding: 2rem 0;
            background: linear-gradient(to right, #86736f, #a39490, #c4b5b1);
            border-radius: 8px;
          }
          .title {
            font-size: 28px;
            font-weight: bold;
            color: white;
            margin-bottom: 1rem;
            padding: 0 20px;
          }
          .content {
            margin-bottom: 32px;
            padding: 20px;
            background-color: rgba(134, 115, 111, 0.1);
            border-radius: 8px;
            border: 1px solid rgba(134, 115, 111, 0.2);
          }
          .content p {
            color: #E5E7EB;
            font-size: 16px;
            line-height: 1.8;
            margin-bottom: 1rem;
          }
          .cta-button {
            background: linear-gradient(to right, #86736f, #a39490);
            color: white;
            padding: 16px 32px;
            text-decoration: none;
            border-radius: 8px;
            display: inline-block;
            font-weight: bold;
            margin-top: 20px;
          }
          .footer {
            text-align: center;
            margin-top: 2rem;
            padding-top: 2rem;
            border-top: 1px solid rgba(134, 115, 111, 0.2);
            color: #9CA3AF;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 class="title">${blogPosts.rolex.title}</h1>
          </div>
          
          <div class="content">
            <p>${blogPosts.rolex.content}</p>
            
            <p>In numerology, the number 28 holds significant power. It is the number of wealth, tied to financial prosperity, material abundance, and success. And it's directly linked to some of the wealthiest and most influential people and entities in the world.</p>
            
            <p>So, why does Rolex showcase the number 28 in the images of their watches? The answer lies in subtle numerological influence. In Rolex marketing photos, the date window often highlights the 28th day of the month—and it's no accident. By showcasing this number, Rolex is tapping into the energy of wealth and success.</p>
            
            <p>The success of both Musk and Gates reflects the numerological force of the number 28. It's not just individuals who benefit from the numerology of 28. Major global corporations and organizations also use this powerful number.</p>
            
            <div style="text-align: center;">
              <a href="https://numerology33.com/numerology-reading" class="cta-button">
                Discover Your Numerological Path to Success
              </a>
            </div>
          </div>
          
          <div class="footer">
            <p>© 2024 Numerology Insights. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;
};