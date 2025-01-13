import { motion } from "framer-motion";

const GlowingOrbs = () => {
  return (
    <>
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute w-32 h-32 rounded-full"
          style={{
            background: `radial-gradient(circle, ${
              ["rgba(147,51,234,0.15)", "rgba(59,130,246,0.15)", "rgba(16,185,129,0.15)"][i]
            } 0%, transparent 70%)`,
            left: `${20 + i * 25}%`,
            top: `${20 + i * 20}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            delay: i * 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </>
  );
};

export default GlowingOrbs;