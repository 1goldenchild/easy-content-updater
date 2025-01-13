import { motion } from "framer-motion";
import { Palette } from "lucide-react";

interface ColorCompatibilityProps {
  lifePath: number;
  isVisible: boolean;
}

const ColorCompatibility = ({ lifePath, isVisible }: ColorCompatibilityProps) => {
  if (!isVisible) return null;

  // Color recommendations based on life path number
  const getColorRecommendations = (lifePath: number) => {
    const recommendations = {
      1: {
        primary: "#FF6B6B",
        secondary: "#4ECDC4",
        accent: "#FFE66D",
        description: "Bold reds and vibrant yellows enhance your natural leadership energy"
      },
      2: {
        primary: "#A8E6CF",
        secondary: "#DCEDC1",
        accent: "#FFD3B6",
        description: "Soft blues and gentle greens promote your diplomatic nature"
      },
      3: {
        primary: "#FF9A8B",
        secondary: "#FF6A88",
        accent: "#FF99AC",
        description: "Creative pinks and expressive corals amplify your artistic spirit"
      },
      4: {
        primary: "#4A90E2",
        secondary: "#5C6BC0",
        accent: "#7986CB",
        description: "Stable blues and grounding earth tones support your practical nature"
      },
      5: {
        primary: "#FF61D2",
        secondary: "#FE90AF",
        accent: "#FF9CEE",
        description: "Dynamic purples and adventurous pinks match your free spirit"
      },
      6: {
        primary: "#9B87F5",
        secondary: "#7E69AB",
        accent: "#D6BCFA",
        description: "Nurturing purples and harmonious lavenders enhance your caring nature"
      },
      7: {
        primary: "#2C3E50",
        secondary: "#34495E",
        accent: "#95A5A6",
        description: "Deep indigos and mysterious navy blues deepen your analytical mind"
      },
      8: {
        primary: "#DAA520",
        secondary: "#B8860B",
        accent: "#FFD700",
        description: "Rich golds and powerful deep purples amplify your success energy"
      },
      9: {
        primary: "#FF7F50",
        secondary: "#FF6347",
        accent: "#FFA07A",
        description: "Universal coral and compassionate peach colors enhance your humanitarian nature"
      },
      11: {
        primary: "#E5DEFF",
        secondary: "#D6BCFA",
        accent: "#9B87F5",
        description: "Spiritual whites and enlightening violets amplify your intuitive powers"
      },
      22: {
        primary: "#FFD700",
        secondary: "#FFA500",
        accent: "#FF8C00",
        description: "Masterful golds and powerful oranges support your visionary nature"
      },
      33: {
        primary: "#F0F8FF",
        secondary: "#E6E6FA",
        accent: "#B0E0E6",
        description: "Pure whites and celestial blues enhance your spiritual teaching abilities"
      }
    };
    return recommendations[lifePath as keyof typeof recommendations] || recommendations[9];
  };

  const colors = getColorRecommendations(lifePath);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8"
    >
      <div className="p-8 rounded-xl bg-gradient-to-br from-[#1a1c2e] to-[#2a2c3e] border border-white/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(139,92,246,0.1),rgba(255,255,255,0))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(217,70,239,0.1),rgba(255,255,255,0))]" />
        </div>

        <div className="relative">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-lg bg-purple-500/10 backdrop-blur-sm">
              <Palette className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]">
              Best Colors to Wear
            </h3>
          </div>

          <p className="text-white/70 mb-6">
            {colors.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-lg bg-white/5 border border-white/10"
              style={{ background: `linear-gradient(135deg, ${colors.primary}20, transparent)` }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full" style={{ backgroundColor: colors.primary }} />
                <div>
                  <p className="text-sm font-medium text-white">Primary Color</p>
                  <p className="text-xs text-white/60">{colors.primary}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-lg bg-white/5 border border-white/10"
              style={{ background: `linear-gradient(135deg, ${colors.secondary}20, transparent)` }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full" style={{ backgroundColor: colors.secondary }} />
                <div>
                  <p className="text-sm font-medium text-white">Secondary Color</p>
                  <p className="text-xs text-white/60">{colors.secondary}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-lg bg-white/5 border border-white/10"
              style={{ background: `linear-gradient(135deg, ${colors.accent}20, transparent)` }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full" style={{ backgroundColor: colors.accent }} />
                <div>
                  <p className="text-sm font-medium text-white">Accent Color</p>
                  <p className="text-xs text-white/60">{colors.accent}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ColorCompatibility;