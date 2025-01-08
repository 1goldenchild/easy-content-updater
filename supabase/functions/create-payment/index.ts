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
    const { priceId, customerId, customerEmail, amount, mode = 'payment', paymentMethod, name } = await req.json()
    console.log('Creating payment with:', { priceId, customerId, customerEmail, amount, mode, paymentMethod, name })
    
    if (!customerEmail && !customerId) {
      throw new Error('Either customerId or customerEmail is required')
    }

    const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
      apiVersion: '2023-10-16',
    })

    // Create or get customer
    let customer
    if (customerId) {
      customer = await stripe.customers.retrieve(customerId)
    } else if (customerEmail) {
      const customers = await stripe.customers.list({ email: customerEmail, limit: 1 })
      customer = customers.data[0] || await stripe.customers.create({ 
        email: customerEmail,
        name: name
      })
    }

    if (!customer) {
      throw new Error('Failed to create or retrieve customer')
    }

    // If payment method is provided, create a direct charge
    if (paymentMethod) {
      console.log('Creating direct charge with payment method:', paymentMethod)
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100),
        currency: 'usd',
        customer: customer.id,
        payment_method: paymentMethod,
        confirm: true,
        automatic_payment_methods: {
          enabled: true,
          allow_redirects: 'never'
        }
      })

      console.log('Payment intent created:', paymentIntent.id)
      return new Response(
        JSON.stringify({ success: true, paymentIntentId: paymentIntent.id }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Otherwise create a checkout session
    console.log('Creating checkout session...')
    const session = await stripe.checkout.sessions.create({
      customer: customer.id,
      line_items: [{
        price: priceId,
        quantity: 1,
      }],
      mode: mode,
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
