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
  isMobile: boolean;
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
  isMobile,
}: BenefitCardProps) => {
  const sectionOpacity = useTransform(progress, [0, 0.2, 0.8, 1], [0, 1, 1, nextProgress ? 0.3 : 1]);
  const sectionScale = useTransform(progress, [0, 1], [0.8, 1]);
  const sectionX = useTransform(progress, [0, 1], [isMobile ? 0 : (index % 2 === 0 ? -20 : 20), 0]);
  const sectionY = useTransform(progress, [0, 1], [20, 0]);
  
  return (
    <motion.div
      style={{
        opacity: sectionOpacity,
        scale: sectionScale,
        x: sectionX,
        y: sectionY,
      }}
      className="relative group"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1]
      }}
    >
      <motion.div
        className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r transition duration-300"
        style={{
          opacity: useTransform(progress, [0, 0.5, 1], [0, 1, nextProgress ? 0 : 1]),
          boxShadow: `0 0 20px ${neonColor}, 0 0 40px ${neonColor}`,
        }}
      />
      
      <div className={`relative rounded-2xl p-4 sm:p-6 lg:p-6 border ${borderColor} 
                      bg-gradient-to-br ${bgGradient} backdrop-blur-sm transition-all duration-500 
                      ease-out overflow-hidden hover:scale-[1.02]`}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent rounded-2xl" />
        <div className={`absolute inset-0 bg-gradient-to-t ${burnGradient} rounded-2xl 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        <div className="relative space-y-3 sm:space-y-4">
          <motion.div 
            className={`${iconColor} w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 
                       p-2 sm:p-2.5 ring-2 ring-white/10 group-hover:ring-white/20 
                       transition-all duration-300 relative`}
            style={{
              scale: useTransform(progress, [0, 1], [0.8, 1]),
              filter: useTransform(progress, [0, 1], ["brightness(0.7)", "brightness(1.2)"])
            }}
          >
            <div 
              className="absolute inset-0 rounded-xl transition-opacity duration-500 
                         opacity-0 group-hover:opacity-100"
              style={{
                boxShadow: `0 0 10px ${neonColor}, 0 0 20px ${neonColor}`,
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