import UpsellProduct from "@/components/upsell/UpsellProduct"
import { upsellProducts } from "@/components/upsell/upsellProducts"

const Upsell = () => {
  const currentProduct = upsellProducts[0]
  console.log('Rendering upsell page with product:', currentProduct)

  return (
    <div className="min-h-screen bg-[#121212] py-12">
      <div className="container max-w-4xl mx-auto px-4">
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
    </div>
  )
}

export default Upsell