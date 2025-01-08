import { UpsellContainer } from "@/components/upsell/styles/UpsellContainer"
import { UpsellHeader } from "@/components/upsell/UpsellHeader"
import { ProductSection } from "@/components/upsell/ProductSection"
import { ProductImage } from "@/components/upsell/ProductImage"
import { ProductDetails } from "@/components/upsell/ProductDetails"

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
    text: "Mystery Bonus: Unlock a surprise bonus that will take your numerology knowledge to the next level."
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