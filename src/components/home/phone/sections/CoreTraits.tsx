import { motion } from "framer-motion";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';

const CoreTraits = () => {
  const traits = [
    { trait: "IQ", value: 85, number: "1" },
    { trait: "EQ", value: 92, number: "2" },
    { trait: "Spiritual", value: 88, number: "3" },
    { trait: "Leadership", value: 78, number: "4" },
    { trait: "Creativity", value: 95, number: "5" },
    { trait: "Intuition", value: 89, number: "6" },
    { trait: "Success", value: 82, number: "7" }
  ];

  return (
    <div id="traits" className="rounded-xl bg-gradient-to-br from-[#0EA5E9]/30 to-[#8B5CF6]/30 p-4">
      <div className="relative mb-6">
        <div className="aspect-square bg-white/5 rounded-lg border border-white/10 p-4 mb-4">
          <div className="w-full h-full flex items-center justify-center">
            <RadarChart width={200} height={200} data={traits}>
              <PolarGrid stroke="rgba(255,255,255,0.2)" />
              <PolarAngleAxis 
                dataKey="number"
                tick={{ fill: 'rgba(255,255,255,0.8)', fontSize: 12 }}
              />
              <Radar
                name="Traits"
                dataKey="value"
                stroke="#8B5CF6"
                fill="#8B5CF6"
                fillOpacity={0.3}
              />
            </RadarChart>
          </div>
        </div>
      </div>
      
      <h3 className="text-sm font-semibold text-white/90 mb-3 text-center">Core Traits</h3>
      <div className="space-y-3">
        {traits.map((trait, index) => (
          <div key={trait.trait} className="space-y-1">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-[#8B5CF6] font-bold">{trait.number}</span>
                <span className="text-xs text-white/80">{trait.trait}</span>
              </div>
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