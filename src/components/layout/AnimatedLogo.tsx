import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const getGematriaValue = (letter: string): string => {
  const gematriaMap: { [key: string]: number } = {
    'N': 14, 'U': 21, 'M': 13, 'E': 5, 'R': 18, 'O': 15, 'L': 12, 'G': 7, 'Y': 25
  }
  return gematriaMap[letter.toUpperCase()]?.toString() || letter
}

const AnimatedLogo = () => {
  const [currentIndex, setCurrentIndex] = useState(-1)
  const [showNumbers, setShowNumbers] = useState(true)
  const [show33, setShow33] = useState(false)
  const word = "NUMEROLOGY"
  
  useEffect(() => {
    // First show all numbers for 1 second
    const numbersTimer = setTimeout(() => {
      // Start the letter transformation sequence
      setCurrentIndex(0)
      
      // Set up interval to transform each letter
      const interval = setInterval(() => {
        setCurrentIndex(prev => {
          if (prev >= word.length - 1) {
            clearInterval(interval)
            // Show 33 after last letter transforms
            setTimeout(() => setShow33(true), 300)
            return prev
          }
          return prev + 1
        })
      }, 100)

      return () => clearInterval(interval)
    }, 1000)

    return () => clearTimeout(numbersTimer)
  }, [])

  return (
    <div className="flex items-center">
      {word.split('').map((letter, index) => (
        <motion.div
          key={index}
          className="inline-block relative font-bold text-2xl w-[1.5em] text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          <AnimatePresence mode="wait">
            {index <= currentIndex ? (
              <motion.span
                key="letter"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ) : (
              <motion.span
                key="number"
                initial={{ opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="inline-block text-[#00ff00]"
              >
                {getGematriaValue(letter)}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
      <AnimatePresence>
        {show33 && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-r from-[#9b87f5] to-[#D946EF] bg-clip-text text-transparent ml-1"
          >
            33
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AnimatedLogo