import { motion } from "framer-motion";

const CompatibilitySection = () => {
  const compatibleNumbers = [1, 5, 7];
  const neutralNumbers = [2, 3, 4];
  const challengingNumbers = [6, 8, 9];

  return (
    <div id="compatibility" className="rounded-xl bg-gradient-to-br from-[#8B5CF6]/30 to-[#0EA5E9]/30 p-4">
      <h3 className="text-sm font-semibold text-white/90 mb-3">Best Matches</h3>
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