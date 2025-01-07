import { motion } from "framer-motion";

const PhoneShowcase = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full max-w-[300px] mx-auto mb-12"
    >
      {/* iPhone Frame */}
      <div className="relative w-full aspect-[9/19.5] bg-[#1A1F2C] rounded-[3rem] border-4 border-gray-800 shadow-2xl overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-3xl z-20" />
        
        {/* Screen Content */}
        <div className="absolute inset-0 overflow-y-auto overflow-x-hidden scrollbar-hide">
          <div className="w-full space-y-6 p-4">
            {/* Life Path Section */}
            <div className="rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-4 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white mb-2">Life Path Number</h3>
              <motion.div 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
              >
                7
              </motion.div>
              <p className="text-xs text-white/70 mt-2">The Seeker & Mystic</p>
            </div>

            {/* Characteristics Chart */}
            <div className="rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-4">
              <h3 className="text-sm font-semibold text-white/90 mb-3">Core Traits</h3>
              <div className="space-y-2">
                {["Spiritual", "Analytical", "Intuitive", "Reserved", "Philosophical"].map((trait, index) => (
                  <motion.div 
                    key={trait}
                    initial={{ width: "0%" }}
                    animate={{ width: `${(100 - index * 15)}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                  />
                ))}
              </div>
            </div>

            {/* Compatibility Section */}
            <div className="rounded-xl bg-gradient-to-br from-indigo-500/20 to-blue-500/20 p-4">
              <h3 className="text-sm font-semibold text-white/90 mb-3">Best Matches</h3>
              <div className="grid grid-cols-3 gap-2">
                {[1, 5, 7].map((num) => (
                  <motion.div
                    key={num}
                    whileHover={{ scale: 1.05 }}
                    className="aspect-square rounded-lg bg-white/10 flex items-center justify-center"
                  >
                    <span className="text-2xl font-bold text-white/90">{num}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Career Path */}
            <div className="rounded-xl bg-gradient-to-br from-pink-500/20 to-orange-500/20 p-4">
              <h3 className="text-sm font-semibold text-white/90 mb-3">Career Paths</h3>
              <div className="space-y-2">
                {["Researcher", "Analyst", "Teacher", "Writer"].map((career) => (
                  <div key={career} className="px-3 py-2 rounded-lg bg-white/5 text-sm text-white/80">
                    {career}
                  </div>
                ))}
              </div>
            </div>

            {/* Yearly Forecast */}
            <div className="rounded-xl bg-gradient-to-br from-green-500/20 to-teal-500/20 p-4">
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
                        <stop offset="0%" stopColor="#22C55E" />
                        <stop offset="100%" stopColor="#14B8A6" />
                      </linearGradient>
                    </defs>
                    <path d="M0,50 Q60,20 120,60 T240,50" stroke="url(#gradient)" fill="none" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Reflection Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
        
        {/* Scroll Fade Overlays */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#1A1F2C] to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#1A1F2C] to-transparent pointer-events-none z-10" />
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute -left-8 -bottom-8 w-24 h-24 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-xl"
      />
    </motion.div>
  );
};

export default PhoneShowcase;