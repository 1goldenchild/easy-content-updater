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
          <div className="p-8">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] mb-8">
              Numerological Characteristics
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Radar Chart - Larger size */}
              <div className="min-h-[400px] bg-white/5 rounded-lg border border-white/10 p-6">
                <ResponsiveContainer width="100%" height={400}>
                  <RadarChart 
                    cx="50%" 
                    cy="50%" 
                    outerRadius="65%" 
                    margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
                    data={traits}
                  >
                    <PolarGrid stroke="rgba(255,255,255,0.1)" />
                    <PolarAngleAxis
                      dataKey="trait"
                      tick={{ 
                        fill: 'rgba(255,255,255,0.7)', 
                        fontSize: 12,
                        dy: 4,
                        width: 120
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

              {/* Characteristics List - Enhanced layout */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-semibold text-white/90 mb-6">Core Traits</h4>
                  <div className="space-y-4">
                    {traits.map((trait, index) => (
                      <div key={index} className="flex items-center gap-6">
                        <span className="text-white/70 text-lg min-w-[140px]">{trait.trait}</span>
                        <div className="flex-1 h-3 bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] rounded-full transition-all duration-500 ease-out" 
                            style={{ width: `${(trait.value / 10) * 100}%` }}
                          />
                        </div>
                        <span className="text-white/60 text-lg font-medium min-w-[50px] text-right">
                          {trait.value}/10
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white/90 mb-6">Compatibility</h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-6 rounded-lg bg-white/5 border border-white/10 relative overflow-hidden">
                      <div className="absolute inset-0 bg-emerald-500/5" />
                      <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent animate-[shimmer_3s_linear_infinite]" />
                      </div>
                      <div className="relative">
                        <h5 className="text-base font-medium text-white/70 mb-3">Best Match</h5>
                        <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">
                          9
                        </div>
                      </div>
                    </div>
                    <div className="p-6 rounded-lg bg-white/5 border border-white/10 relative overflow-hidden">
                      <div className="absolute inset-0 bg-red-500/5" />
                      <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent animate-[shimmer_3s_linear_infinite]" />
                      </div>
                      <div className="relative">
                        <h5 className="text-base font-medium text-white/70 mb-3">Challenge</h5>
                        <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
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