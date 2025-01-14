import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";
import { techCompanies, getCompatibility } from "./data/techCompaniesData";

interface TechCompatibilityAnalysisProps {
  chineseZodiac: string;
  isVisible: boolean;
}

const TechCompatibilityAnalysis = ({ chineseZodiac, isVisible }: TechCompatibilityAnalysisProps) => {
  if (!isVisible) return null;

  const sortedCompanies = techCompanies
    .map(company => ({
      ...company,
      compatibility: getCompatibility(chineseZodiac, company.zodiac)
    }))
    .sort((a, b) => b.compatibility - a.compatibility);

  const bestMatches = sortedCompanies.filter(c => c.compatibility >= 90);
  const challengingMatches = sortedCompanies.filter(c => c.compatibility <= 50);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8 space-y-6 p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-white">
          <Smartphone className="w-6 h-6 text-purple-400" />
          Technology Compatibilities
        </h2>
      </div>

      <div className="space-y-6">
        {/* Best Matches */}
        <div>
          <h3 className="text-lg font-medium text-white/90 mb-3">Best Matches</h3>
          <div className="space-y-3">
            {bestMatches.map((company) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative flex items-center justify-between p-4 rounded-lg bg-white/5 overflow-hidden"
              >
                <div className="flex items-center gap-3">
                  <Smartphone className="w-5 h-5 text-green-400" />
                  <div>
                    <p className="text-white/90">{company.name}</p>
                    <p className="text-sm text-white/60">{company.zodiac} ({company.year})</p>
                  </div>
                </div>
                <span className="text-green-400 font-medium">{company.compatibility}%</span>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${company.compatibility}%` }}
                  transition={{ duration: 1 }}
                  className="absolute left-0 top-0 h-full bg-green-500/10 -z-10"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Challenging Matches */}
        <div>
          <h3 className="text-lg font-medium text-white/90 mb-3">Challenging Matches</h3>
          <div className="space-y-3">
            {challengingMatches.map((company) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative flex items-center justify-between p-4 rounded-lg bg-white/5 overflow-hidden"
              >
                <div className="flex items-center gap-3">
                  <Smartphone className="w-5 h-5 text-red-400" />
                  <div>
                    <p className="text-white/90">{company.name}</p>
                    <p className="text-sm text-white/60">{company.zodiac} ({company.year})</p>
                  </div>
                </div>
                <span className="text-red-400 font-medium">{company.compatibility}%</span>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${company.compatibility}%` }}
                  transition={{ duration: 1 }}
                  className="absolute left-0 top-0 h-full bg-red-500/10 -z-10"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TechCompatibilityAnalysis;