import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

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
      console.error('Klaviyo API key not found');
      throw new Error('Klaviyo API key not found');
    }

    const { email, name } = await req.json() as RequestBody;
    console.log('Received request to add to Klaviyo:', { email, name });

    // Add member directly to list using the correct endpoint
    const response = await fetch('https://a.klaviyo.com/api/v2/list/TGJ8x8/members', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Klaviyo-API-Key ${KLAVIYO_API_KEY}`,
      },
      body: JSON.stringify({
        profiles: [{
          email: email,
          first_name: name,
          source: 'Numerology Form'
        }]
      })
    });

    const responseData = await response.json();
    console.log('Klaviyo API response status:', response.status);
    console.log('Klaviyo API response:', responseData);

    if (!response.ok) {
      console.error('Klaviyo API error:', responseData);
      throw new Error(`Klaviyo API error: ${response.status}`);
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Successfully added to Klaviyo' }), 
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

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