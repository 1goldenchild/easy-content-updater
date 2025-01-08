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
    const { amount, email, name, isOneClick, priceId } = await req.json()
    console.log('Creating payment with:', { amount, email, name, isOneClick, priceId })
    
    const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
      apiVersion: '2023-10-16',
    })

    // For one-click upsells, we need to create a customer and payment intent
    if (isOneClick) {
      console.log('Processing one-click payment...')
      
      // Create or retrieve customer
      const customers = await stripe.customers.list({ email: email, limit: 1 })
      let customer = customers.data[0]
      
      if (!customer) {
        console.log('Creating new customer...')
        customer = await stripe.customers.create({
          email: email,
          name: name
        })
      }

      // Get customer's latest payment method
      const paymentMethods = await stripe.paymentMethods.list({
        customer: customer.id,
        type: 'card'
      })

      if (!paymentMethods.data.length) {
        throw new Error('No payment method found for customer')
      }

      const paymentMethod = paymentMethods.data[0]
      console.log('Using payment method:', paymentMethod.id)

      // Create payment intent with customer's payment method
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100),
        currency: 'usd',
        customer: customer.id,
        payment_method: paymentMethod.id,
        off_session: true,
        confirm: true,
        metadata: {
          priceId: priceId
        }
      })

      console.log('Payment intent created:', paymentIntent.id)

      return new Response(
        JSON.stringify({ 
          success: true,
          paymentIntent: paymentIntent.id 
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        }
      )
    }

    // For initial purchase, create a regular payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: 'never'
      },
      metadata: {
        priceId: priceId
      }
    })

    console.log('Regular payment intent created:', paymentIntent.id)

    return new Response(
      JSON.stringify({ 
        success: true,
        paymentIntent: paymentIntent.id 
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