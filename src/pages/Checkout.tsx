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

// Initialize Stripe with the publishable key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '')
console.log('Stripe initialization:', import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY ? 'Key present' : 'Key missing')

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
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12 sm:space-y-16"
        >
          <div className="text-center space-y-8 sm:space-y-10 relative">
            {/* Decorative elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-3xl" />
              <div className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-3xl" />
            </div>
            
            {/* Main heading */}
            <div className="relative flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-bold`}>
                  <span className="relative inline-block">
                    <span className="relative z-10 px-4 sm:px-8 py-2 rounded-lg bg-gradient-to-br from-amber-200/20 to-purple-500/20 backdrop-blur-sm border border-amber-200/30">
                      <span className="bg-gradient-to-r from-amber-100 via-amber-300 to-amber-100 bg-clip-text text-transparent animate-shine whitespace-nowrap">
                        Complete Your Order
                      </span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-200/20 to-purple-500/20 blur-xl opacity-50 rounded-lg transform scale-110" />
                  </span>
                </h1>
              </motion.div>
            </div>

            {/* Subtitle - with increased text size */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center px-2 sm:px-4"
            >
              <p className={`${isMobile ? 'text-sm sm:text-base max-w-[300px] sm:max-w-none' : 'text-lg'} relative inline-block`}>
                <span className="relative z-10">
                  <span className="bg-gradient-to-r from-amber-100 via-amber-200 to-amber-100 bg-clip-text text-transparent">
                    Moments away from discovering your numerological DNA 🧬
                  </span>
                </span>
              </p>
            </motion.div>
          </div>

          <div className="space-y-6 bg-[#1A1508]/30 p-4 sm:p-6 rounded-lg border border-amber-900/30 shadow-[0_0_15px_rgba(251,191,36,0.1)]">
            <PackageSelection
              selectedPackage={selectedPackage}
              onPackageChange={setSelectedPackage}
            />

            <VIPOption
              isVip={isVip}
              onVipChange={setIsVip}
            />

            <div className="pt-6 border-t border-gray-700">
              <ContactInfo
                firstName={formData.firstName}
                lastName={formData.lastName}
                email={formData.email}
                onFieldChange={handleFieldChange}
              />
            </div>

            <div className="pt-6 border-t border-gray-700">
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

            <div className="pt-6 border-t border-gray-700">
              <h2 className="text-lg font-semibold mb-4 text-gray-200">PAYMENT INFORMATION</h2>
              <Elements stripe={stripePromise}>
                <StripeElements
                  onSubmit={handleSubmit}
                  isProcessing={isProcessing}
                />
              </Elements>
            </div>

            <div className="pt-6 border-t border-gray-700">
              <div className="flex justify-between items-center text-lg">
                <span className="text-gray-300">Total:</span>
                <span className="font-bold text-amber-200">${calculateTotal().toFixed(2)}</span>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  )
}

export default Checkout
