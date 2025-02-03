import { memo } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const Hero = memo(() => {
  // Reduced number of particles for better performance
  const purpleShades = [
    '#b09df7',
    '#9580bd',
    '#8570b7',
  ]

  const goldShades = [
    '#ffdf33',
    '#ffcd51',
    '#ffc642',
  ]

  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 will-change-transform opacity-60" style={{ transform: 'translateZ(0)' }}>
        {/* Reduced number of particles from 90 to 45 */}
        {[...Array(45)].map((_, i) => {
          const color = purpleShades[Math.floor(Math.random() * purpleShades.length)]
          return (
            <div
              key={`purple-${i}`}
              className="absolute w-[0.375px] h-[0.375px] rounded-full animate-twinkle will-change-transform"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.7 + 0.3,
                backgroundColor: color,
                boxShadow: `0 0 3px 1px ${color}`,
                transform: 'translateZ(0)'
              }}
            />
          )
        })}
        {[...Array(45)].map((_, i) => {
          const color = goldShades[Math.floor(Math.random() * goldShades.length)]
          return (
            <div
              key={`gold-${i}`}
              className="absolute w-[0.375px] h-[0.375px] rounded-full animate-twinkle will-change-transform"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.7 + 0.3,
                backgroundColor: color,
                boxShadow: `0 0 3px 1px ${color}`,
                transform: 'translateZ(0)'
              }}
            />
          )
        })}
      </div>

      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} // Reduced from 0.8 to 0.5
          className="flex flex-col items-center space-y-8 text-center relative z-10"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none bg-gradient-to-r from-white via-amber-200 to-white bg-[length:200%_auto] animate-shine bg-clip-text text-transparent">
            Dive Into the Depth of Your Personality with a{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400">
              Numerology Reading
            </span>
          </h1>
          <p className="mx-auto max-w-[700px] text-white/90 md:text-xl dark:text-white/90">
            Uncover the secrets of your personality through numerology that the 1% don't want you to know—and how this powerful knowledge can transform your life.
          </p>
          <div className="w-full max-w-[280px] relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#534363] via-[#534363] to-[#534363] rounded-md blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <Link to="/collect-info" className="w-full block relative">
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-[#534363] to-[#a39356] hover:from-[#534363] hover:to-[#a39356] text-amber-200/90 font-normal tracking-wider shadow-[0_0_15px_rgba(251,191,36,0.1)] transition-all duration-500 bg-[length:200%_auto] hover:bg-right-top hover:shadow-[0_0_20px_rgba(251,191,36,0.2)] border border-[#86736f] rounded-md relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Get Your Numerology Reading
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-900/10 to-transparent translate-x-[-200%] animate-shimmer" />
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
})

Hero.displayName = 'Hero'

export default Hero