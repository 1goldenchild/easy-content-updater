import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";

const TechCompatibilitySection = () => {
  const companies = [
    { name: "Apple", compatibility: 92, type: "good" },
    { name: "Samsung", compatibility: 88, type: "good" },
    { name: "Google Pixel", compatibility: 85, type: "good" },
    { name: "Huawei", compatibility: 45, type: "bad" },
    { name: "LG", compatibility: 42, type: "bad" }
  ];

  return (
    <div id="tech" className="rounded-xl bg-gradient-to-br from-[#8B5CF6]/30 to-[#0EA5E9]/30 p-4">
      <h3 className="text-sm font-semibold text-white/90 mb-3">Tech Compatibility</h3>
      
      <div className="space-y-4">
        {/* Best Tech Matches */}
        <div>
          <h4 className="text-xs font-medium text-white/70 mb-2">Best Tech Matches</h4>
          <div className="space-y-2">
            {companies.filter(c => c.type === "good").map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 overflow-hidden"
              >
                <div className="flex items-center gap-2 z-10">
                  <Smartphone className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-white/80">{company.name}</span>
                </div>
                <span className="text-sm font-medium text-green-300 z-10">{company.compatibility}%</span>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${company.compatibility}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="absolute left-0 top-0 h-full bg-green-500/10"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Challenging Tech Matches */}
        <div>
          <h4 className="text-xs font-medium text-white/70 mb-2">Challenging Tech Matches</h4>
          <div className="space-y-2">
            {companies.filter(c => c.type === "bad").map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 overflow-hidden"
              >
                <div className="flex items-center gap-2 z-10">
                  <Smartphone className="w-4 h-4 text-red-400" />
                  <span className="text-sm text-white/80">{company.name}</span>
                </div>
                <span className="text-sm font-medium text-red-300 z-10">{company.compatibility}%</span>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${company.compatibility}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="absolute left-0 top-0 h-full bg-red-500/10"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechCompatibilitySection;