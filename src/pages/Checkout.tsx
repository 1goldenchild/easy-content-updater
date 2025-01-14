import { useState } from "react"
import { motion } from "framer-motion"
import ContactInfo from "@/components/checkout/ContactInfo"
import PackageSelection, { packages } from "@/components/checkout/PackageSelection"
import BillingInfo from "@/components/checkout/BillingInfo"
import VIPOption from "@/components/checkout/VIPOption"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import StripeElements from "@/components/checkout/StripeElements"
import { toast } from "sonner"
import { supabase } from "@/integrations/supabase/client"
import { useIsMobile } from "@/hooks/use-mobile"

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

const Checkout = () => {
  const isMobile = useIsMobile()
  const [isProcessing, setIsProcessing] = useState(false)
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

  const handleSubmit = async (e: React.FormEvent, paymentMethod: string): Promise<void> => {
    e.preventDefault()
    console.log('Demo checkout - no payment processing')
    toast.success("This is a demo checkout - no payment will be processed")
    return Promise.resolve()
  }

  return (
    <div className="min-h-screen bg-[#1A1F2C] py-8 px-4">
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
              className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-bold text-white mb-4`}
            >
              Complete Your Order
            </motion.h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              You're moments away from unlocking the secrets of your numerological DNA
            </p>
          </div>

          {/* Main Content */}
          <div className="grid gap-8">
            {/* Package Selection Section */}
            <div className="bg-[#1A1508]/30 p-6 rounded-xl border border-amber-900/30">
              <PackageSelection
                selectedPackage={selectedPackage}
                onPackageChange={setSelectedPackage}
              />
            </div>

            {/* VIP Option */}
            <div className="bg-[#1A1508]/30 p-6 rounded-xl border border-amber-900/30">
              <VIPOption
                isVip={isVip}
                onVipChange={setIsVip}
              />
            </div>

            {/* Contact & Billing Info */}
            <div className="bg-[#1A1508]/30 p-6 rounded-xl border border-amber-900/30">
              <div className="space-y-8">
                <ContactInfo
                  firstName={formData.firstName}
                  lastName={formData.lastName}
                  email={formData.email}
                  onFieldChange={handleFieldChange}
                />

                <div className="border-t border-gray-700 pt-8">
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

            {/* Payment Section */}
            <div className="bg-[#1A1508]/30 p-6 rounded-xl border border-amber-900/30">
              <h2 className="text-lg font-semibold mb-4 text-gray-200">PAYMENT INFORMATION</h2>
              <Elements stripe={stripePromise}>
                <StripeElements
                  onSubmit={handleSubmit}
                  isProcessing={isProcessing}
                />
              </Elements>

              {/* Order Total */}
              <div className="mt-6 pt-6 border-t border-gray-700">
                <div className="flex justify-between items-center text-lg">
                  <span className="text-gray-300">Total:</span>
                  <span className="font-bold text-purple-400">${calculateTotal().toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Checkout
