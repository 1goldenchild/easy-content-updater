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

const PackageSelection = ({ selectedPackage, onPackageChange }: PackageSelectionProps) => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <div 
            key={pkg.id}
            onClick={() => onPackageChange(pkg.id)}
            className={`relative p-8 rounded-xl cursor-pointer transition-colors duration-200 ${
              selectedPackage === pkg.id
                ? 'bg-[#1A1F2C] border-2 border-[#B7A080]' 
                : 'bg-[#1A1F2C] border border-[#403E43] hover:border-[#B7A080]/30'
            }`}
          >
            {pkg.isBestSelling && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#B7A080] rounded-full text-white text-sm font-medium">
                Most Popular
              </div>
            )}
            
            <div className="flex items-start mb-8">
              <Package className={`w-8 h-8 ${selectedPackage === pkg.id ? 'text-[#B7A080]' : 'text-[#8E9196]'} mr-4 mt-1`} />
              <div>
                <h3 className={`text-2xl font-bold ${selectedPackage === pkg.id ? 'text-[#B7A080]' : 'text-[#E5E5E6]'}`}>
                  {pkg.name}
                </h3>
              </div>
            </div>
            
            <p className="text-xl text-[#9F9EA1] mb-10">{pkg.description}</p>
            
            <div className="space-y-7 mb-10">
              {pkg.features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div 
                    key={index} 
                    className="flex items-start text-[#C8C8C9]"
                  >
                    <Icon className={`w-6 h-6 ${selectedPackage === pkg.id ? 'text-[#B7A080]' : 'text-[#8E9196]'} mr-4 mt-1 flex-shrink-0`} />
                    <div>
                      <div className="font-medium text-xl mb-1">{feature.title}</div>
                      <div className="text-lg text-[#8A898C]">{feature.description}</div>
                    </div>
                  </div>
                )
              })}
            </div>

            {pkg.bonus && (
              <div className="mt-10 p-6 rounded-lg bg-[#1A1F2C] border border-[#B7A080]/20">
                <div className="flex items-start">
                  <pkg.bonus.icon className="w-7 h-7 text-[#B7A080] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-xl text-[#B7A080]">
                      {pkg.bonus.title}
                    </div>
                    <div className="text-lg text-[#9F9EA1] mt-2">{pkg.bonus.description}</div>
                  </div>
                </div>
              </div>
            )}

            <div className="text-right mt-10">
              {pkg.originalPrice && (
                <span className="text-xl line-through text-[#8A898C] mr-4">
                  ${pkg.originalPrice.toFixed(2)}
                </span>
              )}
              <span className={`text-4xl font-bold ${selectedPackage === pkg.id ? 'text-[#B7A080]' : 'text-white'}`}>
                ${pkg.price.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PackageSelection
