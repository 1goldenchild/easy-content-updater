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
    console.log('Received request to create Klaviyo profile:', { email, name });

    const requestBody = {
      data: {
        type: 'profile',
        attributes: {
          email: email,
          first_name: name,
          properties: {
            source: 'Numerology Form',
            created_at: new Date().toISOString()
          }
        }
      }
    };

    console.log('Sending request to Klaviyo with body:', JSON.stringify(requestBody));

    // Create/update profile in Klaviyo
    const response = await fetch('https://a.klaviyo.com/api/profiles/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Klaviyo-API-Key ${KLAVIYO_API_KEY}`,
        'revision': '2023-12-15'
      },
      body: JSON.stringify(requestBody)
    });

    const responseText = await response.text();
    console.log('Raw Klaviyo API response:', responseText);

    let responseData;
    try {
      responseData = JSON.parse(responseText);
    } catch (e) {
      console.error('Failed to parse Klaviyo response as JSON:', e);
      responseData = { error: 'Invalid JSON response' };
    }

    console.log('Klaviyo API response status:', response.status);
    console.log('Klaviyo API response headers:', Object.fromEntries(response.headers.entries()));
    console.log('Klaviyo API parsed response:', responseData);

    if (!response.ok) {
      console.error('Klaviyo API error:', responseData);
      throw new Error(`Klaviyo API error: ${response.status} - ${JSON.stringify(responseData)}`);
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Successfully created Klaviyo profile', data: responseData }), 
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      cause: error.cause
    });
    
    return new Response(
      JSON.stringify({ 
        error: error.message,
        details: error.stack,
        timestamp: new Date().toISOString()
      }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});