import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LoveCompatibilityProps {
  lifePathNumber: number;
}

const LoveCompatibility = ({ lifePathNumber }: LoveCompatibilityProps) => {
  return (
    <div className="rounded-xl bg-gradient-to-br from-[#2A2F3C] to-[#1A1F2C] p-6 border border-white/5">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-pink-500/10">
          <Heart className="w-5 h-5 text-pink-400" />
        </div>
        <h3 className="text-lg font-semibold text-white/90">Love Compatibility</h3>
      </div>

      <Button 
        variant="outline" 
        className="w-full bg-white/5 hover:bg-white/10"
      >
        Read More
      </Button>
    </div>
  );
};

export default LoveCompatibility;