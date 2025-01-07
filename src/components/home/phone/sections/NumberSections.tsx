import { motion } from "framer-motion";
import NumberSection from "../NumberSection";

const NumberSections = () => {
  return (
    <div className="relative">
      <div className="grid grid-cols-2 gap-3">
        <NumberSection
          id="lifepath"
          title="Life Path Number"
          number="7"
          subtitle={<>The Misunderstood Genius <span className="text-[10px] text-white/60 block mt-1">Read Now →</span></>}
          gradientFrom="[#8B5CF6]"
          gradientTo="[#D946EF]"
        />

        <NumberSection
          id="partial"
          title="Partial Energy"
          number="4"
          subtitle={<>The Builder <span className="text-[10px] text-white/60 block mt-1">Read Now →</span></>}
          gradientFrom="[#F97316]"
          gradientTo="[#D946EF]"
        />

        <NumberSection
          id="secret"
          title="Secret Number"
          number="9"
          subtitle={<>The Humanitarian <span className="text-[10px] text-white/60 block mt-1">Read Now →</span></>}
          gradientFrom="[#0EA5E9]"
          gradientTo="[#8B5CF6]"
        />

        <NumberSection
          id="zodiac"
          title="Chinese Zodiac"
          number="龍"
          subtitle={<>Year of the Dragon <span className="text-[10px] text-white/60 block mt-1">Read Now →</span></>}
          gradientFrom="[#F97316]"
          gradientTo="[#0EA5E9]"
        />
      </div>

      {/* Diagonal lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Line from top-left to bottom-right */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[15%] left-[45%] w-[10%] h-[70%] bg-gradient-to-b from-white/20 to-white/10 rotate-45 rounded-full blur-sm" />
        </div>
        
        {/* Line from top-right to bottom-left */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[15%] left-[45%] w-[10%] h-[70%] bg-gradient-to-b from-white/20 to-white/10 -rotate-45 rounded-full blur-sm" />
        </div>
      </div>
    </div>
  );
};

export default NumberSections;