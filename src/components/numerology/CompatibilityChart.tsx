import { motion } from "framer-motion";
import { numerologyCompatibility } from "@/utils/numerologyCompatibility";
import PieChartDisplay from "./PieChartDisplay";
import NumbersDisplay from "./NumbersDisplay";
import { CompatibilityDataItem } from "./types";

interface CompatibilityChartProps {
  lifePath: number;
  isVisible: boolean;
}

const CompatibilityChart = ({ lifePath, isVisible }: CompatibilityChartProps) => {
  if (!isVisible) return null;

  const getCompatibleNumbers = (number: number): number[] => {
    const compatibilityMap: Record<number, number[]> = {
      1: [3, 5, 9],
      2: [4, 6, 8],
      3: [1, 5, 7],
      4: [2, 8],
      5: [1, 3, 7],
      6: [2, 8, 9],
      7: [3, 5, 9],
      8: [2, 4, 6],
      9: [1, 6, 7],
      11: [2, 4],
      22: [4, 8],
      33: [6, 9]
    };
    return compatibilityMap[number] || [];
  };

  const getEnemyNumbers = (number: number): number[] => {
    const enemyMap: Record<number, number[]> = {
      1: [4, 6, 8],
      2: [1, 7, 9],
      3: [4, 8],
      4: [1, 3, 7],
      5: [2, 4, 8],
      6: [1, 5, 7],
      7: [2, 4, 6],
      8: [1, 3, 5],
      9: [2, 4, 8],
      11: [6, 8],
      22: [1, 9],
      33: [2, 4]
    };
    return enemyMap[number] || [];
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
    { 
      name: 'Love', 
      value: loveNumbers.length, 
      numbers: loveNumbers,
      color: '#FF1493'
    },
    { 
      name: 'Compatible', 
      value: compatibleNumbers.length, 
      numbers: compatibleNumbers,
      color: '#8B5CF6'
    },
    { 
      name: 'Neutral', 
      value: neutralNumbers.length, 
      numbers: neutralNumbers,
      color: '#0EA5E9'
    },
    { 
      name: 'Challenging', 
      value: enemyNumbers.length, 
      numbers: enemyNumbers,
      color: '#F97316'
    }
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