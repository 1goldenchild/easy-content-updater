import UpsellProduct from "@/components/upsell/UpsellProduct"
import { upsellProducts } from "@/components/upsell/upsellProducts"

const Upsell = () => {
  const currentProduct = {
    ...upsellProducts[0],
    price: 37 // Set price back to $37 as shown in the image
  }
  console.log('Rendering upsell page with product:', currentProduct)

  const handleAccept = () => {
    console.log('Accept clicked')
    // Add your ClickFunnels acceptance logic here
  }

  const handleDecline = () => {
    console.log('Decline clicked')
    // Add your ClickFunnels decline logic here
  }

  return (
    <div className="min-h-screen bg-[#171B26] py-16">
      <UpsellProduct
        name={currentProduct.name}
        description={currentProduct.description}
        price={currentProduct.price}
        features={currentProduct.features}
        image={currentProduct.image}
        isProcessing={false}
        onAccept={handleAccept}
        onDecline={handleDecline}
      />
    </div>
  )
}

export default Upsell