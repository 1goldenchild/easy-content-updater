import { UpsellContainer } from "@/components/upsell/styles/UpsellContainer"
import { UpsellHeader } from "@/components/upsell/UpsellHeader"
import { ProductSection } from "@/components/upsell/ProductSection"
import { ProductImage } from "@/components/upsell/ProductImage"
import { ProductDetails } from "@/components/upsell/ProductDetails"

const features = [
  {
    text: "Advanced Financial Numerology: Unlock powerful strategies for wealth creation through numerology."
  },
  {
    text: "Billionaire Tactics Revealed: Discover the hidden techniques the ultra-wealthy use to attract fortune."
  },
  {
    text: "Using Gematria in Your Business: Learn how to apply gematria to boost your financial success."
  },
  {
    text: "Building the Right Team: Master the art of choosing the perfect team to fuel your success."
  },
  {
    text: "Timing Your Success: Know the precise moments to execute projects and seize lucrative opportunities."
  },
  {
    text: "Bonus: Numerology Logo Tip: Learn how to design a logo that aligns with financial abundance and attracts prosperity."
  }
]

const Upsell = () => {
  console.log('Rendering upsell page with updated title and image')
  
  return (
    <UpsellContainer>
      <UpsellHeader />
      <ProductSection>
        <ProductImage 
          src="https://statics.myclickfunnels.com/workspace/eodNKN/image/3343726/file/fa6d35c21fe41164af7da6ca60ba6b7c.jpg"
          alt="Get Rich Using Numerology eBook"
        />
        <ProductDetails
          title="Get Rich Using Numerology eBook (2023 Edition)"
          description="Discover how the elites use numerology to amass extraordinary wealth."
          features={features}
          originalPrice={29.38}
          discountedPrice={19.10}
        />
      </ProductSection>
    </UpsellContainer>
  )
}

export default Upsell