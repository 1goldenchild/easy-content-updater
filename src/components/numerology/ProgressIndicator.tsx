import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { scrollToTop } from "../home/CallToAction"

const ProgressIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress as a percentage
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight - windowHeight
      const scrolled = window.scrollY
      const progress = (scrolled / documentHeight) * 100
      
      console.log("Scroll progress:", progress)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed left-0 top-0 h-full z-50 flex items-center">
      <div className="relative h-[90vh] flex items-center">
        {/* Background line */}
        <div className="absolute left-0 w-1 h-full bg-gradient-to-b from-white/5 via-white/10 to-white/5 rounded-full backdrop-blur-sm" />
        
        {/* Animated progress line */}
        <motion.div 
          className="absolute left-0 w-1 bg-gradient-to-b from-purple-500 via-fuchsia-500 to-pink-500 rounded-full"
          style={{
            height: `${scrollProgress}%`,
            top: 0,
          }}
          initial={{ height: "0%" }}
          animate={{ 
            height: `${scrollProgress}%`,
          }}
          transition={{ duration: 0.1 }}
        >
          {/* Glowing effect */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-purple-500 via-fuchsia-500 to-pink-500 blur-md opacity-50" />
          
          {/* Animated particle effect at the bottom of the progress */}
          <motion.div
            className="absolute -bottom-2 -left-1 w-3 h-3 bg-white rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="absolute inset-0 bg-white/20 rounded-full blur-md" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProgressIndicator