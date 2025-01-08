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
    console.log('Starting payment processing...')
    const { priceId, email, name, amount } = await req.json()
    console.log('Payment request details:', { priceId, email, amount })

    if (!priceId) {
      throw new Error('Price ID is required')
    }

    const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
      apiVersion: '2023-10-16',
    })

    // First, check if customer exists
    console.log('Checking for existing customer with email:', email)
    const existingCustomers = await stripe.customers.list({
      email: email,
      limit: 1
    })

    let customer
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

    // Create checkout session
    console.log('Creating checkout session with price ID:', priceId)
    const session = await stripe.checkout.sessions.create({
      customer: customer.id,
      line_items: [{
        price: priceId,
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/upsell`,
      cancel_url: `${req.headers.get('origin')}/checkout`,
      metadata: {
        customerEmail: email,
        productType: 'numerology_analysis'
      }
    })

    console.log('Checkout session created successfully:', session.id)
    
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