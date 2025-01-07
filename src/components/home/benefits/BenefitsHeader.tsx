import { motion } from "framer-motion";

const BenefitsHeader = () => {
  return (
    <div className="text-center mb-12 md:mb-20 relative">
      {/* Organic shape divider - top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden h-32 -translate-y-full">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="absolute bottom-0 w-full h-full text-[#1A1F2C]"
          style={{ transform: 'rotateX(180deg)' }}
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Main content with enhanced gradient background */}
      <div className="relative z-10 py-16">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-emerald-500/10 blur-[100px]" />
        
        {/* Floating orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
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
            className="relative"
          >
            {/* Decorative line */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500" />
            
            {/* Title with animated gradient */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-emerald-400 animate-shine bg-[length:200%_auto]">
              Unlock Your Hidden Potential
            </h2>

            {/* Subtitle with animated reveal */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative"
            >
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Discover how numerology can transform your understanding of yourself 
                and the world around you. Our expert analysis reveals the patterns 
                that shape your life's journey.
              </p>
              
              {/* Decorative elements */}
              <div className="absolute -inset-x-4 top-0 h-full">
                <div className="h-full w-full bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Organic shape divider - bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden h-32 translate-y-full">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="absolute top-0 w-full h-full text-[#1A1F2C]"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

export default BenefitsHeader;