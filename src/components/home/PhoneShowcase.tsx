import { useState } from "react";
import { motion } from "framer-motion";
import PhoneFrame from "./phone/PhoneFrame";
import NumberSection from "./phone/NumberSection";
import CompatibilitySection from "./phone/CompatibilitySection";
import EarthGlobe from "@/components/numerology/EarthGlobe";
import CareerCompatibility from "@/components/numerology/CareerCompatibility";

const PhoneShowcase = () => {
  const [activeSection, setActiveSection] = useState("lifepath");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // Sample country compatibility data
  const countries = [
    { name: "Japan", compatibility: 92, type: "good" },
    { name: "Thailand", compatibility: 88, type: "good" },
    { name: "Singapore", compatibility: 85, type: "good" },
    { name: "Russia", compatibility: 35, type: "bad" },
    { name: "Brazil", compatibility: 42, type: "bad" },
    { name: "Egypt", compatibility: 38, type: "bad" }
  ];

  return (
    <PhoneFrame activeSection={activeSection} onSectionChange={scrollToSection}>
      <NumberSection
        id="lifepath"
        title="Life Path Number"
        number="7"
        subtitle="The Misunderstood Genius"
        gradientFrom="[#8B5CF6]"
        gradientTo="[#D946EF]"
      />

      <NumberSection
        id="partial"
        title="Partial Energy"
        number="4"
        subtitle="The Builder"
        gradientFrom="[#F97316]"
        gradientTo="[#D946EF]"
        delay={0.3}
      />

      <NumberSection
        id="secret"
        title="Secret Number"
        number="9"
        subtitle="The Humanitarian"
        gradientFrom="[#0EA5E9]"
        gradientTo="[#8B5CF6]"
        delay={0.6}
      />

      <NumberSection
        id="zodiac"
        title="Chinese Zodiac"
        number="龍"
        subtitle="Year of the Dragon"
        gradientFrom="[#F97316]"
        gradientTo="[#0EA5E9]"
        delay={0.9}
      />

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

      <CompatibilitySection />

      {/* Career Path */}
      <div id="career" className="rounded-xl bg-gradient-to-br from-[#D946EF]/30 to-[#F97316]/30 p-4">
        <h3 className="text-sm font-semibold text-white mb-2">Career Paths</h3>
        <div className="space-y-2">
          {["Researcher", "Analyst", "Teacher", "Writer"].map((career) => (
            <div key={career} className="px-3 py-2 rounded-lg bg-white/5 text-sm text-white/80">
              {career}
            </div>
          ))}
        </div>
      </div>

      {/* Career Compatibility Section */}
      <div id="career-compatibility">
        <CareerCompatibility lifePath="7" isVisible={activeSection === "career-compatibility"} />
      </div>

      {/* Country Compatibility Section */}
      <div id="countries" className="rounded-xl bg-gradient-to-br from-[#8B5CF6]/30 to-[#0EA5E9]/30 p-4">
        <h3 className="text-sm font-semibold text-white/90 mb-3">Global Compatibility</h3>
        
        {/* 3D Globe Visualization */}
        <div className="relative w-full h-32 mb-4">
          <EarthGlobe />
        </div>

        <div className="space-y-4">
          {/* Favorable Countries */}
          <div>
            <h4 className="text-xs font-medium text-white/70 mb-2">Most Compatible</h4>
            <div className="space-y-2">
              {countries.filter(c => c.type === "good").map((country, index) => (
                <motion.div
                  key={country.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 overflow-hidden"
                >
                  <span className="text-sm text-white/80 z-10">{country.name}</span>
                  <span className="text-sm font-medium text-green-300 z-10">{country.compatibility}%</span>
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${country.compatibility}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="absolute left-0 top-0 h-full bg-green-500/10"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Challenging Countries */}
          <div>
            <h4 className="text-xs font-medium text-white/70 mb-2">Less Compatible</h4>
            <div className="space-y-2">
              {countries.filter(c => c.type === "bad").map((country, index) => (
                <motion.div
                  key={country.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 overflow-hidden"
                >
                  <span className="text-sm text-white/80 z-10">{country.name}</span>
                  <span className="text-sm font-medium text-red-300 z-10">{country.compatibility}%</span>
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${country.compatibility}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="absolute left-0 top-0 h-full bg-red-500/10"
                  />
                </motion.div>
              ))}
            </div>
          </div>
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
    </PhoneFrame>
  );
};

export default PhoneShowcase;