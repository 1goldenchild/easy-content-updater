import { motion } from "framer-motion";

const BackgroundEffects = () => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
      
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </>
  );
};

export default BackgroundEffects;