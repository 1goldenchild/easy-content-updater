import { welcomeTemplate } from "../../supabase/functions/send-styled-email/templates/welcome";
import { analysisTemplate } from "../../supabase/functions/send-styled-email/templates/analysis";
import { previewTemplate } from "../../supabase/functions/send-styled-email/templates/preview";

const EmailPreview = () => {
  const sampleUserData = {
    name: "John Doe",
    dateOfBirth: "1990-01-01"
  };

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Welcome Email Template</h2>
        <div className="border p-4 rounded-lg" 
          dangerouslySetInnerHTML={{ __html: welcomeTemplate(sampleUserData) }} 
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Analysis Email Template</h2>
        <div className="border p-4 rounded-lg" 
          dangerouslySetInnerHTML={{ __html: analysisTemplate(sampleUserData) }} 
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Preview Email Template</h2>
        <div className="border p-4 rounded-lg" 
          dangerouslySetInnerHTML={{ __html: previewTemplate(sampleUserData) }} 
        />
      </div>
    </div>
  );
};

export default EmailPreview;