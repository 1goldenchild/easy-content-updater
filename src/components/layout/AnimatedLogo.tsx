import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const getGematriaValue = (letter: string): string => {
  const gematriaMap: { [key: string]: number } = {
    'N': 14, 'U': 21, 'M': 13, 'E': 5, 'R': 18, 'O': 15, 'L': 12, 'G': 7, 'Y': 25
  }
  return gematriaMap[letter.toUpperCase()]?.toString() || letter
}

const AnimatedLogo = () => {
  const [isAnimated, setIsAnimated] = useState(false)
  const word = "NUMEROLOGY"
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true)
    }, 500)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex">
      {word.split('').map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block relative font-bold text-2xl"
        >
          <AnimatePresence mode="wait">
            {!isAnimated ? (
              <motion.span
                key="number"
                initial={{ scale: 1.2, opacity: 0.5 }}
                animate={{ 
                  scale: [1.2, 0.9, 1],
                  opacity: [0.5, 1, 0.8],
                }}
                exit={{ 
                  scale: 0.8,
                  opacity: 0,
                  transition: { duration: 0.2 }
                }}
                transition={{ 
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className="inline-block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent animate-shine"
              >
                {getGematriaValue(letter)}
              </motion.span>
            ) : (
              <motion.span
                key="letter"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                  scale: 1,
                  opacity: 1,
                }}
                transition={{ 
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.span>
      ))}
      <span className="bg-gradient-to-r from-[#9b87f5] to-[#D946EF] bg-clip-text text-transparent ml-1">
        33
      </span>
    </div>
  )
}

export default AnimatedLogo