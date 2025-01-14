import { motion } from "framer-motion";
import { Gem } from "lucide-react";
import { crystalsByLifePath } from "./data/crystalData";

interface CrystalAnalysisProps {
  lifePath: number;
  isVisible: boolean;
}

const CrystalAnalysis = ({ lifePath, isVisible }: CrystalAnalysisProps) => {
  if (!isVisible) return null;

  const crystalInfo = crystalsByLifePath[lifePath];

  if (!crystalInfo) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8 space-y-6 p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-white">
          <Gem className="w-6 h-6 text-purple-400" />
          Your Crystal Guide
        </h2>
      </div>

      <div className="grid gap-6">
        <div className="space-y-4">
          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-6">
            <h3 className="text-lg font-medium text-purple-400 mb-4">Recommended Crystals</h3>
            <div className="flex flex-wrap gap-3">
              {crystalInfo.primary.map((crystal, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-500/30"
                >
                  <span className="text-lg font-semibold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                    {crystal}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-white/80">
              {crystalInfo.description}
            </p>
            <p className="text-sm text-white/60 mt-4">
              These crystals are specifically aligned with your Life Path Number {lifePath} to enhance your natural abilities and support your spiritual journey.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CrystalAnalysis;