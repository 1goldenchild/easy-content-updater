import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { Button } from "@/components/ui/button"

interface StripeElementsProps {
  onSubmit: (e: React.FormEvent, paymentMethod: string) => Promise<void>
  isProcessing: boolean
}

const StripeElements = ({ onSubmit, isProcessing }: StripeElementsProps) => {
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!stripe || !elements) return

    const cardElement = elements.getElement(CardElement)
    if (!cardElement) return

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    })

    if (error) {
      console.error('Error creating payment method:', error)
      return
    }

    await onSubmit(e, paymentMethod.id)
  }

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4 text-gray-200">PAYMENT INFORMATION</h2>
      <div className="space-y-4">
        <div className="stripe-element-container">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#ffffff',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  '::placeholder': {
                    color: 'rgba(255, 255, 255, 0.5)',
                  },
                  padding: '10px 14px',
                },
                invalid: {
                  color: '#fa755a',
                  iconColor: '#fa755a',
                },
              },
              hidePostalCode: true,
            }}
          />
        </div>
        <Button
          type="button"
          onClick={handleSubmit}
          disabled={isProcessing}
          className="w-full bg-purple-500 hover:bg-purple-600 text-white py-6"
        >
          {isProcessing ? 'Processing...' : 'Submit Payment'}
        </Button>
      </div>
    </div>
  )
}

export default StripeElements