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
    const { email, name, priceId, amount } = await req.json()
    console.log('Payment request received:', { email, priceId, amount })

    if (!priceId) {
      throw new Error('Price ID is required')
    }

    const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
      apiVersion: '2023-10-16',
    })

    // Check if customer exists or create new one
    console.log('Looking up customer with email:', email)
    const customers = await stripe.customers.list({
      email: email,
      limit: 1
    })

    let customerId
    if (customers.data.length > 0) {
      customerId = customers.data[0].id
      console.log('Found existing customer:', customerId)
    } else {
      const customer = await stripe.customers.create({
        email: email,
        name: name
      })
      customerId = customer.id
      console.log('Created new customer:', customerId)
    }

    // Create checkout session
    console.log('Creating checkout session with price ID:', priceId)
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      line_items: [{
        price: priceId,
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/upsell`,
      cancel_url: `${req.headers.get('origin')}/checkout`,
      metadata: {
        customerEmail: email
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