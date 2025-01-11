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
      className="relative overflow-hidden bg-gradient-to-br from-[#001233] to-[#023e8a] rounded-3xl p-8 md:p-12 border border-[#0466c8]/30"
    >
      {/* Animated background particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-emerald-500/10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Glowing orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute w-32 h-32 rounded-full"
          style={{
            background: `radial-gradient(circle, ${
              ["rgba(147,51,234,0.15)", "rgba(59,130,246,0.15)", "rgba(16,185,129,0.15)"][i]
            } 0%, transparent 70%)`,
            left: `${20 + i * 25}%`,
            top: `${20 + i * 20}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            delay: i * 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

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
        
        <Button
          onClick={handleGetStarted}
          size="lg"
          className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#8B5CF6] bg-[length:200%_auto] text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] border border-purple-500/20 relative overflow-hidden group"
        >
          <span className="relative z-10">Unlock Your Analysis</span>
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 animate-shine" />
        </Button>
      </div>
    </motion.div>
  );
};

export default CTASection;
