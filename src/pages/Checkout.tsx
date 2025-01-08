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

console.log('Initializing Stripe...')
const stripePromise = loadStripe('pk_test_51QepBxCibdAmag3r0tq7dMFmpymVQanEUGj3OMBjM3MQM4uwOhxbEdnfMfKTzMY5D6chc8SBsnT8skVnA5368BlM00HZSqQPHx')
  .then(stripe => {
    if (!stripe) {
      const error = 'Failed to initialize Stripe - stripe object is null'
      console.error(error)
      toast.error('Payment system initialization failed')
      return null
    }
    console.log('Stripe initialized successfully:', stripe)
    return stripe
  })
  .catch(error => {
    console.error('Stripe initialization error:', error)
    toast.error('Payment system initialization failed')
    return null
  })

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
      const selectedPkg = packages.find(pkg => pkg.id === formData.selectedPackage)
      if (!selectedPkg) {
        throw new Error("Selected package not found")
      }

      console.log('Creating payment session with data:', {
        email: formData.email,
        name: `${formData.firstName} ${formData.lastName}`,
        priceId: selectedPkg.priceId,
        amount: selectedPkg.price + (formData.isVip ? 11 : 0)
      })

      const { data, error } = await supabase.functions.invoke('create-payment', {
        body: {
          email: formData.email,
          name: `${formData.firstName} ${formData.lastName}`,
          priceId: selectedPkg.priceId,
          amount: selectedPkg.price + (formData.isVip ? 11 : 0)
        }
      })

      if (error) {
        console.error('Payment processing error:', error)
        throw error
      }

      if (!data.success) {
        throw new Error(data.error || "Payment failed")
      }

      console.log('Payment session created:', data)
      
      // Redirect to Stripe Checkout
      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error("No checkout URL received")
      }

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

        {stripePromise && (
          <Elements stripe={stripePromise}>
            <StripeElements 
              onSubmit={handleSubmit} 
              isProcessing={isProcessing} 
            />
          </Elements>
        )}

        <div className="bg-[#2A2F3C] p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Total:</span>
            <span className="text-xl font-bold">
              ${total.toFixed(2)}
            </span>
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