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

      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-medium text-purple-200">Primary Crystals:</h3>
          <ul className="list-disc pl-5 text-purple-100">
            {crystalInfo.primary.map((crystal, index) => (
              <li key={index}>{crystal}</li>
            ))}
          </ul>
        </div>
        
        <div className="text-sm text-purple-200">
          <p>{crystalInfo.description}</p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-medium text-purple-200">Crystal Benefits:</h3>
          <ul className="list-disc pl-5 text-sm space-y-1 text-purple-100">
            <li>Enhanced energy alignment</li>
            <li>Spiritual protection</li>
            <li>Mental clarity and focus</li>
            <li>Emotional balance</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default CrystalAnalysis;