import UpsellProduct from "@/components/upsell/UpsellProduct"
import { upsellProducts } from "@/components/upsell/upsellProducts"

const Upsell = () => {
  const currentProduct = {
    ...upsellProducts[0],
    price: 28 // Override the price to $28
  }
  console.log('Rendering upsell page with product:', currentProduct)

  return (
    <div className="min-h-screen bg-[#121212]">
      <UpsellProduct
        name={currentProduct.name}
        description={currentProduct.description}
        price={currentProduct.price}
        features={currentProduct.features}
        image={currentProduct.image}
        isProcessing={false}
        onAccept={() => console.log('Accept clicked')}
        onDecline={() => console.log('Decline clicked')}
      />
    </div>
  )
}

export default Upsell