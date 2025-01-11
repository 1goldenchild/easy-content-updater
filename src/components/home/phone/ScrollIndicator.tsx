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
      className="absolute top-1/2 left-[45%] transform -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
    >
      <motion.div
        animate={{ y: [0, 12, 0] }}
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
          className="w-20 h-20"
          animate={{ y: [0, 8, 0] }}
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