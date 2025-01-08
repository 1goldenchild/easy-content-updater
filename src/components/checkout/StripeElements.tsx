import { useState } from "react"
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"

interface StripeElementsProps {
  onSubmit: (e: React.FormEvent, paymentMethod: string) => Promise<void>
  isProcessing: boolean
}

const StripeElements = ({ onSubmit, isProcessing }: StripeElementsProps) => {
  const stripe = useStripe()
  const elements = useElements()
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Starting payment submission...')

    if (!stripe || !elements) {
      console.error('Stripe.js has not loaded yet')
      toast.error("Payment system not ready. Please try again.")
      return
    }

    const cardElement = elements.getElement(CardElement)
    if (!cardElement) {
      console.error('Card element not found')
      toast.error("Payment form not ready. Please try again.")
      return
    }

    setIsSubmitting(true)

    try {
      console.log('Creating payment method...')
      const { error: createError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      })

      if (createError) {
        console.error('Error creating payment method:', createError)
        toast.error(createError.message || "Failed to process card. Please try again.")
        return
      }

      if (!paymentMethod) {
        console.error('No payment method created')
        toast.error("Failed to process card. Please try again.")
        return
      }

      console.log('Payment method created successfully:', paymentMethod.id)
      
      try {
        console.log('Submitting payment...')
        await onSubmit(e, paymentMethod.id)
        console.log('Payment processed successfully')
        
        // Clear the card input before navigation
        cardElement.clear()
        
        // Small delay before navigation to ensure cleanup
        setTimeout(() => {
          console.log('Navigating to first upsell...')
          navigate('/upsell')
        }, 100)
        
      } catch (submitError) {
        console.error('Error during payment submission:', submitError)
        toast.error("Payment failed. Please try again.")
      }
      
    } catch (error) {
      console.error('Unexpected error during payment:', error)
      toast.error("An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="rounded-md border p-4">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
        </div>
        <Button
          type="submit"
          disabled={isProcessing || !stripe || isSubmitting}
          className="w-full bg-purple-500 hover:bg-purple-600 text-white py-6"
        >
          {isProcessing || isSubmitting ? 'Processing...' : 'Submit Payment'}
        </Button>
      </div>
    </form>
  )
}

export default StripeElements