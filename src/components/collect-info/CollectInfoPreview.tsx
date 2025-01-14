import { useState } from "react";
import { motion } from "framer-motion";
import NumberSections from "../home/phone/sections/NumberSections";
import CoreTraits from "../home/phone/sections/CoreTraits";
import CareerPaths from "../home/phone/sections/CareerPaths";
import YearlyForecast from "../home/phone/sections/YearlyForecast";
import LoveCompatibility from "../home/phone/sections/LoveCompatibility";
import CountryCompatibility from "../home/phone/sections/CountryCompatibility";
import CycleSection from "../home/phone/sections/CycleSection";

const CollectInfoPreview = () => {
  // For demo purposes
  const demoDate = new Date(2000, 0, 1);
  const lifePathNumber = 1;

  return (
    <div className="relative w-full max-w-[300px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full aspect-[9/19.5] bg-[#1A1F2C] rounded-[3rem] border-4 border-gray-800 shadow-2xl overflow-hidden"
      >
        {/* Dynamic Island */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[84px] h-[25px] bg-black rounded-[20px] z-50" />

        {/* Preview Label */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 z-30">
          <div className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <p className="text-xs font-medium text-white/90">Preview Analysis</p>
          </div>
        </div>

        {/* Screen Content */}
        <div className="absolute inset-0 z-10 overflow-y-auto scrollbar-hide">
          <div className="pt-24 pb-12 px-4 space-y-6">
            <NumberSections />
            <CoreTraits />
            <CareerPaths />
            <CycleSection dateOfBirth={demoDate} />
            <LoveCompatibility lifePathNumber={lifePathNumber} />
            <CountryCompatibility />
            <YearlyForecast />
          </div>
        </div>

        {/* Scroll Fade Overlays */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#1A1F2C] to-transparent pointer-events-none z-30" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#1A1F2C] to-transparent pointer-events-none z-30" />

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute -left-8 -bottom-8 w-24 h-24 bg-gradient-to-r from-[#8B5CF6]/30 to-[#D946EF]/30 rounded-full blur-xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-r from-[#0EA5E9]/30 to-[#8B5CF6]/30 rounded-full blur-xl"
        />
      </motion.div>
    </div>
  );
};

export default CollectInfoPreview;