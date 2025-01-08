import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export const packages = [
  {
    id: "basic",
    name: "Numerology Analysis Basic Package™",
    price: 33.00,
    priceId: "price_1QepZTCibdAmag3ruLEDrHWO",
    productId: "prod_RXvQl1kJWmE0lK"
  },
  {
    id: "premium",
    name: "Numerology Analysis Premium Package™ (Hidden Number Revealed!)",
    price: 44.00,
    priceId: "price_1QepaQCibdAmag3rICiD03Go",
    productId: "prod_RXvRf8GHWMsvcf"
  },
  {
    id: "supreme",
    name: "⭐Numerology Analysis Supreme Package™ (Astrology Included)",
    price: 49.40,
    originalPrice: 71.00,
    priceId: "price_1QepbECibdAmag3rm3LbVCvQ",
    productId: "prod_RXvSZbsFsu67jS",
    isBestSelling: true
  }
]

interface PackageSelectionProps {
  selectedPackage: string
  onPackageChange: (value: string) => void
}

const PackageSelection = ({ selectedPackage, onPackageChange }: PackageSelectionProps) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4 text-gray-200">SELECT PRODUCT</h2>
      <RadioGroup
        value={selectedPackage}
        onValueChange={onPackageChange}
        className="space-y-2"
      >
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`flex items-center justify-between p-4 rounded-lg ${
              pkg.isBestSelling ? 'bg-[#2A2F3C] border border-purple-500' : 'hover:bg-[#2A2F3C]'
            }`}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value={pkg.id} id={pkg.id} />
              <Label htmlFor={pkg.id} className="cursor-pointer">
                {pkg.isBestSelling && <span className="text-sm text-purple-400 block">BEST SELLING</span>}
                {pkg.name}
              </Label>
            </div>
            <div className="text-right">
              {pkg.originalPrice && (
                <span className="text-sm line-through text-gray-400 mr-2">${pkg.originalPrice.toFixed(2)}</span>
              )}
              <span className="text-white">${pkg.price.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}

export default PackageSelection