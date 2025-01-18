import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { numerologyCompatibility } from "@/utils/numerologyCompatibility";

interface LoveCompatibilityProps {
  lifePathNumber: number;
}

const LoveCompatibility = ({ lifePathNumber }: LoveCompatibilityProps) => {
  const compatibility = numerologyCompatibility[lifePathNumber];

  if (!compatibility) return null;

  return (
    <div className="rounded-xl bg-gradient-to-br from-[#2A2F3C] to-[#1A1F2C] p-6 border border-white/5">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-pink-500/10">
          <Heart className="w-5 h-5 text-pink-400" />
        </div>
        <h3 className="text-lg font-semibold text-white/90">Love Compatibility</h3>
      </div>

      <p className="text-sm leading-relaxed text-white/70 mb-6">
        {compatibility.loveDescription}
      </p>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-pink-400" />
          <span className="text-sm font-medium text-white/80">Best Love Matches</span>
        </div>
        
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
          {compatibility.loveCompatible.map((num) => (
            <motion.div
              key={num}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg blur-sm group-hover:blur-md transition-all" />
              <div className="relative h-12 rounded-lg bg-black/20 border border-white/10 flex items-center justify-center group-hover:border-pink-500/30 transition-colors">
                <span className="text-lg font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                  {num}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoveCompatibility;