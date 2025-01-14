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
        primary: "#40E0D0", // Turquoise
        secondary: "#30B0A0",
        accent: "#50FFE0",
        description: "Turquoise enhances your natural leadership energy and brings balance"
      },
      3: {
        primary: "#FFA500", // Orange
        secondary: "#FF8C00",
        accent: "#FFB732",
        description: "Orange amplifies your creative expression and communication abilities"
      },
      4: {
        primary: "#4CAF50", // Green
        secondary: "#1E90FF", // Blue
        accent: "#C0C0C0", // Silver
        description: "Green, blue, indigo, silver, and white gold support your practical nature"
      },
      5: {
        primary: "#FF69B4", // Pink
        secondary: "#FFB6C1", // Light pink
        accent: "#DDA0DD", // Rose gold approximation
        description: "Pink and rose gold colors match your dynamic and adventurous spirit"
      },
      6: {
        primary: "#808080", // Gray
        secondary: "#A9A9A9",
        accent: "#D3D3D3",
        description: "Gray tones enhance your nurturing and balanced nature"
      },
      7: {
        primary: "#800080", // Purple
        secondary: "#9932CC",
        accent: "#BA55D3",
        description: "Purple deepens your mystical and analytical qualities"
      },
      8: {
        primary: "#800080", // Purple
        secondary: "#9932CC",
        accent: "#BA55D3",
        description: "Purple amplifies your power and success energy"
      },
      9: {
        primary: "#FF0000", // Red
        secondary: "#800080", // Purple
        accent: "#DDA0DD", // Lavender
        description: "Red, purple, brown, and lavender enhance your humanitarian nature"
      },
      11: {
        primary: "#FFD700", // Gold
        secondary: "#FFFFFF", // White
        accent: "#000000", // Black
        description: "Yellow, white, black, and gold amplify your intuitive powers"
      },
      22: {
        primary: "#4B0082", // Universal - represented as deep indigo
        secondary: "#483D8B",
        accent: "#6A5ACD",
        description: "Universal colors support your master builder abilities"
      },
      33: {
        primary: "#FFA500", // Orange
        secondary: "#FF8C00",
        accent: "#FFB732",
        description: "Orange enhances your spiritual teaching abilities"
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
      <div className="p-6 rounded-xl bg-gradient-to-br from-[#1a1c2e] to-[#2a2c3e] border border-white/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(139,92,246,0.1),rgba(255,255,255,0))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(217,70,239,0.1),rgba(255,255,255,0))]" />
        </div>

        <div className="relative space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-purple-500/10 backdrop-blur-sm">
              <Palette className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]">
              Best Colors to Wear
            </h3>
          </div>

          <p className="text-sm text-white/70">
            {colors.description}
          </p>

          <div className="grid grid-cols-3 gap-3">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-lg bg-black/20 border border-white/5 flex flex-col items-center gap-2"
            >
              <div 
                className="w-8 h-8 rounded-full ring-2 ring-white/10 shadow-lg" 
                style={{ backgroundColor: colors.primary }} 
              />
              <div className="text-center">
                <p className="text-xs font-medium text-white/80">Primary</p>
                <p className="text-[10px] text-white/50 font-mono">{colors.primary}</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-lg bg-black/20 border border-white/5 flex flex-col items-center gap-2"
            >
              <div 
                className="w-8 h-8 rounded-full ring-2 ring-white/10 shadow-lg" 
                style={{ backgroundColor: colors.secondary }} 
              />
              <div className="text-center">
                <p className="text-xs font-medium text-white/80">Secondary</p>
                <p className="text-[10px] text-white/50 font-mono">{colors.secondary}</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-lg bg-black/20 border border-white/5 flex flex-col items-center gap-2"
            >
              <div 
                className="w-8 h-8 rounded-full ring-2 ring-white/10 shadow-lg" 
                style={{ backgroundColor: colors.accent }} 
              />
              <div className="text-center">
                <p className="text-xs font-medium text-white/80">Accent</p>
                <p className="text-[10px] text-white/50 font-mono">{colors.accent}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ColorCompatibility;