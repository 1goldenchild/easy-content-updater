import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import LifepathAnalysis from "./LifepathAnalysis";
import PartialEnergyAnalysis from "./PartialEnergyAnalysis";
import AstrologyAnalysis from "./AstrologyAnalysis";
import CharacteristicsChart from "./CharacteristicsChart";
import GematriaAnalysis from "./GematriaAnalysis";
import CycleAnalysis from "./CycleAnalysis";
import EnergyAnalysis from "./EnergyAnalysis";
import SecretAnalysis from "./SecretAnalysis";
import CareerCompatibility from "./CareerCompatibility";
import LoveCompatibility from "./LoveCompatibility";
import HousingAnalysis from "./HousingAnalysis";
import CarCompatibility from "./CarCompatibility";
import CountryCompatibility from "./CountryCompatibility";
import ColorCompatibility from "./ColorCompatibility";
import CrystalAnalysis from "./CrystalAnalysis";

interface NumerologyResultsProps {
  lifePath: number;
  partialEnergy: number;
  secretNumber: number;
  chineseZodiac: string;
  isVisible: boolean;
}

const NumerologyResults = ({ 
  lifePath, 
  partialEnergy, 
  secretNumber, 
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

          {/* Lucky Number */}
          <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
            <p className="text-sm text-white/70">Lucky Number</p>
            <p className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]">
              7
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

        {/* Secret Number Section */}
        <div className="mt-6 p-6 rounded-xl bg-gradient-to-br from-amber-500/20 to-purple-500/20 border border-amber-500/30">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <h4 className="text-lg font-semibold text-white/90">Secret Number</h4>
              </div>
              <p className="text-sm text-white/70">
                Your exclusive Secret Number reveals hidden talents and destiny
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center px-4 py-2 rounded-lg bg-amber-500/20 border border-amber-500/30"
              >
                <span className="text-2xl font-bold bg-gradient-to-r from-amber-200 to-purple-400 bg-clip-text text-transparent">
                  {secretNumber}
                </span>
                <span className="ml-2 text-sm text-amber-200/80">Master Teacher</span>
              </motion.div>
            </div>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-500/20 to-purple-500/20 flex items-center justify-center"
            >
              <span className="text-3xl text-amber-200">✧</span>
            </motion.div>
          </div>
        </div>
      </div>

      <LifepathAnalysis lifePath={lifePath} isVisible={isVisible} />
      <PartialEnergyAnalysis partialEnergy={partialEnergy} isVisible={isVisible} />
      <GematriaAnalysis lifePath={lifePath} isVisible={isVisible} />
      <SecretAnalysis secretNumber={secretNumber} isVisible={isVisible} />
      <AstrologyAnalysis chineseZodiac={chineseZodiac} isVisible={isVisible} />
      <CycleAnalysis isVisible={isVisible} />
      <EnergyAnalysis isVisible={isVisible} />
      <CharacteristicsChart isVisible={isVisible} />
      <LoveCompatibility lifePathNumber={lifePath} />
      <CareerCompatibility lifePath={lifePath} isVisible={isVisible} />
      <HousingAnalysis lifePath={lifePath} isVisible={isVisible} />
      <CarCompatibility chineseZodiac={chineseZodiac} isVisible={isVisible} />
      <CountryCompatibility chineseZodiac={chineseZodiac} isVisible={isVisible} />
      <ColorCompatibility lifePath={lifePath} isVisible={isVisible} />
      <CrystalAnalysis lifePath={lifePath} isVisible={isVisible} />
    </motion.div>
  );
};

export default NumerologyResults;