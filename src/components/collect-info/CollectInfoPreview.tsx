import { useState } from "react";
import { motion } from "framer-motion";
import NumberSections from "../home/phone/sections/NumberSections";
import CoreTraits from "../home/phone/sections/CoreTraits";
import CareerPaths from "../home/phone/sections/CareerPaths";
import YearlyForecast from "../home/phone/sections/YearlyForecast";
import LoveCompatibility from "../home/phone/sections/LoveCompatibility";
import CountryCompatibility from "../home/phone/sections/CountryCompatibility";
import CycleSection from "../home/phone/sections/CycleSection";
import EnergySection from "../home/phone/sections/EnergySection";
import SecretSection from "../home/phone/sections/SecretSection";
import ColorCompatibility from "@/components/numerology/ColorCompatibility";
import CrystalAnalysis from "@/components/numerology/CrystalAnalysis";
import HousingAnalysis from "@/components/numerology/HousingAnalysis";
import CarCompatibilitySection from "../home/phone/sections/CarCompatibilitySection";
import TechCompatibilitySection from "../home/phone/sections/TechCompatibilitySection";
import MysteryBonus from "../home/phone/sections/MysteryBonus";

const CollectInfoPreview = () => {
  // For demo purposes
  const demoDate = new Date(2000, 0, 1);
  const lifePathNumber = 1;
  const chineseZodiac = "Goat";

  return (
    <div className="relative w-full max-w-[300px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full aspect-[9/19.5] bg-[#1A1F2C] rounded-[3rem] border-4 border-gray-800 shadow-2xl overflow-hidden backdrop-blur-xl"
      >
        {/* Dynamic Island */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[84px] h-[25px] bg-black rounded-[20px] z-50" />

        {/* Preview Label */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-12 left-1/2 -translate-x-1/2 z-30"
        >
          <div className="relative">
            <div className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <p className="text-xs font-medium text-white">Preview Analysis</p>
            </div>
            {/* Decorative elements */}
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-4 h-[1px] bg-gradient-to-r from-transparent to-white/30" />
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-4 h-[1px] bg-gradient-to-l from-transparent to-white/30" />
          </div>

          {/* Word Count Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-3 relative"
          >
            <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500/80 to-fuchsia-500/80 backdrop-blur-sm border border-white/30 shadow-lg shadow-purple-500/20">
              <p className="text-xs font-semibold text-white flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                On average, 3500 words
              </p>
            </div>
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine rounded-full" />
          </motion.div>
        </motion.div>
        
        {/* Screen Content */}
        <div className="absolute inset-0 z-10 overflow-y-auto scrollbar-hide">
          <div className="pt-32 pb-12 px-4 space-y-6">
            <NumberSections />
            <CoreTraits />
            <CareerPaths />
            <ColorCompatibility lifePath={lifePathNumber} isVisible={true} />
            <CrystalAnalysis lifePath={lifePathNumber} isVisible={true} />
            <HousingAnalysis chineseZodiac={chineseZodiac} isVisible={true} isPreview={true} />
            <CycleSection dateOfBirth={demoDate} />
            <EnergySection />
            <SecretSection />
            <LoveCompatibility lifePathNumber={lifePathNumber} />
            <CountryCompatibility />
            <CarCompatibilitySection />
            <TechCompatibilitySection />
            <YearlyForecast />
            <MysteryBonus />
          </div>
        </div>

        {/* Scroll Fade Overlays */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#1A1F2C] to-transparent pointer-events-none z-20" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#1A1F2C] to-transparent pointer-events-none z-20" />

        {/* Remove the decorative elements that were causing the weird color in the corner */}
      </motion.div>
    </div>
  );
};

export default CollectInfoPreview;