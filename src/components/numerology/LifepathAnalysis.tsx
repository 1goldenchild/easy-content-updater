import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"
import { getLifepathDescription } from "@/utils/numerologyCalculations"

interface LifepathAnalysisProps {
  lifePath: number
}

const LifepathAnalysis = ({ lifePath }: LifepathAnalysisProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8 w-full"
    >
      <div className="bg-white/5 border border-white/10 p-6">
        <h3 className="text-2xl font-bold text-white/90 mb-4">Your Lifepath Analysis</h3>
        <ScrollArea className="h-[500px]">
          <div className="prose prose-invert max-w-none">
            <p className="text-white/80 leading-relaxed whitespace-pre-line text-lg">
              {getLifepathDescription(lifePath)}
            </p>
          </div>
        </ScrollArea>
      </div>
    </motion.div>
  );
};

export default LifepathAnalysis;