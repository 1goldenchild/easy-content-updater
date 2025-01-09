import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';
import { characteristicsData } from "./types/characteristics";

interface CharacteristicsChartProps {
  isVisible: boolean;
  lifePath?: number;
}

const CharacteristicsChart = ({ isVisible, lifePath = 1 }: CharacteristicsChartProps) => {
  if (!isVisible) return null;

  const lifePathKey = lifePath.toString();
  const traits = characteristicsData[lifePathKey] || characteristicsData["1"];

  console.log("Rendering characteristics for life path:", lifePath);
  console.log("Traits data:", traits);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full mt-8"
    >
      <div className="rounded-lg bg-white/5 border border-white/10">
        <ScrollArea className="w-full">
          <div className="p-6 md:p-8">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] mb-8">
              Numerological Characteristics
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Radar Chart - Optimized layout */}
              <div className="aspect-square bg-white/5 rounded-lg border border-white/10 p-4">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart 
                    cx="50%" 
                    cy="50%" 
                    outerRadius="55%" 
                    margin={{ top: 35, right: 35, bottom: 35, left: 35 }}
                    data={traits}
                  >
                    <PolarGrid stroke="rgba(255,255,255,0.1)" />
                    <PolarAngleAxis
                      dataKey="trait"
                      tick={{ 
                        fill: 'rgba(255,255,255,0.7)', 
                        fontSize: 10,
                        dy: 3,
                        width: 100,
                        wordWrap: true
                      }}
                      tickLine={false}
                    />
                    <Radar
                      name="Traits"
                      dataKey="value"
                      stroke="rgba(139,92,246,0.8)"
                      fill="rgba(139,92,246,0.3)"
                      strokeWidth={2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              {/* Characteristics List */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white/90 mb-4">Core Traits</h4>
                  <div className="space-y-3">
                    {traits.map((trait, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <span className="text-white/70 min-w-[120px]">{trait.trait}</span>
                        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] rounded-full" 
                            style={{ width: `${(trait.value / 10) * 100}%` }}
                          />
                        </div>
                        <span className="text-white/50 text-sm min-w-[30px] text-right">
                          {trait.value}/10
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white/90 mb-4">Compatibility</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10 relative overflow-hidden">
                      <div className="absolute inset-0 bg-emerald-500/5" />
                      <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent animate-[shimmer_3s_linear_infinite]" />
                      </div>
                      <div className="relative">
                        <h5 className="text-sm font-medium text-white/70 mb-2">Best Match</h5>
                        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">
                          9
                        </div>
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10 relative overflow-hidden">
                      <div className="absolute inset-0 bg-red-500/5" />
                      <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent animate-[shimmer_3s_linear_infinite]" />
                      </div>
                      <div className="relative">
                        <h5 className="text-sm font-medium text-white/70 mb-2">Challenge</h5>
                        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
                          4
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </motion.div>
  );
};

export default CharacteristicsChart;