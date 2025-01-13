import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface EnergyAnalysisProps {
  isVisible: boolean;
}

const EnergyAnalysis = ({ isVisible }: EnergyAnalysisProps) => {
  if (!isVisible) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full mt-8"
    >
      <div className="rounded-lg bg-white/5 border border-white/10">
        <ScrollArea className="h-[400px] w-full">
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-emerald-400" />
              <h3 className="text-2xl font-bold text-white/90">2025 Energy Analysis</h3>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-white/70 text-lg">
                Your 2025 Energy analysis will appear here. This section will reveal how the universal energy of 2025 will influence your personal journey and growth.
              </p>
            </div>
          </div>
        </ScrollArea>
      </div>
    </motion.div>
  );
};

export default EnergyAnalysis;