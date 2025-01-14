import { motion } from "framer-motion";
import { Clover } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { calculateLuckyNumber } from "@/utils/numerologyCalculations";

interface LuckyNumberAnalysisProps {
  dateOfBirth: Date;
  isVisible: boolean;
}

const LuckyNumberAnalysis = ({ dateOfBirth, isVisible }: LuckyNumberAnalysisProps) => {
  if (!isVisible) return null;

  const luckyNumber = calculateLuckyNumber(dateOfBirth);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full mt-8"
    >
      <div className="rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30">
        <ScrollArea className="h-[400px] w-full">
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6">
              <Clover className="w-6 h-6 text-emerald-400" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-200 to-teal-400 bg-clip-text text-transparent">
                Lucky Number Analysis
              </h3>
            </div>
            
            <div className="space-y-6">
              <motion.div
                initial={{ scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold bg-gradient-to-r from-emerald-200 to-teal-400 bg-clip-text text-transparent">
                    {luckyNumber}
                  </span>
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 flex items-center justify-center"
                  >
                    <span className="text-2xl text-emerald-200">☘️</span>
                  </motion.div>
                </div>
                
                <div className="prose prose-invert max-w-none">
                  <p className="text-white/70 text-lg mb-4">
                    This is your lucky number! It's the perfect number to use for any significant moment—whether it's choosing a wedding date, starting a business, buying a new car, or anything else that requires a little extra luck.
                  </p>
                  <ul className="text-white/70 space-y-2">
                    <li>Use this number when making important choices</li>
                    <li>Look for this number in addresses, phone numbers, or dates</li>
                    <li>Consider incorporating it into your daily routines</li>
                    <li>Pay attention when you see this number repeatedly</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </motion.div>
  );
};

export default LuckyNumberAnalysis;