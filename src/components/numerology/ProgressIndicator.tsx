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
    <div className="fixed top-1/2 -translate-y-1/2 right-2 lg:right-8 flex items-center gap-2 lg:gap-4 z-50">
      {!isMobile && (
        <div className="h-[200px] lg:h-[300px] w-[1px] lg:w-[2px] bg-white/10 rounded-full relative">
          <motion.div 
            className="absolute w-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"
            style={{
              top: `${(activeSection / (sections.length - 1)) * 100}%`,
              height: `${100 / sections.length}%`
            }}
            animate={{
              top: `${(activeSection / (sections.length - 1)) * 100}%`
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
          />
        </div>
      )}
      
      <div className="space-y-4 lg:space-y-6">
        {sections.map((section, index) => (
          <div 
            key={section}
            className="relative flex items-center gap-2 lg:gap-3 justify-end"
          >
            <motion.div
              className={`w-1.5 h-1.5 lg:w-3 lg:h-3 rounded-full transition-colors duration-300 ${
                index === activeSection 
                  ? "bg-gradient-to-r from-purple-500 to-pink-500" 
                  : "bg-white/20"
              }`}
              animate={{
                scale: index === activeSection ? 1.2 : 1
              }}
            />
            {!isMobile && (
              <span 
                className={`text-xs lg:text-sm transition-colors duration-300 ${
                  index === activeSection 
                    ? "text-white" 
                    : "text-white/40"
                }`}
              >
                {section}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;