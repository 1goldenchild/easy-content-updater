import { motion } from "framer-motion";

const FooterStars = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[#151318]"
      >
        <div className="absolute inset-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="starGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="white" stopOpacity="0.3" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </radialGradient>
            </defs>
            {[...Array(200)].map((_, i) => {
              const size = Math.random() * 1.5 + 0.5;
              const x = Math.random() * 100;
              const y = Math.random() * 100;
              const delay = Math.random() * 3;
              const duration = Math.random() * 3 + 2;
              
              return (
                <circle
                  key={i}
                  cx={`${x}%`}
                  cy={`${y}%`}
                  r={size}
                  fill="url(#starGlow)"
                  className="animate-pulse"
                  style={{
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`,
                    opacity: Math.random() * 0.5 + 0.3
                  }}
                />
              );
            })}
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default FooterStars;