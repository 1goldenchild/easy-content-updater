import { UpsellContainer } from "@/components/upsell/styles/UpsellContainer"
import { UpsellHeader } from "@/components/upsell/UpsellHeader"
import { ProductSection } from "@/components/upsell/ProductSection"
import { ProductImage } from "@/components/upsell/ProductImage"
import { ProductDetails } from "@/components/upsell/ProductDetails"
import { ReactNode } from "react"

interface Feature {
  text: string | ReactNode
}

const features = [
  {
    text: "The Power of Every Number & Number Compatibility: Understand the profound significance of each number, Learn how to find compatibility and success by understanding the compatibility of numbers in relationships and business partnerships."
  },
  {
    text: "Master Numbers 11, 22, and 33: Dive into the hidden meanings of the Master Numbers, and learn how they hold extraordinary potential for personal and financial growth."
  },
  {
    text: "Ancient Secrets of Numerology: Tap into powerful ancient techniques that have been used for centuries to create wealth, success, and spiritual harmony."
  },
  {
    text: (
      <div className="relative rounded-xl bg-black/90 p-4 text-center overflow-hidden border border-amber-500/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(251,191,36,0.1),rgba(0,0,0,0))]"></div>
        <h3 className="relative flex items-center justify-center gap-2 text-xl font-bold bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent mb-3">
          <span className="plus-circle w-5 h-5 inline-flex items-center justify-center text-amber-500">+</span> Mystery Bonus
        </h3>
        <p className="relative text-sm text-amber-300/90 font-medium">
          Unlock exclusive insights reserved for advanced seekers
        </p>
      </div>
    )
  }
]

const Upsell = () => {
  console.log('Rendering upsell page with updated features list')
  
  return (
    <UpsellContainer>
      <UpsellHeader />
      <ProductSection>
        <ProductImage 
          src="https://statics.myclickfunnels.com/workspace/eodNKN/image/3343726/file/fa6d35c21fe41164af7da6ca60ba6b7c.jpg"
          alt="Get Rich Using Numerology eBook"
        />
        <ProductDetails
          title="The Golden Numerology Guide (2023 Edition)"
          description="Learn all the secret tactics the numerology community won't tell you!"
          features={features}
          originalPrice={29.38}
          discountedPrice={19.10}
        />
      </ProductSection>
    </UpsellContainer>
  )
}

export default Upsell