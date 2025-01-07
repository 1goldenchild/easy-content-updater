import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CharacteristicsChartProps {
  isVisible: boolean;
  lifePath: number;
}

const CharacteristicsChart = ({ isVisible, lifePath }: CharacteristicsChartProps) => {
  if (!isVisible) return null;

  const getSpiritualConnectionValue = (number: number): number => {
    const values: Record<number, number> = {
      1: 7,
      2: 10,
      3: 7,
      4: 5,
      5: 7,
      6: 7,
      7: 10,
      8: 8,
      9: 9,
      11: 9,
      22: 6,
      33: 10
    };
    return values[number] || 7; // Default to 7 if number not found
  };

  // Random values between 5 and 10 for other traits
  const getRandomValue = () => Math.floor(Math.random() * 6) + 5;

  const spiritualConnection = getSpiritualConnectionValue(lifePath);
  const leadership = getRandomValue();
  const creativity = getRandomValue();
  const intuition = getRandomValue();
  const materialSuccess = getRandomValue();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full mt-8"
    >
      <div className="rounded-lg bg-white/5 border border-white/10">
        <ScrollArea className="w-full">
          <div className="p-6 md:p-8 lg:p-12">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] mb-8">
              Numerological Characteristics
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Spider/Radar Chart will go here later */}
              <div className="aspect-square bg-white/5 rounded-lg border border-white/10 p-4">
                <div className="w-full h-full flex items-center justify-center text-white/50">
                  Characteristics Chart Coming Soon
                </div>
              </div>

              {/* Characteristics List */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white/90 mb-4">Core Traits</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Spiritual Connection</span>
                      <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] rounded-full" 
                          style={{ width: `${(spiritualConnection / 10) * 100}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Leadership</span>
                      <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] rounded-full"
                          style={{ width: `${(leadership / 10) * 100}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Creativity</span>
                      <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] rounded-full"
                          style={{ width: `${(creativity / 10) * 100}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Intuition</span>
                      <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] rounded-full"
                          style={{ width: `${(intuition / 10) * 100}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Material Success</span>
                      <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] rounded-full"
                          style={{ width: `${(materialSuccess / 10) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white/90 mb-4">Compatibility</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <h5 className="text-sm font-medium text-white/70 mb-2">Best Match</h5>
                      <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]">
                        9
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <h5 className="text-sm font-medium text-white/70 mb-2">Challenge</h5>
                      <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]">
                        4
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