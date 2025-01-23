import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const KLAVIYO_PRIVATE_KEY = Deno.env.get('KLAVIYO_PRIVATE_KEY')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface SubscribeRequest {
  email: string;
  name: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { email, name } = await req.json() as SubscribeRequest
    console.log('Received subscription request for:', { email, name })

    // Add member to Klaviyo list
    const response = await fetch('https://a.klaviyo.com/api/v2/list/VNudKW/members', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Klaviyo-API-Key ${KLAVIYO_PRIVATE_KEY}`,
      },
      body: JSON.stringify({
        profiles: [{
          email: email,
          name: name
        }]
      })
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error('Klaviyo API error:', errorData)
      throw new Error(`Klaviyo API error: ${errorData}`)
    }

    const data = await response.json()
    console.log('Successfully subscribed to Klaviyo:', data)

    return new Response(
      JSON.stringify({ success: true }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )
  } catch (error) {
    console.error('Error in klaviyo-subscribe function:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500
      }
    )
  }
})