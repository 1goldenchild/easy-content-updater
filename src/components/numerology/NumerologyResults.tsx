import { motion } from "framer-motion";

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
      className="space-y-4 p-4 rounded-lg bg-white/5 border border-white/10"
    >
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white/90">Your Numerology Profile</h3>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
        <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
          <p className="text-sm text-white/70">Life Path Number</p>
          <p className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]">
            {lifePath}
          </p>
        </div>
        <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
          <p className="text-sm text-white/70">Partial Energy</p>
          <p className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]">
            {partialEnergy}
          </p>
        </div>
        <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
          <p className="text-sm text-white/70">Secret Number</p>
          <p className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]">
            {secretNumber}
          </p>
        </div>
        <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
          <p className="text-sm text-white/70">Chinese Zodiac</p>
          <p className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]">
            {chineseZodiac}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default NumerologyResults;