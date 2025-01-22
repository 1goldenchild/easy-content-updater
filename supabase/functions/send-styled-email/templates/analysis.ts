export const getAnalysisTemplate = (name: string, dateOfBirth: string) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Your Numerology Analysis</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #8B5CF6;">Hello ${name}!</h1>
          <p>Thank you for starting your numerology journey with us. We're excited to share your personalized analysis based on your date of birth: ${dateOfBirth}.</p>
          <p>Your complete numerology reading is waiting for you.</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://numerology33.com/numerology-reading" 
               style="background: linear-gradient(to right, #8B5CF6, #D946EF);
                      color: white;
                      padding: 12px 24px;
                      text-decoration: none;
                      border-radius: 5px;
                      display: inline-block;">
              Find Out More About Your Numerology
            </a>
          </div>
          <p style="font-size: 12px; color: #666; margin-top: 40px;">
            You're receiving this email because you signed up for a numerology reading.
          </p>
        </div>
      </body>
    </html>
  `;
};