import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { numerologyCompatibility } from "@/utils/numerologyCompatibility";

interface LoveCompatibilityProps {
  lifePathNumber: number;
}

const LoveCompatibility = ({ lifePathNumber }: LoveCompatibilityProps) => {
  const compatibility = numerologyCompatibility[lifePathNumber];

  if (!compatibility) return null;

  return (
    <div className="rounded-xl bg-gradient-to-br from-pink-500/30 to-rose-500/30 p-4">
      <h3 className="text-sm font-semibold text-white/90 mb-3 flex items-center gap-2">
        <Heart className="w-4 h-4 text-pink-400" />
        Love Compatibility
      </h3>

      <p className="text-xs text-white/70 mb-4">
        {compatibility.loveDescription}
      </p>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-pink-500" />
          <span className="text-xs text-white/70">Best Love Matches</span>
        </div>
        <div className="flex gap-2 flex-wrap">
          {compatibility.loveCompatible.map((num) => (
            <motion.div
              key={num}
              whileHover={{ scale: 1.05 }}
              className="w-10 h-8 rounded-lg bg-pink-500/20 border border-pink-500/30 flex items-center justify-center"
            >
              <span className="text-sm font-bold text-pink-300">{num}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoveCompatibility;