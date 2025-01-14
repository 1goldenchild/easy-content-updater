import NumerologyResults from "@/components/numerology/NumerologyResults";

interface ResultsSectionProps {
  results: {
    lifePath: number;
    partialEnergy: number;
    secretNumber: number;
    chineseZodiac: string;
  };
  dateOfBirth: Date;
  isVisible: boolean;
}

const ResultsSection = ({ results, dateOfBirth, isVisible }: ResultsSectionProps) => {
  if (!isVisible) return null;

  return (
    <div id="results">
      <NumerologyResults 
        lifePath={results.lifePath}
        partialEnergy={results.partialEnergy}
        secretNumber={results.secretNumber}
        chineseZodiac={results.chineseZodiac}
        dateOfBirth={dateOfBirth}
        isVisible={isVisible}
      />
    </div>
  );
};

export default ResultsSection;