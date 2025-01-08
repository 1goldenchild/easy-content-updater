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
    const { paymentMethod, amount, email, name } = await req.json()
    console.log('Creating payment with:', { amount, email, name })
    
    const stripeKey = Deno.env.get('STRIPE_SECRET_KEY')
    if (!stripeKey) {
      throw new Error('Stripe secret key not found')
    }

    // Initialize Stripe with the secret key
    const stripe = new Stripe(stripeKey, {
      apiVersion: '2023-10-16',
    })

    // Get or create customer
    console.log('Looking up customer...')
    const customers = await stripe.customers.list({ email: email, limit: 1 })
    let customer = customers.data[0]
    
    if (!customer) {
      console.log('Creating new customer...')
      customer = await stripe.customers.create({
        email: email,
        name: name,
        payment_method: paymentMethod,
      })
    }

    // Create the payment intent
    console.log('Creating payment intent...')
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency: 'usd',
      customer: customer.id,
      payment_method: paymentMethod,
      off_session: false,
      confirm: true,
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: 'never'
      }
    })

    // Create the order
    console.log('Creating order...')
    const order = await stripe.orders.create({
      currency: 'usd',
      customer: customer.id,
      payment: paymentIntent.id,
      line_items: [{
        description: "Money Manifestation Secrets eBook",
        amount: Math.round(amount * 100),
        quantity: 1
      }]
    })

    console.log('Order created:', order.id)

    return new Response(
      JSON.stringify({ 
        success: true,
        paymentIntent: paymentIntent.id,
        orderId: order.id
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
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
        status: 400,
      }
    )
  }
})