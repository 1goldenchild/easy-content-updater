import { motion } from "framer-motion";
import { CompatibilityDataItem } from './types';

interface NumbersDisplayProps {
  compatibilityData: CompatibilityDataItem[];
}

const NumbersDisplay = ({ compatibilityData }: NumbersDisplayProps) => {
  // Sort the data to ensure consistent order
  const sortedData = [...compatibilityData].sort((a, b) => {
    const order = ['Love', 'Compatible', 'Neutral', 'Challenging'];
    return order.indexOf(a.name) - order.indexOf(b.name);
  });
  
  return (
    <div className="space-y-6">
      {sortedData.map((category, index) => (
        <motion.div
          key={category.name}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <h4 className="text-lg font-semibold text-white/90 mb-3 flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: category.color }} 
            />
            {category.name} Numbers
          </h4>
          <div className="flex flex-wrap gap-3">
            {category.numbers.sort((a, b) => a - b).map((num) => (
              <motion.div
                key={`${category.name}-${num}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <div 
                  className="absolute inset-0 rounded-lg blur-sm opacity-50 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: category.color }}
                />
                <div className="relative px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center min-w-[40px]">
                  <span className="text-lg font-bold text-white/90">
                    {num}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default NumbersDisplay;