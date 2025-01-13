import { motion } from "framer-motion";
import { Home, XCircle } from "lucide-react";

interface HousingAnalysisProps {
  lifePath: number;
  isVisible: boolean;
}

const getHousingYears = (lifePath: number) => {
  const currentYear = new Date().getFullYear();
  const years = [];
  
  // Generate next 10 years
  for (let i = 0; i < 10; i++) {
    const year = currentYear + i;
    const yearSum = year.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    const reducedYear = yearSum > 9 ? yearSum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0) : yearSum;
    
    // Check compatibility with life path
    const isGood = (reducedYear + lifePath) % 3 === 0;
    years.push({ year, isGood });
  }
  
  return years;
};

const HousingAnalysis = ({ lifePath, isVisible }: HousingAnalysisProps) => {
  if (!isVisible) return null;

  const housingYears = getHousingYears(lifePath);
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
        Housing Years Analysis
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-green-400 flex items-center gap-2">
            <Home className="w-5 h-5" />
            Best Years to Move
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
            Years to Avoid Moving
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

      <p className="text-sm text-muted-foreground">
        Based on your Life Path Number {lifePath}, these years are calculated using numerological principles 
        and their vibrational compatibility with your personal energy.
      </p>
    </motion.div>
  );
};

export default HousingAnalysis;