import NumerologyResults from "@/components/numerology/NumerologyResults";

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
    <div id="results">
      <NumerologyResults 
        lifePath={results.lifePath}
        partialEnergy={results.partialEnergy}
        secretNumber={results.secretNumber}
        chineseZodiac={results.chineseZodiac}
        isVisible={isVisible}
      />
    </div>
  );
};

export default ResultsSection;