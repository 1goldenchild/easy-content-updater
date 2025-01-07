import { motion } from "framer-motion"
import { Users, TrendingUp, Sparkles, Target } from "lucide-react"

const benefits = [
  {
    icon: Users,
    title: "Boost your relationships",
    description: "Use numerology to gain deep insights into yourself and others. Understand the motivations behind people's actions, discover why they behave the way they do, and unlock the hidden dynamics of your relationships.",
    bgGradient: "from-blue-400/10 via-blue-500/5 to-purple-500/10",
    iconColor: "text-blue-400",
    borderColor: "border-blue-500/20"
  },
  {
    icon: TrendingUp,
    title: "Accelerate your career",
    description: "Discover the opportunities meant for you by aligning your actions with your natural path. When you understand your true purpose, you can move with confidence and clarity, making decisions that resonate with your inner strengths.",
    bgGradient: "from-purple-400/10 via-pink-500/5 to-red-500/10",
    iconColor: "text-purple-400",
    borderColor: "border-purple-500/20"
  },
  {
    icon: Sparkles,
    title: "Unlock financial flow",
    description: "Tap into the powerful numbers that unlock prosperity and guide you toward smarter financial decisions. Use the precision of numerology to identify the most profitable opportunities and align your actions with abundance.",
    bgGradient: "from-amber-400/10 via-orange-500/5 to-red-500/10",
    iconColor: "text-amber-400",
    borderColor: "border-amber-500/20"
  },
  {
    icon: Target,
    title: "Become your best self",
    description: "The truth about your numbers will reveal powerful insights into who you really are—illuminating the reasons behind your behaviors, choices, and patterns in life. Numerology teaches you to understand not just your strengths and potential.",
    bgGradient: "from-emerald-400/10 via-teal-500/5 to-cyan-500/10",
    iconColor: "text-emerald-400",
    borderColor: "border-emerald-500/20"
  }
]

const Benefits = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      <div className="container max-w-7xl px-3 md:px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent">
            How can numerology help me?
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Discover the transformative power of numbers in every aspect of your life
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3 lg:gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative rounded-2xl p-4 sm:p-6 lg:p-6 border ${benefit.borderColor} bg-gradient-to-br ${benefit.bgGradient} backdrop-blur-sm hover:scale-[1.02] transition-all duration-300 ease-out`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent rounded-2xl" />
              <div className="relative space-y-3 sm:space-y-4">
                <div className={`${benefit.iconColor} w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 p-2 sm:p-2.5 ring-2 ring-white/10 group-hover:ring-white/20 transition-all duration-300`}>
                  <benefit.icon className="w-full h-full" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed pr-2">
                    {benefit.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits