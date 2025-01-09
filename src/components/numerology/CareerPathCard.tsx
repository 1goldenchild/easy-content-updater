import { motion } from "framer-motion";

interface CareerPathCardProps {
  occupation: string;
  index: number;
}

const CareerPathCard = ({ occupation, index }: CareerPathCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group"
    >
      {/* Animated gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative flex items-center gap-4">
        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-purple-500/20 text-purple-400">
          {index + 1}
        </div>
        <p className="text-lg text-white/90 font-medium">{occupation}</p>
      </div>
    </motion.div>
  );
};

export default CareerPathCard;