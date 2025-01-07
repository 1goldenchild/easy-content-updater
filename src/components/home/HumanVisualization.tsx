import { motion } from "framer-motion";

const HumanVisualization = () => {
  return (
    <div className="relative h-64 mb-8 bg-[#000814]/80 rounded-xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0466c8]/10 to-transparent" />
      
      {/* Main holographic body */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img 
          src="/lovable-uploads/d1990443-8db4-4e9b-94aa-997289290dda.png"
          alt="Holographic human body"
          className="h-full w-auto object-contain opacity-80"
          style={{
            filter: "brightness(1.2) saturate(1.5) drop-shadow(0 0 10px #0466c8)"
          }}
        />
      </motion.div>

      {/* Scanning effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#0466c8]/20 via-transparent to-transparent"
        animate={{
          y: ["0%", "100%", "0%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Grid overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, 
            rgba(4, 102, 200, .05) 25%, 
            rgba(4, 102, 200, .05) 26%, 
            transparent 27%, transparent 74%, 
            rgba(4, 102, 200, .05) 75%, 
            rgba(4, 102, 200, .05) 76%, 
            transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, 
            rgba(4, 102, 200, .05) 25%, 
            rgba(4, 102, 200, .05) 26%, 
            transparent 27%, transparent 74%, 
            rgba(4, 102, 200, .05) 75%, 
            rgba(4, 102, 200, .05) 76%, 
            transparent 77%, transparent)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Data points */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#0466c8] rounded-full"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default HumanVisualization;