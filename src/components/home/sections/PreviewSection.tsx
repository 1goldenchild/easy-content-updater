import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PhoneShowcase from "../PhoneShowcase";
import { Button } from "@/components/ui/button";
import { scrollToTop } from "../CallToAction";

const PreviewSection = () => {
  const navigate = useNavigate();
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleGetStarted = () => {
    navigate('/collect-info');
    scrollToTop();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="space-y-8">
      {/* Preview Heading - Visible on mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="lg:hidden text-center mb-8 relative"
      >
        <div className="relative inline-block">
          <motion.h3 
            className="text-2xl font-bold relative z-10 px-6 py-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#F97316] bg-clip-text text-transparent relative">
              What's included in your analysis?
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#8B5CF6]/20 via-[#D946EF]/20 to-[#F97316]/20 rounded-lg blur-xl animate-pulse" />
          </motion.h3>
        </div>
      </motion.div>

      {/* Preview Heading - Visible on larger screens */}
      <div className="hidden lg:block">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative mb-8"
        >
          <div className="relative inline-block">
            <motion.h3 
              className="text-3xl font-bold relative z-10 px-6 py-2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#F97316] bg-clip-text text-transparent">
                What's included in your analysis?
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-[#8B5CF6]/20 via-[#D946EF]/20 to-[#F97316]/20 rounded-lg blur-xl animate-pulse" />
            </motion.h3>
          </div>
        </motion.div>
      </div>
      
      <PhoneShowcase />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-center mt-4 mb-12"
      >
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#2A2311] via-[#3B3015] to-[#2A2311] rounded-md blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <Button
            onClick={handleGetStarted}
            className="relative bg-gradient-to-r from-[#1A1508] via-[#2A2311] to-[#1A1508] hover:from-[#2A2311] hover:via-[#3B3015] hover:to-[#2A2311] text-amber-200/90 font-semibold shadow-[0_0_15px_rgba(251,191,36,0.1)] transition-all duration-500 hover:shadow-[0_0_20px_rgba(251,191,36,0.2)] border border-amber-900/30 rounded-md overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Unlock Your Reading
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="ml-2"
              >
                →
              </motion.span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-900/10 to-transparent translate-x-[-200%] animate-shimmer" />
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default PreviewSection;
