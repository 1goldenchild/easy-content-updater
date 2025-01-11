import NumerologyResults from "@/components/numerology/NumerologyResults";
import CompatibilitySection from "@/components/portal/CompatibilitySection";
import OccupationGuidance from "@/components/numerology/OccupationGuidance";
import CountryCompatibility from "@/components/numerology/CountryCompatibility";
import CarCompatibility from "@/components/numerology/CarCompatibility";

interface ResultsSectionProps {
  results: {
    lifePath: number;
    partialEnergy: number;
    secretNumber: number;
    chineseZodiac: string;
  };
  isVisible: boolean;
}

const ResultsSection = ({ results, isVisible }: ResultsSectionProps) => {
  if (!isVisible) return null;

  return (
    <>
      <div id="results">
        <NumerologyResults 
          lifePath={results.lifePath}
          partialEnergy={results.partialEnergy}
          secretNumber={results.secretNumber}
          chineseZodiac={results.chineseZodiac}
          isVisible={isVisible}
        />
      </div>

      <div id="compatibility">
        <CompatibilitySection
          lifePath={results.lifePath}
          isVisible={isVisible}
        />
      </div>

      <div id="occupation">
        <OccupationGuidance
          lifePath={results.lifePath}
          isVisible={isVisible}
        />
      </div>

      <div id="country">
        <CountryCompatibility
          chineseZodiac={results.chineseZodiac}
          isVisible={isVisible}
        />
      </div>

      <div id="car">
        <CarCompatibility
          chineseZodiac={results.chineseZodiac}
          isVisible={isVisible}
        />
      </div>
    </>
  );
};

export default ResultsSection;