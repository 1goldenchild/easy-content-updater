import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

interface StripeElementsProps {
  onSubmit: (e: React.FormEvent, paymentMethod: string) => Promise<void>
  isProcessing: boolean
}

const StripeElements = ({ onSubmit, isProcessing }: StripeElementsProps) => {
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Starting payment submission...')
    
    if (!stripe || !elements) {
      console.error('Stripe not initialized:', { stripe, elements })
      toast.error("Stripe has not been properly initialized")
      return
    }

    const cardElement = elements.getElement(CardElement)
    if (!cardElement) {
      console.error('Card element not found')
      toast.error("Card element not found")
      return
    }

    try {
      console.log('Creating payment method...')
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      })

      if (error) {
        console.error('Error creating payment method:', error)
        toast.error(error.message || "Payment failed. Please try again.")
        return
      }

      if (paymentMethod) {
        console.log('Payment method created successfully:', paymentMethod.id)
        await onSubmit(e, paymentMethod.id)
      }
    } catch (error) {
      console.error('Unexpected error during payment:', error)
      toast.error("An unexpected error occurred. Please try again.")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-lg font-semibold mb-4 text-gray-200">PAYMENT INFORMATION</h2>
      <div className="space-y-4">
        <div className="bg-[#2A2F3C] p-4 rounded-lg border border-gray-700">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#ffffff',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
              },
              hidePostalCode: true,
            }}
          />
        </div>
        <Button
          type="submit"
          disabled={isProcessing}
          className="w-full bg-purple-500 hover:bg-purple-600 text-white py-6"
        >
          {isProcessing ? 'Processing...' : 'Submit Payment'}
        </Button>
      </div>
    </form>
  )
}

export default StripeElements