import { useState } from "react";
import DateSelector from "@/components/numerology/DateSelector";
import NumerologyResults from "@/components/numerology/NumerologyResults";
import { calculateLifePath, calculatePartialEnergy, calculateSecretNumber, getChineseZodiac } from "@/utils/numerologyCalculations";

const Portal = () => {
  const [date, setDate] = useState<Date>();
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState({
    lifePath: 0,
    partialEnergy: 0,
    secretNumber: 0,
    chineseZodiac: "",
  });

  const handleCalculate = () => {
    if (!date) return;

    const lifePath = calculateLifePath(date);
    const partialEnergy = calculatePartialEnergy(date.getDate());
    const secretNumber = calculateSecretNumber(date);
    const chineseZodiac = getChineseZodiac(date.getFullYear());

    setResults({
      lifePath,
      partialEnergy,
      secretNumber,
      chineseZodiac,
    });
    setShowResults(true);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white/5 p-8 rounded-lg border border-white/10">
            <h2 className="text-xl font-semibold text-white/90 mb-6 text-center">
              Calculate Your Numbers
            </h2>
            <DateSelector 
              date={date} 
              setDate={setDate} 
              onCalculate={handleCalculate}
            />
          </div>
        </div>

        {date && (
          <NumerologyResults
            lifePath={results.lifePath}
            partialEnergy={results.partialEnergy}
            secretNumber={results.secretNumber}
            chineseZodiac={results.chineseZodiac}
            dateOfBirth={date}
            isVisible={showResults}
          />
        )}
      </div>
    </div>
  );
};

export default Portal;