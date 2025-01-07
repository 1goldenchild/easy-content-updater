import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PhoneFrameProps {
  children: ReactNode;
  activeSection: string;
  onSectionChange: (id: string) => void;
}

const sections = [
  { id: "lifepath", label: "Life Path" },
  { id: "partial", label: "Partial Energy" },
  { id: "secret", label: "Secret Number" },
  { id: "zodiac", label: "Chinese Zodiac" },
  { id: "traits", label: "Core Traits" },
  { id: "compatibility", label: "Matches" },
  { id: "career", label: "Career" },
  { id: "forecast", label: "Forecast" }
];

const PhoneFrame = ({ children, activeSection, onSectionChange }: PhoneFrameProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full max-w-[300px] mx-auto mb-12"
    >
      <div className="relative w-full aspect-[9/19.5] bg-[#1A1F2C] rounded-[3rem] border-4 border-gray-800 shadow-2xl overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-3xl z-20" />
        
        {/* Navigation Dots */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSection === section.id 
                  ? "bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] scale-150" 
                  : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={section.label}
            />
          ))}
        </div>
        
        {/* Screen Content */}
        <div className="absolute inset-0 overflow-y-auto overflow-x-hidden scrollbar-hide">
          <div className="w-full space-y-6 p-4">
            {children}
          </div>
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