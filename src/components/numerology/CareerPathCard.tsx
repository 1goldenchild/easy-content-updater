import { motion } from "framer-motion";
import { Award, Star } from "lucide-react";

interface CareerPathCardProps {
  occupation: string;
  index: number;
}

const CareerPathCard = ({ occupation, index }: CareerPathCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
        {index === 0 ? (
          <Award className="w-5 h-5 text-purple-400" />
        ) : (
          <Star className="w-5 h-5 text-purple-400" />
        )}
      </div>
      <span className="text-white/90 group-hover:text-white transition-colors">
        {occupation}
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default CareerPathCard;