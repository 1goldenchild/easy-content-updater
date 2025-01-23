import { memo, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { useIsMobile } from "@/hooks/use-mobile"

// Memoize the Hero component since it doesn't need to re-render
const Hero = memo(() => {
  const isMobile = useIsMobile()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Lighter purple shades (15% lighter)
  const purpleShades = [
    '#b09df7',
    '#9580bd',
    '#8570b7',
    '#deccfb',
    '#eae5ff',
    '#a173f7',
  ]

  // Lighter gold shades (15% lighter)
  const goldShades = [
    '#ffdf33',
    '#ffcd51',
    '#ffc642',
    '#e1b449',
    '#c49d39',
    '#d4aa3d',
  ]

  // Reduce number of stars on mobile
  const starCount = isMobile ? 40 : 90

  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden">
      {/* Stars Background - Only render if mounted to avoid hydration issues */}
      {mounted && (
        <div 
          className="absolute inset-0 z-0 will-change-transform" 
          style={{ 
            transform: 'translateZ(0)',
            contain: 'strict',
            contentVisibility: 'auto'
          }}
        >
          {/* Purple Stars */}
          {[...Array(starCount)].map((_, i) => {
            const color = purpleShades[i % purpleShades.length]
            return (
              <div
                key={`purple-${i}`}
                className="absolute w-[0.375px] h-[0.375px] rounded-full animate-twinkle will-change-transform"
                style={{
                  left: `${(i / starCount) * 100}%`,
                  top: `${Math.sin((i / starCount) * Math.PI * 2) * 50 + 50}%`,
                  animationDelay: `${(i / starCount) * 3}s`,
                  opacity: 0.3 + (i % 7) * 0.1,
                  backgroundColor: color,
                  boxShadow: isMobile ? 'none' : `0 0 3px 1px ${color}`,
                  transform: 'translateZ(0)',
                  contain: 'layout style paint'
                }}
              />
            )
          })}
          {/* Golden Stars */}
          {[...Array(starCount)].map((_, i) => {
            const color = goldShades[i % goldShades.length]
            return (
              <div
                key={`gold-${i}`}
                className="absolute w-[0.375px] h-[0.375px] rounded-full animate-twinkle will-change-transform"
                style={{
                  left: `${(i / starCount) * 100}%`,
                  top: `${Math.cos((i / starCount) * Math.PI * 2) * 50 + 50}%`,
                  animationDelay: `${(i / starCount) * 3}s`,
                  opacity: 0.3 + (i % 7) * 0.1,
                  backgroundColor: color,
                  boxShadow: isMobile ? 'none' : `0 0 3px 1px ${color}`,
                  transform: 'translateZ(0)',
                  contain: 'layout style paint'
                }}
              />
            )
          })}
        </div>
      )}

      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center space-y-8 text-center relative z-10"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none bg-gradient-to-r from-white via-amber-200 to-white bg-[length:200%_auto] animate-shine bg-clip-text text-transparent">
            Reach the next level with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400">
              Numerology
            </span>
          </h1>
          <p className="mx-auto max-w-[700px] text-white/90 md:text-xl dark:text-white/90">
            Discover the secrets of your energetic properties that the 1% and elite class have kept hidden—and how this potent knowledge can transform your life, enhance your relationships, and elevate your finances.
          </p>
          <div className="w-full max-w-[280px] relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#534363] via-[#534363] to-[#534363] rounded-md blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <Link to="/collect-info" className="w-full block relative">
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-[#534363] to-[#a39356] hover:from-[#534363] hover:to-[#a39356] text-amber-200/90 font-normal tracking-wider shadow-[0_0_15px_rgba(251,191,36,0.1)] transition-all duration-500 bg-[length:200%_auto] hover:bg-right-top hover:shadow-[0_0_20px_rgba(251,191,36,0.2)] border border-[#86736f] rounded-md relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Get Your Numerology Analysis
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