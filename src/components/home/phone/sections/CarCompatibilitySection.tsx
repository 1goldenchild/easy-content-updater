import { motion } from "framer-motion";

const CarCompatibilitySection = () => {
  const cars = [
    { name: "Tesla Model S", compatibility: 95, type: "good" },
    { name: "BMW i8", compatibility: 88, type: "good" },
    { name: "Porsche Taycan", compatibility: 82, type: "good" },
    { name: "Ford F-150", compatibility: 45, type: "bad" },
    { name: "Chevrolet Camaro", compatibility: 38, type: "bad" },
    { name: "Dodge Challenger", compatibility: 32, type: "bad" }
  ];

  return (
    <div id="cars" className="rounded-xl bg-gradient-to-br from-[#8B5CF6]/30 to-[#0EA5E9]/30 p-4">
      <h3 className="text-sm font-semibold text-white/90 mb-3">Car Compatibility</h3>
      
      <div className="space-y-4">
        {/* Best Car Matches */}
        <div>
          <h4 className="text-xs font-medium text-white/70 mb-2">Best Car Matches</h4>
          <div className="space-y-2">
            {cars.filter(c => c.type === "good").map((car, index) => (
              <motion.div
                key={car.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 overflow-hidden"
              >
                <span className="text-sm text-white/80 z-10">{car.name}</span>
                <span className="text-sm font-medium text-green-300 z-10">{car.compatibility}%</span>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${car.compatibility}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="absolute left-0 top-0 h-full bg-green-500/10"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Challenging Car Matches */}
        <div>
          <h4 className="text-xs font-medium text-white/70 mb-2">Challenging Car Matches</h4>
          <div className="space-y-2">
            {cars.filter(c => c.type === "bad").map((car, index) => (
              <motion.div
                key={car.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 overflow-hidden"
              >
                <span className="text-sm text-white/80 z-10">{car.name}</span>
                <span className="text-sm font-medium text-red-300 z-10">{car.compatibility}%</span>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${car.compatibility}%` }}
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

export default CarCompatibilitySection;