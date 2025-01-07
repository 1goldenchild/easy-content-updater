import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PlusCircle } from "lucide-react";
import PhoneFrame from "./phone/PhoneFrame";
import NumberSections from "./phone/sections/NumberSections";
import CoreTraits from "./phone/sections/CoreTraits";
import CareerPaths from "./phone/sections/CareerPaths";
import YearlyForecast from "./phone/sections/YearlyForecast";
import CompatibilitySection from "./phone/CompatibilitySection";
import CountryCompatibility from "./phone/sections/CountryCompatibility";
import CarCompatibilitySection from "./phone/sections/CarCompatibilitySection";
import TechCompatibilitySection from "./phone/sections/TechCompatibilitySection";

const PhoneShowcase = () => {
  const [activeSection, setActiveSection] = useState("lifepath");

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
      <div className="w-full space-y-6 p-4">
        <NumberSections />
        <CoreTraits />
        <CompatibilitySection />
        <CareerPaths />
        <CountryCompatibility />
        <CarCompatibilitySection />
        <TechCompatibilitySection />
        <YearlyForecast />

        {/* Secret Bonus Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative rounded-xl bg-black/90 p-6 text-center overflow-hidden border border-amber-500/20"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(251,191,36,0.1),rgba(0,0,0,0))]" />
          <h3 className="relative flex items-center justify-center gap-2 text-xl font-bold bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent mb-3">
            <PlusCircle className="w-5 h-5 text-amber-500" /> Secret Bonus
          </h3>
          <p className="relative text-sm text-amber-300/90 font-medium">
            Unlock exclusive insights reserved for advanced seekers
          </p>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          />
          <div className="relative mt-3">
            <span className="text-xs text-amber-400/70">
              Limited time access available
            </span>
          </div>
        </motion.div>
      </div>
    </PhoneFrame>
  );
};

export default PhoneShowcase;