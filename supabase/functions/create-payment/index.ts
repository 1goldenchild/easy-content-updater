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
    const { priceId, email, name, amount, customerId } = await req.json()
    console.log('Payment request received:', { priceId, email, amount, customerId })

    if (!priceId) {
      throw new Error('Price ID is required')
    }

    const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
      apiVersion: '2023-10-16',
    })

    let customer
    if (customerId) {
      console.log('Using existing customer:', customerId)
      customer = { id: customerId }
    } else {
      // First, check if customer exists
      console.log('Checking for existing customer with email:', email)
      const existingCustomers = await stripe.customers.list({
        email: email,
        limit: 1
      })

      if (existingCustomers.data.length > 0) {
        customer = existingCustomers.data[0]
        console.log('Found existing customer:', customer.id)
      } else {
        // Create new customer
        customer = await stripe.customers.create({
          email: email,
          name: name
        })
        console.log('Created new customer:', customer.id)
      }
    }

    // Create checkout session with detailed logging
    console.log('Creating checkout session with price ID:', priceId)
    const session = await stripe.checkout.sessions.create({
      customer: customer.id,
      line_items: [{
        price: priceId,
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/upsell/1`,
      cancel_url: `${req.headers.get('origin')}/checkout`,
      metadata: {
        customerEmail: email,
        productType: 'numerology_analysis'
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
        error: error.message,
        details: error.stack 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400 
      }
    )
  }
})