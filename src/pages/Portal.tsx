import { useState, useEffect } from "react";
import { toast } from "sonner";
import PortalHeader from "@/components/portal/PortalHeader";
import DateInputSection from "@/components/portal/DateInputSection";
import ResultsSection from "@/components/portal/ResultsSection";
import ProgressIndicator from "@/components/numerology/ProgressIndicator";
import { 
  calculateLifePath, 
  calculatePartialEnergy, 
  calculateSecretNumber, 
  getChineseZodiac 
} from "@/utils/numerologyCalculations";

const Portal = () => {
  const [showResults, setShowResults] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [results, setResults] = useState({
    lifePath: 0,
    partialEnergy: 0,
    secretNumber: 0,
    chineseZodiac: ""
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCalculate = (date: Date) => {
    console.log("Calculating numerology for date:", date);
    setSelectedDate(date);
    
    const lifePath = calculateLifePath(date);
    const partialEnergy = calculatePartialEnergy(date.getDate());
    const secretNumber = calculateSecretNumber(date);
    const chineseZodiac = getChineseZodiac(date.getFullYear());

    console.log("Calculation results:", {
      lifePath,
      partialEnergy,
      secretNumber,
      chineseZodiac
    });

    setResults({
      lifePath,
      partialEnergy,
      secretNumber,
      chineseZodiac
    });
    setShowResults(true);
    toast.success("Calculation complete!");
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center">
          {showResults && <ProgressIndicator />}
          <div className="w-full space-y-8">
            <PortalHeader />
            <DateInputSection onCalculate={handleCalculate} />
            {selectedDate && (
              <ResultsSection 
                results={results}
                dateOfBirth={selectedDate}
                isVisible={showResults}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portal;