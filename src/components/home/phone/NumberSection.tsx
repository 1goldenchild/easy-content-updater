import { motion } from "framer-motion";

interface NumberSectionProps {
  id: string;
  title: string;
  number: string | number;
  subtitle: string;
  gradientFrom: string;
  gradientTo: string;
  delay?: number;
}

const NumberSection = ({ id, title, number, subtitle, gradientFrom, gradientTo, delay = 0 }: NumberSectionProps) => {
  return (
    <div id={id} className={`rounded-xl bg-gradient-to-br from-${gradientFrom}/30 to-${gradientTo}/30 p-4 backdrop-blur-sm`}>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <motion.div 
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ repeat: Infinity, duration: 2, delay }}
        className={`text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-${gradientFrom} to-${gradientTo}`}
      >
        {number}
      </motion.div>
      <p className="text-xs text-white/70 mt-2">{subtitle}</p>
    </div>
  );
};

export default NumberSection;