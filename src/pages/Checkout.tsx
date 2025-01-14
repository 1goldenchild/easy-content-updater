import { useState } from "react"
import { motion } from "framer-motion"
import ContactInfo from "@/components/checkout/ContactInfo"
import PackageSelection, { packages } from "@/components/checkout/PackageSelection"
import BillingInfo from "@/components/checkout/BillingInfo"
import VIPOption from "@/components/checkout/VIPOption"
import { toast } from "sonner"
import { useIsMobile } from "@/hooks/use-mobile"

const Checkout = () => {
  const isMobile = useIsMobile()
  const [selectedPackage, setSelectedPackage] = useState("supreme")
  const [isVip, setIsVip] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    apartment: "",
    country: "us",
    state: "ny",
    city: "",
    postalCode: ""
  })

  const handleFieldChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const calculateTotal = () => {
    const selectedPkg = packages.find(pkg => pkg.id === selectedPackage)
    let total = selectedPkg?.price || 0
    if (isVip) total += 11
    return total
  }

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
              Complete Your Order
            </motion.h1>
            <p className="text-purple-200/80 text-lg max-w-2xl mx-auto">
              You're moments away from unlocking the secrets of your numerological DNA
            </p>
          </div>

          {/* Main Content */}
          <div className="grid gap-8">
            {/* Package Information and Selection Section */}
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-6 rounded-xl border border-purple-500/30 shadow-lg shadow-purple-500/10">
              <PackageSelection
                selectedPackage={selectedPackage}
                onPackageChange={setSelectedPackage}
              />
            </div>

            {/* VIP Option */}
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-6 rounded-xl border border-purple-500/30 shadow-lg shadow-purple-500/10">
              <VIPOption
                isVip={isVip}
                onVipChange={setIsVip}
              />
            </div>

            {/* Contact & Billing Info */}
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-6 rounded-xl border border-purple-500/30 shadow-lg shadow-purple-500/10">
              <div className="space-y-8">
                <ContactInfo
                  firstName={formData.firstName}
                  lastName={formData.lastName}
                  email={formData.email}
                  onFieldChange={handleFieldChange}
                />

                <div className="border-t border-purple-500/30 pt-8">
                  <BillingInfo
                    address={formData.address}
                    apartment={formData.apartment}
                    country={formData.country}
                    state={formData.state}
                    city={formData.city}
                    postalCode={formData.postalCode}
                    onFieldChange={handleFieldChange}
                  />
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-6 rounded-xl border border-purple-500/30 shadow-lg shadow-purple-500/10">
              <div className="flex justify-between items-center text-lg">
                <span className="text-purple-200">Total:</span>
                <span className="font-bold text-purple-300">${calculateTotal().toFixed(2)}</span>
              </div>
              <button 
                onClick={handleSubmit}
                className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Complete Order
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Checkout