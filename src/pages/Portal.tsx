import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Share2 } from "lucide-react";
import PortalHeader from "@/components/portal/PortalHeader";
import DateInputSection from "@/components/portal/DateInputSection";
import ResultsSection from "@/components/portal/ResultsSection";
import ProgressIndicator from "@/components/numerology/ProgressIndicator";
import ExportButton from "@/components/numerology/ExportButton";
import { Button } from "@/components/ui/button";
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

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'My Numerology Analysis',
          text: `Life Path: ${results.lifePath}\nPartial Energy: ${results.partialEnergy}\nSecret Number: ${results.secretNumber}\nChinese Zodiac: ${results.chineseZodiac}`,
          url: window.location.href
        });
        toast.success("Analysis shared successfully!");
      } else {
        // Fallback for browsers that don't support the Web Share API
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Link copied to clipboard!");
      }
    } catch (error) {
      console.error("Error sharing:", error);
      toast.error("Could not share the analysis");
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#221F26]">
      <div id="portal-content" className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center">
          {showResults && <ProgressIndicator />}
          <div className="w-full space-y-8">
            <PortalHeader />
            <DateInputSection onCalculate={handleCalculate} />
            
            {selectedDate && (
              <div className="space-y-6">
                <ResultsSection 
                  results={results}
                  dateOfBirth={selectedDate}
                  isVisible={showResults}
                />
                
                {showResults && (
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                    <ExportButton 
                      lifePath={results.lifePath}
                      partialEnergy={results.partialEnergy}
                      secretNumber={results.secretNumber}
                      chineseZodiac={results.chineseZodiac}
                      dateOfBirth={selectedDate}
                    />
                    <Button
                      onClick={handleShare}
                      className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2"
                    >
                      <Share2 className="w-4 h-4" />
                      Share Analysis
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portal;