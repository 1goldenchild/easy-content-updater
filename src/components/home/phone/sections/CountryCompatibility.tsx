import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";

const CountryCompatibility = () => {
  const countries = [
    { name: "Japan", compatibility: 92, type: "good" },
    { name: "Thailand", compatibility: 88, type: "good" },
    { name: "Singapore", compatibility: 85, type: "good" },
    { name: "Russia", compatibility: 35, type: "bad" },
    { name: "Brazil", compatibility: 42, type: "bad" },
    { name: "Egypt", compatibility: 38, type: "bad" }
  ];

  return (
    <div id="countries" className="rounded-xl bg-gradient-to-br from-[#8B5CF6]/30 to-[#0EA5E9]/30 p-4">
      <h3 className="text-sm font-semibold text-white/90 mb-3 flex items-center gap-2">
        <Globe2 className="w-5 h-5 text-blue-400" />
        Global Compatibility
      </h3>
      
      <div className="relative w-full aspect-square mb-4 flex items-center justify-center">
        <div className="w-full h-full relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A1F2C]/50 to-[#1A1F2C] z-10" />
          <img 
            src="https://media.giphy.com/media/wgHY9nSrlTMt2/giphy.gif" 
            alt="Rotating globe animation"
            className="w-full h-full object-contain rounded-2xl mix-blend-screen" 
          />
        </div>
      </div>

      <div className="space-y-4">
        {/* Favorable Countries */}
        <div>
          <h4 className="text-xs font-medium text-white/70 mb-2">Most Compatible</h4>
          <div className="space-y-2">
            {countries.filter(c => c.type === "good").map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 overflow-hidden"
              >
                <div className="flex items-center gap-2 z-10">
                  <Globe2 className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-white/80">{country.name}</span>
                </div>
                <span className="text-sm font-medium text-green-300 z-10">{country.compatibility}%</span>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${country.compatibility}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="absolute left-0 top-0 h-full bg-green-500/10"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Challenging Countries */}
        <div>
          <h4 className="text-xs font-medium text-white/70 mb-2">Less Compatible</h4>
          <div className="space-y-2">
            {countries.filter(c => c.type === "bad").map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 overflow-hidden"
              >
                <div className="flex items-center gap-2 z-10">
                  <Globe2 className="w-4 h-4 text-red-400" />
                  <span className="text-sm text-white/80">{country.name}</span>
                </div>
                <span className="text-sm font-medium text-red-300 z-10">{country.compatibility}%</span>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${country.compatibility}%` }}
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

export default CountryCompatibility;