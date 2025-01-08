import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const UpsellOffer = () => {
  const navigate = useNavigate()
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <h1 className="text-4xl font-bold text-center">
        Wait! Special One-Time Offer
      </h1>
      
      <div className="bg-gray-800/50 rounded-lg p-8 space-y-6">
        <h2 className="text-2xl font-semibold text-yellow-400">
          Upgrade Your Package
        </h2>
        
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-full space-y-4">
              <h3 className="text-xl font-medium">Premium Package</h3>
              <ul className="space-y-2">
                {["Basic Numerology Guide", "Advanced Manifestation Techniques", "Personal Success Calendar"].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-400 w-5 h-5" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="text-2xl font-bold text-yellow-400">
                $97 <span className="text-sm text-gray-400 line-through">$197</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Button
            size="lg"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4"
            onClick={() => navigate("/checkout/step2")}
          >
            Yes, Upgrade My Order!
            <ArrowRight className="ml-2" />
          </Button>
          
          <button
            className="w-full text-gray-400 hover:text-gray-300 py-2"
            onClick={() => navigate("/checkout/step2")}
          >
            No thanks, continue with basic package
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default UpsellOffer