import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import Stripe from 'https://esm.sh/stripe@14.21.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { priceId, customerEmail, amount, mode = 'payment' } = await req.json()
    
    if (!customerEmail) {
      throw new Error('Customer email is required')
    }

    console.log('Creating payment with:', { priceId, customerEmail, amount, mode })
    
    const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
      apiVersion: '2023-10-16',
    })

    // Get or create customer
    const customers = await stripe.customers.list({ email: customerEmail, limit: 1 })
    const customer = customers.data[0] || await stripe.customers.create({ email: customerEmail })
    
    console.log('Customer found/created:', customer.id)

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      customer: customer.id,
      line_items: [{
        price: priceId,
        quantity: 1,
      }],
      mode,
      success_url: `${req.headers.get('origin')}/upsell2`,
      cancel_url: `${req.headers.get('origin')}/upsell2`,
    })

    console.log('Checkout session created:', session.id)
    return new Response(
      JSON.stringify({ success: true, url: session.url }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Payment processing error:', error)
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
    )
  }
})