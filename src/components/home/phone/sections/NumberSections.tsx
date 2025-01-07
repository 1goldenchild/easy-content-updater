import { motion } from "framer-motion";
import NumberSection from "../NumberSection";

const NumberSections = () => {
  return (
    <>
      <NumberSection
        id="lifepath"
        title="Life Path Number"
        number="7"
        subtitle="The Misunderstood Genius"
        gradientFrom="[#8B5CF6]"
        gradientTo="[#D946EF]"
      />

      <NumberSection
        id="partial"
        title="Partial Energy"
        number="4"
        subtitle="The Builder"
        gradientFrom="[#F97316]"
        gradientTo="[#D946EF]"
        delay={0.3}
      />

      <NumberSection
        id="secret"
        title="Secret Number"
        number="9"
        subtitle="The Humanitarian"
        gradientFrom="[#0EA5E9]"
        gradientTo="[#8B5CF6]"
        delay={0.6}
      />

      <NumberSection
        id="zodiac"
        title="Chinese Zodiac"
        number="龍"
        subtitle="Year of the Dragon"
        gradientFrom="[#F97316]"
        gradientTo="[#0EA5E9]"
        delay={0.9}
      />
    </>
  );
};

export default NumberSections;