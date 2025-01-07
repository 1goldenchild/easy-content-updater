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
    // Start animation after a brief delay
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
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          className="inline-block"
        >
          <AnimatePresence mode="wait">
            {!isAnimated ? (
              <motion.span
                key="number"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="inline-block"
              >
                {getGematriaValue(letter)}
              </motion.span>
            ) : (
              <motion.span
                key="letter"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
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