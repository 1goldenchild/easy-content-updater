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
            
            {/* eBooks Section */}
            <div className="mt-16 p-8 rounded-lg bg-gradient-to-r from-[#2A2F3C] to-[#221F26] border border-[#3A3F4C] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shine"></div>
              
              <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-text-shimmer">
                Free Numerology eBooks
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a 
                  href="https://numerology33.com/portal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#3A3F4C] to-[#2A2F3C] hover:from-[#4A4F5C] hover:to-[#3A3F4C] transition-all duration-300 text-white/90 hover:text-white flex items-center gap-2 group"
                >
                  <span className="text-lg">📚</span>
                  The Golden Numerology eBook
                </a>
                
                <a 
                  href="https://d2saw6je89goi1.cloudfront.net/uploads/digital_asset/file/1195755/get-rich-using-numerology-ebook-2023-editon.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#3A3F4C] to-[#2A2F3C] hover:from-[#4A4F5C] hover:to-[#3A3F4C] transition-all duration-300 text-white/90 hover:text-white flex items-center gap-2 group"
                >
                  <span className="text-lg">💰</span>
                  Get Rich Using Numerology
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portal;