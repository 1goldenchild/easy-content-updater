import { motion } from "framer-motion";
import { numerologyCompatibility } from "@/utils/numerologyCompatibility";
import PieChartDisplay from "./PieChartDisplay";
import NumbersDisplay from "./NumbersDisplay";
import { CompatibilityDataItem, CompatibilityProps } from "./types/compatibility";

const CompatibilityChart = ({ lifePath, isVisible }: CompatibilityProps) => {
  console.log("Rendering CompatibilityChart for lifePath:", lifePath);
  
  if (!isVisible) return null;

  const getCompatibleNumbers = (number: number): number[] => {
    const compatibility = numerologyCompatibility[number];
    return compatibility?.compatible || [];
  };

  const getEnemyNumbers = (number: number): number[] => {
    const compatibility = numerologyCompatibility[number];
    return compatibility?.challenging || [];
  };

  const getLoveNumbers = (number: number): number[] => {
    const compatibility = numerologyCompatibility[number];
    return compatibility?.loveCompatible || [];
  };

  const getNeutralNumbers = (compatibleNums: number[], enemyNums: number[], loveNums: number[]): number[] => {
    const allNumbers = Array.from({ length: 9 }, (_, i) => i + 1);
    return allNumbers.filter(num => 
      !compatibleNums.includes(num) && 
      !enemyNums.includes(num) && 
      !loveNums.includes(num)
    );
  };

  const compatibleNumbers = getCompatibleNumbers(lifePath);
  const enemyNumbers = getEnemyNumbers(lifePath);
  const loveNumbers = getLoveNumbers(lifePath);
  const neutralNumbers = getNeutralNumbers(compatibleNumbers, enemyNumbers, loveNumbers);

  const compatibilityData: CompatibilityDataItem[] = [
    { name: 'Love', value: loveNumbers.length, numbers: loveNumbers, color: '#FF1493' },
    { name: 'Compatible', value: compatibleNumbers.length, numbers: compatibleNumbers, color: '#8B5CF6' },
    { name: 'Neutral', value: neutralNumbers.length, numbers: neutralNumbers, color: '#0EA5E9' },
    { name: 'Challenging', value: enemyNumbers.length, numbers: enemyNumbers, color: '#F97316' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mt-8 p-8 rounded-xl bg-gradient-to-br from-[#1a1c2e] to-[#2a2c3e] border border-white/10"
    >
      <h3 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9]">
        Numerological Compatibility
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PieChartDisplay compatibilityData={compatibilityData} lifePath={lifePath} />
        <NumbersDisplay compatibilityData={compatibilityData} />
      </div>
    </motion.div>
  );
};

export default CompatibilityChart;