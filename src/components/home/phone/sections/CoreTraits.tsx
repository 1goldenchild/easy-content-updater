import { motion } from "framer-motion";

const CoreTraits = () => {
  const traits = [
    { name: "IQ", value: 85 },
    { name: "EQ", value: 92 },
    { name: "Spiritual Connection", value: 88 },
    { name: "Leadership", value: 78 },
    { name: "Creativity", value: 95 },
    { name: "Intuition", value: 89 },
    { name: "Material Success", value: 82 }
  ];

  return (
    <div id="traits" className="rounded-xl bg-gradient-to-br from-[#0EA5E9]/30 to-[#8B5CF6]/30 p-4">
      <h3 className="text-sm font-semibold text-white/90 mb-3">Core Traits</h3>
      <div className="space-y-3">
        {traits.map((trait, index) => (
          <div key={trait.name} className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-xs text-white/80">{trait.name}</span>
              <span className="text-xs font-medium text-white/60">{trait.value}%</span>
            </div>
            <motion.div 
              initial={{ width: "0%" }}
              animate={{ width: `${trait.value}%` }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="h-2 bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] rounded-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreTraits;