import { motion } from "framer-motion";
import CompatibilityChart from "../numerology/CompatibilityChart";
import LoveCompatibility from "../numerology/LoveCompatibility";

interface CompatibilitySectionProps {
  lifePath: number;
  isVisible: boolean;
}

const CompatibilitySection = ({ lifePath, isVisible }: CompatibilitySectionProps) => {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10"
    >
      <h3 className="text-2xl font-bold text-white/90 mb-6">Compatibility Analysis</h3>
      <div className="space-y-8">
        <CompatibilityChart 
          lifePath={lifePath}
          isVisible={isVisible}
        />
        <LoveCompatibility
          lifePathNumber={lifePath}
        />
      </div>
    </motion.div>
  );
};

export default CompatibilitySection;