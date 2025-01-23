export const getAnalysisTemplate = (name: string, dateOfBirth: string) => {
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Personalized Numerology Analysis</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #121212; color: #E5E7EB; font-family: Arial, sans-serif; line-height: 1.6;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(to right, #e31937, #cc1830, #b31729); padding: 40px 20px; border-radius: 8px; text-align: center; margin-bottom: 30px;">
        <h1 style="color: white; margin: 0; font-size: 28px; line-height: 1.3;">Your Personalized Numerology Analysis</h1>
      </div>
      <div style="background-color: rgba(26, 31, 44, 0.95); border: 1px solid rgba(134, 115, 111, 0.2); border-radius: 8px; padding: 30px; margin-bottom: 30px;">
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          Dear ${name},
        </p>
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          Based on your birth date (${dateOfBirth}), here is your personalized numerology analysis.
        </p>
        <div style="margin: 30px 0;">
          <img src="https://numerology33.com/lovable-uploads/4c2bf36a-524f-4700-86f4-fcb7d217d5fd.png" alt="Numerology Chart" style="width: 100%; border-radius: 8px;">
        </div>
        <div style="background: linear-gradient(to right, rgba(227, 25, 55, 0.1), rgba(204, 24, 48, 0.1)); backdrop-filter: blur(8px); border: 1px solid rgba(227, 25, 55, 0.2); border-radius: 8px; padding: 32px; margin: 32px 0; text-align: center;">
          <p style="font-size: 20px; font-weight: 600; margin-bottom: 16px; color: #E5E7EB;">Want to discover your full numerological blueprint?</p>
          <p style="font-size: 16px; margin-bottom: 24px; color: #E5E7EB;">Get your complete analysis and unlock your potential.</p>
          <a href="https://numerology33.com/collect-info" style="background: linear-gradient(to right, #e31937, #cc1830); color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold;">
            Get Your Full Reading
          </a>
        </div>
      </div>
      <div style="text-align: center; margin-top: 2rem; padding-top: 2rem; border-top: 1px solid rgba(134, 115, 111, 0.2); color: #9CA3AF;">
        <p>© 2024 Numerology Insights. All rights reserved.</p>
      </div>
    </div>
  </body>
</html>`;
};