import { motion, MotionValue } from "framer-motion";
import { Circle, LucideIcon } from "lucide-react";

interface FeatureCardProps {
  feature: {
    icon: LucideIcon;
    title: string;
    description: string;
    gradient: string;
    neonColor: string;
    number: number;
  };
  progress: MotionValue<number>;
  index: number;
}

const FeatureCard = ({ feature, progress, index }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      className="relative group"
    >
      <motion.div
        style={{ opacity: progress }}
        className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-transparent via-[rgba(155,135,245,0.1)] to-transparent"
        transition={{ duration: 0.3 }}
      />
      <motion.div
        style={{
          opacity: progress,
          boxShadow: `0 0 10px 1px ${feature.neonColor}, 
                     0 0 20px 2px ${feature.neonColor}`
        }}
        className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"
      />
      <div className="relative h-full p-6 rounded-2xl bg-[#1A1F2C]/40 backdrop-blur-sm border border-[#534363]/10">
        <div className="flex items-center gap-4 mb-4">
          <motion.div 
            className="relative w-8 h-8"
            style={{ opacity: progress }}
          >
            <Circle className="w-8 h-8 text-[#F1F0FB]/50" />
            <span className="absolute inset-0 flex items-center justify-center text-[#F1F0FB] font-bold">
              {feature.number}
            </span>
          </motion.div>
          <motion.div 
            className={`relative w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} p-2.5`}
            style={{
              opacity: progress,
              boxShadow: `0 0 5px 1px ${feature.neonColor}, 
                         0 0 10px 2px ${feature.neonColor}`
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <feature.icon className="w-full h-full text-white" />
          </motion.div>
        </div>
        
        <motion.h3 
          className={`text-xl font-bold mb-2 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}
          style={{ opacity: progress }}
        >
          {feature.title}
        </motion.h3>
        
        <motion.p 
          className="text-[#F1F0FB]/70 text-sm leading-relaxed"
          style={{ opacity: progress }}
        >
          {feature.description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;