import { motion } from "framer-motion";
import { Home, XCircle } from "lucide-react";

interface HousingAnalysisProps {
  chineseZodiac: string;
  isVisible: boolean;
}

const ZODIAC_CYCLE = [
  'Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake',
  'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'
];

const getOppositeZodiac = (zodiac: string): string => {
  const currentIndex = ZODIAC_CYCLE.indexOf(zodiac);
  // Get the sign 6 positions away (opposite)
  const oppositeIndex = (currentIndex + 6) % 12;
  return ZODIAC_CYCLE[oppositeIndex];
};

const getHousingYears = (zodiac: string) => {
  console.log("Analyzing housing years for zodiac:", zodiac);
  
  const currentYear = new Date().getFullYear();
  const years = [];
  const oppositeZodiac = getOppositeZodiac(zodiac);
  
  console.log("Opposite zodiac sign:", oppositeZodiac);
  
  // Generate years from 1925 to current year + 1
  for (let year = 1925; year <= currentYear + 1; year++) {
    const yearZodiac = getChineseZodiacForYear(year);
    const isGood = yearZodiac === zodiac;
    const isBad = yearZodiac === oppositeZodiac;
    
    if (isGood || isBad) {
      years.push({ year, isGood });
    }
  }
  
  return years;
};

const getChineseZodiacForYear = (year: number): string => {
  // Starting from 1924 (Rat year)
  const startYear = 1924;
  const zodiacIndex = (year - startYear) % 12;
  return ZODIAC_CYCLE[zodiacIndex];
};

const HousingAnalysis = ({ chineseZodiac, isVisible }: HousingAnalysisProps) => {
  if (!isVisible) return null;

  const housingYears = getHousingYears(chineseZodiac);
  const goodYears = housingYears.filter(y => y.isGood);
  const badYears = housingYears.filter(y => !y.isGood);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 p-6 bg-card rounded-lg border"
    >
      <h2 className="text-2xl font-semibold flex items-center gap-2">
        <Home className="w-6 h-6" />
        Energetic Properties of Houses
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-green-400 flex items-center gap-2">
            <Home className="w-5 h-5" />
            Best Years
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {goodYears.map(({ year }) => (
              <div
                key={year}
                className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 text-center"
              >
                {year}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-red-400 flex items-center gap-2">
            <XCircle className="w-5 h-5" />
            Years to Avoid
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {badYears.map(({ year }) => (
              <div
                key={year}
                className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-center"
              >
                {year}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HousingAnalysis;