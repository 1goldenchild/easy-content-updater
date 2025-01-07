import { motion } from "framer-motion";

const BenefitsHeader = () => {
  return (
    <div className="text-center mb-12 md:mb-20 relative">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-emerald-500/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Title with animated gradient text */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold relative"
      >
        <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent 
                       animate-shine bg-[length:200%_100%]">
          Unlock Your Hidden Potential
        </span>
      </motion.h2>

      {/* Subtitle with fade-in animation */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-white/60 text-lg max-w-3xl mx-auto mt-4 relative"
      >
        Discover how numerology can transform your understanding of yourself and the world around you. 
        Our expert analysis reveals the patterns that shape your life's journey.
      </motion.p>

      {/* Decorative elements */}
      <motion.div
        className="absolute -inset-x-4 -top-2 -bottom-2 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default BenefitsHeader;