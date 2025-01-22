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
          <h2>${blogPosts.rolex.title}</h2>
          <p>${blogPosts.rolex.content}</p>
        </div>

        <div style="text-align: center;">
          <a href="https://numerology33.com/numerology-reading" class="cta-button">
            Find Out More About Your Numerology
          </a>
        </div>
      </body>
    </html>
  `;
};