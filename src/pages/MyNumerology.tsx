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
      const date = new Date(storedDOB);
      console.log("Converted to Date object:", date);
      setSelectedDate(date);
      handleCalculate(date);
      // Clear the stored DOB after using it
      localStorage.removeItem('userDOB');
    }
  }, []);

  const handleCalculate = (date: Date) => {
    console.log("Calculating numerology for date:", date);
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

  const handleEbookDownload = (url: string) => {
    window.open(url, '_blank');
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
            
            {showResults && (
              <div className="mt-16 p-8 rounded-lg bg-gradient-to-r from-[#2A2F3C] to-[#221F26] border border-[#FFD700]/20">
                <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent">
                  Offered Numerology eBooks
                </h2>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <button 
                    onClick={() => handleEbookDownload("https://d2saw6je89goi1.cloudfront.net/uploads/digital_asset/file/1195754/the-golden-numerology-guide-2023-edition..pdf")}
                    className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#3A3F4C] to-[#2A2F3C] hover:from-[#FFD700]/20 hover:to-[#FDB931]/20 transition-all duration-300 text-white/90 hover:text-[#FFD700] border border-[#FFD700]/20 hover:border-[#FFD700]/40 flex items-center gap-2"
                  >
                    <span>📚</span>
                    The Golden Numerology Guide
                  </button>
                  
                  <button 
                    onClick={() => handleEbookDownload("https://d2saw6je89goi1.cloudfront.net/uploads/digital_asset/file/1195755/get-rich-using-numerology-ebook-2023-editon.pdf")}
                    className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#3A3F4C] to-[#2A2F3C] hover:from-[#FFD700]/20 hover:to-[#FDB931]/20 transition-all duration-300 text-white/90 hover:text-[#FFD700] border border-[#FFD700]/20 hover:border-[#FFD700]/40 flex items-center gap-2"
                  >
                    <span>💰</span>
                    Get Rich Using Numerology
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyNumerology;