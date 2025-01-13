import { motion } from "framer-motion";
import { ReactNode, useState, useEffect } from "react";
import PreviewOverlay from "./PreviewOverlay";
import PhoneFrameEffects from "./PhoneFrameEffects";
import ScrollIndicator from "./ScrollIndicator";

interface PhoneFrameProps {
  children: ReactNode;
  activeSection?: string;
  onSectionChange?: (id: string) => void;
}

const PhoneFrame = ({ children, activeSection, onSectionChange }: PhoneFrameProps) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector('.scrollbar-hide');
      if (container && container.scrollTop > 0) {
        setHasScrolled(true);
      }
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
        
        {/* Dynamic Island */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[84px] h-[25px] bg-black rounded-[20px] z-20" />
        
        {/* Screen Content with Scroll Container */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 overflow-y-auto overflow-x-hidden scrollbar-hide scroll-smooth">
            <div className="relative min-h-full">
              <div className="pt-12 pb-12">
                {children}
              </div>
            </div>
          </div>
        </div>

        <ScrollIndicator hasScrolled={hasScrolled} />
        <PhoneFrameEffects hasScrolled={hasScrolled} />
      </div>
    </motion.div>
  );
};

export default PhoneFrame;