import { motion } from "framer-motion";
import { ScrollText, Sparkles } from "lucide-react";

const YearlyForecast = () => {
  return (
    <div id="forecast" className="rounded-xl bg-gradient-to-br from-[#1a1f2c] to-[#2d3748] p-6 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
      
      <div className="relative">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <ScrollText className="w-5 h-5 text-indigo-400" />
          <h3 className="text-base font-semibold text-white/90">
            Numerological Timeline
          </h3>
        </div>

        {/* Timeline visualization */}
        <div className="relative mt-6 mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-lg" />
          <div className="relative h-[120px] flex items-center">
            {/* Timeline line */}
            <div className="absolute h-0.5 w-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              />
            </div>

            {/* Timeline points */}
            {["Past", "Present", "Future"].map((point, index) => (
              <motion.div
                key={point}
                className="absolute flex flex-col items-center gap-2"
                style={{ left: `${index * 50}%`, transform: 'translateX(-50%)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg shadow-purple-500/20" />
                <span className="text-xs font-medium text-white/70">{point}</span>
              </motion.div>
            ))}

            {/* Floating elements */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{ 
                  opacity: 0,
                  scale: 0.5,
                  x: `${Math.random() * 100}%`,
                  y: `${Math.random() * 100}%`
                }}
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  scale: [0.5, 1, 0.5],
                  y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: i * 0.5
                }}
              >
                <Sparkles className="w-3 h-3 text-purple-400/30" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="space-y-3">
          <p className="text-sm text-white/70 leading-relaxed">
            Your numerological journey unfolds across three distinct phases, each revealing unique opportunities and challenges. Understanding these temporal patterns provides invaluable insight into your life's trajectory.
          </p>
          <div className="flex items-center gap-2 text-xs text-white/50">
            <Sparkles className="w-4 h-4" />
            <span>Updated based on your current life path number</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YearlyForecast;