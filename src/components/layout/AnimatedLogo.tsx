import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const AnimatedLogo = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    // Start animation after a brief delay
    const timer = setTimeout(() => setIsAnimating(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center gap-1">
      {/* Main Logo Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <motion.span 
          className="font-serif text-2xl tracking-wide"
          style={{ textShadow: '0 0 20px rgba(251, 191, 36, 0.1)' }}
        >
          {/* Animated letters with gradient */}
          {'NUMEROLOGY'.split('').map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isAnimating ? 1 : 0, 
                y: isAnimating ? 0 : 20 
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="inline-block font-serif"
              style={{
                background: `linear-gradient(to bottom right, 
                  ${index % 2 === 0 ? '#2A2311' : '#3B3015'}, 
                  ${index % 2 === 0 ? '#1A1508' : '#2A2311'})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 15px rgba(251, 191, 36, 0.15)'
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>

        {/* Decorative line under the text */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ 
            scaleX: isAnimating ? 1 : 0, 
            opacity: isAnimating ? 1 : 0 
          }}
          transition={{ 
            duration: 0.8, 
            delay: 1.3,
            ease: "easeOut"
          }}
          className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gradient-to-r from-amber-900/30 via-amber-600/30 to-amber-900/30"
        />
      </motion.div>

      {/* Animated number */}
      <AnimatePresence>
        {isAnimating && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5,
              delay: 1.5,
              ease: "easeOut"
            }}
            className="text-lg font-serif bg-gradient-to-br from-amber-700 to-amber-900 bg-clip-text text-transparent"
          >
            33
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedLogo;