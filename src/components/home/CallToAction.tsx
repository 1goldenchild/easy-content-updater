import { motion } from "framer-motion"
import { Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "react-router-dom"
import { useEffect } from "react"

// Add this at the top level of your file, outside any component
export const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const CallToAction = () => {
  const navigate = useNavigate();

  // Handle navigation with scroll reset
  const handleNavigate = () => {
    navigate('/collect-info');
    scrollToTop();
  };

  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      {/* Stars Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F2C]/95 via-[#1A1F2C]/80 to-[#1A1F2C]" />

      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900/90 to-pink-900/90 p-6 md:p-12"
        >
          <div className="relative z-10 text-center space-y-4 md:space-y-6">
            {/* Animated Icon */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-16 h-16 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <Lightbulb className="w-8 h-8 text-white" />
            </motion.div>

            {/* Glowing Text */}
            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              Get Your Personalized Numerology Analysis Today
            </h2>

            {/* Responsive Description */}
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Uncover the secrets behind your numbers, unlock your potential, and start 
              living a life that aligns with your true purpose.
            </p>

            {/* Centered Button with Fixed Width */}
            <div className="flex justify-center">
              <div className="w-full max-w-[280px]">
                <Button 
                  onClick={handleNavigate}
                  size="lg" 
                  className="w-full relative bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-200"
                >
                  Get Your Personalized Analysis
                </Button>
              </div>
            </div>
          </div>
          
          {/* Background Effects */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: 0, y: 0 }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="absolute w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
          
          {/* Sparkle Effects */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction