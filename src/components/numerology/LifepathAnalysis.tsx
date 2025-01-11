import { motion } from "framer-motion";
import LifepathDescription from "./components/LifepathDescription";

interface LifepathAnalysisProps {
  lifePath: number;
  isVisible: boolean;
}

const LifepathAnalysis = ({ lifePath, isVisible }: LifepathAnalysisProps) => {
  if (!isVisible) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full mt-8"
    >
      <div className="rounded-lg bg-white/5 border border-white/10">
        <LifepathDescription lifePath={lifePath} />
      </div>
    </motion.div>
  );
};

export default LifepathAnalysis;