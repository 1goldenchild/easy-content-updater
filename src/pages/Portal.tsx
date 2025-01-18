import { useState } from "react";
import PortalHeader from "@/components/portal/PortalHeader";
import ResultsSection from "@/components/portal/ResultsSection";
import CompatibilitySection from "@/components/portal/CompatibilitySection";
import DateInputSection from "@/components/portal/DateInputSection";

const Portal = () => {
  const [results, setResults] = useState({
    lifePath: 0,
    partialEnergy: 0,
    secretNumber: 0,
    chineseZodiac: "",
  });
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        <PortalHeader />
        <DateInputSection
          onResultsCalculated={(calculatedResults, selectedDate) => {
            setResults(calculatedResults);
            setDateOfBirth(selectedDate);
            setShowResults(true);
          }}
        />
        {dateOfBirth && (
          <>
            <ResultsSection
              results={results}
              dateOfBirth={dateOfBirth}
              isVisible={showResults}
            />
            <CompatibilitySection
              lifePath={results.lifePath}
              isVisible={showResults}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Portal;