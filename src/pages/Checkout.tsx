import { useState } from "react"
import { motion } from "framer-motion"
import PackageSelection from "@/components/checkout/PackageSelection"
import { toast } from "sonner"
import { useIsMobile } from "@/hooks/use-mobile"

const Checkout = () => {
  const isMobile = useIsMobile()
  const [selectedPackage, setSelectedPackage] = useState("supreme")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Demo checkout - no payment processing')
    toast.success("This is a demo checkout - no payment will be processed")
    return Promise.resolve()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] via-purple-900/20 to-[#1A1F2C] py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Header Section */}
          <div className="text-center space-y-4">
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-bold bg-gradient-to-r from-purple-300 via-purple-400 to-purple-300 bg-clip-text text-transparent mb-4`}
            >
              Choose Your Numerology Package
            </motion.h1>
            <p className="text-purple-200/80 text-lg max-w-2xl mx-auto">
              Unlock the secrets of your numerological DNA and transform your life with our comprehensive analysis packages
            </p>
          </div>

          {/* Package Selection */}
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-6 rounded-xl border border-purple-500/30 shadow-lg shadow-purple-500/10">
            <PackageSelection
              selectedPackage={selectedPackage}
              onPackageChange={setSelectedPackage}
            />
          </div>

          {/* Order Button */}
          <div className="max-w-md mx-auto">
            <button 
              onClick={handleSubmit}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors shadow-lg shadow-purple-500/20"
            >
              Begin Your Journey
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Checkout