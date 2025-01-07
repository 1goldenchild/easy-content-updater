import { motion } from "framer-motion";

const YearlyForecast = () => {
  return (
    <div id="forecast" className="rounded-xl bg-gradient-to-br from-[#0EA5E9]/30 to-[#F97316]/30 p-4">
      <h3 className="text-sm font-semibold text-white/90 mb-3">2024 Forecast</h3>
      <div className="relative h-32">
        <motion.div
          animate={{
            pathLength: [0, 1],
            pathOffset: [0, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            pathLength: 0,
            stroke: "url(#gradient)",
            strokeWidth: 2,
            fill: "none",
            strokeDasharray: "5,5"
          }}
          className="absolute inset-0 w-full h-full"
        >
          <svg className="w-full h-full">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0EA5E9" />
                <stop offset="100%" stopColor="#F97316" />
              </linearGradient>
            </defs>
            <path d="M0,50 Q60,20 120,60 T240,50" stroke="url(#gradient)" fill="none" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default YearlyForecast;