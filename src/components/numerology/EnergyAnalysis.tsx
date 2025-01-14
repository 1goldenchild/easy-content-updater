import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface EnergyAnalysisProps {
  isVisible: boolean;
}

const EnergyAnalysis = ({ isVisible }: EnergyAnalysisProps) => {
  if (!isVisible) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full mt-8"
    >
      <div className="rounded-lg bg-white/5 border border-white/10">
        <ScrollArea className="h-[400px] w-full">
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-emerald-400" />
              <h3 className="text-2xl font-bold text-white/90">2025 Energy Analysis</h3>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <h4 className="text-xl font-semibold text-white/90 mb-4">Universal Year 2025: A Universal 9 Year</h4>
              
              <p className="text-white/70 mb-6">
                2025 is a Universal 9 Year — a time of completion, transformation, and spiritual growth. 
                This year invites us to wrap up old chapters, heal emotional wounds, and release what no longer serves us.
              </p>

              <div className="space-y-6">
                <div>
                  <h5 className="text-lg font-semibold text-white/90 mb-2">Endings & New Beginnings</h5>
                  <p className="text-white/70">
                    The 9 is about closure. Situations, relationships, or projects that have reached their end 
                    will naturally fall away. It's a year to reflect, let go, and honor the past.
                  </p>
                </div>

                <div>
                  <h5 className="text-lg font-semibold text-white/90 mb-2">Healing & Transformation</h5>
                  <p className="text-white/70">
                    Focus on personal healing and spiritual growth. It's a time to forgive, release emotional 
                    baggage, and create space for new beginnings.
                  </p>
                </div>

                <div>
                  <h5 className="text-lg font-semibold text-white/90 mb-2">Ego Work</h5>
                  <p className="text-white/70">
                    The 9 year calls for introspection on the ego. You may be asked to face your pride, 
                    arrogance, or self-centeredness. This is a great year to shed the excess baggage of 
                    the ego and align more with your higher self. Let go of any illusions of control, as 
                    this year will challenge you to release the need for external validation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </motion.div>
  );
};

export default EnergyAnalysis;