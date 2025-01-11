import { motion } from "framer-motion";

const BenefitsHeader = () => {
  return (
    <div className="text-center mb-12 md:mb-16">
      <div className="relative py-12 md:py-16 overflow-hidden rounded-2xl">
        <div className="absolute inset-0 rounded-2xl">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-xl rounded-2xl" />
          <div className="absolute inset-x-[20%] top-[10%] bottom-[10%] 
                         bg-[radial-gradient(circle_at_center,rgba(217,70,239,0.15),transparent_60%)] rounded-2xl" />
          <div className="absolute inset-x-[30%] top-[20%] bottom-[20%] 
                         bg-[radial-gradient(circle_at_center,rgba(155,135,245,0.15),transparent_60%)] rounded-2xl" />
        </div>

        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-2xl"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-24 h-0.5 
                           bg-gradient-to-r from-[#D946EF]/50 via-[#9b87f5]/50 to-[#D946EF]/50" />
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r 
                          from-[#FEC6A1] via-[#9b87f5] to-[#D946EF] 
                          bg-clip-text text-transparent animate-text-shimmer 
                          bg-[length:200%_auto]">
              Activate Your Hidden Potential
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg md:text-xl text-white/80 font-medium max-w-2xl mx-auto"
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