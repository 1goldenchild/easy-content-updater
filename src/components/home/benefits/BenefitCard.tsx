import { motion, useTransform, MotionValue } from "framer-motion";
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
  progress: MotionValue<number>;
  index: number;
  alwaysLit?: boolean;
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
  alwaysLit = false,
}: BenefitCardProps) => {
  return (
    <motion.div
      style={{
        opacity: useTransform(progress, [0, 1], [0, 1]) as unknown as number,
        scale: useTransform(progress, [0, 1], [0.95, 1]),
      }}
      className="relative group"
    >
      <motion.div
        className="absolute -inset-0.5 rounded-2xl transition duration-700"
        style={{
          opacity: useTransform(progress, [0, 1], [0, 1]) as unknown as number,
          boxShadow: `0 0 25px 2px ${neonColor}`,
        }}
      />
      
      <div 
        className={`relative rounded-2xl p-6 lg:p-8 border ${borderColor} 
                    bg-gradient-to-br ${bgGradient} backdrop-blur-xl
                    transition-all duration-700 ease-out overflow-hidden
                    hover:scale-[1.02] hover:shadow-2xl`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] to-transparent rounded-2xl" />
        <div className={`absolute inset-0 bg-gradient-to-t ${burnGradient} rounded-2xl 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
        
        <div className="relative space-y-4">
          <motion.div 
            className={`${iconColor} w-12 h-12 sm:w-14 sm:h-14 rounded-xl 
                       bg-white/10 p-3 ring-2 ring-white/20 
                       group-hover:ring-white/30 transition-all duration-700 
                       relative backdrop-blur-xl`}
            style={{
              filter: useTransform(progress, [0, 1], ["brightness(0.5)", "brightness(1.2)"]) as any
            }}
          >
            <div 
              className="absolute inset-0 rounded-xl transition-opacity duration-700"
              style={{
                opacity: useTransform(progress, [0, 1], [0, 1]) as unknown as number,
                boxShadow: `0 0 15px 2px ${neonColor}`,
              }}
            />
            <Icon className="w-full h-full relative z-10" />
          </motion.div>
          
          <h3 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent 
                         bg-gradient-to-br from-white to-white/80">
            {title}
          </h3>
          
          <p className="text-lg text-white/70 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default BenefitCard;