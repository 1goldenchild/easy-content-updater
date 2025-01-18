import { useState, useEffect } from "react";
import { toast } from "sonner";
import PortalHeader from "@/components/portal/PortalHeader";
import DateInputSection from "@/components/portal/DateInputSection";
import ResultsSection from "@/components/portal/ResultsSection";
import ProgressIndicator from "@/components/numerology/ProgressIndicator";
import { supabase } from "@/integrations/supabase/client";
import { 
  calculateLifePath, 
  calculatePartialEnergy, 
  calculateSecretNumber, 
  getChineseZodiac 
} from "@/utils/numerologyCalculations";

const NumerologyAccess = () => {
  const [showResults, setShowResults] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState({
    lifePath: 0,
    partialEnergy: 0,
    secretNumber: 0,
    chineseZodiac: ""
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEmailSubmit = async (submittedEmail: string) => {
    setIsLoading(true);
    console.log("Checking access for email:", submittedEmail);

    try {
      const { data: readings, error } = await supabase
        .from('user_readings')
        .select('*')
        .eq('email', submittedEmail)
        .single();

      if (error) {
        console.error("Error fetching reading:", error);
        toast.error("Unable to find your reading. Please check your email or contact support.");
        setIsLoading(false);
        return;
      }

      if (!readings) {
        toast.error("No reading found for this email.");
        setIsLoading(false);
        return;
      }

      console.log("Found reading:", readings);
      setEmail(submittedEmail);
      const birthDate = new Date(readings.date_of_birth);
      handleCalculate(birthDate);
    } catch (err) {
      console.error("Error:", err);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

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
    toast.success("Your numerology reading is ready!");
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center">
          {showResults && <ProgressIndicator />}
          <div className="w-full space-y-8">
            <PortalHeader />
            {!showResults && (
              <DateInputSection 
                onEmailSubmit={handleEmailSubmit} 
                isLoading={isLoading}
              />
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

export default NumerologyAccess;