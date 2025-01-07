import { motion } from "framer-motion";

const BenefitsHeader = () => {
  return (
    <div className="text-center mb-8 md:mb-12">
      <div className="relative py-12 md:py-16">
        {/* Background with theme-consistent gradients */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F2C] via-[#221F26] to-[#1A1F2C]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent" />
        </div>

        {/* Subtle animated orbs */}
        <motion.div
          className="absolute top-10 left-1/4 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-1/4 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            y: [0, 10, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Main content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative line */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-16 h-0.5 bg-gradient-to-r from-purple-500/50 to-blue-500/50" />
            
            {/* Energy Flow Text with Wave Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-4"
            >
              <motion.div 
                className="relative inline-flex items-center gap-3"
              >
                <span className="text-lg md:text-xl text-white/90">Get in the Flow of Energy</span>
                <motion.div
                  className="h-0.5 w-16 bg-gradient-to-r from-purple-500 to-blue-500"
                  animate={{
                    x: [-100, 100],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-emerald-400 animate-shine bg-[length:200%_auto]">
              Unlock Your Hidden Potential
            </h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-base md:text-lg text-white/80 max-w-2xl mx-auto"
            >
              Discover how numerology can transform your understanding of yourself 
              and the world around you.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsHeader;