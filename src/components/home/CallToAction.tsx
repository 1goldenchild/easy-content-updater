import { motion } from "framer-motion"
import { Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const CallToAction = () => {
  return (
    <section className="py-20 relative">
      {/* Smooth gradient transition at the top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />
      
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#accbee]/90 to-[#e7f0fd]/90 p-8 md:p-12"
        >
          <div className="relative z-10 text-center space-y-6">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#fdfcfb] to-[#e2d1c3] rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-200">
              <Lightbulb className="w-8 h-8 text-gray-800" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Get Your Personalized Numerology Analysis Today
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Uncover the secrets behind your numbers, unlock your potential, and start 
              living a life that aligns with your true purpose. Click below to claim your 
              numerology analysis now and take the first step toward a clearer, more 
              empowered future.
            </p>
            <Link to="/analysis">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#e2d1c3] to-[#fdfcfb] hover:from-[#fdfcfb] hover:to-[#e2d1c3] text-gray-800 font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
              >
                Get Your Personalized Reading
              </Button>
            </Link>
          </div>
          
          {/* Decorative elements with softer colors */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#e7f0fd]/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#accbee]/30 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
          </div>
          
          {/* Animated particles with softer colors */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0.3, scale: 0 }}
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.2, 1],
                  x: [0, 100, 0],
                  y: [0, -50, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: i * 2,
                  ease: "linear"
                }}
                className="absolute w-16 h-16 bg-white/20 rounded-full blur-xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Smooth gradient transition to footer */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/50 to-transparent" />
    </section>
  )
}

export default CallToAction