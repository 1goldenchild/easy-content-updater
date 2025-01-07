import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const ProgressIndicator = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sections = ["Calculator", "Occupation", "Compatibility", "Countries", "Cars"];
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionElements = document.querySelectorAll("#portal-content > div");
      
      sectionElements.forEach((section, index) => {
        if (section.getBoundingClientRect().top <= windowHeight * 0.5 && 
            section.getBoundingClientRect().bottom >= windowHeight * 0.5) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-50">
      <div className="relative w-full max-w-7xl mx-auto px-4">
        <div className="absolute right-0 flex items-center gap-2">
          <div className="space-y-4">
            {sections.map((section, index) => (
              <div 
                key={section}
                className="relative flex items-center gap-2 justify-end"
              >
                <motion.div
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === activeSection 
                      ? "bg-gradient-to-r from-purple-500 to-pink-500" 
                      : "bg-white/20"
                  }`}
                  animate={{
                    scale: index === activeSection ? 1.2 : 1
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;