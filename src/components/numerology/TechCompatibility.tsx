import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";

interface TechCompatibilityProps {
  lifePath: number;
  isVisible: boolean;
}

const TechCompatibility = ({ lifePath, isVisible }: TechCompatibilityProps) => {
  if (!isVisible) return null;

  const getTechRecommendations = (lifePath: number) => {
    const recommendations = {
      1: {
        bestMatch: "Apple",
        compatibility: 95,
        description: "Apple's innovative leadership aligns with your pioneering spirit",
        alternatives: [
          { name: "Samsung", score: 88 },
          { name: "Google", score: 82 }
        ]
      },
      2: {
        bestMatch: "Samsung",
        compatibility: 92,
        description: "Samsung's balanced approach resonates with your diplomatic nature",
        alternatives: [
          { name: "Apple", score: 85 },
          { name: "OnePlus", score: 80 }
        ]
      },
      3: {
        bestMatch: "Google",
        compatibility: 94,
        description: "Google's creative features complement your expressive personality",
        alternatives: [
          { name: "Apple", score: 90 },
          { name: "Samsung", score: 85 }
        ]
      },
      4: {
        bestMatch: "Samsung",
        compatibility: 96,
        description: "Samsung's reliable systems match your practical approach",
        alternatives: [
          { name: "Sony", score: 88 },
          { name: "Google", score: 82 }
        ]
      },
      5: {
        bestMatch: "OnePlus",
        compatibility: 93,
        description: "OnePlus's adaptable nature suits your freedom-loving spirit",
        alternatives: [
          { name: "Google", score: 87 },
          { name: "Apple", score: 84 }
        ]
      },
      6: {
        bestMatch: "Apple",
        compatibility: 91,
        description: "Apple's harmonious ecosystem supports your nurturing nature",
        alternatives: [
          { name: "Samsung", score: 86 },
          { name: "Google", score: 82 }
        ]
      },
      7: {
        bestMatch: "Google",
        compatibility: 97,
        description: "Google's analytical approach matches your investigative mind",
        alternatives: [
          { name: "OnePlus", score: 89 },
          { name: "Apple", score: 83 }
        ]
      },
      8: {
        bestMatch: "Apple",
        compatibility: 98,
        description: "Apple's premium quality aligns with your success-oriented nature",
        alternatives: [
          { name: "Samsung", score: 92 },
          { name: "Sony", score: 85 }
        ]
      },
      9: {
        bestMatch: "Samsung",
        compatibility: 90,
        description: "Samsung's global reach resonates with your universal outlook",
        alternatives: [
          { name: "Google", score: 86 },
          { name: "OnePlus", score: 82 }
        ]
      },
      11: {
        bestMatch: "Apple",
        compatibility: 99,
        description: "Apple's intuitive design aligns with your spiritual awareness",
        alternatives: [
          { name: "Google", score: 92 },
          { name: "OnePlus", score: 88 }
        ]
      },
      22: {
        bestMatch: "Samsung",
        compatibility: 96,
        description: "Samsung's innovative features support your master builder nature",
        alternatives: [
          { name: "Apple", score: 94 },
          { name: "Sony", score: 89 }
        ]
      },
      33: {
        bestMatch: "Google",
        compatibility: 95,
        description: "Google's universal approach matches your spiritual teaching abilities",
        alternatives: [
          { name: "Apple", score: 92 },
          { name: "Samsung", score: 88 }
        ]
      }
    };
    return recommendations[lifePath as keyof typeof recommendations] || recommendations[9];
  };

  const tech = getTechRecommendations(lifePath);

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
              <Smartphone className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]">
              Best Mobile Phone Company
            </h3>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-white/5 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-white">{tech.bestMatch}</h4>
                <span className="text-2xl font-bold text-purple-400">{tech.compatibility}%</span>
              </div>
              <p className="text-white/70 text-sm">{tech.description}</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-medium text-white/70">Alternative Options</h4>
              {tech.alternatives.map((alt, index) => (
                <motion.div
                  key={alt.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex items-center justify-between px-4 py-3 rounded-lg bg-white/5 overflow-hidden"
                >
                  <span className="text-sm text-white/80">{alt.name}</span>
                  <span className="text-sm font-medium text-purple-400">{alt.score}%</span>
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${alt.score}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="absolute left-0 top-0 h-full bg-purple-500/10"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TechCompatibility;