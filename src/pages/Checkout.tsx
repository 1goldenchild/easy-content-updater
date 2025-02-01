import ContactInfo from "@/components/checkout/ContactInfo"
import PackageSelection from "@/components/checkout/PackageSelection"
import VIPOption from "@/components/checkout/VIPOption"
import BillingInfo from "@/components/checkout/BillingInfo"
import { useState } from "react"
import { Star, Lock, ShieldCheck, CreditCard } from "lucide-react"

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

        {/* Trust Payment Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-[#2A2F3C]/50 rounded-lg p-8 backdrop-blur-sm border border-purple-500/20">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-gray-200 mb-2">Secure Payment & Trust</h3>
              <p className="text-gray-400">Your payment information is processed securely</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Security Badge */}
              <div className="flex flex-col items-center text-center p-4 bg-[#2A2F3C] rounded-lg border border-purple-500/20">
                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mb-3">
                  <Lock className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="font-medium text-gray-200 mb-2">256-bit SSL Encryption</h4>
                <p className="text-sm text-gray-400">Your data is protected with bank-level security</p>
              </div>

              {/* Payment Methods */}
              <div className="flex flex-col items-center text-center p-4 bg-[#2A2F3C] rounded-lg border border-purple-500/20">
                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mb-3">
                  <CreditCard className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="font-medium text-gray-200 mb-2">Secure Payments</h4>
                <p className="text-sm text-gray-400">We accept all major credit cards and PayPal</p>
              </div>

              {/* Guarantee */}
              <div className="flex flex-col items-center text-center p-4 bg-[#2A2F3C] rounded-lg border border-purple-500/20">
                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mb-3">
                  <ShieldCheck className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="font-medium text-gray-200 mb-2">Money-Back Guarantee</h4>
                <p className="text-sm text-gray-400">100% satisfaction or your money back</p>
              </div>
            </div>

            {/* Payment Methods Icons */}
            <div className="mt-8 flex justify-center items-center gap-4">
              <div className="px-4 py-2 bg-white/5 rounded-lg">
                <span className="text-sm text-gray-400">Visa</span>
              </div>
              <div className="px-4 py-2 bg-white/5 rounded-lg">
                <span className="text-sm text-gray-400">Mastercard</span>
              </div>
              <div className="px-4 py-2 bg-white/5 rounded-lg">
                <span className="text-sm text-gray-400">American Express</span>
              </div>
              <div className="px-4 py-2 bg-white/5 rounded-lg">
                <span className="text-sm text-gray-400">PayPal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout