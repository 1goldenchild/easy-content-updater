import { useState } from "react"
import { Button } from "@/components/ui/button"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import { toast } from "sonner"
import ContactInfo from "@/components/checkout/ContactInfo"
import PackageSelection from "@/components/checkout/PackageSelection"
import BillingInfo from "@/components/checkout/BillingInfo"
import StripeElements from "@/components/checkout/StripeElements"
import VIPOption from "@/components/checkout/VIPOption"
import { packages } from "@/components/checkout/PackageSelection"

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

const Checkout = () => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("Processing payment...")
  }

  const selectedPackage = packages.find(pkg => pkg.id === formData.selectedPackage)
  const total = (selectedPackage?.price || 0) + (formData.isVip ? 11 : 0)

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <form onSubmit={handleSubmit} className="space-y-8 bg-[#1A1F2C] p-6 rounded-lg">
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
          <StripeElements />
        </Elements>

        <VIPOption
          isVip={formData.isVip}
          onVipChange={(value) => setFormData(prev => ({ ...prev, isVip: value }))}
        />

        <div className="bg-[#2A2F3C] p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Total:</span>
            <span className="text-xl font-bold">${total.toFixed(2)}</span>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-purple-500 hover:bg-purple-600 text-white py-6"
        >
          Submit
        </Button>

        <p className="text-center text-sm text-gray-400">
          We Never Share Your Information With Anyone
        </p>
      </form>
    </div>
  )
}

export default Checkout