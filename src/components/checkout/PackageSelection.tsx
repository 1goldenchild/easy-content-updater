import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Package } from "@/components/ui/package"
import { Info } from "lucide-react"

export const packages = [
  {
    id: "starter",
    name: "Core Energy Blueprint Package",
    price: 33.00,
    features: [
      "Lifepath Number Analysis",
      "Partial Energy Reading",
      "Cycle Number Interpretation",
      "Lucky Number Discovery"
    ]
  },
  {
    id: "premium",
    name: "Premium Energy Alignment Package",
    price: 44.00,
    features: [
      "Everything in Core Energy Blueprint",
      "Numerological Compatibility",
      "Love Compatibility Analysis",
      "Career Path Insights",
      "Secret Number Revelation"
    ]
  },
  {
    id: "supreme",
    name: "Supreme Mastery Package",
    price: 49.40,
    originalPrice: 71.00,
    isBestSelling: true,
    features: [
      "Everything in Premium Energy Alignment",
      "Environment Energy Control",
      "Best Locations, Houses & Cars",
      "Color & Crystal Guidance",
      "Best Technologies Alignment"
    ]
  }
]

const PackageEducationSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
    {packages.map((pkg) => (
      <div 
        key={pkg.id}
        className={`p-6 rounded-xl ${
          pkg.isBestSelling 
            ? 'bg-gradient-to-br from-purple-900/50 to-purple-600/30 border-2 border-purple-500/50 shadow-lg shadow-purple-500/20' 
            : 'bg-[#2A2F3C]/50 border border-gray-700'
        }`}
      >
        <div className="flex items-start mb-4">
          <Package className={`w-5 h-5 ${pkg.isBestSelling ? 'text-purple-400' : 'text-gray-400'} mr-2 mt-1`} />
          <div>
            <h3 className={`font-semibold ${pkg.isBestSelling ? 'text-purple-200' : 'text-gray-200'}`}>
              {pkg.name}
            </h3>
            {pkg.isBestSelling && (
              <span className="text-sm text-purple-400">Most Popular Choice</span>
            )}
          </div>
        </div>
        <ul className="space-y-2">
          {pkg.features.map((feature, index) => (
            <li 
              key={index} 
              className={`flex items-start text-sm ${
                pkg.isBestSelling ? 'text-purple-100' : 'text-gray-300'
              }`}
            >
              <Info className={`w-4 h-4 ${pkg.isBestSelling ? 'text-purple-400' : 'text-gray-400'} mr-2 mt-0.5 flex-shrink-0`} />
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
      {/* Package Information Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          Our Numerology Packages
        </h2>
        <PackageEducationSection />
      </div>

      {/* Package Selection Section */}
      <div>
        <h3 className="text-xl font-semibold mb-6 text-center text-purple-200">
          Select Your Package
        </h3>
        <RadioGroup
          value={selectedPackage}
          onValueChange={onPackageChange}
          className="space-y-3"
        >
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`flex items-center justify-between p-4 rounded-lg transition-all ${
                pkg.isBestSelling 
                  ? 'bg-gradient-to-r from-purple-900/50 to-purple-600/30 border border-purple-500'
                  : 'hover:bg-[#2A2F3C]'
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
                <span className={`font-semibold ${pkg.isBestSelling ? 'text-purple-400' : 'text-white'}`}>
                  ${pkg.price.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  )
}

export default PackageSelection