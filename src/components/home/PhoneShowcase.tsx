import { motion } from "framer-motion";

const PhoneShowcase = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full max-w-[300px] mx-auto mb-12"
    >
      {/* iPhone Frame */}
      <div className="relative w-full aspect-[9/19.5] bg-[#1A1F2C] rounded-[3rem] border-4 border-gray-800 shadow-2xl overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-3xl z-20" />
        
        {/* Screen Content with Scroll */}
        <div className="absolute inset-0 overflow-y-auto overflow-x-hidden scrollbar-hide">
          <motion.div 
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ 
              duration: 30,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
            className="w-full"
          >
            <img 
              src="/lovable-uploads/984813d9-700a-4057-a369-08ae4035507b.png"
              alt="Numerology Portal Results"
              className="w-full h-auto object-contain"
              style={{ 
                imageRendering: "crisp-edges",
                maxWidth: "100%",
                WebkitBackfaceVisibility: "hidden",
                MozBackfaceVisibility: "hidden",
                backfaceVisibility: "hidden"
              }}
            />
          </motion.div>
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
        className="absolute -left-8 -bottom-8 w-24 h-24 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-xl"
      />
    </motion.div>
  );
};

export default PhoneShowcase;