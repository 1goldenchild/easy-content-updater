import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { loadStripe } from "@stripe/stripe-js"
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { supabase } from "@/integrations/supabase/client"

const stripePromise = loadStripe('pk_test_51QepBxCibdAmag3r0tq7dMFmpymVQanEUGj3OMBjM3MQM4uwOhxbEdnfMfKTzMY5D6chc8SBsnT8skVnA5368BlM00HZSqQPHx')

const upsellProducts = [
  {
    id: 1,
    name: "The Golden Numerology Guide (2023 Edition)",
    description: "Unlock the secrets of numerology with our comprehensive guide",
    price: 27.00,
    priceId: "price_1QeplSCibdAmag3rpQqzAo7x",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Get Rich Using Numerology eBook (2023 Edition)",
    description: "Learn how to attract wealth using ancient numerology secrets",
    price: 37.00,
    priceId: "price_1QepknCibdAmag3rYOiVW2bl",
    image: "/placeholder.svg"
  }
]

const UpsellContent = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isProcessing, setIsProcessing] = useState(false)
  const stripe = useStripe()
  const elements = useElements()
  
  const currentStep = parseInt(location.pathname.split('/').pop() || '1')
  const currentProduct = upsellProducts[currentStep - 1]

  const handleAccept = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!stripe || !elements) return

    setIsProcessing(true)
    try {
      console.log('Processing upsell payment for:', currentProduct.name)
      
      // Create payment method
      const { error: paymentMethodError, paymentMethod } = await stripe.createPaymentMethod({
        elements,
        params: {
          payment_method_data: {
            billing_details: {}
          }
        }
      })

      if (paymentMethodError) {
        throw paymentMethodError
      }

      const { data, error } = await supabase.functions.invoke('create-payment', {
        body: {
          paymentMethod: paymentMethod.id,
          amount: currentProduct.price,
          priceId: currentProduct.priceId,
        }
      })

      if (error) throw error
      if (!data.success) throw new Error(data.error || "Payment failed")

      toast.success("Thank you for your purchase!")
      
      // Navigate to next upsell or success page
      if (currentStep === 1) {
        navigate('/upsell/2')
      } else {
        navigate('/success')
      }
    } catch (error) {
      console.error('Upsell payment error:', error)
      toast.error(error.message || "Payment failed. Please try again.")
    } finally {
      setIsProcessing(false)
    }
  }

  const handleDecline = () => {
    if (currentStep === 1) {
      navigate('/upsell/2')
    } else {
      navigate('/success')
    }
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <div className="bg-[#1A1F2C] p-8 rounded-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Special One-Time Offer!</h1>
          <p className="text-gray-400">Don't miss out on this exclusive opportunity</p>
        </div>

        <div className="bg-[#2A2F3C] p-6 rounded-lg mb-8">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/3">
              <img 
                src={currentProduct.image} 
                alt={currentProduct.name}
                className="w-full rounded-lg"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-semibold mb-4">{currentProduct.name}</h2>
              <p className="text-gray-300 mb-4">{currentProduct.description}</p>
              <div className="text-2xl font-bold text-purple-400 mb-6">
                ${currentProduct.price.toFixed(2)}
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleAccept} className="space-y-6">
          <div className="bg-[#2A2F3C] p-6 rounded-lg">
            <PaymentElement />
          </div>

          <div className="flex flex-col gap-4">
            <Button 
              type="submit"
              disabled={isProcessing || !stripe}
              className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-6"
            >
              {isProcessing ? "Processing..." : `Yes! Add ${currentProduct.name}`}
            </Button>
            <Button 
              type="button"
              onClick={handleDecline}
              variant="outline"
              className="w-full text-lg py-6"
            >
              No thanks, I'll pass
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

const Upsell = () => {
  return (
    <Elements stripe={stripePromise}>
      <UpsellContent />
    </Elements>
  )
}

export default Upsell