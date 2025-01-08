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
    const { customerId, priceId, customerEmail, amount, mode = 'payment' } = await req.json()
    console.log('Payment request received:', { customerId, priceId, customerEmail, amount, mode })

    const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
      apiVersion: '2023-10-16',
    })

    // For 1-click upsells, we'll use the stored customer
    let stripeCustomerId = customerId

    if (!stripeCustomerId && customerEmail) {
      console.log('Looking up customer with email:', customerEmail)
      const customers = await stripe.customers.list({
        email: customerEmail,
        limit: 1
      })

      if (customers.data.length > 0) {
        stripeCustomerId = customers.data[0].id
        console.log('Found existing customer:', stripeCustomerId)
      } else {
        const customer = await stripe.customers.create({
          email: customerEmail
        })
        stripeCustomerId = customer.id
        console.log('Created new customer:', stripeCustomerId)
      }
    }

    // Create checkout session
    console.log('Creating checkout session with price ID:', priceId)
    const session = await stripe.checkout.sessions.create({
      customer: stripeCustomerId,
      payment_method_types: ['card'],
      mode,
      line_items: [{
        price: priceId,
        quantity: 1,
      }],
      success_url: `${req.headers.get('origin')}/upsell`,
      cancel_url: `${req.headers.get('origin')}/checkout`,
      payment_intent_data: {
        setup_future_usage: 'off_session', // This enables future 1-click payments
      },
      metadata: {
        customerEmail
      }
    })

    console.log('Checkout session created successfully:', session.id)
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        url: session.url,
        sessionId: session.id 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )
  } catch (error) {
    console.error('Payment processing error:', error)
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400 
      }
    )
  }
})