export const getWelcomeTemplate = (name: string) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Your Numerology Journey</title>
  </head>
  <body style="
    margin: 0;
    padding: 0;
    background-color: #1a1f2c;
    color: #ffffff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  ">
    <div style="
      max-width: 600px;
      margin: 0 auto;
      padding: 40px 20px;
    ">
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
            background: linear-gradient(135deg, #9b87f5 0%, #7E69AB 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin: 0 0 20px 0;
            font-size: 24px;
            text-align: center;
          ">Welcome to Your Numerology Journey, ${name}!</h1>
          
          <p style="
            color: #ffffff;
            line-height: 1.6;
            margin-bottom: 20px;
          ">
            You've taken the first step towards understanding the hidden patterns in your life. Your numerological analysis is being prepared with care and precision.
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
            ">What's Next?</h2>
            <ul style="
              color: #ffffff;
              padding-left: 20px;
              margin: 0;
            ">
              <li style="margin-bottom: 10px">Your personal numerology reading is being calculated</li>
              <li style="margin-bottom: 10px">You'll receive insights about your life path number</li>
              <li style="margin-bottom: 10px">Discover your compatibility with different aspects of life</li>
            </ul>
          </div>

          <p style="
            color: #9b87f5;
            text-align: center;
            font-style: italic;
            margin: 30px 0;
          ">
            "Numbers are the universal language offered by the deity to humans as confirmation of the truth."
          </p>

          <div style="text-align: center;">
            <a href="https://numerology33.com/portal" style="
              display: inline-block;
              background: linear-gradient(135deg, #9b87f5 0%, #7E69AB 100%);
              color: #ffffff;
              text-decoration: none;
              padding: 12px 30px;
              border-radius: 6px;
              font-weight: bold;
            ">View Your Dashboard</a>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
`;