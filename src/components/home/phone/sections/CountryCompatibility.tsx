import { motion } from "framer-motion";
import { Globe2, Plane } from "lucide-react";
import EarthGlobe from "@/components/numerology/EarthGlobe";

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
      
      {/* Interactive Globe Section */}
      <div className="relative w-full aspect-square mb-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          <EarthGlobe />
          
          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute inset-0 pointer-events-none"
          >
            {/* Animated Planes */}
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                initial={{ x: -20, y: 20, opacity: 0 }}
                animate={{ 
                  x: [null, 100, -20],
                  y: [null, -50, 20],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 4,
                  delay: index * 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute"
                style={{
                  left: `${30 + index * 20}%`,
                  top: `${40 + index * 15}%`
                }}
              >
                <Plane className="w-4 h-4 text-blue-400/80" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Glowing Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2C] via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Country Lists with Enhanced Styling */}
      <div className="space-y-4">
        {/* Favorable Countries */}
        <div>
          <h4 className="text-xs font-medium text-white/70 mb-2 flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Most Compatible
          </h4>
          <div className="space-y-2">
            {countries.filter(c => c.type === "good").map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 overflow-hidden transition-colors hover:bg-white/10">
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
                </div>
                {/* Hover Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent blur-sm" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Challenging Countries */}
        <div>
          <h4 className="text-xs font-medium text-white/70 mb-2 flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            Less Compatible
          </h4>
          <div className="space-y-2">
            {countries.filter(c => c.type === "bad").map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 overflow-hidden transition-colors hover:bg-white/10">
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
                </div>
                {/* Hover Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent blur-sm" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCompatibility;