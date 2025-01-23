import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { corsHeaders } from "../_shared/cors.ts";

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
const VERIFIED_FROM_EMAIL = "info@numerology33.com";

interface EmailRequest {
  to: string[];
  templateName: string;
  userData: {
    name?: string;
    dateOfBirth?: string;
  };
}

const getEmailTemplate = (templateName: string, userData: EmailRequest['userData']) => {
  const templates: Record<string, { subject: string, content: string }> = {
    rolex: {
      subject: "The Secret Behind Rolex's Success: A Numerological Analysis",
      content: `// ... keep existing code (Rolex email template)`
    },
    kardashian: {
      subject: "The Kardashian Empire: How They Used Numerology to Power Their Success",
      content: `// ... keep existing code (Kardashian email template)`
    },
    musk: {
      subject: "How Elon Musk Uses Numerology to Get Rich: The Power of 8 and 28",
      content: `// ... keep existing code (Elon Musk email template)`
    },
    gates: {
      subject: "How Bill Gates Uses Numerology to Shape His Success: The Power of 28, 9, and Apple's Legacy",
      content: `// ... keep existing code (Bill Gates email template)`
    },
    jackson: {
      subject: "How Michael Jackson used the Power of Numerology: The Influence of the Number 7 on His Career",
      content: `// ... keep existing code (Michael Jackson email template)`
    },
    jobs: {
      subject: "How Steve Jobs Used Numerology to Shape His Success: The Power of 28, 9, and Apple's Legacy",
      content: `// ... keep existing code (Steve Jobs email template)`
    },
    carrey: {
      subject: "How Jim Carrey Uses Numerology to Shape His Life and Career",
      content: `// ... keep existing code (Jim Carrey email template)`
    },
    china: {
      subject: "How China Uses Numerology to Power Success: The 2008 Beijing Olympics and Beyond",
      content: `// ... keep existing code (China email template)`
    }
  };

  return templates[templateName] || templates.rolex;
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { to, templateName, userData } = await req.json() as EmailRequest;
    console.log('Received request to send email:', { to, templateName, userData });

    const template = getEmailTemplate(templateName, userData);
    console.log('Using template:', templateName);

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: "Numerology 33 <info@numerology33.com>",
        to,
        subject: template.subject,
        html: template.content,
      })
    });

    const data = await res.json();
    console.log('Resend API response:', data);

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: res.ok ? 200 : 400,
    });

  } catch (error) {
    console.error('Error in send-styled-email function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});