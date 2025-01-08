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
  console.log('Rendering upsell page with new design')
  
  return (
    <UpsellContainer>
      <UpsellHeader />
      <ProductSection>
        <ProductImage 
          src="https://statics.myclickfunnels.com/workspace/eodNKN/image/3343725/file/029c13c846548bb273ac940dd605d3a7.jpeg"
          alt="Get Rich Using Numerology eBook"
        />
        <ProductDetails
          title="Get Rich Using Numerology eBook (2023 Edition)"
          description="Discover how the elites use numerology to amass extraordinary wealth."
          features={features}
          originalPrice={37.33}
          discountedPrice={28.00}
        />
      </ProductSection>
    </UpsellContainer>
  )
}

export default Upsell