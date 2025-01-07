import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface CareerCompatibilityProps {
  lifePath: string;
  isVisible: boolean;
}

const careerCompatibility: Record<string, { best: string[], worst: string[] }> = {
  "7": {
    best: ["Research Scientist", "Data Analyst", "Philosophy Professor", "Writer", "Software Engineer"],
    worst: ["Sales Representative", "Public Relations", "Event Planner", "Real Estate Agent", "Performer"]
  },
  // Add more life paths if needed
};

const CareerCompatibility = ({ lifePath, isVisible }: CareerCompatibilityProps) => {
  if (!isVisible || !careerCompatibility[lifePath]) return null;

  const compatibility = careerCompatibility[lifePath];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#1a1f2c] to-[#2d3748] p-8 shadow-2xl"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50" />
      
      <div className="relative z-10">
        <h3 className="text-3xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Career Compatibility
          </span>
        </h3>

        <div className="grid grid-cols-1 gap-8">
          {/* Best Matches */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-8 h-8 text-green-400" />
              <h4 className="text-xl font-semibold text-green-400">Recommended Careers</h4>
            </div>
            <div className="space-y-3">
              {compatibility.best.map((career, index) => (
                <motion.div
                  key={career}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg transform transition-all duration-300 group-hover:scale-105" />
                  <div className="relative flex items-center gap-4 p-4 rounded-lg backdrop-blur-sm border border-green-500/20">
                    <Briefcase className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform" />
                    <span className="text-lg font-medium text-white group-hover:text-green-400 transition-colors">
                      {career}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Challenging Careers */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-8 h-8 text-red-400" />
              <h4 className="text-xl font-semibold text-red-400">Challenging Careers</h4>
            </div>
            <div className="space-y-3">
              {compatibility.worst.map((career, index) => (
                <motion.div
                  key={career}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-rose-500/20 rounded-lg transform transition-all duration-300 group-hover:scale-105" />
                  <div className="relative flex items-center gap-4 p-4 rounded-lg backdrop-blur-sm border border-red-500/20">
                    <Briefcase className="w-6 h-6 text-red-400 group-hover:scale-110 transition-transform" />
                    <span className="text-lg font-medium text-white group-hover:text-red-400 transition-colors">
                      {career}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CareerCompatibility;