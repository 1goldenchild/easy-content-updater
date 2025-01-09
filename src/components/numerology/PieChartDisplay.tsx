import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import { CompatibilityDataItem } from './types';

interface PieChartDisplayProps {
  compatibilityData: CompatibilityDataItem[];
  lifePath: number;
}

const PieChartDisplay = ({ compatibilityData, lifePath }: PieChartDisplayProps) => {
  return (
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
          </Pie>
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="central"
            className="fill-white/80 text-lg font-semibold"
          >
            {lifePath}
          </text>
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
  );
};

export default PieChartDisplay;