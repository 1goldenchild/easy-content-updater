import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CareerCardProps {
  career: string;
  index: number;
}

const CareerCard = ({ career, index }: CareerCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index }}
      className={cn(
        "p-4 rounded-lg border border-white/10",
        "bg-gradient-to-br from-purple-500/10 to-pink-500/10",
        "hover:from-purple-500/20 hover:to-pink-500/20",
        "transition-all duration-300"
      )}
    >
      <p className="text-lg font-medium text-white">{career}</p>
    </motion.div>
  );
};

export default CareerCard;