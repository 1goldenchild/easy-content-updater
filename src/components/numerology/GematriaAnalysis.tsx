import { motion } from "framer-motion";
import { Hash } from "lucide-react";

interface GematriaAnalysisProps {
  lifePath: number;
  isVisible: boolean;
}

const GematriaAnalysis = ({ lifePath, isVisible }: GematriaAnalysisProps) => {
  if (!isVisible) return null;

  const getGematriaAssociations = (number: number) => {
    switch (number) {
      case 3:
        return {
          words: ["comedian", "comedy", "child", "criminal"],
          letterValue: "c"
        };
      default:
        return {
          words: [],
          letterValue: ""
        };
    }
  };

  const associations = getGematriaAssociations(lifePath);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10 mt-8"
    >
      <div className="flex items-center gap-2 mb-6">
        <Hash className="w-5 h-5 text-purple-400" />
        <h3 className="text-2xl font-bold text-white/90">Gematria Analysis</h3>
      </div>

      <div className="space-y-6">
        <div className="p-6 rounded-lg bg-white/5 border border-white/10">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {lifePath}
            </span>
            <span className="text-xl text-white/70">→</span>
            <span className="text-2xl font-semibold text-purple-400 uppercase">
              {associations.letterValue}
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {associations.words.map((word, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20 text-center"
              >
                <p className="text-lg font-medium text-white/80 capitalize">{word}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <p className="text-sm text-white/60 italic text-center">
          Gematria reveals hidden connections between numbers and words, offering deeper insights into your numerological profile.
        </p>
      </div>
    </motion.div>
  );
};

export default GematriaAnalysis;