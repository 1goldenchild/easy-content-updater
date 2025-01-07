import { motion } from "framer-motion";

const CoreTraits = () => {
  return (
    <div id="traits" className="rounded-xl bg-gradient-to-br from-[#0EA5E9]/30 to-[#8B5CF6]/30 p-4">
      <h3 className="text-sm font-semibold text-white/90 mb-3">Core Traits</h3>
      <div className="space-y-2">
        {["Spiritual", "Analytical", "Intuitive", "Reserved", "Philosophical"].map((trait, index) => (
          <motion.div 
            key={trait}
            initial={{ width: "0%" }}
            animate={{ width: `${(100 - index * 15)}%` }}
            transition={{ duration: 1, delay: index * 0.2 }}
            className="h-2 bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] rounded-full"
          />
        ))}
      </div>
    </div>
  );
};

export default CoreTraits;