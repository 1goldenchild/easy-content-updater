interface ProductImageProps {
  src: string
  alt: string
}

export const ProductImage = ({ src, alt }: ProductImageProps) => (
  <div className="relative w-full md:w-1/3">
    <img 
      src={src}
      alt={alt}
      className="w-full rounded-xl shadow-lg"
    />
    <div className="absolute -top-2 -right-2 bg-gradient-to-br from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex flex-col items-center leading-tight">
      Special Offer
      <span className="text-xs font-medium opacity-90">35% OFF</span>
    </div>
  </div>
)