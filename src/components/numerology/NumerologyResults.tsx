import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import LifepathAnalysis from "./LifepathAnalysis";
import AstrologyAnalysis from "./AstrologyAnalysis";
import CharacteristicsChart from "./CharacteristicsChart";
import GematriaAnalysis from "./GematriaAnalysis";
import CycleAnalysis from "./CycleAnalysis";
import EnergyAnalysis from "./EnergyAnalysis";
import LoveCompatibility from "./LoveCompatibility";
import OccupationGuidance from "./OccupationGuidance";
import HousingAnalysis from "./HousingAnalysis";
import CarCompatibility from "./CarCompatibility";
import CountryCompatibility from "./CountryCompatibility";
import ColorCompatibility from "./ColorCompatibility";
import CrystalAnalysis from "./CrystalAnalysis";
import CompatibilityChart from "./CompatibilityChart";

interface NumerologyResultsProps {
  lifePath: number;
  chineseZodiac: string;
  isVisible: boolean;
}

const NumerologyResults = ({ 
  lifePath,
  chineseZodiac,
  isVisible 
}: NumerologyResultsProps) => {
  if (!isVisible) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-4"
    >
      <div className="p-4 rounded-lg bg-white/5 border border-white/10">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white/90">Your Numerology Profile</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-4 pt-4">
          {/* Life Path Number */}
          <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
            <p className="text-sm text-white/70">Life Path Number</p>
            <p className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]">
              {lifePath}
            </p>
          </div>

          {/* Chinese Zodiac */}
          <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
            <p className="text-sm text-white/70">Chinese Zodiac</p>
            <div className="flex flex-col items-center">
              <p className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]">
                {chineseZodiac}
              </p>
              <p className="text-xs text-white/50 mt-1">Year of the {chineseZodiac}</p>
            </div>
          </div>
        </div>
      </div>

      <CharacteristicsChart isVisible={isVisible} lifePath={lifePath} />
      <LifepathAnalysis lifePath={lifePath} isVisible={isVisible} />
      <GematriaAnalysis lifePath={lifePath} isVisible={isVisible} />
      <AstrologyAnalysis chineseZodiac={chineseZodiac} isVisible={isVisible} />
      <CycleAnalysis isVisible={isVisible} />
      <EnergyAnalysis isVisible={isVisible} />
      <CompatibilityChart lifePath={lifePath} isVisible={isVisible} />
      <LoveCompatibility lifePathNumber={lifePath} />
      <OccupationGuidance lifePath={lifePath} isVisible={isVisible} />
      <HousingAnalysis lifePath={lifePath} isVisible={isVisible} />
      <CarCompatibility chineseZodiac={chineseZodiac} isVisible={isVisible} />
      <CountryCompatibility chineseZodiac={chineseZodiac} isVisible={isVisible} />
      <ColorCompatibility lifePath={lifePath} isVisible={isVisible} />
      <CrystalAnalysis lifePath={lifePath} isVisible={isVisible} />
    </motion.div>
  );
};

export default NumerologyResults;