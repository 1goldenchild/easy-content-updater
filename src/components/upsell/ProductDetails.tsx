interface Feature {
  text: string
}

interface ProductDetailsProps {
  title: string
  description: string
  features: Feature[]
  originalPrice: number
  discountedPrice: number
}

export const ProductDetails = ({ 
  title, 
  description, 
  features, 
  originalPrice, 
  discountedPrice 
}: ProductDetailsProps) => (
  <div className="w-full md:w-2/3 max-w-[800px] mx-auto px-1 md:px-4">
    <h2 className="text-2xl font-semibold mb-4 text-white">{title}</h2>
    <p className="text-white font-bold mb-4 max-w-[700px]">{description}</p>
    
    <ul className="space-y-3 mb-6 max-w-[700px]">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start text-gray-300 leading-relaxed">
          <span className="text-purple-400 mr-2 flex-shrink-0">✓</span>
          {feature.text}
        </li>
      ))}
    </ul>

    <div className="bg-white/3 p-6 rounded-xl border border-purple-500/10 inline-block relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-purple-500/5 -z-10" />
      <div className="text-xl text-red-500 line-through opacity-90 mb-2">${originalPrice.toFixed(2)}</div>
      <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-2">
        ${discountedPrice.toFixed(2)}
      </div>
      <p className="text-gray-400 text-sm">One-click payment - Instant digital delivery</p>
    </div>
  </div>
)