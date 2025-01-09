import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import PreviewOverlay from "./PreviewOverlay";

interface PhoneFrameProps {
  children: ReactNode;
  activeSection: string;
  onSectionChange: (id: string) => void;
}

const PhoneFrame = ({ children }: PhoneFrameProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const container = e.target as HTMLElement;
      const scrollPercentage = (container.scrollTop / (container.scrollHeight - container.clientHeight)) * 100;
      setScrollProgress(scrollPercentage);
      console.log("Phone scroll progress:", scrollPercentage);
    };

    const container = document.querySelector('.scrollbar-hide');
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full max-w-[300px] mx-auto mb-12"
    >
      <div className="relative w-full aspect-[9/19.5] bg-[#1A1F2C] rounded-[3rem] border-4 border-gray-800 shadow-2xl overflow-hidden">
        {/* Preview Overlay */}
        <PreviewOverlay />
        
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-3xl z-20" />
        
        {/* Progress Bar */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 z-30 h-[90%] w-1">
          <div className="relative h-full w-full">
            {/* Background line */}
            <div className="absolute inset-0 w-full h-full bg-white/5 rounded-full" />
            
            {/* Progress line */}
            <motion.div 
              className="absolute bottom-0 w-full rounded-full bg-gradient-to-t from-[#8B5CF6] via-[#D946EF] to-[#F97316]"
              style={{ 
                height: `${scrollProgress}%`,
                filter: 'blur(4px)',
                opacity: 0.6
              }}
            />
            
            {/* Solid progress line */}
            <motion.div 
              className="absolute bottom-0 w-full rounded-full bg-gradient-to-t from-[#8B5CF6] via-[#D946EF] to-[#F97316]"
              style={{ height: `${scrollProgress}%` }}
            />

            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  animate={{
                    y: ["0%", "100%"],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "linear",
                  }}
                  style={{
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Screen Content */}
        <div className="absolute inset-0 overflow-y-auto overflow-x-hidden scrollbar-hide">
          {children}
        </div>

        {/* Reflection Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
        
        {/* Scroll Fade Overlays */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#1A1F2C] to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#1A1F2C] to-transparent pointer-events-none z-10" />
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute -left-8 -bottom-8 w-24 h-24 bg-gradient-to-r from-[#8B5CF6]/30 to-[#D946EF]/30 rounded-full blur-xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-r from-[#0EA5E9]/30 to-[#8B5CF6]/30 rounded-full blur-xl"
      />
    </motion.div>
  );
};

export default PhoneFrame;