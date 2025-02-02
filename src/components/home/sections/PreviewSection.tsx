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
    const isReadingPage = window.location.pathname === '/reading';
    navigate(isReadingPage ? '/collect-reading-info' : '/collect-info');
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

  const isReadingPage = window.location.pathname === '/reading';
  const headingText = isReadingPage ? "What's Included in Your Reading?" : "What's Included in Your Analysis?";
  const buttonText = "Unlock Your Reading";

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
            data-section="preview-heading"
            className="text-2xl font-bold relative z-10 px-6 py-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#F97316] bg-clip-text text-transparent relative">
              {headingText}
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
              data-section="preview-heading"
              className="text-3xl font-bold relative z-10 px-6 py-2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#F97316] bg-clip-text text-transparent">
                {headingText}
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
        className="flex justify-center mt-4 mb-36"
      >
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#534363] via-[#534363] to-[#534363] rounded-md blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <Button
            onClick={handleGetStarted}
            className="w-full bg-gradient-to-r from-[#534363] to-[#a39356] hover:from-[#534363] hover:to-[#a39356] text-amber-200/90 font-normal tracking-wider shadow-[0_0_15px_rgba(251,191,36,0.1)] transition-all duration-500 bg-[length:200%_auto] hover:bg-right-top hover:shadow-[0_0_20px_rgba(251,191,36,0.2)] border border-[#86736f] rounded-md relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              {buttonText}
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