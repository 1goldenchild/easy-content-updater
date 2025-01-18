import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Package } from "@/components/ui/package"
import { Info } from "lucide-react"

export const packages = [
  {
    id: "starter",
    name: "Numerology Analysis Starter Package",
    price: 33.00,
    priceId: "price_1QepZTCibdAmag3ruLEDrHWO",
    productId: "prod_RXvQl1kJWmE0lK",
    features: [
      "Basic Life Path Number Analysis",
      "Core Numbers Interpretation",
      "Personal Year Calculation"
    ]
  },
  {
    id: "premium",
    name: "Numerology Analysis Premium Package",
    price: 44.00,
    priceId: "price_1QepaQCibdAmag3rICiD03Go",
    productId: "prod_RXvRf8GHWMsvcf",
    features: [
      "Everything in Starter Package",
      "Detailed Personality Profile",
      "Career Path Guidance",
      "Love & Relationships Insights"
    ]
  },
  {
    id: "supreme",
    name: "Numerology Analysis Supreme Package",
    price: 49.40,
    originalPrice: 71.00,
    priceId: "price_1QepbECibdAmag3rm3LbVCvQ",
    productId: "prod_RXvSZbsFsu67jS",
    isBestSelling: true,
    features: [
      "Everything in Premium Package",
      "Advanced Compatibility Analysis",
      "Future Trend Predictions",
      "Personal Year Cycles",
      "Monthly & Daily Numerology Forecasts"
    ]
  }
]

const PackageEducationSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
    {packages.map((pkg) => (
      <div 
        key={pkg.id}
        className={`p-6 rounded-xl bg-[#2A2F3C]/50 border ${
          pkg.isBestSelling ? 'border-purple-500' : 'border-gray-700'
        }`}
      >
        <div className="flex items-start mb-4">
          <Package className="w-5 h-5 text-purple-400 mr-2 mt-1" />
          <div>
            <h3 className="font-semibold text-gray-200">{pkg.name}</h3>
            {pkg.isBestSelling && (
              <span className="text-sm text-purple-400">Most Popular Choice</span>
            )}
          </div>
        </div>
        <ul className="space-y-2">
          {pkg.features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-gray-300">
              <Info className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
)

interface PackageSelectionProps {
  selectedPackage: string
  onPackageChange: (value: string) => void
}

const PackageSelection = ({ selectedPackage, onPackageChange }: PackageSelectionProps) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
        Choose Your Numerology Package
      </h2>
      
      <PackageEducationSection />

      <RadioGroup
        value={selectedPackage}
        onValueChange={onPackageChange}
        className="space-y-3"
      >
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`flex items-center justify-between p-4 rounded-lg transition-all ${
              pkg.isBestSelling ? 'bg-[#2A2F3C] border border-purple-500' : 'hover:bg-[#2A2F3C]'
            }`}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value={pkg.id} id={pkg.id} />
              <Label htmlFor={pkg.id} className="cursor-pointer">
                <div>
                  {pkg.isBestSelling && (
                    <span className="text-sm text-purple-400 block">BEST VALUE</span>
                  )}
                  {pkg.name}
                </div>
              </Label>
            </div>
            <div className="text-right">
              {pkg.originalPrice && (
                <span className="text-sm line-through text-gray-400 mr-2">
                  ${pkg.originalPrice.toFixed(2)}
                </span>
              )}
              <span className="text-white font-semibold">
                ${pkg.price.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}

export default PackageSelection