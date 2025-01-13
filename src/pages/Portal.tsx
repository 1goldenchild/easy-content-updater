import { useState, useEffect } from "react";
import { toast } from "sonner";
import PortalHeader from "@/components/portal/PortalHeader";
import DateInputSection from "@/components/portal/DateInputSection";
import ResultsSection from "@/components/portal/ResultsSection";
import ProgressIndicator from "@/components/numerology/ProgressIndicator";
import { 
  calculateLifePath,
  getChineseZodiac 
} from "@/utils/numerologyCalculations";

const Portal = () => {
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState({
    lifePath: 0,
    chineseZodiac: ""
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCalculate = (date: Date) => {
    console.log("Calculating numerology for date:", date);
    
    const lifePath = calculateLifePath(date);
    const chineseZodiac = getChineseZodiac(date.getFullYear());

    console.log("Calculation results:", {
      lifePath,
      chineseZodiac
    });

    setResults({
      lifePath,
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
            <ResultsSection 
              results={results}
              isVisible={showResults}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portal;