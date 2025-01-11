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
  burnGradient,
  neonColor,
  progress,
  nextProgress,
  index,
}: BenefitCardProps) => {
  // Smoother opacity transition
  const sectionOpacity = useTransform(
    progress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, nextProgress ? 0.8 : 1]
  );

  return (
    <motion.div
      style={{
        opacity: sectionOpacity,
        scale: useTransform(progress, [0, 0.5, 1], [0.95, 1, 1]),
        x: useTransform(progress, [0, 1], [index % 2 === 0 ? -20 : 20, 0])
      }}
      className="relative transition-all duration-700"
    >
      <motion.div
        className="absolute -inset-0.5 rounded-2xl transition-all duration-700"
        style={{
          opacity: useTransform(progress, [0, 0.5, 1], [0, 1, 0.6]),
          boxShadow: `0 0 15px 2px ${neonColor}, 0 0 30px 4px ${neonColor}`,
        }}
      />
      
      <div className={`group relative rounded-2xl p-4 sm:p-6 lg:p-6 border ${borderColor} 
                      bg-gradient-to-br ${bgGradient} backdrop-blur-sm transition-all duration-700 
                      ease-out overflow-hidden hover:scale-[1.02]`}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent rounded-2xl" />
        <div className={`absolute inset-0 bg-gradient-to-t ${burnGradient} rounded-2xl 
                        opacity-0 group-hover:opacity-100 transition-all duration-700 animate-shine`} />
        
        <div className="relative space-y-3 sm:space-y-4">
          <motion.div 
            className={`${iconColor} w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 
                       p-2 sm:p-2.5 ring-2 ring-white/10 group-hover:ring-white/20 
                       transition-all duration-700 relative`}
            style={{
              scale: useTransform(progress, [0, 0.5, 1], [0.9, 1, 1])
            }}
          >
            <div 
              className="absolute inset-0 rounded-xl transition-all duration-700"
              style={{
                opacity: useTransform(progress, [0, 0.5, 1], [0, 1, 0.6]),
                boxShadow: `0 0 5px 1px ${neonColor}, 0 0 10px 2px ${neonColor}`,
              }}
            />
            <Icon className="w-full h-full relative z-10" />
          </motion.div>
          <h3 className="text-xl sm:text-2xl font-semibold bg-clip-text text-transparent 
                         bg-gradient-to-br from-white to-white/80">
            {title}
          </h3>
          <p className="text-white/60 pr-2 line-clamp-4">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default BenefitCard;