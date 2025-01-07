import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "./CallToAction";

const CTASection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/collect-info');
    scrollToTop();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative bg-gradient-to-br from-[#001233] to-[#023e8a] rounded-3xl p-8 md:p-12 border border-[#0466c8]/30"
    >
      <div className="space-y-6 text-center">
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
        
        <Button
          onClick={handleGetStarted}
          size="lg"
          className="bg-gradient-to-r from-[#0466c8] to-[#023e8a] hover:from-[#0353a4] hover:to-[#012a70] text-white font-semibold px-8 py-6 text-lg h-auto"
        >
          Start Your Analysis
        </Button>
      </div>

      {/* Ambient background elements */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-[#0466c8]/10 to-[#023e8a]/10 blur-xl"
          style={{
            left: `${20 + i * 25}%`,
            top: `${20 + i * 20}%`,
          }}
          animate={{
            opacity: [0.2, 0.3, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            delay: i * 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </motion.div>
  );
};

export default CTASection;