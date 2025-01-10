export const getAnalysisTemplate = (name: string, dateOfBirth: string) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Numerology Analysis</title>
  </head>
  <body style="
    margin: 0;
    padding: 0;
    background-color: #1a1f2c;
    color: #ffffff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.6;
  ">
    <div style="
      max-width: 600px;
      margin: 0 auto;
      padding: 40px 20px;
    ">
      <div style="text-align: center; margin-bottom: 30px;">
        <img src="https://preview--easy-content-updater.lovable.app/lovable-uploads/984813d9-700a-4057-a369-08ae4035507b.png" 
             alt="Numerology Logo" 
             style="width: 120px; height: auto;"
        />
      </div>

      <div style="
        background: linear-gradient(135deg, #9b87f5 0%, #7E69AB 100%);
        padding: 2px;
        border-radius: 12px;
      ">
        <div style="
          background-color: #1a1f2c;
          padding: 30px;
          border-radius: 10px;
        ">
          <h1 style="
            color: #9b87f5;
            margin: 0 0 20px 0;
            font-size: 24px;
            text-align: center;
          ">Your Numerology Analysis Is Ready, ${name}! 🌟</h1>
          
          <div style="
            background: linear-gradient(135deg, rgba(155, 135, 245, 0.1) 0%, rgba(126, 105, 171, 0.1) 100%);
            border: 1px solid rgba(155, 135, 245, 0.2);
            padding: 20px;
            border-radius: 8px;
            margin: 30px 0;
          ">
            <p style="
              color: #ffffff;
              line-height: 1.6;
              margin: 0;
            ">
              Based on your birth date (${dateOfBirth}), we've prepared a comprehensive analysis that reveals the hidden patterns and potential in your life journey. Your unique numerical blueprint holds fascinating insights about your path, purpose, and destiny.
            </p>
          </div>

          <div style="
            margin: 30px 0;
            padding: 20px;
            border: 1px solid rgba(155, 135, 245, 0.3);
            border-radius: 8px;
          ">
            <h2 style="
              color: #9b87f5;
              margin: 0 0 15px 0;
              font-size: 18px;
            ">Your Personal Analysis Includes:</h2>
            <ul style="
              color: #ffffff;
              padding-left: 20px;
              margin: 0;
            ">
              <li style="margin-bottom: 10px">✨ Your Life Path Number and Its Significance</li>
              <li style="margin-bottom: 10px">🌙 Personal Year Number for ${new Date().getFullYear()}</li>
              <li style="margin-bottom: 10px">❤️ Relationship Compatibility Insights</li>
              <li style="margin-bottom: 10px">💫 Career Path Guidance</li>
              <li style="margin-bottom: 10px">🌟 Personal Strengths & Challenges</li>
            </ul>
          </div>

          <div style="text-align: center;">
            <a href="https://preview--easy-content-updater.lovable.app/analysis" 
               style="
                 display: inline-block;
                 background: linear-gradient(135deg, #9b87f5 0%, #7E69AB 100%);
                 color: #ffffff;
                 text-decoration: none;
                 padding: 12px 30px;
                 border-radius: 6px;
                 font-weight: bold;
               "
            >View Your Full Analysis</a>
          </div>
        </div>
      </div>

      <div style="
        text-align: center;
        margin-top: 30px;
        color: #666;
        font-size: 12px;
      ">
        <p>© ${new Date().getFullYear()} Numerology Insights. All rights reserved.</p>
      </div>
    </div>
  </body>
</html>
`;