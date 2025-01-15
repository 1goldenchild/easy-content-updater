import { useState } from "react"
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
    <div className="min-h-screen bg-[#1A1F2C]">
      <div className="max-w-[1600px] mx-auto px-6 py-12">
        <div className="space-y-10">
          {/* Header Section */}
          <div className="text-center space-y-4 mb-12">
            <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-bold text-white`}>
              Select Your Package
            </h1>
            <p className="text-[#9F9EA1] text-lg max-w-2xl mx-auto">
              Choose the analysis package that best suits your needs
            </p>
          </div>

          {/* Package Selection */}
          <div className="bg-[#2A2F3C] p-8 rounded-xl border border-[#403E43]">
            <PackageSelection
              selectedPackage={selectedPackage}
              onPackageChange={setSelectedPackage}
            />
          </div>

          {/* Order Button */}
          <div className="max-w-md mx-auto">
            <button 
              onClick={handleSubmit}
              className="w-full bg-[#B7A080] hover:bg-[#8A795F] text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200"
            >
              Complete Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout