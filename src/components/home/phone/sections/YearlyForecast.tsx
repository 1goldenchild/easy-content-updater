import { motion } from "framer-motion";

const YearlyForecast = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div id="forecast" className="rounded-xl bg-gradient-to-br from-[#0EA5E9]/30 to-[#F97316]/30 p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      
      <h3 className="text-sm font-semibold text-white/90 mb-3 relative">
        Your Cosmic Journey
      </h3>
      
      <div className="relative h-32">
        {/* Animated Stars */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{ opacity: 0.2, scale: 0.5 }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Energy Path */}
        <svg className="w-full h-full absolute top-0 left-0">
          <motion.path
            d="M0,50 C60,20 120,80 240,50"
            stroke="url(#energyGradient)"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <defs>
            <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0EA5E9">
                <animate
                  attributeName="stop-color"
                  values="#0EA5E9; #F97316; #0EA5E9"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#F97316">
                <animate
                  attributeName="stop-color"
                  values="#F97316; #0EA5E9; #F97316"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
          </defs>
        </svg>

        {/* Energy Points */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-between px-4 text-xs text-white/70">
          <span>Past</span>
          <span>Present</span>
          <span>Future</span>
        </div>
      </div>

      <div className="relative mt-2 text-center">
        <p className="text-xs text-white/70">
          Your energy flows through time, shaping your destiny
        </p>
      </div>
    </div>
  );
};

export default YearlyForecast;