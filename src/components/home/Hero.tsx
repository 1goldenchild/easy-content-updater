import { memo } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const Hero = memo(() => {
  // Reduced number of particles and simplified colors for better performance
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    color: i < 15 ? '#b09df7' : '#ffdf33',
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3
  }));

  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-60" 
        style={{ transform: 'translateZ(0)' }}
      >
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute w-[0.375px] h-[0.375px] rounded-full animate-twinkle will-change-transform"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              backgroundColor: particle.color,
              boxShadow: `0 0 3px 1px ${particle.color}`,
              transform: 'translateZ(0)'
            }}
          />
        ))}
      </div>

      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center space-y-8 text-center relative z-10"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-200 to-white">
              Discover Your Life Path
            </span>
          </h1>
          
          <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
            Uncover the secrets of your personality through numerology
          </p>

          <Link 
            to="/collect-info" 
            className="w-full max-w-[280px] group relative"
          >
            <Button 
              size="lg" 
              className="w-full bg-gradient-to-r from-[#534363] to-[#a39356] text-amber-200/90 font-normal tracking-wider"
            >
              Get Your Reading
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
})

Hero.displayName = 'Hero'

export default Hero