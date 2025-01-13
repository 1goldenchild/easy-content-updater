import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Hash } from "lucide-react";

const GematriaSection = () => {
  return (
    <div className="rounded-xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 p-4 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-3">
        <Hash className="w-4 h-4 text-purple-400" />
        <h3 className="text-sm font-semibold text-white">Gematria of the number 6</h3>
      </div>

      <div className="mb-4">
        <div className="text-2xl font-bold text-white mb-1">8</div>
        <p className="text-xs text-white/70">Your Gematria Number</p>
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

export default GematriaSection;