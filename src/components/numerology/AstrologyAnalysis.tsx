import { motion } from "framer-motion";

interface AstrologyAnalysisProps {
  chineseZodiac: string;
  isVisible: boolean;
}

const getZodiacDescription = (zodiac: string): { nextYear: string; enemyYear: string } => {
  const descriptions: Record<string, { nextYear: string; enemyYear: string }> = {
    "Snake": {
      nextYear: "2025",
      enemyYear: "2031"
    },
    "Horse": {
      nextYear: "2026",
      enemyYear: "2032"
    },
    "Goat": {
      nextYear: "2027",
      enemyYear: "2033"
    },
    "Monkey": {
      nextYear: "2028",
      enemyYear: "2034"
    },
    "Rooster": {
      nextYear: "2029",
      enemyYear: "2035"
    },
    "Dog": {
      nextYear: "2030",
      enemyYear: "2036"
    },
    "Pig": {
      nextYear: "2031",
      enemyYear: "2037"
    },
    "Rat": {
      nextYear: "2032",
      enemyYear: "2038"
    },
    "Ox": {
      nextYear: "2033",
      enemyYear: "2039"
    },
    "Tiger": {
      nextYear: "2034",
      enemyYear: "2040"
    },
    "Cat": {
      nextYear: "2035",
      enemyYear: "2041"
    },
    "Dragon": {
      nextYear: "Current",
      enemyYear: "2030"
    }
  };

  return descriptions[zodiac] || { nextYear: "", enemyYear: "" };
}

const AstrologyAnalysis = ({ chineseZodiac, isVisible }: AstrologyAnalysisProps) => {
  if (!isVisible) return null;

  const { nextYear, enemyYear } = getZodiacDescription(chineseZodiac);
  const isDragon = chineseZodiac === "Dragon";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-4 mt-4"
    >
      <div className="p-6 rounded-lg bg-white/5 border border-white/10">
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] mb-4">Astrology Analysis</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold text-white/80 mb-2">
              {isDragon ? "Current Year" : "Your Next Year"}
            </h4>
            <p className="text-white/70">
              {isDragon ? (
                "We are currently in your year. It's the time to work as much as possible. Don't be afraid of taking risks, starting that business, trying something new. It is also a great time to get a new bank loan or mortgage, car payment, and things of that nature. All your ducks are aligned because this year, if taken seriously, can advance you 4-5 years in success."
              ) : (
                `Your next year will be in ${nextYear}. It's going to be the time to work as much as possible. Don't be afraid of taking risks, starting that business, trying something new. It will also be a great time to get a new bank loan or mortgage, car payment, and things of that nature. All your ducks need to be in a row because those years, if taken seriously, can advance you 10-15 years in success.`
              )}
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white/80 mb-2">Enemy Year</h4>
            <p className="text-white/70">
              Your next enemy year will be in {enemyYear}. You should do exactly the opposite of what was just mentioned. Don't start anything new, don't take any risks, or get into a new relationship. Lay low for that year, and you will be fine!
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AstrologyAnalysis;