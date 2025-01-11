import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const Hero = () => {
  const purpleShades = [
    '#9b87f5',  // Primary Purple
    '#7E69AB',  // Secondary Purple
    '#6E59A5',  // Tertiary Purple
    '#D6BCFA',  // Light Purple
    '#E5DEFF',  // Soft Purple
    '#8B5CF6',  // Vivid Purple
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0 will-change-transform" style={{ transform: 'translateZ(0)' }}>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-twinkle will-change-transform"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3,
              backgroundColor: purpleShades[Math.floor(Math.random() * purpleShades.length)],
              transform: 'translateZ(0)'
            }}
          />
        ))}
      </div>

      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center space-y-4 text-center relative z-10"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none bg-gradient-to-r from-white via-amber-200 to-white bg-[length:200%_auto] animate-shine bg-clip-text text-transparent">
            Reach the next level with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400">
              Numerology
            </span>
          </h1>
          <p className="mx-auto max-w-[700px] text-white/90 md:text-xl dark:text-white/90">
            Discover the secrets the 1% and elite class have kept hidden—and how this powerful knowledge can transform your life, enhance your relationships, and even elevate your finances.
          </p>
          <div className="w-full max-w-[280px] relative">
            <Link to="/collect-info" className="w-full block relative">
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-br from-[#615b52] to-[#534463] bg-[length:300%_300%] bg-[100%_100%] text-[#E5DDB2] font-medium px-8 py-6 text-lg h-auto rounded-2xl shadow-lg transition-all duration-300 border border-[#8f8164]/20 hover:border-[#8f8164]/30 hover:shadow-xl"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #615b52 35%, #534463 65%)'
                }}
              >
                <span className="relative z-10 flex items-center">
                  Get Your Analysis
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
      <div 
        className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-[#1a1a21] to-[#1a1a21] pointer-events-none"
        style={{ transform: 'translateZ(0)' }}
      />
    </section>
  )
}

export default Hero