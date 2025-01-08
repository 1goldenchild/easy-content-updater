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
    <div className="w-full bg-[#1A1F2C] p-4 md:p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none">
          Special One-Time{" "}
          <span className="text-purple-500">
            Offer!
          </span>
        </h1>
        <p className="text-white font-semibold text-lg mt-4">
          Enhance Your Numerology Reading with Advanced Money Manifestation Secrets
        </p>
      </div>

      <div className="bg-[#2A2F3C] p-4 md:p-6 rounded-lg shadow-xl">
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
            <p className="text-white font-bold mb-4">{description}</p>
            <ul className="space-y-2 mb-6">
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
              <p className="text-gray-400 text-sm mb-4">
                One-click payment - Instant digital delivery
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={onAccept}
                  disabled={isProcessing}
                  className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700"
                >
                  {isProcessing ? "Processing..." : "Yes! I Want This Offer!"}
                </Button>
                <Button 
                  onClick={onDecline}
                  variant="outline"
                  disabled={isProcessing}
                  className="w-full sm:w-auto"
                >
                  No Thanks
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpsellProduct