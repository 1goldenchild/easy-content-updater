import { motion } from "framer-motion";
import LifepathAnalysis from "./LifepathAnalysis";
import PartialEnergyAnalysis from "./PartialEnergyAnalysis";
import AstrologyAnalysis from "./AstrologyAnalysis";
import CharacteristicsChart from "./CharacteristicsChart";
import GematriaAnalysis from "./GematriaAnalysis";
import CycleAnalysis from "./CycleAnalysis";
import EnergyAnalysis from "./EnergyAnalysis";
import SecretAnalysis from "./SecretAnalysis";
import LuckyNumberAnalysis from "./LuckyNumberAnalysis";
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
  partialEnergy: number;
  secretNumber: number;
  chineseZodiac: string;
  dateOfBirth: Date;
  isVisible: boolean;
}

const NumerologyResults = ({ 
  lifePath, 
  partialEnergy, 
  secretNumber, 
  chineseZodiac,
  dateOfBirth,
  isVisible 
}: NumerologyResultsProps) => {
  if (!isVisible) return null;

  console.log("Rendering NumerologyResults with:", {
    lifePath,
    partialEnergy,
    secretNumber,
    chineseZodiac,
    dateOfBirth
  });

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
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
          {/* Life Path Number */}
          <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
            <p className="text-sm text-white/70">Life Path Number</p>
            <p className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]">
              {lifePath}
            </p>
          </div>

          {/* Partial Energy */}
          <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
            <p className="text-sm text-white/70">Partial Energy</p>
            <p className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]">
              {partialEnergy}
            </p>
          </div>

          {/* Secret Number */}
          <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
            <p className="text-sm text-white/70">Secret Number</p>
            <p className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]">
              {secretNumber}
            </p>
          </div>

          {/* Chinese Zodiac */}
          <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
            <p className="text-sm text-white/70">Chinese Zodiac</p>
            <p className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]">
              {chineseZodiac}
            </p>
          </div>
        </div>
      </div>
      
      <CharacteristicsChart lifePath={lifePath} isVisible={isVisible} />
      <LifepathAnalysis lifePath={lifePath} isVisible={isVisible} />
      <PartialEnergyAnalysis partialEnergy={partialEnergy} isVisible={isVisible} />
      <GematriaAnalysis lifePath={lifePath} isVisible={isVisible} />
      <CycleAnalysis dateOfBirth={dateOfBirth} isVisible={isVisible} />
      <EnergyAnalysis isVisible={isVisible} />
      <SecretAnalysis secretNumber={secretNumber} isVisible={isVisible} />
      <LuckyNumberAnalysis dateOfBirth={dateOfBirth} isVisible={isVisible} />
      <CompatibilityChart lifePath={lifePath} isVisible={isVisible} />
      <LoveCompatibility lifePathNumber={lifePath} />
      <OccupationGuidance lifePath={lifePath} isVisible={isVisible} />
      <HousingAnalysis chineseZodiac={chineseZodiac} isVisible={isVisible} />
      <CarCompatibility chineseZodiac={chineseZodiac} isVisible={isVisible} />
      <CountryCompatibility chineseZodiac={chineseZodiac} isVisible={isVisible} />
      <ColorCompatibility lifePath={lifePath} isVisible={isVisible} />
      <CrystalAnalysis lifePath={lifePath} isVisible={isVisible} />
    </motion.div>
  );
};

export default NumerologyResults;
