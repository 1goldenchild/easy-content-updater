import { motion } from "framer-motion";
import { ScrollText } from "lucide-react";

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
            Energy Forecast
          </h3>
        </div>

        {/* Timeline visualization */}
        <div className="relative mt-6 mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 rounded-lg" />
          <div className="relative h-24">
            {/* Timeline line */}
            <div className="absolute top-1/2 h-0.5 w-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20">
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
                style={{ left: `${index * 50}%`, top: "50%", transform: 'translate(-50%, -50%)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                <span className="text-xs font-medium text-white/70">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-white/70 leading-relaxed">
          Your energy patterns unfold across three distinct phases, each revealing unique opportunities and challenges that shape your path forward.
        </p>
      </div>
    </div>
  );
};

export default YearlyForecast;