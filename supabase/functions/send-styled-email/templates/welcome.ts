export const getWelcomeTemplate = (name: string) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Numerology Insights</title>
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
          ">Welcome to Your Numerology Journey, ${name}! ✨</h1>
          
          <p style="
            color: #ffffff;
            line-height: 1.6;
            margin-bottom: 20px;
          ">
            You've taken the first step towards understanding the hidden patterns in your life. Your personalized numerological analysis is being prepared with care and precision.
          </p>

          <div style="
            background: linear-gradient(135deg, rgba(155, 135, 245, 0.1) 0%, rgba(126, 105, 171, 0.1) 100%);
            border: 1px solid rgba(155, 135, 245, 0.2);
            padding: 20px;
            border-radius: 8px;
            margin: 30px 0;
          ">
            <h2 style="
              color: #9b87f5;
              margin: 0 0 15px 0;
              font-size: 18px;
            ">Your Journey Begins Here</h2>
            <ul style="
              color: #ffffff;
              padding-left: 20px;
              margin: 0;
            ">
              <li style="margin-bottom: 10px">Discover your unique Life Path Number</li>
              <li style="margin-bottom: 10px">Understand your personal year cycles</li>
              <li style="margin-bottom: 10px">Explore relationship compatibility insights</li>
              <li style="margin-bottom: 10px">Unlock career guidance based on your numbers</li>
            </ul>
          </div>

          <p style="
            color: #9b87f5;
            text-align: center;
            font-style: italic;
            margin: 30px 0;
          ">
            "Numbers hold the key to understanding your unique life journey."
          </p>

          <div style="text-align: center;">
            <a href="https://preview--easy-content-updater.lovable.app/portal" 
               style="
                 display: inline-block;
                 background: linear-gradient(135deg, #9b87f5 0%, #7E69AB 100%);
                 color: #ffffff;
                 text-decoration: none;
                 padding: 12px 30px;
                 border-radius: 6px;
                 font-weight: bold;
               "
            >Access Your Portal</a>
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