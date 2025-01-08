import { useParams } from "react-router-dom"
import UpsellOffer from "@/components/checkout/UpsellOffer"
import PaymentStep from "@/components/checkout/PaymentStep"
import SuccessStep from "@/components/checkout/SuccessStep"

const Checkout = () => {
  const { step } = useParams()
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#001a00] text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {step === "step1" && <UpsellOffer />}
        {step === "step2" && <PaymentStep />}
        {step === "success" && <SuccessStep />}
        {!step && <UpsellOffer />}
      </div>
    </div>
  )
}

export default Checkout