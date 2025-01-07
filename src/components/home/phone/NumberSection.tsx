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
    <div id={id} className={`rounded-xl bg-gradient-to-br from-${gradientFrom}/20 to-${gradientTo}/20 p-3 backdrop-blur-sm`}>
      <h3 className="text-sm font-semibold text-white mb-1">{title}</h3>
      <div 
        className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-${gradientFrom} to-${gradientTo}`}
      >
        {number}
      </div>
      <p className="text-xs text-white/70 mt-1">{subtitle}</p>
    </div>
  );
};

export default NumberSection;