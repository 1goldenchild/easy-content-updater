import { motion, useTransform } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  bgGradient: string;
  iconColor: string;
  borderColor: string;
  burnGradient: string;
  glowColor: string;
  neonColor: string;
  progress: any;
  nextProgress: any | null;
  index: number;
}

const BenefitCard = ({
  icon: Icon,
  title,
  description,
  bgGradient,
  iconColor,
  borderColor,
  progress,
  index,
}: BenefitCardProps) => {
  // Transform values for smooth animations
  const opacity = useTransform(progress, [0, 0.5, 1], [0.3, 1, 0.3]);
  const scale = useTransform(progress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const x = useTransform(
    progress,
    [0, 0.5, 1],
    [index % 2 === 0 ? -50 : 50, 0, index % 2 === 0 ? -50 : 50]
  );

  return (
    <motion.div
      style={{
        opacity,
        scale,
        x,
      }}
      className="relative group"
    >
      <div className={`
        relative rounded-xl p-6 
        backdrop-blur-xl backdrop-filter
        border border-white/10
        bg-gradient-to-br from-white/5 to-white/[0.02]
        overflow-hidden transition-all duration-500
        hover:border-white/20 hover:shadow-2xl
        hover:shadow-purple-500/20
      `}>
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 blur-xl" />
        
        <div className="relative space-y-4">
          {/* Icon container with glow effect */}
          <div className={`
            ${iconColor} w-12 h-12 rounded-lg 
            bg-gradient-to-br from-white/10 to-white/[0.02]
            p-2.5 relative group-hover:scale-110 
            transition-all duration-300 ease-out
          `}>
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 blur-sm" />
            <Icon className="w-full h-full relative z-10" />
          </div>

          {/* Title with gradient text */}
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80">
            {title}
          </h3>

          {/* Description with improved readability */}
          <p className="text-white/70 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Interactive hover lines */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
      </div>
    </motion.div>
  );
};

export default BenefitCard;