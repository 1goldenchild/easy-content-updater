import { useState, useEffect } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
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

const MyNumerology = () => {
  const [showResults, setShowResults] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [results, setResults] = useState({
    lifePath: 0,
    partialEnergy: 0,
    secretNumber: 0,
    chineseZodiac: ""
  });

  useEffect(() => {
    // Check for stored DOB on component mount
    const storedDOB = localStorage.getItem('userDOB');
    if (storedDOB) {
      console.log("Found stored DOB:", storedDOB);
      // Parse the date string into a Date object
      const [year, month, day] = storedDOB.split('-').map(Number);
      const date = new Date(year, month - 1, day); // month is 0-indexed in JS
      console.log("Parsed date components:", { year, month, day });
      console.log("Converted to Date object:", date);
      console.log("Date string representation:", date.toISOString());
      setSelectedDate(date);
      handleCalculate(date);
      // Clear the stored DOB after using it
      localStorage.removeItem('userDOB');
    }
  }, []);

  const handleCalculate = (date: Date) => {
    console.log("Calculating numerology for date:", date);
    console.log("Date components:", {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    });
    
    setSelectedDate(date);
    
    const lifePath = calculateLifePath(date);
    const partialEnergy = calculatePartialEnergy(date.getDate());
    const secretNumber = calculateSecretNumber(date);
    const chineseZodiac = getChineseZodiac(date.getFullYear());

    console.log("Calculated numbers:", {
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
            {!showResults && (
              <DateInputSection onCalculate={handleCalculate} />
            )}
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

export default MyNumerology;