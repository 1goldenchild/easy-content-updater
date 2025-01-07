import { getWelcomeTemplate } from "../../supabase/functions/send-styled-email/templates/welcome";
import { getAnalysisTemplate } from "../../supabase/functions/send-styled-email/templates/analysis";

const EmailPreview = () => {
  const welcomeHtml = getWelcomeTemplate("Sarah Johnson");
  const analysisHtml = getAnalysisTemplate("Sarah Johnson", "1990-01-01");

  return (
    <div className="container mx-auto p-4 space-y-8">
      <h1 className="text-2xl font-bold mb-4">Email Template Previews</h1>
      
      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Welcome Email</h2>
          <div 
            className="border rounded-lg p-4 bg-[#1a1f2c]"
            dangerouslySetInnerHTML={{ __html: welcomeHtml }} 
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Analysis Email</h2>
          <div 
            className="border rounded-lg p-4 bg-[#1a1f2c]"
            dangerouslySetInnerHTML={{ __html: analysisHtml }} 
          />
        </div>
      </div>
    </div>
  );
};

export default EmailPreview;