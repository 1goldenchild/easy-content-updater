import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import FeatureList from "./FeatureList";
import CTASection from "./CTASection";
import PhoneShowcase from "./PhoneShowcase";

const SalesPitch = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

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
    <section className="py-20 relative overflow-hidden">
      <div className="container px-4 md:px-6">
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
              {/* Animated background glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#8B5CF6]/20 via-[#D946EF]/20 to-[#F97316]/20 rounded-lg blur-xl animate-pulse" />
            </motion.h3>
          </div>
          <motion.div 
            className="relative inline-flex items-center mt-4 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/10 via-[#D946EF]/10 to-[#F97316]/10 rounded-full blur-md" />
            <p className="text-white/90 text-lg font-medium bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#F97316] bg-clip-text text-transparent">
              See a sneak peek
            </p>
            <motion.span 
              className="ml-2 inline-block text-[#D946EF]"
              animate={{ 
                y: [0, 8, 0],
                rotate: [0, 10, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ↓
            </motion.span>
            {/* Hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/0 via-[#D946EF]/0 to-[#F97316]/0 rounded-full transition-all duration-300 group-hover:from-[#8B5CF6]/10 group-hover:via-[#D946EF]/10 group-hover:to-[#F97316]/10" />
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Features List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
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
                    {/* Animated background glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#8B5CF6]/20 via-[#D946EF]/20 to-[#F97316]/20 rounded-lg blur-xl animate-pulse" />
                  </motion.h3>
                </div>
                <motion.div 
                  className="relative inline-flex items-center mt-4 group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/10 via-[#D946EF]/10 to-[#F97316]/10 rounded-full blur-md" />
                  <p className="text-white/90 text-xl font-medium bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#F97316] bg-clip-text text-transparent">
                    See a sneak peek
                  </p>
                  <motion.span 
                    className="ml-2 inline-block text-[#D946EF]"
                    animate={{ 
                      x: [0, 8, 0],
                      rotate: [0, 10, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    →
                  </motion.span>
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/0 via-[#D946EF]/0 to-[#F97316]/0 rounded-full transition-all duration-300 group-hover:from-[#8B5CF6]/10 group-hover:via-[#D946EF]/10 group-hover:to-[#F97316]/10" />
                </motion.div>
              </motion.div>
            </div>

            {/* Scroll Hint Animation */}
            {!hasScrolled && (
              <motion.div 
                className="absolute left-1/2 bottom-4 lg:left-auto lg:right-0 lg:bottom-1/2 z-50 transform -translate-x-1/2 lg:translate-x-0 lg:translate-y-1/2"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.3, 1, 0.3],
                  y: [0, 10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
                  <motion.div 
                    className="w-1 h-2 bg-white/50 mx-auto rounded-full"
                    animate={{
                      y: [0, 12, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>
            )}

            <PhoneShowcase />
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 opacity-50 blur-lg animate-pulse" />
                <span className="relative bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent animate-shine">
                  Unlock Your Complete Numerology Profile
                </span>
              </span>
            </motion.h2>
            
            <FeatureList />
          </motion.div>

          {/* Right Column - CTA Section */}
          <CTASection />
        </div>
      </div>
    </section>
  );
};

export default SalesPitch;