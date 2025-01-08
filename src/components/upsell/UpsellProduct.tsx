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
    <div className="w-full bg-[#1A1F2C]">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none animate-shine bg-gradient-to-r from-white via-purple-500 to-white bg-[length:200%_auto] bg-clip-text text-transparent">
          Special One-Time{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]">
            Offer!
          </span>
        </h1>
        <p className="text-white font-semibold text-lg">
          Enhance Your Numerology Reading with Advanced Money Manifestation Secrets
        </p>
      </div>

      <div className="bg-[#2A2F3C]">
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
                One-click payment - Instant digital delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpsellProduct