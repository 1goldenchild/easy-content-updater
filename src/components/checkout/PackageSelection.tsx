import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Package, Sparkles, Brain, Star, Heart, Target, Rocket, Crown } from "lucide-react"

export const packages = [
  {
    id: "starter",
    name: "Core Energy Blueprint Package",
    price: 33.00,
    description: "Start your journey with a deep dive into your unique energy.",
    features: [
      {
        icon: Package,
        title: "Lifepath Number",
        description: "Uncover your unique energetic blueprint"
      },
      {
        icon: Brain,
        title: "Partial Energy",
        description: "Understand the subtle influences that shape your personality and decision-making"
      },
      {
        icon: Target,
        title: "Cycle Number",
        description: "Gain awareness of the current energy cycle and how it influences you"
      },
      {
        icon: Star,
        title: "Lucky Number",
        description: "Tap into your Lucky Number to attract success and favorable outcomes"
      }
    ]
  },
  {
    id: "premium",
    name: "Premium Energy Alignment Package",
    price: 44.00,
    description: "Step up your transformation with our all-inclusive guide to mastering your personal energy.",
    features: [
      {
        icon: Package,
        title: "Core Energy Blueprint",
        description: "Everything in the Core Energy Blueprint package"
      },
      {
        icon: Target,
        title: "Numerological Compatibility",
        description: "Become a networking prodigy"
      },
      {
        icon: Heart,
        title: "Love Compatibility",
        description: "The secrets to compatible, lasting relationships"
      },
      {
        icon: Rocket,
        title: "Career Path Insights",
        description: "Gain insight into the industries aligned with your strengths"
      },
      {
        icon: Sparkles,
        title: "Secret Number Revelation",
        description: "Tap into the Power of Your Secret Number"
      }
    ]
  },
  {
    id: "supreme",
    name: "Supreme Mastery Package",
    price: 49.40,
    originalPrice: 71.00,
    description: "Become the ultimate creator of your life's energy by mastering your environment.",
    isBestSelling: true,
    features: [
      {
        icon: Package,
        title: "Premium Package",
        description: "Everything in the Premium Energy Alignment Package"
      },
      {
        icon: Sparkles,
        title: "Environment Energy Control",
        description: "Quickly shift the energy of your environment"
      },
      {
        icon: Target,
        title: "Best Locations & Assets",
        description: "Discover ideal places to live and assets that align with your energy"
      },
      {
        icon: Star,
        title: "Color & Crystal Guidance",
        description: "Tap into colors and crystals to elevate your vibration"
      },
      {
        icon: Brain,
        title: "Best Technologies",
        description: "Unlock the tech tools for your highest frequency"
      }
    ],
    bonus: {
      icon: Crown,
      title: "VIP Energy Mastery Bonus",
      description: "Exclusive access to advanced manifestation techniques and personalized energy alignment strategies"
    }
  }
]

interface PackageSelectionProps {
  selectedPackage: string
  onPackageChange: (value: string) => void
}

const PackageSelection = ({ selectedPackage, onPackageChange }: PackageSelectionProps) => {
  return (
    <div>
      {/* Package Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {packages.map((pkg) => (
          <div 
            key={pkg.id}
            className={`relative p-6 rounded-xl transition-all ${
              pkg.isBestSelling 
                ? 'bg-gradient-to-br from-[#1A1F2C] to-[#2A2F3C] border-2 border-[#9b87f5]/30 shadow-lg shadow-[#7E69AB]/20' 
                : 'bg-[#1A1F2C] border border-[#403E43] hover:border-[#7E69AB]/30'
            }`}
          >
            {pkg.isBestSelling && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#9b87f5] via-[#7E69AB] to-[#6E59A5] rounded-full text-white text-sm font-medium shadow-lg">
                Most Popular
              </div>
            )}
            <div className="flex items-start mb-4">
              <Package className={`w-5 h-5 ${pkg.isBestSelling ? 'text-[#9b87f5]' : 'text-[#8E9196]'} mr-2 mt-1`} />
              <div>
                <h3 className={`font-semibold ${pkg.isBestSelling ? 'text-[#D6BCFA]' : 'text-[#C8C8C9]'}`}>
                  {pkg.name}
                </h3>
              </div>
            </div>
            
            <p className="text-sm text-[#9F9EA1] mb-4">{pkg.description}</p>
            
            <div className="space-y-4 mb-6">
              {pkg.features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div 
                    key={index} 
                    className={`flex items-start ${
                      pkg.isBestSelling ? 'text-[#D6BCFA]' : 'text-[#C8C8C9]'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${pkg.isBestSelling ? 'text-[#9b87f5]' : 'text-[#8E9196]'} mr-2 mt-1 flex-shrink-0`} />
                    <div className="text-sm">
                      <div className="font-medium">{feature.title}</div>
                      <div className="text-[#8A898C] text-xs">{feature.description}</div>
                    </div>
                  </div>
                )
              })}
            </div>

            {pkg.bonus && (
              <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-[#9b87f5]/10 via-[#7E69AB]/10 to-[#6E59A5]/10 border border-[#9b87f5]/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shine" />
                <div className="flex items-start">
                  <pkg.bonus.icon className="w-5 h-5 text-[#9b87f5] mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-[#D6BCFA]">{pkg.bonus.title}</div>
                    <div className="text-xs text-[#9F9EA1]">{pkg.bonus.description}</div>
                  </div>
                </div>
              </div>
            )}

            <div className="text-right mt-6">
              {pkg.originalPrice && (
                <span className="text-sm line-through text-[#8A898C] mr-2">
                  ${pkg.originalPrice.toFixed(2)}
                </span>
              )}
              <span className={`text-xl font-bold ${pkg.isBestSelling ? 'text-[#9b87f5]' : 'text-white'}`}>
                ${pkg.price.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Package Selection */}
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
                ? 'bg-gradient-to-r from-[#1A1F2C] to-[#2A2F3C] border border-[#9b87f5]/30'
                : 'hover:bg-[#1A1F2C] border border-transparent hover:border-[#403E43]'
            }`}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value={pkg.id} id={pkg.id} />
              <Label htmlFor={pkg.id} className="cursor-pointer">
                <div>
                  {pkg.isBestSelling && (
                    <span className="text-sm text-[#9b87f5] block">BEST VALUE</span>
                  )}
                  {pkg.name}
                </div>
              </Label>
            </div>
            <div className="text-right">
              {pkg.originalPrice && (
                <span className="text-sm line-through text-[#8A898C] mr-2">
                  ${pkg.originalPrice.toFixed(2)}
                </span>
              )}
              <span className={`font-semibold ${pkg.isBestSelling ? 'text-[#9b87f5]' : 'text-white'}`}>
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