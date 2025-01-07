import { motion } from "framer-motion"
import { Users, TrendingUp, Sparkles, Target } from "lucide-react"

const benefits = [
  {
    icon: Users,
    title: "Boost your relationships",
    description: "Use numerology to gain deep insights into yourself and others. Understand the motivations behind people's actions, discover why they behave the way they do, and unlock the hidden dynamics of your relationships. With this powerful tool, you can build stronger connections and cultivate a network of like-minded individuals who will elevate your life.",
    bgColor: "from-[#D3E4FD] to-[#C1D9FF]",
    iconColor: "text-blue-600"
  },
  {
    icon: TrendingUp,
    title: "Accelerate your career",
    description: "Discover the opportunities meant for you by aligning your actions with your natural path. When you understand your true purpose, you can move with confidence and clarity, making decisions that resonate with your inner strengths. By tuning into the rhythm of your life, you'll effortlessly attract the right opportunities, relationships, and success, all while staying true to your authentic self.",
    bgColor: "from-[#E5DEFF] to-[#D4CAFF]",
    iconColor: "text-purple-600"
  },
  {
    icon: Sparkles,
    title: "Unlock financial flow",
    description: "Tap into the powerful numbers that unlock prosperity and guide you toward smarter financial decisions. Use the precision of numerology to identify the most profitable opportunities, align your actions with abundance, and make decisions that maximize your income. With numerology as your guide, you'll gain the insights you need to optimize your wealth and consistently increase your profits through various Numerology tactics.",
    bgColor: "from-[#FDE1D3] to-[#FFCDB4]",
    iconColor: "text-orange-600"
  },
  {
    icon: Target,
    title: "Become your best self",
    description: "The truth about your numbers will reveal powerful insights into who you really are—illuminating the reasons behind your behaviors, choices, and patterns in life. Numerology teaches you to understand not just your strengths and potential, but also the deeper motivations that drive your actions.",
    bgColor: "from-[#F2FCE2] to-[#E4F8C8]",
    iconColor: "text-green-600"
  }
]

const Benefits = () => {
  return (
    <section className="py-24">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            How can numerology help me?
          </h2>
          <p className="text-lg text-white/70">
            Discover the transformative power of numbers in every aspect of your life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl -z-10"
                   style={{
                     backgroundImage: `linear-gradient(to right, ${benefit.bgColor.split(' ')[1]}, ${benefit.bgColor.split(' ')[3]})`
                   }}
              />
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full transition-colors hover:bg-white/[0.05]">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.bgColor} mb-6`}>
                  <benefit.icon className={`w-7 h-7 ${benefit.iconColor}`} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  {benefit.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits