import { useEffect, useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { supabase } from "@/integrations/supabase/client"
import { useNavigate } from "react-router-dom"

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY || "")

const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const [isProcessing, setIsProcessing] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!stripe || !elements) {
      return
    }

    setIsProcessing(true)
    console.log("Processing payment...")

    try {
      // Create payment intent via Edge Function
      const { data: { clientSecret }, error: intentError } = await supabase.functions.invoke('create-payment-intent', {
        body: { amount: 3700 } // $37.00
      })

      if (intentError) throw intentError

      const { error: stripeError } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/checkout/success`,
        },
      })

      if (stripeError) {
        toast.error(stripeError.message)
      }
    } catch (error) {
      console.error("Payment error:", error)
      toast.error("Payment failed. Please try again.")
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />
      <Button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full bg-green-500 hover:bg-green-600"
      >
        {isProcessing ? "Processing..." : "Pay Now"}
      </Button>
    </form>
  )
}

export const StripePaymentForm = () => {
  const [clientSecret, setClientSecret] = useState("")

  useEffect(() => {
    const initializePayment = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('create-payment-intent', {
          body: { amount: 3700 } // $37.00
        })

        if (error) throw error
        setClientSecret(data.clientSecret)
      } catch (error) {
        console.error("Error initializing payment:", error)
        toast.error("Failed to initialize payment. Please try again.")
      }
    }

    initializePayment()
  }, [])

  if (!clientSecret) {
    return <div>Loading payment form...</div>
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm />
    </Elements>
  )
}