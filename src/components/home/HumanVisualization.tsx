import { motion } from "framer-motion";

const HumanVisualization = () => {
  return (
    <div className="relative h-64 mb-8 rounded-xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0466c8]/10 to-transparent" />
      
      {/* Main holographic body */}
      <motion.div
        className="relative h-full flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img 
          src="/lovable-uploads/1e3f4b34-6805-4822-a03b-71cee7add12f.png"
          alt="Holographic human body"
          className="h-full w-auto object-contain opacity-80"
          style={{
            filter: "drop-shadow(0 0 10px rgba(4, 102, 200, 0.5))",
          }}
        />
      </motion.div>
    </div>
  );
};

export default HumanVisualization;