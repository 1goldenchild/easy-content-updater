import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PhoneFrame from "./phone/PhoneFrame";
import NumberSections from "./phone/sections/NumberSections";
import CoreTraits from "./phone/sections/CoreTraits";
import CareerPaths from "./phone/sections/CareerPaths";
import YearlyForecast from "./phone/sections/YearlyForecast";
import CompatibilitySection from "./phone/CompatibilitySection";
import CarCompatibilitySection from "./phone/sections/CarCompatibilitySection";

const PhoneShowcase = () => {
  const [activeSection, setActiveSection] = useState("numbers");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = (e: Event) => {
      const container = e.target as HTMLElement;
      const sections = container.querySelectorAll('[id]');
      
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        
        if (rect.top >= containerRect.top - 100 && rect.bottom <= containerRect.bottom + 100) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    const container = document.querySelector('.scrollbar-hide');
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <PhoneFrame activeSection={activeSection} onSectionChange={scrollToSection}>
      <div className="w-full space-y-8 p-4">
        <NumberSections />
        <CoreTraits />
        <CompatibilitySection />
        <CarCompatibilitySection />
        <CareerPaths />
        <YearlyForecast />

        {/* And More Section with enhanced styling */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative rounded-xl bg-gradient-to-br from-[#8B5CF6]/30 to-[#0EA5E9]/30 p-6 text-center overflow-hidden group"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
          <h3 className="relative text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:animate-pulse">
            And More...
          </h3>
          <p className="relative text-sm text-white/70">
            Unlock deeper insights and discover your full potential
          </p>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          />
        </motion.div>
      </div>
    </PhoneFrame>
  );
};

export default PhoneShowcase;