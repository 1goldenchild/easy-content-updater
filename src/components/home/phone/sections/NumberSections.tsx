import { motion } from "framer-motion";
import NumberSection from "../NumberSection";

const NumberSections = () => {
  return (
    <div id="numbers" className="grid grid-cols-2 gap-3">
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
  );
};

export default NumberSections;