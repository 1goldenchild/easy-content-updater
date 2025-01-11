import { motion } from "framer-motion";

const BenefitsHeader = () => {
  return (
    <div className="text-center mb-8 md:mb-12">
      <div className="relative py-12 md:py-16">
        {/* Background with theme-consistent gradients */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/90" />
          {/* Further constrained the gradient and adjusted its spread */}
          <div className="absolute inset-x-[20%] top-[10%] bottom-[10%] bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.1)_0%,rgba(0,0,0,0)_60%)]" />
        </div>

        {/* Shimmer effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
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
            <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-16 h-0.5 bg-gradient-to-r from-amber-500/50 to-yellow-500/50" />
            
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent animate-shine bg-[length:200%_auto]">
              Activate Your Hidden Potential
            </h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-base md:text-lg text-amber-300/90 font-medium max-w-2xl mx-auto"
            >
              Discover how numerology can revolutionize your understanding of yourself 
              and the world, and unlock its transformative benefits.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsHeader;