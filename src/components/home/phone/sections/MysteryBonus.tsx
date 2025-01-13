import { motion } from "framer-motion";
import { PlusCircle } from "lucide-react";

const MysteryBonus = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="relative rounded-xl bg-black/90 p-4 text-center overflow-hidden border border-amber-500/20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(251,191,36,0.1),rgba(0,0,0,0))]" />
      <h3 className="relative flex items-center justify-center gap-2 text-xl font-bold bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent mb-3">
        <PlusCircle className="w-5 h-5 text-amber-500" /> Mystery Bonus
      </h3>
      <p className="relative text-sm text-amber-300/90 font-medium">
        Unlock exclusive insights reserved for advanced seekers
      </p>
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      />
    </motion.div>
  );
};

export default MysteryBonus;