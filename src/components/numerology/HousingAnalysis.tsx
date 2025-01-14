import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

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

      <Button 
        variant="outline" 
        className="w-full bg-purple-500/20 border-purple-500/30 text-purple-200 hover:bg-purple-500/30"
      >
        Read More
      </Button>
    </motion.div>
  );
};

export default HousingAnalysis;