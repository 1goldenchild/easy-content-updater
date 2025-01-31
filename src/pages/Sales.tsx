import { motion } from "framer-motion"
import { Sparkles, Heart, Briefcase, Zap, Crown, Brain, Target } from "lucide-react"

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  delay 
}: { 
  icon: any, 
  title: string, 
  description: string,
  delay: number
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="relative group"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
    <div className="relative p-6 bg-black/40 backdrop-blur-sm rounded-xl border border-white/10 group-hover:border-purple-500/50 transition-colors">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20">
          <Icon className="w-6 h-6 text-purple-400" />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-white/70">{description}</p>
    </div>
  </motion.div>
)

const Sales = () => {
  const features = [
    {
      icon: Target,
      title: "Lifepath Number",
      description: "Uncover your unique energetic blueprint and understand your true purpose in life.",
    },
    {
      icon: Brain,
      title: "Partial Energy",
      description: "Understand the subtle influences that shape your personality and daily decisions.",
    },
    {
      icon: Zap,
      title: "Cycle Number",
      description: "Gain awareness of your current energy cycle and learn how to harness its power.",
    },
    {
      icon: Heart,
      title: "Numerological Compatibility",
      description: "Master relationship and business dynamics through deep energetic understanding.",
    },
    {
      icon: Briefcase,
      title: "Career Path Insights",
      description: "Discover industries and opportunities perfectly aligned with your natural energy.",
    },
    {
      icon: Sparkles,
      title: "Environment Energy Control",
      description: "Master the art of energy manipulation in your surroundings for optimal success.",
    },
    {
      icon: Crown,
      title: "VIP Energy Mastery Bonus",
      description: "Gain exclusive access to advanced manifestation techniques and sacred knowledge.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a21] to-[#2D2D3A] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">
            Unlock Your Hidden Potential
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Discover the ancient secrets of numerology and transform your life through powerful energetic insights.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-20 text-center"
        >
          <button
            onClick={() => window.location.href = "/collect-info"}
            className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
          >
            Start Your Journey Now
          </button>
          <p className="mt-4 text-white/50">
            Begin your transformation with a personalized numerology reading
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Sales