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
          ">Your Numerology Analysis Is Ready, ${name}!</h1>
          
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
              Based on your birth date (${dateOfBirth}), we've prepared a comprehensive analysis of your numerological profile. Your unique numbers reveal fascinating insights about your life path, potential, and destiny.
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
            ">Your Analysis Includes:</h2>
            <ul style="
              color: #ffffff;
              padding-left: 20px;
              margin: 0;
            ">
              <li style="margin-bottom: 10px">Life Path Number Analysis</li>
              <li style="margin-bottom: 10px">Personal Year Calculation</li>
              <li style="margin-bottom: 10px">Compatibility Insights</li>
              <li style="margin-bottom: 10px">Career Path Guidance</li>
            </ul>
          </div>

          <div style="text-align: center;">
            <a href="https://numerology33.com/analysis" style="
              display: inline-block;
              background: linear-gradient(135deg, #9b87f5 0%, #7E69AB 100%);
              color: #ffffff;
              text-decoration: none;
              padding: 12px 30px;
              border-radius: 6px;
              font-weight: bold;
            ">View Full Analysis</a>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
`;