import { motion } from "framer-motion"
import { 
  ChartPieIcon, 
  Fingerprint, 
  Globe2, 
  Car, 
  Building2, 
  HeartHandshake,
  Briefcase,
  LineChart,
  Sparkles
} from "lucide-react"
import EarthGlobe from "../numerology/EarthGlobe"

const SalesPitch = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Features List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Unlock Your Complete Numerology Profile
            </h2>
            
            <div className="grid gap-6">
              {[
                {
                  icon: Fingerprint,
                  title: "Personal Life Path Analysis",
                  description: "Discover your core numbers and their profound meaning in your life journey"
                },
                {
                  icon: ChartPieIcon,
                  title: "Interactive Charts",
                  description: "Visualize your numerological characteristics through dynamic, interactive charts"
                },
                {
                  icon: Globe2,
                  title: "Global Compatibility",
                  description: "Find the best countries and locations aligned with your numerological profile"
                },
                {
                  icon: Car,
                  title: "Vehicle Harmony",
                  description: "Learn which vehicles resonate best with your energy patterns"
                },
                {
                  icon: HeartHandshake,
                  title: "Relationship Insights",
                  description: "Understand compatibility patterns in your personal and professional relationships"
                },
                {
                  icon: Briefcase,
                  title: "Career Guidance",
                  description: "Get tailored career recommendations based on your numerological profile"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <feature.icon className="w-6 h-6 text-purple-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white/90">{feature.title}</h3>
                    <p className="text-white/70 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-full aspect-square">
              <EarthGlobe />
              
              {/* Floating Elements */}
              {[...Array(3)].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: [0.5, 1, 0.5],
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 3,
                    delay: index * 0.5,
                    repeat: Infinity,
                  }}
                  className="absolute"
                  style={{
                    top: `${20 + index * 30}%`,
                    left: `${10 + index * 30}%`,
                  }}
                >
                  {index === 0 ? (
                    <LineChart className="w-8 h-8 text-purple-400" />
                  ) : index === 1 ? (
                    <Building2 className="w-8 h-8 text-pink-400" />
                  ) : (
                    <Sparkles className="w-8 h-8 text-blue-400" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SalesPitch