import { motion } from "framer-motion"
import { Users, TrendingUp, Sparkles, Target } from "lucide-react"

const benefits = [
  {
    icon: Users,
    title: "Boost your relationships",
    description: "Use numerology to gain deep insights into yourself and others. Understand the motivations behind people's actions, discover why they behave the way they do, and unlock the hidden dynamics of your relationships. With this powerful tool, you can build stronger connections and cultivate a network of like-minded individuals who will elevate your life."
  },
  {
    icon: TrendingUp,
    title: "Accelerate your career",
    description: "Discover the opportunities meant for you by aligning your actions with your natural path. When you understand your true purpose, you can move with confidence and clarity, making decisions that resonate with your inner strengths. By tuning into the rhythm of your life, you'll effortlessly attract the right opportunities, relationships, and success, all while staying true to your authentic self."
  },
  {
    icon: Sparkles,
    title: "Unlock financial flow",
    description: "Tap into the powerful numbers that unlock prosperity and guide you toward smarter financial decisions. Use the precision of numerology to identify the most profitable opportunities, align your actions with abundance, and make decisions that maximize your income. With numerology as your guide, you'll gain the insights you need to optimize your wealth and consistently increase your profits through various Numerology tactics."
  },
  {
    icon: Target,
    title: "Become your best self",
    description: "The truth about your numbers will reveal powerful insights into who you really are—illuminating the reasons behind your behaviors, choices, and patterns in life. Numerology teaches you to understand not just your strengths and potential, but also the deeper motivations that drive your actions."
  }
]

const Benefits = () => {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <benefit.icon className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-white/70">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits