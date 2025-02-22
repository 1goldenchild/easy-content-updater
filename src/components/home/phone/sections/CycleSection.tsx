import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Infinity } from "lucide-react";
import { calculateCycleNumber } from "@/utils/numerologyCalculations";

interface CycleSectionProps {
  dateOfBirth: Date;
}

const CycleSection = ({ dateOfBirth }: CycleSectionProps) => {
  const cycleNumber = calculateCycleNumber(dateOfBirth);

  return (
    <div className="rounded-xl bg-gradient-to-br from-blue-500/30 to-cyan-500/30 p-4 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-3">
        <Infinity className="w-4 h-4 text-blue-400" />
        <h3 className="text-sm font-semibold text-white">Cycle Analysis</h3>
      </div>
      
      <div className="mb-4">
        <div className="text-2xl font-bold text-white mb-1">{cycleNumber}</div>
        <p className="text-xs text-white/70">Your Current Cycle Number</p>
      </div>

      <Button
        variant="secondary"
        className="w-full bg-white/10 hover:bg-white/20 text-white/70"
      >
        Read Full Analysis →
      </Button>
    </div>
  );
};

export default CycleSection;