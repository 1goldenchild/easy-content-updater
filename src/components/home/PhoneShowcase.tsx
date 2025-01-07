import { motion } from "framer-motion";
import { useState } from "react";

const PhoneShowcase = () => {
  const [activeSection, setActiveSection] = useState("lifepath");

  const sections = [
    { id: "lifepath", label: "Life Path" },
    { id: "partial", label: "Partial Energy" },
    { id: "secret", label: "Secret Number" },
    { id: "zodiac", label: "Chinese Zodiac" },
    { id: "traits", label: "Core Traits" },
    { id: "compatibility", label: "Matches" },
    { id: "career", label: "Career" },
    { id: "forecast", label: "Forecast" }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full max-w-[300px] mx-auto mb-12"
    >
      {/* iPhone Frame */}
      <div className="relative w-full aspect-[9/19.5] bg-[#1A1F2C] rounded-[3rem] border-4 border-gray-800 shadow-2xl overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-3xl z-20" />
        
        {/* Navigation Dots */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSection === section.id 
                  ? "bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] scale-150" 
                  : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={section.label}
            />
          ))}
        </div>
        
        {/* Screen Content */}
        <div className="absolute inset-0 overflow-y-auto overflow-x-hidden scrollbar-hide">
          <div className="w-full space-y-6 p-4">
            {/* Life Path Section */}
            <div id="lifepath" className="rounded-xl bg-gradient-to-br from-[#8B5CF6]/30 to-[#D946EF]/30 p-4 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white mb-2">Life Path Number</h3>
              <motion.div 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]"
              >
                7
              </motion.div>
              <p className="text-xs text-white/70 mt-2">The Misunderstood Genius</p>
            </div>

            {/* Partial Energy Section */}
            <div id="partial" className="rounded-xl bg-gradient-to-br from-[#F97316]/30 to-[#D946EF]/30 p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Partial Energy</h3>
              <motion.div 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}
                className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#F97316] to-[#D946EF]"
              >
                4
              </motion.div>
              <p className="text-xs text-white/70 mt-2">The Builder</p>
            </div>

            {/* Secret Number Section */}
            <div id="secret" className="rounded-xl bg-gradient-to-br from-[#0EA5E9]/30 to-[#8B5CF6]/30 p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Secret Number</h3>
              <motion.div 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.6 }}
                className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6]"
              >
                9
              </motion.div>
              <p className="text-xs text-white/70 mt-2">The Humanitarian</p>
            </div>

            {/* Chinese Zodiac Section */}
            <div id="zodiac" className="rounded-xl bg-gradient-to-br from-[#F97316]/30 to-[#0EA5E9]/30 p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Chinese Zodiac</h3>
              <motion.div 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.9 }}
                className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#F97316] to-[#0EA5E9]"
              >
                龍
              </motion.div>
              <p className="text-xs text-white/70 mt-2">Year of the Dragon</p>
            </div>

            {/* Core Traits Section */}
            <div id="traits" className="rounded-xl bg-gradient-to-br from-[#0EA5E9]/30 to-[#8B5CF6]/30 p-4">
              <h3 className="text-sm font-semibold text-white/90 mb-3">Core Traits</h3>
              <div className="space-y-2">
                {["Spiritual", "Analytical", "Intuitive", "Reserved", "Philosophical"].map((trait, index) => (
                  <motion.div 
                    key={trait}
                    initial={{ width: "0%" }}
                    animate={{ width: `${(100 - index * 15)}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="h-2 bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] rounded-full"
                  />
                ))}
              </div>
            </div>

            {/* Compatibility Section */}
            <div id="compatibility" className="rounded-xl bg-gradient-to-br from-[#8B5CF6]/30 to-[#0EA5E9]/30 p-4">
              <h3 className="text-sm font-semibold text-white/90 mb-3">Best Matches</h3>
              <div className="grid grid-cols-3 gap-2">
                {[1, 5, 7].map((num) => (
                  <motion.div
                    key={num}
                    whileHover={{ scale: 1.05 }}
                    className="aspect-square rounded-lg bg-white/10 flex items-center justify-center"
                  >
                    <span className="text-2xl font-bold text-white/90">{num}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Career Path */}
            <div id="career" className="rounded-xl bg-gradient-to-br from-[#D946EF]/30 to-[#F97316]/30 p-4">
              <h3 className="text-sm font-semibold text-white/90 mb-3">Career Paths</h3>
              <div className="space-y-2">
                {["Researcher", "Analyst", "Teacher", "Writer"].map((career) => (
                  <div key={career} className="px-3 py-2 rounded-lg bg-white/5 text-sm text-white/80">
                    {career}
                  </div>
                ))}
              </div>
            </div>

            {/* Yearly Forecast */}
            <div id="forecast" className="rounded-xl bg-gradient-to-br from-[#0EA5E9]/30 to-[#F97316]/30 p-4">
              <h3 className="text-sm font-semibold text-white/90 mb-3">2024 Forecast</h3>
              <div className="relative h-32">
                <motion.div
                  animate={{
                    pathLength: [0, 1],
                    pathOffset: [0, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    pathLength: 0,
                    stroke: "url(#gradient)",
                    strokeWidth: 2,
                    fill: "none",
                    strokeDasharray: "5,5"
                  }}
                  className="absolute inset-0 w-full h-full"
                >
                  <svg className="w-full h-full">
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0EA5E9" />
                        <stop offset="100%" stopColor="#F97316" />
                      </linearGradient>
                    </defs>
                    <path d="M0,50 Q60,20 120,60 T240,50" stroke="url(#gradient)" fill="none" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Reflection Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
        
        {/* Scroll Fade Overlays */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#1A1F2C] to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#1A1F2C] to-transparent pointer-events-none z-10" />
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute -left-8 -bottom-8 w-24 h-24 bg-gradient-to-r from-[#8B5CF6]/30 to-[#D946EF]/30 rounded-full blur-xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-r from-[#0EA5E9]/30 to-[#8B5CF6]/30 rounded-full blur-xl"
      />
    </motion.div>
  );
};

export default PhoneShowcase;