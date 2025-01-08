import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import Stripe from 'https://esm.sh/stripe@14.21.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { priceId, customerId, customerEmail, amount } = await req.json()
    console.log('Creating payment with:', { priceId, customerId, amount })
    
    const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
      apiVersion: '2023-10-16',
    })

    // Create or get customer
    let customer
    if (customerId) {
      customer = await stripe.customers.retrieve(customerId)
    } else if (customerEmail) {
      const customers = await stripe.customers.list({ email: customerEmail, limit: 1 })
      customer = customers.data[0] || await stripe.customers.create({ email: customerEmail })
    } else {
      throw new Error('Either customerId or customerEmail is required')
    }

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      customer: customer.id,
      payment_method_types: ['card'],
      line_items: [{
        price: priceId,
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/upsell2`,
      cancel_url: `${req.headers.get('origin')}/upsell2`,
    })

    return new Response(
      JSON.stringify({ success: true, url: session.url }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )
  } catch (error) {
    console.error('Payment processing error:', error)
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400 
      }
    )
  }
})