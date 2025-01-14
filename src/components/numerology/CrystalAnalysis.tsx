import { motion } from "framer-motion";
import { Gem } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CrystalAnalysisProps {
  lifePath: number;
  isVisible: boolean;
}

const CrystalAnalysis = ({ lifePath, isVisible }: CrystalAnalysisProps) => {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8"
    >
      <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold flex items-center gap-2 text-white">
            <Gem className="w-6 h-6 text-purple-400" />
            Your Crystal Guide
          </h2>
        </div>

        <Button 
          variant="outline" 
          className="w-full mt-4 bg-white/5 hover:bg-white/10"
        >
          Read More
        </Button>
      </div>
    </motion.div>
  );
};

export default CrystalAnalysis;