import { motion } from "framer-motion";
import { useState } from "react";
import NumberSection from "../NumberSection";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const NumberSections = () => {
  const [showAnalysis, setShowAnalysis] = useState(false);

  const handleReadClick = () => {
    setShowAnalysis(true);
  };

  return (
    <>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <NumberSection
            id="lifepath"
            title="Life Path Number"
            number="8"
            subtitle="The Powerhouse"
            gradientFrom="[#8B5CF6]"
            gradientTo="[#D946EF]"
          />

          <NumberSection
            id="partial"
            title="Partial Energy"
            number="4"
            subtitle="The Builder"
            gradientFrom="[#E5DEFF]"
            gradientTo="[#D6BCFA]"
          />

          <NumberSection
            id="secret"
            title="Secret Number"
            number="33"
            subtitle="The Master Teacher"
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

        <button
          onClick={handleReadClick}
          className="relative w-full py-2 px-4 rounded-lg bg-gradient-to-r from-[#8B5CF6]/20 to-[#D946EF]/20 border border-white/10 text-white/70 hover:text-white/90 transition-colors text-sm overflow-hidden group"
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
