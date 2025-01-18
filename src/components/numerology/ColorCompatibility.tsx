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
        colors: ["#40E0D0"], // Turquoise
        description: "Turquoise enhances your natural leadership energy and brings balance"
      },
      3: {
        colors: ["#FFA500"], // Orange
        description: "Orange amplifies your creative expression and communication abilities"
      },
      4: {
        colors: ["#4CAF50", "#0000FF", "#4B0082", "#C0C0C0", "#FFD700"], // Green, Blue, Indigo, Silver, White gold
        description: "Green, blue, indigo, silver, and white gold support your practical nature"
      },
      5: {
        colors: ["#FF69B4", "#FFB6C1"], // Pink, Rose gold
        description: "Pink and rose gold colors match your dynamic and adventurous spirit"
      },
      6: {
        colors: ["#808080"], // Gray
        description: "Gray tones enhance your nurturing and balanced nature"
      },
      7: {
        colors: ["#800080"], // Purple
        description: "Purple deepens your mystical and analytical qualities"
      },
      8: {
        colors: ["#800080"], // Purple
        description: "Purple amplifies your power and success energy"
      },
      9: {
        colors: ["#FF0000", "#800080", "#8B4513", "#E6E6FA"], // Red, Purple, Brown, Lavender
        description: "Red, purple, brown, and lavender enhance your humanitarian nature"
      },
      11: {
        colors: ["#FFD700", "#FFFFFF", "#000000", "#FFD700"], // Yellow, White, Black, Gold
        description: "Yellow, white, black, and gold amplify your intuitive powers"
      },
      22: {
        colors: ["#4B0082"], // Universal - represented as deep indigo
        description: "Universal colors support your master builder abilities"
      },
      33: {
        colors: ["#FFA500"], // Orange
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
              Compatible Color
            </h3>
          </div>

          <p className="text-sm text-white/70">
            {colors.description}
          </p>

          <div className="grid grid-cols-3 gap-3">
            {colors.colors.map((color, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="p-4 rounded-lg bg-black/20 border border-white/5 flex flex-col items-center gap-2"
              >
                <div 
                  className="w-8 h-8 rounded-full ring-2 ring-white/10 shadow-lg" 
                  style={{ backgroundColor: color }} 
                />
                <div className="text-center">
                  <p className="text-[10px] text-white/50 font-mono">{color}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ColorCompatibility;