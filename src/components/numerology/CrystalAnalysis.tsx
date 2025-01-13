import { motion } from "framer-motion";
import { Gem } from "lucide-react";

interface CrystalAnalysisProps {
  lifePath: number;
  isVisible: boolean;
}

const getCrystalRecommendations = (lifePath: number) => {
  const crystalMap: { [key: number]: { primary: string; secondary: string[]; benefits: string[] } } = {
    1: {
      primary: "Ruby",
      secondary: ["Clear Quartz", "Garnet", "Red Jasper"],
      benefits: ["Enhanced leadership abilities", "Increased confidence", "Better focus and clarity"]
    },
    2: {
      primary: "Moonstone",
      secondary: ["Pearl", "Rose Quartz", "Blue Lace Agate"],
      benefits: ["Emotional balance", "Enhanced intuition", "Better relationships"]
    },
    3: {
      primary: "Yellow Topaz",
      secondary: ["Citrine", "Amber", "Tiger's Eye"],
      benefits: ["Creative expression", "Self-confidence", "Positive energy"]
    },
    4: {
      primary: "Green Jade",
      secondary: ["Emerald", "Malachite", "Green Aventurine"],
      benefits: ["Stability and balance", "Practical wisdom", "Material abundance"]
    },
    5: {
      primary: "Aquamarine",
      secondary: ["Turquoise", "Sodalite", "Blue Topaz"],
      benefits: ["Freedom of expression", "Adventure", "Communication skills"]
    },
    6: {
      primary: "Pink Tourmaline",
      secondary: ["Rose Quartz", "Kunzite", "Rhodochrosite"],
      benefits: ["Love and harmony", "Emotional healing", "Nurturing energy"]
    },
    7: {
      primary: "Amethyst",
      secondary: ["Lepidolite", "Charoite", "Purple Fluorite"],
      benefits: ["Spiritual awareness", "Inner wisdom", "Mental clarity"]
    },
    8: {
      primary: "Diamond",
      secondary: ["Pyrite", "Clear Quartz", "Citrine"],
      benefits: ["Material abundance", "Personal power", "Success"]
    },
    9: {
      primary: "Lapis Lazuli",
      secondary: ["Sugilite", "Tanzanite", "Sapphire"],
      benefits: ["Universal wisdom", "Spiritual enlightenment", "Compassion"]
    }
  };

  return crystalMap[lifePath] || crystalMap[1];
};

const CrystalAnalysis = ({ lifePath, isVisible }: CrystalAnalysisProps) => {
  if (!isVisible) return null;

  const crystalInfo = getCrystalRecommendations(lifePath);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8 space-y-6 p-6 bg-card rounded-lg border"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Gem className="w-6 h-6 text-purple-400" />
          Crystal Recommendations
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-6">
            <h3 className="text-lg font-medium text-purple-400 mb-2">Primary Crystal</h3>
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {crystalInfo.primary}
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium text-muted-foreground">Key Benefits</h4>
            <ul className="space-y-2">
              {crystalInfo.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-purple-400">Supporting Crystals</h3>
          <div className="grid grid-cols-1 gap-3">
            {crystalInfo.secondary.map((crystal, index) => (
              <div
                key={index}
                className="bg-purple-500/5 border border-purple-500/10 rounded-lg p-4"
              >
                {crystal}
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        These crystal recommendations are aligned with your Life Path Number {lifePath} and can help enhance 
        your natural energetic frequencies while supporting your personal growth journey.
      </p>
    </motion.div>
  );
};

export default CrystalAnalysis;