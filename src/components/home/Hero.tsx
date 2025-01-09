import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

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
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none bg-gradient-to-r from-white via-amber-200 to-white bg-[length:200%_auto] animate-shine bg-clip-text text-transparent">
            Reach the next level with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400">
              Numerology
            </span>
          </h1>
          <p className="mx-auto max-w-[700px] text-white/90 md:text-xl dark:text-white/90">
            Discover the secrets the 1% and elite class have kept hidden—and how this powerful knowledge can transform your life, enhance your relationships, and even elevate your finances.
          </p>
          <div className="w-full max-w-[280px] relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-purple-500 to-amber-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <Link to="/collect-info" className="w-full block relative">
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-[#9b87f5] via-amber-500 to-[#7E69AB] hover:from-amber-500 hover:via-[#9b87f5] hover:to-amber-500 text-white shadow-xl transition-all duration-500 bg-[length:200%_auto] hover:bg-right-top"
              >
                Get Your Analysis Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at top left, rgba(155, 135, 245, 0.15), transparent 40%),
            radial-gradient(circle at top right, rgba(249, 115, 22, 0.15), transparent 40%),
            radial-gradient(circle at bottom left, rgba(126, 105, 171, 0.15), transparent 40%),
            radial-gradient(circle at bottom right, rgba(251, 191, 36, 0.15), transparent 40%),
            linear-gradient(to bottom, 
              rgba(155, 135, 245, 0.1), 
              rgba(251, 191, 36, 0.1), 
              rgba(26, 31, 44, 0.8)
            )
          `
        }}
      />
    </section>
  )
}

export default Hero