import { motion } from "framer-motion";
import { Gem } from "lucide-react";
import { Button } from "@/components/ui/button";
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

      <Button 
        variant="outline" 
        className="w-full bg-purple-500/20 border-purple-500/30 text-purple-200 hover:bg-purple-500/30"
      >
        Read More
      </Button>
    </motion.div>
  );
};

export default CrystalAnalysis;