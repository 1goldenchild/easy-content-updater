import { motion } from "framer-motion";
import { Home } from "lucide-react";

interface HousingAnalysisProps {
  chineseZodiac: string;
  isVisible: boolean;
}

const HousingAnalysis = ({ chineseZodiac, isVisible }: HousingAnalysisProps) => {
  if (!isVisible) return null;

  const getHousingAnalysis = (zodiac: string) => {
    const analyses = {
      Rat: "Rats thrive in modern apartments with smart technology. They need a dedicated workspace and plenty of storage solutions.",
      Ox: "Oxen prefer traditional homes with large gardens. They appreciate sturdy construction and classic architecture.",
      Tiger: "Tigers need spacious homes with high ceilings and large windows. They benefit from having a private retreat space.",
      Rabbit: "Rabbits flourish in cozy, well-decorated homes. They should focus on comfortable furnishings and soft lighting.",
      Dragon: "Dragons require grand spaces with impressive architecture. They benefit from homes with unique features and character.",
      Snake: "Snakes prefer sleek, minimalist designs. They thrive in spaces with good natural light and private areas.",
      Horse: "Horses need open spaces and room to move. They benefit from homes with outdoor access and natural materials.",
      Goat: "Goats appreciate artistic homes with creative spaces. They thrive in environments with artistic touches and natural elements.",
      Monkey: "Monkeys need versatile spaces that can adapt to different activities. They benefit from modern, flexible layouts.",
      Rooster: "Roosters thrive in well-organized homes with defined spaces. They appreciate clean lines and functional design.",
      Dog: "Dogs need comfortable, secure homes. They benefit from cozy spaces with good security features.",
      Pig: "Pigs flourish in luxurious, comfortable settings. They appreciate high-quality materials and comfortable furnishings."
    };
    
    return analyses[zodiac as keyof typeof analyses] || "Your ideal living space combines comfort with functionality.";
  };

  const getCompatibleYears = (zodiac: string) => {
    const compatibilities: Record<string, { good: string[], challenging: string[] }> = {
      Rat: {
        good: ["Dragon", "Monkey", "Ox"],
        challenging: ["Horse", "Rabbit", "Goat"]
      },
      Ox: {
        good: ["Snake", "Rooster", "Rat"],
        challenging: ["Goat", "Horse", "Dragon"]
      },
      Tiger: {
        good: ["Horse", "Dog", "Pig"],
        challenging: ["Monkey", "Snake", "Tiger"]
      },
      Rabbit: {
        good: ["Goat", "Pig", "Dog"],
        challenging: ["Rooster", "Dragon", "Rat"]
      },
      Dragon: {
        good: ["Rat", "Monkey", "Rooster"],
        challenging: ["Dog", "Rabbit", "Dragon"]
      },
      Snake: {
        good: ["Ox", "Rooster", "Monkey"],
        challenging: ["Tiger", "Pig", "Snake"]
      },
      Horse: {
        good: ["Tiger", "Dog", "Goat"],
        challenging: ["Rat", "Ox", "Horse"]
      },
      Goat: {
        good: ["Rabbit", "Horse", "Pig"],
        challenging: ["Ox", "Dog", "Dragon"]
      },
      Monkey: {
        good: ["Rat", "Dragon", "Snake"],
        challenging: ["Tiger", "Pig", "Monkey"]
      },
      Rooster: {
        good: ["Ox", "Snake", "Dragon"],
        challenging: ["Rat", "Rabbit", "Horse"]
      },
      Dog: {
        good: ["Tiger", "Horse", "Rabbit"],
        challenging: ["Dragon", "Goat", "Ox"]
      },
      Pig: {
        good: ["Tiger", "Rabbit", "Goat"],
        challenging: ["Snake", "Monkey", "Pig"]
      }
    };

    return compatibilities[zodiac] || { good: [], challenging: [] };
  };

  const compatibility = getCompatibleYears(chineseZodiac);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8 space-y-6 p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-white">
          <Home className="w-6 h-6 text-purple-400" />
          Energetic Properties of Houses
        </h2>
      </div>

      <div className="text-left space-y-4">
        <p className="text-purple-200">
          Based on your Chinese zodiac sign ({chineseZodiac}), here are insights about your ideal living space:
        </p>
        <p className="text-sm leading-relaxed text-purple-100">
          {getHousingAnalysis(chineseZodiac)}
        </p>

        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-medium text-purple-200">Compatible Signs:</h3>
            <p className="text-sm text-purple-100">
              {compatibility.good.join(", ")}
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium text-purple-200">Challenging Signs:</h3>
            <p className="text-sm text-purple-100">
              {compatibility.challenging.join(", ")}
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium text-purple-200">General Housing Tips:</h3>
          <ul className="list-disc pl-5 text-sm space-y-1 text-purple-100">
            <li>Consider the direction your main door faces</li>
            <li>Pay attention to the flow of natural light</li>
            <li>Balance the five elements in your living space</li>
            <li>Create harmony between work and rest areas</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default HousingAnalysis;