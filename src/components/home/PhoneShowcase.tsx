import { useState } from "react";
import { motion } from "framer-motion";
import PhoneFrame from "./phone/PhoneFrame";
import NumberSections from "./phone/sections/NumberSections";
import CoreTraits from "./phone/sections/CoreTraits";
import CareerPaths from "./phone/sections/CareerPaths";
import YearlyForecast from "./phone/sections/YearlyForecast";
import CompatibilitySection from "./phone/CompatibilitySection";
import EarthGlobe from "@/components/numerology/EarthGlobe";
import CarCompatibility from "@/components/numerology/CarCompatibility";
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

  // Sample car compatibility data
  const cars = [
    { name: "Tesla Model S", compatibility: 95, type: "good" },
    { name: "BMW i8", compatibility: 88, type: "good" },
    { name: "Porsche Taycan", compatibility: 82, type: "good" },
    { name: "Ford F-150", compatibility: 45, type: "bad" },
    { name: "Chevrolet Camaro", compatibility: 38, type: "bad" },
    { name: "Dodge Challenger", compatibility: 32, type: "bad" }
  ];

  return (
    <PhoneFrame activeSection={activeSection} onSectionChange={scrollToSection}>
      <div className="w-full space-y-6 p-4">
        <NumberSections />
        <CoreTraits />
        <CompatibilitySection />
        <CareerPaths />
        
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

        {/* Car Compatibility Section */}
        <div id="cars" className="rounded-xl bg-gradient-to-br from-[#8B5CF6]/30 to-[#0EA5E9]/30 p-4">
          <h3 className="text-sm font-semibold text-white/90 mb-3">Car Compatibility</h3>
          
          <div className="space-y-4">
            {/* Best Car Matches */}
            <div>
              <h4 className="text-xs font-medium text-white/70 mb-2">Best Car Matches</h4>
              <div className="space-y-2">
                {cars.filter(c => c.type === "good").map((car, index) => (
                  <motion.div
                    key={car.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 overflow-hidden"
                  >
                    <span className="text-sm text-white/80 z-10">{car.name}</span>
                    <span className="text-sm font-medium text-green-300 z-10">{car.compatibility}%</span>
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${car.compatibility}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="absolute left-0 top-0 h-full bg-green-500/10"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Challenging Car Matches */}
            <div>
              <h4 className="text-xs font-medium text-white/70 mb-2">Challenging Car Matches</h4>
              <div className="space-y-2">
                {cars.filter(c => c.type === "bad").map((car, index) => (
                  <motion.div
                    key={car.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 overflow-hidden"
                  >
                    <span className="text-sm text-white/80 z-10">{car.name}</span>
                    <span className="text-sm font-medium text-red-300 z-10">{car.compatibility}%</span>
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${car.compatibility}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="absolute left-0 top-0 h-full bg-red-500/10"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <YearlyForecast />

        {/* And More Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative rounded-xl bg-gradient-to-br from-[#8B5CF6]/30 to-[#0EA5E9]/30 p-6 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
          <h3 className="relative text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">
            And More...
          </h3>
          <p className="relative text-sm text-white/70">
            Unlock deeper insights and discover your full potential
          </p>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          />
        </motion.div>
      </div>
    </PhoneFrame>
  );
};

export default PhoneShowcase;