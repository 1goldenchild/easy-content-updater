import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { getOccupations } from "@/data/occupationsByLifePath";
import CareerPathCard from "./CareerPathCard";

interface OccupationGuidanceProps {
  lifePath: number;
  isVisible: boolean;
}

const OccupationGuidance = ({ lifePath, isVisible }: OccupationGuidanceProps) => {
  console.log("OccupationGuidance rendering for lifePath:", lifePath);
  
  if (!isVisible) return null;

  const occupations = getOccupations(lifePath);
  console.log("Retrieved occupations:", occupations);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full mt-8"
    >
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 backdrop-blur-sm border border-white/10 p-6">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-6 h-6 text-purple-400" />
            <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
              Best Career Paths
            </h3>
          </div>

          <div className="grid gap-4">
            {occupations.map((occupation, index) => (
              <CareerPathCard 
                key={occupation} 
                occupation={occupation} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OccupationGuidance;