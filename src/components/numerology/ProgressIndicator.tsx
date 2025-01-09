import { motion } from "framer-motion";

const ProgressIndicator = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-1">
      <div className="relative w-full h-full">
        {/* Background line */}
        <div className="absolute inset-0 w-full h-full bg-white/5" />
        
        {/* Glowing effect */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-purple-500 via-fuchsia-500 to-pink-500 blur-md opacity-50" />
        
        {/* Solid progress line */}
        <motion.div 
          className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default ProgressIndicator;