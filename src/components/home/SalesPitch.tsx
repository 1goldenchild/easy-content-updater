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
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { scrollToTop } from "./CallToAction"

const SalesPitch = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/collect-info');
    scrollToTop();
  };

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
            {/* Human Body Visualization */}
            <div className="relative h-64 mb-8">
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-[#8B5CF6]/20 to-transparent"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <svg
                viewBox="0 0 24 24"
                className="w-full h-full"
                style={{
                  filter: "drop-shadow(0 0 15px rgba(139, 92, 246, 0.3))"
                }}
              >
                <motion.path
                  d="M12 2C9.24 2 7 4.24 7 7C7 9.76 9.24 12 12 12C14.76 12 17 9.76 17 7C17 4.24 14.76 2 12 2ZM12 14C8.13 14 5 17.13 5 21C5 21.55 5.45 22 6 22H18C18.55 22 19 21.55 19 21C19 17.13 15.87 14 12 14Z"
                  fill="url(#humanGradient)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <defs>
                  <linearGradient id="humanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#9b87f5" />
                    <stop offset="50%" stopColor="#7E69AB" />
                    <stop offset="100%" stopColor="#6E59A5" />
                  </linearGradient>
                </defs>
              </svg>
              {/* Energy Lines */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-full h-0.5 bg-gradient-to-r from-[#8B5CF6]/0 via-[#8B5CF6]/30 to-[#8B5CF6]/0"
                  style={{
                    top: `${20 + i * 15}%`,
                    transform: 'scaleX(0.8)',
                  }}
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scaleX: [0.8, 0.9, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#6E59A5] bg-clip-text text-transparent">
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

          {/* Right Column - CTA Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-gradient-to-br from-[#1A1F2C] to-[#403E43] rounded-3xl p-8 md:p-12 border border-white/10"
          >
            <div className="space-y-6 text-center">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="w-12 h-12 mx-auto text-[#9b87f5]" />
              </motion.div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Ready to Discover Your True Path?
              </h3>
              
              <p className="text-white/80 max-w-md mx-auto">
                Get your personalized numerology reading today and unlock the secrets of your life's journey.
              </p>
              
              <Button
                onClick={handleGetStarted}
                size="lg"
                className="bg-gradient-to-r from-[#8B5CF6] to-[#6E59A5] hover:from-[#7E69AB] hover:to-[#5D4B8C] text-white font-semibold px-8 py-6 text-lg h-auto"
              >
                Start Your Analysis
              </Button>
            </div>

            {/* Ambient background elements */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0.2 }}
                animate={{
                  opacity: [0.2, 0.3, 0.2],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  delay: i * 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-[#8B5CF6]/10 to-[#6E59A5]/10 blur-xl"
                style={{
                  left: `${20 + i * 25}%`,
                  top: `${20 + i * 20}%`,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SalesPitch
