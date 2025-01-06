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
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none">
            Reach the next level with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]">
              Numerology
            </span>
          </h1>
          <p className="mx-auto max-w-[700px] text-white/90 md:text-xl dark:text-white/90">
            Discover the secrets the 1% and elite class have kept hidden—and how this powerful knowledge can transform your life, enhance your relationships, and even elevate your finances.
          </p>
          <div className="w-full max-w-[280px]">
            <a 
              href="https://www.numerology33.com/date-of-birth-collector" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full block"
            >
              <Button size="lg" className="w-full">
                Get Your Reading Now
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