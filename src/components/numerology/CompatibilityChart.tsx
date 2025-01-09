import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  Label
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
    { 
      name: 'Compatible', 
      value: compatibleNumbers.length, 
      numbers: compatibleNumbers,
      color: '#8B5CF6' // Vivid purple
    },
    { 
      name: 'Neutral', 
      value: neutralNumbers.length, 
      numbers: neutralNumbers,
      color: '#0EA5E9' // Ocean blue
    },
    { 
      name: 'Challenging', 
      value: enemyNumbers.length, 
      numbers: enemyNumbers,
      color: '#F97316' // Bright orange
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
        <div className="w-full h-[300px] md:h-[400px] relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl" />
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={compatibilityData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={6}
                dataKey="value"
              >
                {compatibilityData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.color}
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth={2}
                  />
                ))}
                <Label
                  content={({ viewBox: { cx, cy } }) => (
                    <text
                      x={cx}
                      y={cy}
                      textAnchor="middle"
                      dominantBaseline="central"
                      className="fill-white/80 text-lg font-semibold"
                    >
                      {lifePath}
                    </text>
                  )}
                />
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(26, 31, 44, 0.95)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  borderRadius: '8px',
                  backdropFilter: 'blur(8px)',
                  color: 'rgba(255, 255, 255, 0.9)',
                  padding: '12px'
                }}
                formatter={(value, name) => [`${value} numbers`, name]}
              />
              <Legend 
                verticalAlign="bottom"
                height={36}
                formatter={(value) => (
                  <span className="text-sm font-medium whitespace-nowrap text-white/80">
                    {value}
                  </span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-6">
          {compatibilityData.map((category, index) => (
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
                {category.numbers.map((num) => (
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
      </div>
    </motion.div>
  );
};

export default CompatibilityChart;