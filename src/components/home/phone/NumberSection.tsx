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
    <div 
      id={id} 
      className={`rounded-xl bg-gradient-to-br from-${gradientFrom}/80 to-${gradientTo}/80 p-3 backdrop-blur-sm border border-white/10`}
    >
      <h3 className="text-sm font-semibold text-white/90 mb-1">{title}</h3>
      <div className="text-2xl font-bold text-white">
        {number}
      </div>
      <p className="text-xs text-white/70 mt-1">{subtitle}</p>
    </div>
  );
};

export default NumberSection;