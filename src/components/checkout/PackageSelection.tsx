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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {packages.map((pkg) => (
          <div 
            key={pkg.id}
            className={`relative p-8 rounded-xl transition-all transform hover:scale-[1.02] duration-300 ${
              pkg.isBestSelling 
                ? 'bg-gradient-to-br from-[#1A1F2C]/95 to-[#2A2F3C]/95 border-2 border-[#9b87f5]/30 shadow-xl shadow-[#6E59A5]/40' 
                : 'bg-[#1A1F2C]/90 border border-[#403E43] hover:border-[#9b87f5]/30 hover:shadow-lg hover:shadow-[#6E59A5]/20'
            }`}
          >
            {pkg.isBestSelling && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-[#9b87f5] via-[#7E69AB] to-[#6E59A5] rounded-full text-white text-sm font-semibold shadow-lg">
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine" />
                <span className="relative">Most Popular</span>
              </div>
            )}
            
            <div className="flex items-start mb-8">
              <Package className={`w-8 h-8 ${pkg.isBestSelling ? 'text-[#9b87f5]' : 'text-[#8E9196]'} mr-4 mt-1`} />
              <div>
                <h3 className={`text-2xl font-bold tracking-tight ${pkg.isBestSelling ? 'bg-gradient-to-r from-[#9b87f5] via-[#7E69AB] to-[#6E59A5] bg-clip-text text-transparent' : 'text-[#E5E5E6]'}`}>
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
                    className={`flex items-start group hover:transform hover:translate-x-1 transition-transform duration-200 ${
                      pkg.isBestSelling ? 'text-[#E5E5E6]' : 'text-[#C8C8C9]'
                    }`}
                  >
                    <Icon className={`w-6 h-6 ${pkg.isBestSelling ? 'text-[#9b87f5] group-hover:text-[#7E69AB]' : 'text-[#8E9196] group-hover:text-[#9F9EA1]'} mr-4 mt-1 flex-shrink-0 transition-colors duration-200`} />
                    <div>
                      <div className="font-medium text-xl mb-1">{feature.title}</div>
                      <div className="text-lg text-[#8A898C] group-hover:text-[#9F9EA1] transition-colors duration-200">{feature.description}</div>
                    </div>
                  </div>
                )
              })}
            </div>

            {pkg.bonus && (
              <div className="mt-10 p-6 rounded-lg bg-gradient-to-br from-[#1A1F2C] to-[#2A2F3C] border border-[#9b87f5]/20 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#9b87f5]/5 to-[#7E69AB]/5 group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
                <div className="absolute -inset-1 bg-gradient-to-r from-[#9b87f5] via-[#7E69AB] to-[#6E59A5] opacity-20 blur-sm group-hover:opacity-30 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(155,135,245,0.1),transparent_70%)]" />
                <div className="relative flex items-start">
                  <pkg.bonus.icon className="w-7 h-7 text-[#9b87f5] mr-4 mt-1 flex-shrink-0 animate-pulse" />
                  <div>
                    <div className="font-semibold text-xl animate-text-shimmer bg-clip-text text-transparent bg-[linear-gradient(110deg,#9b87f5,45%,#7E69AB,55%,#6E59A5)] bg-[length:250%_100%]">
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
              <span className={`text-4xl font-bold ${pkg.isBestSelling ? 'animate-text-shimmer bg-clip-text text-transparent bg-[linear-gradient(110deg,#9b87f5,45%,#7E69AB,55%,#6E59A5)] bg-[length:250%_100%]' : 'text-white'}`}>
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
