import { motion } from "framer-motion";
import { ReactNode } from "react";

interface NumberSectionProps {
  id: string;
  title: string;
  number: string | number;
  subtitle: ReactNode;
  gradientFrom: string;
  gradientTo: string;
}

const NumberSection = ({ id, title, number, subtitle, gradientFrom, gradientTo }: NumberSectionProps) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className={`rounded-xl bg-gradient-to-br from-${gradientFrom}/30 to-${gradientTo}/30 p-3 backdrop-blur-sm relative group overflow-hidden`}
    >
      {/* Enhanced glow effect on hover */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-${gradientFrom}/10 to-${gradientTo}/10 blur-xl`} />
      
      <h3 className="text-sm font-semibold text-white mb-1 relative z-10">{title}</h3>
      <div 
        className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-${gradientFrom} to-${gradientTo} relative z-10 group-hover:animate-pulse`}
      >
        {number}
      </div>
      <p className="text-xs text-white/70 mt-1 relative z-10">{subtitle}</p>
      
      {/* Animated border */}
      <div className={`absolute inset-0 bg-gradient-to-r from-${gradientFrom} via-${gradientTo} to-${gradientFrom} opacity-20 group-hover:opacity-30 transition-opacity`} />
    </motion.div>
  );
};

export default NumberSection;