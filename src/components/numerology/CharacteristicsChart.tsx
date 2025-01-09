import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';
import { characteristicsData } from "./types/characteristics";
import { numerologyCompatibility } from "@/utils/numerologyCompatibility";

interface CharacteristicsChartProps {
  isVisible: boolean;
  lifePath?: number;
}

const CharacteristicsChart = ({ isVisible, lifePath = 1 }: CharacteristicsChartProps) => {
  if (!isVisible) return null;

  const lifePathKey = lifePath.toString();
  const traits = characteristicsData[lifePathKey] || characteristicsData["1"];
  const compatibility = numerologyCompatibility[lifePath] || numerologyCompatibility[1];

  // Create numbered data for the radar chart
  const numberedTraits = traits.map((trait, index) => ({
    ...trait,
    number: (index + 1).toString(),
  }));

  console.log("Rendering characteristics for life path:", lifePath);
  console.log("Traits data:", traits);
  console.log("Compatibility data:", compatibility);

  // Get compatible and challenging numbers as strings
  const compatibleNumbers = compatibility.compatible.join(', ');
  const challengingNumbers = compatibility.challenging.join(', ');

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full mt-8"
    >
      <div className="rounded-lg bg-white/5 border border-white/10 max-w-[2400px] mx-auto">
        <ScrollArea className="w-full">
          <div className="p-4 md:p-6 lg:p-8 w-full">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] mb-8">
              Numerological Characteristics
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Radar Chart */}
              <div className="aspect-square bg-white/5 rounded-lg border border-white/10 p-4">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={numberedTraits}>
                    <PolarGrid stroke="rgba(255,255,255,0.1)" />
                    <PolarAngleAxis
                      dataKey="number"
                      tick={{ fill: '#8B5CF6', fontSize: 14, fontWeight: 'bold' }}
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
                  <div className="space-y-6">
                    {traits.map((trait, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center gap-4">
                          <span className="text-[#8B5CF6] font-bold min-w-[24px]">{index + 1}</span>
                          <span className="text-white/70">{trait.trait}</span>
                        </div>
                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] rounded-full" 
                            style={{ width: `${(trait.value / 10) * 100}%` }}
                          />
                        </div>
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
                          {compatibleNumbers}
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
                          {challengingNumbers}
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