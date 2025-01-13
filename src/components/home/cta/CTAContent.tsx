import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import CTAButton from "./CTAButton";

const CTAContent = () => {
  return (
    <div className="relative z-10 space-y-6 text-center">
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Sparkles className="w-12 h-12 mx-auto text-[#0466c8]" />
      </motion.div>
      
      <h3 className="text-2xl md:text-3xl font-bold text-white">
        Ready to Discover Your True Path?
      </h3>
      
      <p className="text-white/80 max-w-md mx-auto">
        Get your personalized numerology reading today and unlock the secrets of your life's journey.
      </p>
      
      <CTAButton />
    </div>
  );
};

export default CTAContent;