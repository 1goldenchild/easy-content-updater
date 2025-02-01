import ContactInfo from "@/components/checkout/ContactInfo"
import PackageSelection from "@/components/checkout/PackageSelection"
import VIPOption from "@/components/checkout/VIPOption"
import BillingInfo from "@/components/checkout/BillingInfo"
import { useState } from "react"
import { Star, Mail } from "lucide-react"

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
        {/* Limited Time Offer Section */}
        <div className="mb-8 flex flex-col items-center justify-center gap-4 w-full max-w-2xl mx-auto">
          <div className="w-full flex justify-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 backdrop-blur-sm">
              <span className="text-red-400 font-semibold text-sm sm:text-base">LIMITED TIME OFFER</span>
            </div>
          </div>
          
          <div className="w-full flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 backdrop-blur-sm">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-emerald-400 text-sm sm:text-base">Rated by</span>
              <span className="text-teal-400 font-semibold text-sm sm:text-base">1,283 Happy Customers</span>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <div className="inline-flex flex-col items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 backdrop-blur-sm w-full sm:w-auto">
              <p className="text-purple-200 font-medium mb-2 text-center text-sm sm:text-base">
                Due to high demand, we are limiting the number of readings available to 20 per day.
              </p>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 rounded-full bg-purple-500/30 text-purple-200 font-semibold text-sm">
                  3 spots remaining
                </span>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/20 to-violet-500/20 border border-indigo-500/30 backdrop-blur-sm">
              <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-indigo-400" />
              <span className="text-indigo-300 text-xs">Support:</span>
              <span className="text-violet-300 font-medium text-xs">Thenumerologysource@gmail.com</span>
            </div>
          </div>
        </div>

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