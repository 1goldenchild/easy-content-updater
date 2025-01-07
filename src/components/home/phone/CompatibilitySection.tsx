import { motion } from "framer-motion";

const CompatibilitySection = () => {
  const compatibleNumbers = [1, 5, 7];
  const neutralNumbers = [2, 3, 4];
  const challengingNumbers = [6, 8, 9];

  // Calculate percentages for the donut chart
  const total = compatibleNumbers.length + neutralNumbers.length + challengingNumbers.length;
  const compatiblePercentage = (compatibleNumbers.length / total) * 100;
  const neutralPercentage = (neutralNumbers.length / total) * 100;
  const challengingPercentage = (challengingNumbers.length / total) * 100;

  // Calculate stroke dasharray and dashoffset for each segment
  const circumference = 2 * Math.PI * 40; // radius = 40
  const compatibleDash = (circumference * compatiblePercentage) / 100;
  const neutralDash = (circumference * neutralPercentage) / 100;
  const challengingDash = (circumference * challengingPercentage) / 100;

  return (
    <div id="compatibility" className="rounded-xl bg-gradient-to-br from-[#8B5CF6]/30 to-[#0EA5E9]/30 p-4">
      <h3 className="text-sm font-semibold text-white/90 mb-3">Best Matches</h3>
      
      {/* Donut Chart */}
      <div className="relative w-full aspect-square max-w-[120px] mx-auto mb-4">
        <svg viewBox="0 0 100 100" className="transform -rotate-90">
          {/* Compatible segment */}
          <motion.circle
            initial={{ pathLength: 0 }}
            animate={{ pathLength: compatiblePercentage / 100 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#8B5CF6"
            strokeWidth="12"
            strokeDasharray={`${compatibleDash} ${circumference}`}
            strokeLinecap="round"
            className="opacity-80"
          />
          {/* Neutral segment */}
          <motion.circle
            initial={{ pathLength: 0 }}
            animate={{ pathLength: neutralPercentage / 100 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#6B7280"
            strokeWidth="12"
            strokeDasharray={`${neutralDash} ${circumference}`}
            strokeDashoffset={-compatibleDash}
            strokeLinecap="round"
            className="opacity-80"
          />
          {/* Challenging segment */}
          <motion.circle
            initial={{ pathLength: 0 }}
            animate={{ pathLength: challengingPercentage / 100 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#EF4444"
            strokeWidth="12"
            strokeDasharray={`${challengingDash} ${circumference}`}
            strokeDashoffset={-(compatibleDash + neutralDash)}
            strokeLinecap="round"
            className="opacity-80"
          />
        </svg>
      </div>

      <div className="space-y-3">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-500" />
            <span className="text-xs text-white/70">Compatible</span>
          </div>
          <div className="flex gap-2">
            {compatibleNumbers.map((num) => (
              <motion.div
                key={num}
                whileHover={{ scale: 1.05 }}
                className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center"
              >
                <span className="text-sm font-bold text-purple-300">{num}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-400" />
            <span className="text-xs text-white/70">Neutral</span>
          </div>
          <div className="flex gap-2">
            {neutralNumbers.map((num) => (
              <motion.div
                key={num}
                whileHover={{ scale: 1.05 }}
                className="w-8 h-8 rounded-lg bg-gray-500/20 border border-gray-500/30 flex items-center justify-center"
              >
                <span className="text-sm font-bold text-gray-300">{num}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-xs text-white/70">Challenging</span>
          </div>
          <div className="flex gap-2">
            {challengingNumbers.map((num) => (
              <motion.div
                key={num}
                whileHover={{ scale: 1.05 }}
                className="w-8 h-8 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center justify-center"
              >
                <span className="text-sm font-bold text-red-300">{num}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompatibilitySection;