import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import DateSelector from "@/components/numerology/DateSelector";
import NumerologyResults from "@/components/numerology/NumerologyResults";
import { calculateLifePath, calculatePartialEnergy, calculateSecretNumber, getChineseZodiac } from "@/utils/numerologyCalculations";
import { supabase } from "@/integrations/supabase/client";

const MyNumerology = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [showResults, setShowResults] = useState(false);
  const [lifePath, setLifePath] = useState<number>();
  const [partialEnergy, setPartialEnergy] = useState<number>();
  const [secretNumber, setSecretNumber] = useState<number>();
  const [chineseZodiac, setChineseZodiac] = useState<string>("");
  const [showDateSelector, setShowDateSelector] = useState(true);
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    // Check for stored DOB from auth flow
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
      setShowDateSelector(false); // Hide the date selector
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
    console.log("Calculated Life Path:", lifePath);
    setLifePath(lifePath);

    const partialEnergy = calculatePartialEnergy(date.getDate()); // Pass only the day
    console.log("Calculated Partial Energy:", partialEnergy);
    setPartialEnergy(partialEnergy);

    const secretNumber = calculateSecretNumber(date);
    console.log("Calculated Secret Number:", secretNumber);
    setSecretNumber(secretNumber);

    const zodiac = getChineseZodiac(date.getFullYear());
    console.log("Calculated Chinese Zodiac:", zodiac);
    setChineseZodiac(zodiac);

    setShowResults(true);
    toast.toast({
      title: "Success!",
      description: "Your numerology reading is ready.",
    });
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8">
          <div className="space-y-8">
            {showDateSelector && (
              <DateSelector
                date={selectedDate}
                setDate={(date) => date && handleCalculate(date)}
              />
            )}

            {showResults && lifePath && partialEnergy && secretNumber && selectedDate && (
              <NumerologyResults
                lifePath={lifePath}
                partialEnergy={partialEnergy}
                secretNumber={secretNumber}
                chineseZodiac={chineseZodiac}
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