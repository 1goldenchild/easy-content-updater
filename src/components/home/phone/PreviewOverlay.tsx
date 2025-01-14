import { motion } from "framer-motion";

const PreviewOverlay = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Top gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#1A1F2C] via-[#1A1F2C]/80 to-transparent z-20" />
      
      {/* Preview label */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-12 left-1/2 -translate-x-1/2 z-30"
      >
        <div className="relative">
          <div className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <p className="text-xs font-medium text-white/90">
              Preview Analysis
            </p>
          </div>
          {/* Decorative elements */}
          <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-4 h-[1px] bg-gradient-to-r from-transparent to-white/30" />
          <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-4 h-[1px] bg-gradient-to-l from-transparent to-white/30" />
        </div>

        {/* Word Count Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-3 relative"
        >
          <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500/80 to-fuchsia-500/80 backdrop-blur-sm border border-white/30 shadow-lg shadow-purple-500/20">
            <p className="text-xs font-semibold text-white flex items-center gap-1">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              On average, 3500 words
            </p>
          </div>
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine rounded-full" />
        </motion.div>
      </motion.div>

      {/* Animated corner indicators */}
      {[
        "top-0 left-0 origin-top-left",
        "top-0 right-0 origin-top-right rotate-90",
        "bottom-0 left-0 origin-bottom-left -rotate-90",
        "bottom-0 right-0 origin-bottom-right rotate-180"
      ].map((position, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 + index * 0.1 }}
          className={`absolute ${position} w-8 h-8`}
        >
          <div className="absolute w-3 h-[1px] bg-white/20" />
          <div className="absolute w-[1px] h-3 bg-white/20" />
        </motion.div>
      ))}
    </div>
  );
};

export default PreviewOverlay;