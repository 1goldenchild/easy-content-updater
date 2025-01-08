import { Button } from "@/components/ui/button"

interface UpsellProductProps {
  name: string
  description: string
  price: number
  features: string[]
  image: string
  isProcessing: boolean
  onAccept: () => void
  onDecline: () => void
}

const UpsellProduct = ({
  name,
  description,
  price,
  features,
  image,
  isProcessing,
  onAccept,
  onDecline
}: UpsellProductProps) => {
  console.log('UpsellProduct rendering with:', { name, image, price })
  
  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">
          <span className="text-pink-500">Special One-Time Offer!</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Enhance Your Numerology Reading with Advanced Money Manifestation Secrets
        </p>
      </div>

      <div className="bg-[#1E2432] rounded-lg p-8">
        <div className="flex items-start gap-8">
          <div className="w-1/4">
            <img 
              src={image} 
              alt="Advanced Money Manifestation Guide"
              className="w-full rounded"
              onError={(e) => {
                console.error('Image failed to load:', image)
                e.currentTarget.src = '/placeholder.svg'
              }}
            />
          </div>
          
          <div className="w-3/4">
            <div className="inline-block bg-purple-600 text-white px-4 py-1 rounded-full text-sm mb-4">
              Special Offer
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-3">
              Advanced Money Manifestation Guide
            </h2>
            
            <p className="text-gray-400 mb-6">
              Unlock the secrets of financial abundance through ancient numerology practices and modern manifestation techniques.
            </p>
            
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-400">
                  <span className="text-purple-400 mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mb-6">
              <div className="text-4xl font-bold text-purple-400 mb-2">
                ${price.toFixed(2)}
              </div>
              <p className="text-gray-500">
                One-time payment - Instant digital delivery
              </p>
            </div>

            <div className="space-y-4">
              <Button
                onClick={onAccept}
                disabled={isProcessing}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-lg py-6 font-semibold"
              >
                {isProcessing ? "Processing..." : `Yes! Add This To My Order For $${price.toFixed(2)}`}
              </Button>
              
              <Button
                onClick={onDecline}
                variant="ghost"
                disabled={isProcessing}
                className="w-full text-gray-400 hover:text-white hover:bg-transparent"
              >
                No thanks, I'll pass
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpsellProduct