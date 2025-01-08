import { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"
import ContactInfo from "@/components/checkout/ContactInfo"
import PackageSelection from "@/components/checkout/PackageSelection"
import BillingInfo from "@/components/checkout/BillingInfo"
import StripeElements from "@/components/checkout/StripeElements"
import VIPOption from "@/components/checkout/VIPOption"
import { packages } from "@/components/checkout/PackageSelection"
import { supabase } from "@/integrations/supabase/client"

// Initialize Stripe with the publishable key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '')

console.log('Stripe initialization with key:', import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY ? '[Present]' : '[Missing]')

const Checkout = () => {
  const navigate = useNavigate()
  const [isProcessing, setIsProcessing] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    apartment: "",
    country: "",
    state: "",
    city: "",
    postalCode: "",
    selectedPackage: "supreme",
    isVip: false
  })

  const handleFieldChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent, paymentMethod: string) => {
    e.preventDefault()
    setIsProcessing(true)
    
    try {
      const selectedPackage = packages.find(pkg => pkg.id === formData.selectedPackage)
      if (!selectedPackage) throw new Error("Package not found")

      const total = selectedPackage.price + (formData.isVip ? 11 : 0)

      console.log('Processing payment for amount:', total)

      const { data, error } = await supabase.functions.invoke('create-payment', {
        body: {
          paymentMethod,
          amount: total,
          email: formData.email,
          name: `${formData.firstName} ${formData.lastName}`,
          packageId: selectedPackage.id,
          isVip: formData.isVip
        }
      })

      if (error) throw error

      console.log('Payment successful:', data)
      
      toast.success("Payment processed successfully!")
      navigate("/success")
    } catch (error) {
      console.error('Payment error:', error)
      toast.error(error.message || "Payment failed. Please try again.")
    } finally {
      setIsProcessing(false)
    }
  }

  const selectedPackage = packages.find(pkg => pkg.id === formData.selectedPackage)
  const total = (selectedPackage?.price || 0) + (formData.isVip ? 11 : 0)

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-8 bg-[#1A1F2C] p-6 rounded-lg">
        <ContactInfo
          firstName={formData.firstName}
          lastName={formData.lastName}
          email={formData.email}
          onFieldChange={handleFieldChange}
        />

        <PackageSelection
          selectedPackage={formData.selectedPackage}
          onPackageChange={(value) => handleFieldChange('selectedPackage', value)}
        />

        <VIPOption
          isVip={formData.isVip}
          onVipChange={(value) => setFormData(prev => ({ ...prev, isVip: value }))}
        />

        <BillingInfo
          address={formData.address}
          apartment={formData.apartment}
          country={formData.country}
          state={formData.state}
          city={formData.city}
          postalCode={formData.postalCode}
          onFieldChange={handleFieldChange}
        />

        <Elements stripe={stripePromise}>
          <StripeElements 
            onSubmit={handleSubmit} 
            isProcessing={isProcessing} 
          />
        </Elements>

        <div className="bg-[#2A2F3C] p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Total:</span>
            <span className="text-xl font-bold">${total.toFixed(2)}</span>
          </div>
        </div>

        <p className="text-center text-sm text-gray-400">
          We Never Share Your Information With Anyone
        </p>
      </div>
    </div>
  )
}

export default Checkout