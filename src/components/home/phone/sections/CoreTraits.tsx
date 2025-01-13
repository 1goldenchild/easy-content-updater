import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import { PieChart, Pie, Cell } from 'recharts';

const CoreTraits = () => {
  const traits = [
    { name: "IQ", value: 85 },
    { name: "EQ", value: 92 },
    { name: "Spiritual Connection", value: 88 },
    { name: "Leadership", value: 78 },
    { name: "Creativity", value: 95 },
    { name: "Intuition", value: 89 },
    { name: "Material Success", value: 82 }
  ];

  // Data for the pie chart
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div id="traits" className="rounded-xl bg-gradient-to-br from-[#0EA5E9]/30 to-[#8B5CF6]/30 p-4">
      <div className="relative mb-6">
        <div className="aspect-square bg-white/5 rounded-lg border border-white/10 p-4 mb-4">
          <div className="w-full h-full flex items-center justify-center">
            <PieChart width={160} height={160}>
              <Pie
                data={data}
                cx={80}
                cy={80}
                innerRadius={40}
                outerRadius={60}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>
      </div>
      
      <h3 className="text-sm font-semibold text-white/90 mb-3 text-center">Core Traits</h3>
      <div className="space-y-3">
        {traits.map((trait, index) => (
          <div key={trait.name} className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-xs text-white/80">{trait.name}</span>
              <span className="text-xs font-medium text-white/60">{trait.value}%</span>
            </div>
            <motion.div 
              initial={{ width: "0%" }}
              animate={{ width: `${trait.value}%` }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="h-2 bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] rounded-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreTraits;