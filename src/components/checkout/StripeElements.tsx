import { CardElement } from "@stripe/react-stripe-js"

const StripeElements = () => {
  return (
    <div>
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
                invalid: {
                  color: '#fa755a',
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default StripeElements