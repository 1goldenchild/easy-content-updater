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

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

const Checkout = () => {
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

  const handleSubmit = async (e: React.FormEvent, paymentMethodId: string) => {
    e.preventDefault()
    setIsProcessing(true)
    console.log('Processing payment...')

    try {
      // Save customer info
      const { error: customerError } = await supabase
        .from('customers')
        .insert([
          {
            email: formData.email,
            first_name: formData.firstName,
            last_name: formData.lastName,
            metadata: {
              address: formData.address,
              apartment: formData.apartment,
              country: formData.country,
              state: formData.state,
              city: formData.city,
              postal_code: formData.postalCode
            }
          }
        ])

      if (customerError) throw customerError

      // Process payment via edge function
      const response = await fetch('/api/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentMethodId,
          customerEmail: formData.email,
          amount: calculateTotal(),
          isVip
        }),
      })

      if (!response.ok) {
        throw new Error('Payment processing failed')
      }

      toast.success("Payment processed successfully!")
      // Redirect to success page or next step
    } catch (error) {
      console.error('Payment error:', error)
      toast.error("Payment failed. Please try again.")
    } finally {
      setIsProcessing(false)
    }
  }

  const calculateTotal = () => {
    const selectedPkg = packages.find(pkg => pkg.id === selectedPackage)
    let total = selectedPkg?.price || 0
    if (isVip) total += 11
    return total
  }

  return (
    <div className="min-h-screen bg-[#1A1508] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="text-center relative">
            <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-20">
              <div className="w-96 h-96 bg-gradient-to-r from-amber-200 via-purple-500 to-amber-200 rounded-full blur-3xl" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200 bg-clip-text text-transparent">
              Complete Your Order
            </h1>
            <p className="mt-2 text-gray-400 text-lg">
              You're just moments away from unlocking your numerological destiny
            </p>
          </div>

          <div className="space-y-6 bg-[#1A1508]/30 p-8 rounded-xl border border-amber-900/30 shadow-[0_0_25px_rgba(251,191,36,0.15)] backdrop-blur-sm">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-amber-500/5 to-purple-500/5 rounded-xl" />
              <PackageSelection
                selectedPackage={selectedPackage}
                onPackageChange={setSelectedPackage}
              />
            </div>

            <div className="relative mt-8">
              <VIPOption
                isVip={isVip}
                onVipChange={setIsVip}
              />
            </div>

            <div className="pt-8 border-t border-amber-900/20">
              <ContactInfo
                firstName={formData.firstName}
                lastName={formData.lastName}
                email={formData.email}
                onFieldChange={handleFieldChange}
              />
            </div>

            <div className="pt-8 border-t border-amber-900/20">
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

            <div className="pt-8 border-t border-amber-900/20">
              <h2 className="text-xl font-semibold mb-6 text-amber-200">PAYMENT INFORMATION</h2>
              <div className="bg-[#2A1F1D] rounded-xl p-6 shadow-lg border border-amber-900/30">
                <Elements stripe={stripePromise}>
                  <StripeElements
                    onSubmit={handleSubmit}
                    isProcessing={isProcessing}
                  />
                </Elements>
              </div>
            </div>

            <div className="pt-8 border-t border-amber-900/20">
              <div className="flex justify-between items-center text-xl p-4 bg-gradient-to-r from-purple-500/10 via-amber-500/10 to-purple-500/10 rounded-xl">
                <span className="text-amber-100">Total:</span>
                <span className="font-bold text-2xl bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200 bg-clip-text text-transparent">
                  ${calculateTotal().toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Checkout