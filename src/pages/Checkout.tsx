import ContactInfo from "@/components/checkout/ContactInfo"
import PackageSelection from "@/components/checkout/PackageSelection"
import VIPOption from "@/components/checkout/VIPOption"
import BillingInfo from "@/components/checkout/BillingInfo"
import { useState } from "react"
import { Star, Lock, ShieldCheck, CreditCard, Mail } from "lucide-react"
import { Link } from "react-router-dom"

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
              <div className="flex items-center gap-4 w-full">
                <div className="flex-1">
                  <p className="text-purple-200 font-medium mb-2 text-sm sm:text-base">
                    Due to high demand, we are limiting the number of readings available to 20 per day.
                  </p>
                  <div className="inline-flex px-3 py-1 rounded-full bg-purple-500/30">
                    <span className="text-purple-200 font-semibold text-sm">
                      4 spots remaining / resets in 11 hours
                    </span>
                  </div>
                </div>
              </div>
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

        {/* Trust Badge Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-[#2A2F3C]/50 rounded-lg p-6 backdrop-blur-sm border border-purple-500/20">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Security Badge */}
              <div className="flex items-center gap-3 p-4 bg-[#2A2F3C] rounded-lg border border-purple-500/20">
                <div className="w-10 h-10 bg-purple-500/10 rounded-full flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5 text-purple-400" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-gray-200 text-sm">256-bit SSL Encryption</h4>
                  <p className="text-xs text-gray-400">Bank-level security</p>
                </div>
              </div>

              {/* Secure Payments */}
              <div className="flex items-center gap-3 p-4 bg-[#2A2F3C] rounded-lg border border-purple-500/20">
                <div className="w-10 h-10 bg-purple-500/10 rounded-full flex items-center justify-center shrink-0">
                  <CreditCard className="w-5 h-5 text-purple-400" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-gray-200 text-sm">Secure Payments</h4>
                  <p className="text-xs text-gray-400">All major cards accepted</p>
                </div>
              </div>

              {/* Money-Back Guarantee */}
              <div className="flex items-center gap-3 p-4 bg-[#2A2F3C] rounded-lg border border-purple-500/20">
                <div className="w-10 h-10 bg-purple-500/10 rounded-full flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-purple-400" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-gray-200 text-sm">Money-Back Guarantee</h4>
                  <p className="text-xs text-gray-400">Read refund policy for more information</p>
                </div>
              </div>
            </div>

            {/* Email Support Section */}
            <div className="mt-4 flex flex-col items-center gap-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2A2F3C] border border-purple-500/20 text-sm text-gray-200">
                <Mail className="w-4 h-4 text-purple-400" />
                24/7 Email Support
              </div>
              <span className="text-sm text-gray-400">thenumerologysource@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
