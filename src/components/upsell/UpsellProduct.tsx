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
    <div className="bg-[#1A1F2C] p-8 rounded-lg">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 text-transparent bg-clip-text animate-shine">
          Special One-Time Offer!
        </h1>
        <p className="text-gray-400">
          Enhance Your Numerology Reading with Advanced Money Manifestation Secrets
        </p>
      </div>

      <div className="bg-[#2A2F3C] p-6 rounded-lg mb-8">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/3">
            <div className="relative">
              <img 
                src={image} 
                alt={name}
                className="w-full rounded-lg shadow-lg"
                onError={(e) => {
                  console.error('Image failed to load:', image)
                  e.currentTarget.src = '/placeholder.svg'
                }}
              />
              <div className="absolute -top-2 -right-2 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Special Offer
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-semibold mb-4 text-white">{name}</h2>
            <p className="text-gray-300 mb-4">{description}</p>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <span className="mr-2 text-purple-400">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                ${price.toFixed(2)}
              </div>
              <p className="text-gray-400 text-sm">
                One-time payment - Instant digital delivery
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <Button 
          onClick={onAccept}
          disabled={isProcessing}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg py-6"
        >
          {isProcessing ? "Processing..." : `Yes! Add This To My Order For $${price.toFixed(2)}`}
        </Button>
        
        <Button 
          onClick={onDecline}
          variant="outline"
          className="w-full text-lg py-6"
        >
          No thanks, I'll pass
        </Button>
      </div>
    </div>
  )
}

export default UpsellProduct