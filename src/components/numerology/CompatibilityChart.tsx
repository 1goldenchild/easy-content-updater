import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip
} from 'recharts';

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

  const getNeutralNumbers = (compatibleNums: number[], enemyNums: number[]): number[] => {
    const allNumbers = Array.from({ length: 9 }, (_, i) => i + 1);
    return allNumbers.filter(num => !compatibleNums.includes(num) && !enemyNums.includes(num));
  };

  const compatibleNumbers = getCompatibleNumbers(lifePath);
  const enemyNumbers = getEnemyNumbers(lifePath);
  const neutralNumbers = getNeutralNumbers(compatibleNumbers, enemyNumbers);

  const compatibilityData = [
    { name: 'Compatible', value: compatibleNumbers.length, numbers: compatibleNumbers },
    { name: 'Neutral', value: neutralNumbers.length, numbers: neutralNumbers },
    { name: 'Challenging', value: enemyNumbers.length, numbers: enemyNumbers }
  ];

  const COLORS = ['#8B5CF6', '#6B7280', '#EF4444'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mt-8 p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
    >
      <h3 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]">
        Numerological Compatibility
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="w-full h-[300px] md:h-[400px]">
          <h4 className="text-lg font-semibold text-center text-white/80 mb-4">Compatibility Distribution</h4>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={compatibilityData}
                cx="50%"
                cy="45%"
                innerRadius={60}
                outerRadius={100}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                label={({ name, value }) => `${name} (${value})`}
              >
                {compatibilityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(26, 31, 44, 0.9)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  borderRadius: '8px',
                  color: 'rgba(255, 255, 255, 0.8)'
                }}
              />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-8 mt-8 lg:mt-0">
          <div>
            <h4 className="text-lg font-semibold text-white/80 mb-3">Compatible Numbers</h4>
            <div className="flex flex-wrap gap-3">
              {compatibleNumbers.map((num) => (
                <div
                  key={`compatible-${num}`}
                  className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300"
                >
                  {num}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white/80 mb-3">Neutral Numbers</h4>
            <div className="flex flex-wrap gap-3">
              {neutralNumbers.map((num) => (
                <div
                  key={`neutral-${num}`}
                  className="px-4 py-2 rounded-full bg-gray-500/20 border border-gray-500/30 text-gray-300"
                >
                  {num}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white/80 mb-3">Challenging Numbers</h4>
            <div className="flex flex-wrap gap-3">
              {enemyNumbers.map((num) => (
                <div
                  key={`enemy-${num}`}
                  className="px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 text-red-300"
                >
                  {num}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CompatibilityChart;