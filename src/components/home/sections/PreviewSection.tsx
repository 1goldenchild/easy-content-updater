import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PhoneShowcase from "../PhoneShowcase";
import PreviewOverlay from "../phone/PreviewOverlay";

const PreviewSection = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="space-y-8 relative min-h-screen">
      {/* Stars Background */}
      <div className="absolute inset-0 h-[125%] overflow-hidden pointer-events-none">
        {[...Array(63)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3,
              backgroundColor: '#10B981', // emerald-500 color
              zIndex: 10
            }}
          />
        ))}
      </div>

      {/* Preview Heading - Visible on mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center px-4 md:hidden"
      >
        <h2 className="text-2xl font-bold text-white mb-2">
          What&apos;s included in your analysis
        </h2>
        <p className="text-white/70">
          Swipe through to preview all the insights you&apos;ll receive
        </p>
      </motion.div>

      {/* Preview Heading - Visible on desktop */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="hidden md:block text-center"
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          What&apos;s included in your analysis
        </h2>
        <p className="text-xl text-white/70">
          Here&apos;s a preview of all the insights you&apos;ll receive
        </p>
      </motion.div>

      <div className="relative">
        <PhoneShowcase />
        {showOverlay && <PreviewOverlay />}
      </div>
    </div>
  );
};

export default PreviewSection;