import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center space-y-4 text-center relative z-10"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur-lg opacity-75 animate-pulse-slow group-hover:opacity-100 transition duration-1000"></div>
            <h1 className="relative text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none bg-white/5 rounded-lg p-4">
              Reach the next level with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] animate-glow">
                Numerology
              </span>
            </h1>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/50 to-pink-600/50 rounded-lg blur-md opacity-50 animate-pulse-slow"></div>
            <p className="relative mx-auto max-w-[700px] text-white/90 md:text-xl dark:text-white/90 bg-black/20 rounded-lg p-4">
              Discover the secrets the 1% and elite class have kept hidden—and how this powerful knowledge can transform your life, enhance your relationships, and even elevate your finances.
            </p>
          </div>
          <div className="w-full max-w-[280px] relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75 animate-pulse-slow group-hover:opacity-100 transition duration-1000"></div>
            <a 
              href="https://www.numerology33.com/date-of-birth-collector" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full block relative"
            >
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] hover:from-[#8B5CF6] hover:to-[#6E59A5] relative z-10"
              >
                Get Your Analysis Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#9b87f5]/20 via-[#7E69AB]/30 to-background/80 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, 
              rgba(155, 135, 245, 0.2), 
              rgba(126, 105, 171, 0.3), 
              rgba(26, 31, 44, 0.8)
            )
          `
        }}
      />
    </section>
  )
}

export default Hero