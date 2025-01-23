import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getAnalysisTemplate } from "@/supabase/functions/send-styled-email/templates/analysis";

const EmailPreview = () => {
  const previewData = [
    {
      title: "Rolex Email",
      template: `<!DOCTYPE html>
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
          Dear \${name},
        </p>
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          Discover how the world's richest man strategically uses numerology, particularly the numbers 8 and 28, to build his fortune through Tesla, SpaceX, and Twitter.
        </p>
        <div style="margin: 30px 0;">
          <img src="https://numerology33.com/lovable-uploads/4c2bf36a-524f-4700-86f4-fcb7d217d5fd.png" alt="Elon Musk" style="width: 100%; border-radius: 8px;">
        </div>
        <h2 style="color: #cc1830; font-size: 24px; margin: 24px 0;">The Power of Birth Numbers</h2>
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          Born on June 28, 1971, Elon Musk's connection to the number 28 is no coincidence. In numerology, 28 is known as the number of wealth and material abundance. This powerful number combines the cooperative energy of 2 with the material success of 8, creating a potent formula for financial prosperity.
        </p>
        <h2 style="color: #cc1830; font-size: 24px; margin: 24px 0;">Strategic Business Moves</h2>
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          Consider his $44 billion Twitter acquisition - a number that reduces to 8 (4+4), the number of wealth and power. Or look at Tesla's Model S, 3, X, and Y lineup - when converted to numerical values, they sum to 8, reinforcing the energy of abundance.
        </p>
        <h2 style="color: #cc1830; font-size: 24px; margin: 24px 0;">The SpaceX Connection</h2>
        <p style="color: #E5E7EB; font-size: 16px; line-height: 1.8; margin-bottom: 20px;">
          Even SpaceX's Falcon 9 rocket carries numerological significance. The number 9 represents completion and universal influence, while its founding year (2002) reduces to 4, symbolizing stability and foundation.
        </p>
        <div style="background: linear-gradient(to right, rgba(227, 25, 55, 0.1), rgba(204, 24, 48, 0.1)); backdrop-filter: blur(8px); border: 1px solid rgba(227, 25, 55, 0.2); border-radius: 8px; padding: 32px; margin: 32px 0; text-align: center;">
          <p style="font-size: 20px; font-weight: 600; margin-bottom: 16px; color: #E5E7EB;">Want to discover your own numerological blueprint for success?</p>
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
      description: "First email - Sent 8 minutes after signup"
    },
    {
      title: "Kardashian Email",
      template: getAnalysisTemplate("John Doe", "1990-01-01"),
      description: "Second email - Sent 1 day after signup"
    },
    {
      title: "Elon Musk Email",
      template: getAnalysisTemplate("John Doe", "1990-01-01"),
      description: "Third email - Sent 2 days after signup"
    },
    {
      title: "Bill Gates Email",
      template: getAnalysisTemplate("John Doe", "1990-01-01"),
      description: "Fourth email - Sent 3 days after signup"
    },
    {
      title: "Michael Jackson Email",
      template: getAnalysisTemplate("John Doe", "1990-01-01"),
      description: "Fifth email - Sent 4 days after signup"
    },
    {
      title: "Steve Jobs Email",
      template: getAnalysisTemplate("John Doe", "1990-01-01"),
      description: "Sixth email - Sent 5 days after signup"
    },
    {
      title: "China Email",
      template: getAnalysisTemplate("John Doe", "1990-01-01"),
      description: "Seventh email - Sent 6 days after signup"
    },
    {
      title: "Jim Carrey Email",
      template: getAnalysisTemplate("John Doe", "1990-01-01"),
      description: "Eighth email - Sent 7 days after signup"
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Email Sequence Preview</h1>
        <Link to="/">
          <Button variant="outline">Back to Home</Button>
        </Link>
      </div>
      
      <div className="space-y-8">
        {previewData.map((email, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{email.title}</h2>
            <p className="text-gray-500 mb-4">{email.description}</p>
            <div className="bg-white rounded-lg p-4">
              <div 
                dangerouslySetInnerHTML={{ __html: email.template }} 
                className="prose prose-sm max-w-none"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmailPreview;