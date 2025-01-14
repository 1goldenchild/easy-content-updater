import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const EnergySection = () => {
  return (
    <div className="rounded-xl bg-gradient-to-br from-emerald-500/30 to-blue-500/30 p-4 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-3">
        <Zap className="w-4 h-4 text-emerald-400" />
        <h3 className="text-sm font-semibold text-white">2025 Energy Analysis</h3>
      </div>

      <div className="mb-4">
        <div className="text-2xl font-bold text-white mb-1">9</div>
        <p className="text-xs text-white/70">Universal Year of Completion</p>
      </div>

      <Button
        disabled
        variant="secondary"
        className="w-full bg-white/10 hover:bg-white/20 text-white/70"
      >
        Read Full Analysis →
      </Button>
    </div>
  );
};

export default EnergySection;