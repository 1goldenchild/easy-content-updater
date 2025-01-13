import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const SecretSection = () => {
  return (
    <div className="rounded-xl bg-gradient-to-br from-amber-500/20 to-purple-500/20 p-4 backdrop-blur-sm border border-amber-500/30">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="w-4 h-4 text-amber-400" />
        <h3 className="text-sm font-semibold text-white">Secret Number Analysis</h3>
      </div>

      <div className="mb-4">
        <div className="text-2xl font-bold bg-gradient-to-r from-amber-200 to-purple-400 bg-clip-text text-transparent">33</div>
        <p className="text-xs text-amber-200/80">Master Teacher Number</p>
      </div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative"
      >
        <Button
          disabled
          variant="secondary"
          className="w-full bg-gradient-to-r from-amber-500/20 to-purple-500/20 hover:from-amber-500/30 hover:to-purple-500/30 text-amber-200/80 border border-amber-500/30"
        >
          Read Full Analysis →
        </Button>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-gradient-to-r from-amber-500/20 to-purple-500/20 flex items-center justify-center pointer-events-none"
        >
          <span className="text-amber-200">✧</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SecretSection;