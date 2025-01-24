import { serve } from "https://deno.fresh.run/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface RequestBody {
  email: string;
  name: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const KLAVIYO_API_KEY = Deno.env.get('KLAVIYO_PRIVATE_KEY');
    if (!KLAVIYO_API_KEY) {
      throw new Error('Klaviyo API key not found');
    }

    const { email, name } = await req.json() as RequestBody;
    console.log('Received request to add to Klaviyo:', { email, name });

    const response = await fetch('https://a.klaviyo.com/api/v2/list/TGJ8x8/members', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Klaviyo-API-Key ${KLAVIYO_API_KEY}`,
      },
      body: JSON.stringify({
        profiles: [{
          email: email,
          properties: {
            name: name,
            $source: 'Numerology Form'
          }
        }]
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Klaviyo API error:', errorData);
      throw new Error(`Klaviyo API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('Successfully added to Klaviyo:', data);

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});