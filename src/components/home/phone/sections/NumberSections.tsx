import { motion } from "framer-motion";
import { useState } from "react";
import NumberSection from "../NumberSection";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { X, Sparkles } from "lucide-react";

const NumberSections = () => {
  const [showAnalysis, setShowAnalysis] = useState(false);

  const handleReadClick = () => {
    setShowAnalysis(true);
  };

  return (
    <>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-3">
            <NumberSection
              id="lifepath"
              title="Life Path Number"
              number="8"
              subtitle="The Powerhouse"
              gradientFrom="[#8B5CF6]"
              gradientTo="[#D946EF]"
            />

            <NumberSection
              id="cycle"
              title="Cycle Number"
              number="3"
              subtitle="The Creator"
              gradientFrom="[#F59E0B]"
              gradientTo="[#EF4444]"
            />
          </div>

          <div className="space-y-3">
            <NumberSection
              id="partial"
              title="Partial Energy"
              number="4"
              subtitle="The Builder"
              gradientFrom="[#E5DEFF]"
              gradientTo="[#D6BCFA]"
            />

            <NumberSection
              id="energy2025"
              title="2025 Energy"
              number="9"
              subtitle="The Achiever"
              gradientFrom="[#10B981]"
              gradientTo="[#3B82F6]"
            />
          </div>

          <NumberSection
            id="lucky"
            title="Lucky Number"
            number="7"
            subtitle="The Mystic"
            gradientFrom="[#0EA5E9]"
            gradientTo="[#8B5CF6]"
          />

          <NumberSection
            id="zodiac"
            title="Chinese Zodiac"
            number="羊"
            subtitle="Year of the Goat"
            gradientFrom="[#0EA5E9]"
            gradientTo="[#8B5CF6]"
          />
        </div>

        <div id="secret-number" className="rounded-xl bg-gradient-to-br from-amber-500/30 to-purple-500/30 p-4">
          <h3 className="text-sm font-semibold text-white/90 mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Secret Number
          </h3>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-white/70 mb-2">
                Your exclusive Secret Number reveals hidden talents and destiny
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center px-4 py-2 rounded-lg bg-amber-500/20 border border-amber-500/30"
              >
                <span className="text-xl font-bold bg-gradient-to-r from-amber-200 to-purple-400 bg-clip-text text-transparent">
                  33
                </span>
                <span className="ml-2 text-xs text-amber-200/80">Master Teacher</span>
              </motion.div>
            </div>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500/20 to-purple-500/20 flex items-center justify-center"
            >
              <span className="text-amber-200">✧</span>
            </motion.div>
          </div>
        </div>

        <button
          disabled
          className="relative w-full py-2 px-4 rounded-lg bg-gradient-to-r from-[#8B5CF6]/20 to-[#D946EF]/20 border border-white/10 text-white/50 cursor-not-allowed text-sm overflow-hidden"
        >
          <span className="relative z-10">Read Full Analysis →</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              repeatDelay: 1
            }}
          />
        </button>
      </div>

      {showAnalysis && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-50 bg-black/90 p-4"
        >
          <div className="relative h-full w-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 text-white"
              onClick={() => setShowAnalysis(false)}
            >
              <X className="h-6 w-6" />
            </Button>
            
            <ScrollArea className="h-full w-full px-2">
              <div className="space-y-8 py-8">
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent mb-4">
                    Your Complete Numerological Profile
                  </h2>
                  
                  <div className="space-y-6">
                    <section>
                      <h3 className="text-xl font-semibold text-white/90 mb-2">Life Path Number 8 - The Powerhouse</h3>
                      <p className="text-white/70 leading-relaxed">
                        As a Life Path 8, you embody the energy of abundance and material success. You have natural leadership abilities and a strong drive for achievement. Your path is characterized by the pursuit of personal power and financial prosperity, but it's essential to maintain balance and use your influence wisely.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-white/90 mb-2">Partial Energy 4 - The Builder</h3>
                      <p className="text-white/70 leading-relaxed">
                        Your Partial Energy of 4 brings stability and determination to your character. You have a natural ability to create solid foundations and work systematically towards your goals. This energy complements your Life Path by providing the structure needed to manifest your ambitious visions.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-white/90 mb-2">Secret Number 33 - The Master Teacher</h3>
                      <p className="text-white/70 leading-relaxed">
                        Having 33 as your Secret Number is particularly significant as it's a Master Number. This indicates a profound spiritual purpose and the potential to make a lasting impact on others through guidance and wisdom. Your inner nature carries the energy of enlightened leadership and humanitarian service.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold text-white/90 mb-2">Chinese Zodiac - Year of the Dragon</h3>
                      <p className="text-white/70 leading-relaxed">
                        The Dragon brings powerful, auspicious energy to your chart. In Chinese astrology, Dragons are considered natural leaders, innovators, and bearers of good fortune. This celestial influence amplifies your Life Path 8's leadership qualities and adds an element of cosmic timing to your endeavors.
                      </p>
                    </section>

                    <section className="pt-4">
                      <h3 className="text-xl font-semibold text-white/90 mb-2">Combined Influence</h3>
                      <p className="text-white/70 leading-relaxed">
                        The combination of these numbers creates a powerful synergy. Your Life Path 8 and Partial Energy 4 provide the practical foundation and material success potential, while your Secret Number 33 adds a spiritual dimension and teaching ability. The Dragon's influence brings additional power and timing awareness to your journey.
                      </p>
                    </section>
                  </div>
                </div>
              </div>
            </ScrollArea>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default NumberSections;