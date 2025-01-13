import { motion } from "framer-motion";

interface ScrollIndicatorProps {
  hasScrolled: boolean;
}

const ScrollIndicator = ({ hasScrolled }: ScrollIndicatorProps) => {
  if (hasScrolled) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
    >
      <motion.div
        animate={{ y: [0, 16, 0] }}  // Increased from 12 to 16 (30% more)
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <motion.img 
          src="/lovable-uploads/a48b0ec0-c027-4d4a-a992-435a3c309b00.png"
          alt="Scroll gesture"
          className="w-20 h-20" // Increased from w-16 h-16 to w-20 h-20 (30% larger)
          animate={{ y: [0, 10, 0] }} // Increased from 8 to 10 (30% more)
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;