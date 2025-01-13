import { useState, useEffect } from "react";

interface ScrollHandlerProps {
  onSectionChange: (id: string) => void;
}

const ScrollHandler = ({ onSectionChange }: ScrollHandlerProps) => {
  const [activeSection, setActiveSection] = useState("lifepath");

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const container = e.target as HTMLElement;
      const sections = container.querySelectorAll('[id]');
      
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        
        if (rect.top >= containerRect.top - 100 && rect.bottom <= containerRect.bottom + 100) {
          setActiveSection(section.id);
          onSectionChange(section.id);
          break;
        }
      }
    };

    const container = document.querySelector('.scrollbar-hide');
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [onSectionChange]);

  return null;
};

export default ScrollHandler;