import { motion } from "framer-motion"
import { TrendingUp, Target, Sparkles, Users } from "lucide-react"

const benefits = [
  {
    icon: Users,
    title: "Understand People Better",
    description: "Use numerology to gain deep insights into yourself and others. Understand the motivations behind people's actions, discover why they behave the way they do, and unlock the hidden dynamics of your relationships.",
    bgGradient: "from-blue-400/10 via-blue-500/5 to-purple-500/10",
    iconColor: "text-blue-400",
    borderColor: "border-blue-500/20",
    burnGradient: "from-blue-400/0 via-blue-400/10 to-purple-500/5"
  },
  {
    icon: TrendingUp,
    title: "Find Your True Path",
    description: "Discover the opportunities meant for you by aligning your actions with your natural path. When you understand your true purpose, you can move with confidence and clarity, making decisions that resonate with your inner strengths.",
    bgGradient: "from-purple-400/10 via-pink-500/5 to-red-500/10",
    iconColor: "text-purple-400",
    borderColor: "border-purple-500/20",
    burnGradient: "from-purple-400/0 via-purple-400/10 to-pink-500/5"
  },
  {
    icon: Sparkles,
    title: "Unlock Abundance",
    description: "Tap into the powerful numbers that unlock prosperity and guide you toward smarter financial decisions. Use the precision of numerology to identify the most profitable opportunities and align your actions with abundance.",
    bgGradient: "from-amber-400/10 via-orange-500/5 to-red-500/10",
    iconColor: "text-amber-400",
    borderColor: "border-amber-500/20",
    burnGradient: "from-amber-400/0 via-amber-400/10 to-orange-500/5"
  },
  {
    icon: Target,
    title: "Discover Your Truth",
    description: "The truth about your numbers will reveal powerful insights into who you really are—illuminating the reasons behind your behaviors, choices, and patterns in life. Numerology teaches you to understand not just your strengths and potential.",
    bgGradient: "from-emerald-400/10 via-teal-500/5 to-cyan-500/10",
    iconColor: "text-emerald-400",
    borderColor: "border-emerald-500/20",
    burnGradient: "from-emerald-400/0 via-emerald-400/10 to-teal-500/5"
  }
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const Benefits = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-900/50 via-zinc-900 to-zinc-900" />
      
      <div className="relative max-w-7xl mx-auto px-3 md:px-4">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 mb-4">
            Unlock Your Hidden Potential
          </h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto">
            Discover how numerology can transform your understanding of yourself and the world around you. Our expert analysis reveals the patterns that shape your life's journey.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative rounded-2xl p-4 sm:p-6 lg:p-6 border ${benefit.borderColor} bg-gradient-to-br ${benefit.bgGradient} backdrop-blur-sm hover:scale-[1.02] transition-all duration-300 ease-out overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent rounded-2xl" />
              
              <div className={`absolute inset-0 bg-gradient-to-t ${benefit.burnGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shine`} />
              
              <div className="relative space-y-3 sm:space-y-4">
                <div className={`${benefit.iconColor} w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 p-2 sm:p-2.5 ring-2 ring-white/10 group-hover:ring-white/20 transition-all duration-300`}>
                  <benefit.icon className="w-full h-full" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-white to-white/80">
                  {benefit.title}
                </h3>
                <p className="text-white/60 pr-2 line-clamp-4">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits