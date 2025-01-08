import UpsellProduct from "@/components/upsell/UpsellProduct"
import { upsellProducts } from "@/components/upsell/upsellProducts"

const Upsell = () => {
  const currentProduct = {
    ...upsellProducts[0],
    price: 28 // Override the price to $28
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
    <div className="min-h-screen bg-[#121212] py-8">
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