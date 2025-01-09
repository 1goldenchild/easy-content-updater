import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { careerPaths } from "@/data/careerPaths";
import CareerPathCard from "./CareerPathCard";

interface OccupationGuidanceProps {
  lifePath: number;
  isVisible: boolean;
}

const OccupationGuidance = ({ lifePath, isVisible }: OccupationGuidanceProps) => {
  console.log("OccupationGuidance rendering for lifePath:", lifePath);
  
  if (!isVisible) return null;

  const careers = careerPaths[lifePath as keyof typeof careerPaths] || [];
  console.log("Retrieved careers for lifePath", lifePath, ":", careers);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8"
    >
      <div className="p-8 rounded-xl bg-gradient-to-br from-[#1a1c2e] to-[#2a2c3e] border border-white/10 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(139,92,246,0.1),rgba(255,255,255,0))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(217,70,239,0.1),rgba(255,255,255,0))]" />
        </div>

        <div className="relative">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-lg bg-purple-500/10 backdrop-blur-sm">
              <Briefcase className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]">
              Career Paths for Life Path {lifePath}
            </h3>
          </div>

          <div className="grid gap-4">
            {careers.map((career, index) => (
              <motion.div
                key={career}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CareerPathCard 
                  occupation={career} 
                  index={index} 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OccupationGuidance;