import ContactInfo from "@/components/checkout/ContactInfo"
import PackageSelection from "@/components/checkout/PackageSelection"
import VIPOption from "@/components/checkout/VIPOption"
import BillingInfo from "@/components/checkout/BillingInfo"
import { useState, useEffect } from "react"
import { Star } from "lucide-react"

const Checkout = () => {
  const [selectedPackage, setSelectedPackage] = useState("supreme")
  const [isVip, setIsVip] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

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

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const totalSeconds = prev.days * 86400 + prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1
        
        if (totalSeconds <= 0) {
          clearInterval(timer)
          return { days: 0, hours: 0, minutes: 0, seconds: 0 }
        }

        return {
          days: Math.floor(totalSeconds / 86400),
          hours: Math.floor((totalSeconds % 86400) / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

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
        <div className="mb-8 text-center space-y-4">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 backdrop-blur-sm">
            <span className="text-red-400 font-semibold">LIMITED TIME OFFER</span>
            <span className="mx-2">•</span>
            <span className="text-orange-400">
              Ends in: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </span>
          </div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 backdrop-blur-sm">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-emerald-400">Rated by</span>
            <span className="text-teal-400 font-semibold">1,283 Happy Customers</span>
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