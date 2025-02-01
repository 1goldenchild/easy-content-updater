import ContactInfo from "@/components/checkout/ContactInfo"
import PackageSelection from "@/components/checkout/PackageSelection"
import VIPOption from "@/components/checkout/VIPOption"
import BillingInfo from "@/components/checkout/BillingInfo"
import { useState } from "react"

const Checkout = () => {
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
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="min-h-screen bg-[#221F26] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <PackageSelection
              selectedPackage={selectedPackage}
              onPackageChange={setSelectedPackage}
            />
            
            <VIPOption
              isVip={isVip}
              onVipChange={setIsVip}
            />
            
            <ContactInfo
              firstName={formData.firstName}
              lastName={formData.lastName}
              email={formData.email}
              onFieldChange={handleFieldChange}
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
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-[#2A2F3C] rounded-lg p-6 sticky top-8">
              <h2 className="text-lg font-semibold mb-4 text-gray-200">ORDER SUMMARY</h2>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Subtotal</span>
                  <span className="text-white">$71.00</span>
                </div>
                {isVip && (
                  <div className="flex justify-between text-sm">
                    <span className="text-purple-400">VIP Customer</span>
                    <span className="text-purple-400">$11.00</span>
                  </div>
                )}
                <div className="border-t border-gray-700 pt-4 flex justify-between">
                  <span className="font-semibold text-gray-200">Total</span>
                  <span className="font-semibold text-white">${isVip ? "82.00" : "71.00"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout