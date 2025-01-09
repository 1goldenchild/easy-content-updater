import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { careerPaths } from "@/data/careerPaths";
import CareerCard from "./CareerCard";

interface CareerCompatibilityProps {
  lifePath: number;
  isVisible: boolean;
}

const CareerCompatibility = ({ lifePath, isVisible }: CareerCompatibilityProps) => {
  const [careers, setCareers] = useState<string[]>([]);
  
  useEffect(() => {
    console.log("Getting all careers for lifePath:", lifePath);
    // Get all careers for the specific life path, or empty array if not found
    const availableCareers = careerPaths[lifePath as keyof typeof careerPaths] || [];
    console.log("Available careers for lifePath", lifePath, ":", availableCareers);
    
    setCareers(availableCareers);
  }, [lifePath]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="w-full bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10"
    >
      <div className="flex items-center gap-3 mb-6">
        <Briefcase className="w-6 h-6 text-purple-400" />
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Career Compatibility
        </h2>
      </div>

      <div className="space-y-4">
        <p className="text-white/70">
          Based on your Life Path Number {lifePath}, here are all your compatible career paths:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {careers.map((career, index) => (
            <CareerCard key={career} career={career} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CareerCompatibility;