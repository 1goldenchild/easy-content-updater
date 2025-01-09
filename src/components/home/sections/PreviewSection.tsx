import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PhoneShowcase from "../PhoneShowcase";
import CTAButton from "../buttons/CTAButton";
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
      
      {/* Updated CTA Button with new styling and margin */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-center mt-4 mb-12" // Added mb-12 for more space below
      >
        <button
          onClick={handleGetStarted}
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white transition-all bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg hover:from-violet-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
        >
          Unlock Your Reading
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            →
          </motion.span>
        </button>
      </motion.div>
    </div>
  );
};

export default PreviewSection;