import { motion } from "framer-motion";
import { Key } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { secretNumberDescriptions } from "@/utils/secretNumberDescriptions";

interface SecretAnalysisProps {
  secretNumber: number;
  isVisible: boolean;
}

const SecretAnalysis = ({ secretNumber, isVisible }: SecretAnalysisProps) => {
  if (!isVisible) return null;

  const description = secretNumberDescriptions[secretNumber] || "Description not found.";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full mt-8"
    >
      <div className="rounded-lg bg-gradient-to-br from-amber-500/20 to-purple-500/20 border border-amber-500/30">
        <ScrollArea className="h-[400px] w-full">
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6">
              <Key className="w-6 h-6 text-amber-400" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-200 to-purple-400 bg-clip-text text-transparent">
                Secret Number Analysis
              </h3>
            </div>
            
            <div className="space-y-6">
              <motion.div
                initial={{ scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-xl bg-gradient-to-br from-amber-500/10 to-purple-500/10 border border-amber-500/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold bg-gradient-to-r from-amber-200 to-purple-400 bg-clip-text text-transparent">
                    {secretNumber}
                  </span>
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500/20 to-purple-500/20 flex items-center justify-center"
                  >
                    <span className="text-2xl text-amber-200">✧</span>
                  </motion.div>
                </div>
                
                <div className="prose prose-invert max-w-none">
                  <p className="text-white/70 text-lg whitespace-pre-line">
                    {description}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </motion.div>
  );
};

export default SecretAnalysis;