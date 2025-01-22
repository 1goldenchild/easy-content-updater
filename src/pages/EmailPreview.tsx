import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getAnalysisTemplate } from "../../supabase/functions/send-styled-email/templates/analysis";

const EmailPreview = () => {
  const previewData = [
    {
      title: "Rolex Email",
      template: getAnalysisTemplate("John Doe", "1990-01-01"),
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