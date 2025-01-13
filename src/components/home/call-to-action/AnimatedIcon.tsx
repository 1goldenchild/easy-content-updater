import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

const AnimatedIcon = () => {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [0, 5, -5, 0]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="w-16 h-16 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
    >
      <Lightbulb className="w-8 h-8 text-white" />
    </motion.div>
  );
};

export default AnimatedIcon;