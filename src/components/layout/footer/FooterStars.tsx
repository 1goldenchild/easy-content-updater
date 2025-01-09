import { motion } from "framer-motion"

const FooterStars = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#12141A]">
        <svg className="w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="starGlowFooter" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="white" stopOpacity="0.6" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
          {[...Array(100)].map((_, i) => {
            const size = Math.random() * 1.5 + 0.5;
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const delay = Math.random() * 3;
            const duration = Math.random() * 3 + 2;
            
            return (
              <motion.circle
                key={i}
                cx={`${x}%`}
                cy={`${y}%`}
                r={size}
                fill="url(#starGlowFooter)"
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: duration,
                  delay: delay,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            );
          })}
        </svg>
      </div>
    </div>
  )
}

export default FooterStars