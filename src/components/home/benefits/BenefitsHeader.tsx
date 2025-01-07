import { motion } from "framer-motion";

const BenefitsHeader = () => {
  return (
    <div className="text-center mb-12 md:mb-20 relative">
      {/* Top wave transition */}
      <div className="absolute top-0 left-0 w-full overflow-hidden h-40 -translate-y-full">
        <svg 
          viewBox="0 0 1440 320" 
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path 
            fill="currentColor" 
            fillOpacity="1"
            className="text-background"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Main content with enhanced gradient background */}
      <div className="relative z-10 py-24">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-500/5 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-background to-background" />
        </div>
        
        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"
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
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden h-40 translate-y-full">
        <svg 
          viewBox="0 0 1440 320" 
          className="absolute top-0 w-full h-full rotate-180"
          preserveAspectRatio="none"
        >
          <path 
            fill="currentColor" 
            fillOpacity="1"
            className="text-background"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default BenefitsHeader;