import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { partialEnergyDescriptions } from "@/utils/numerologyDescriptions";

interface PartialEnergyAnalysisProps {
  partialEnergy: number;
  isVisible: boolean;
}

const PartialEnergyAnalysis = ({ partialEnergy, isVisible }: PartialEnergyAnalysisProps) => {
  if (!isVisible) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full mt-8"
    >
      <div className="rounded-lg bg-white/5 border border-white/10">
        <ScrollArea className="h-[600px] w-full">
          <div className="p-6 md:p-8 lg:p-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] mb-4">
                  Your Partial Energy
                </h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-white/80 leading-relaxed whitespace-pre-line text-lg">
                    {partialEnergyDescriptions[partialEnergy] || "Invalid partial energy number"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </motion.div>
  );
};

export default PartialEnergyAnalysis;