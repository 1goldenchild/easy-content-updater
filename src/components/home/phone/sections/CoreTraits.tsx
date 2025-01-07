import { motion } from "framer-motion";
import { Brain } from "lucide-react";

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
      <div className="relative mb-6">
        <motion.div 
          className="w-16 h-16 mx-auto bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] rounded-full flex items-center justify-center"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Brain className="w-8 h-8 text-white" />
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6]"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
      
      <h3 className="text-sm font-semibold text-white/90 mb-3 text-center">Core Traits</h3>
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