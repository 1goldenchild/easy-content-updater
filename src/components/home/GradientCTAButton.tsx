import { motion } from "framer-motion";
import { ArrowRight, LucideIcon, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GradientCTAButtonProps {
  onClick: () => void;
  text: string;
  icon?: "arrow" | "sparkles";
  gradientFrom?: string;
  gradientVia?: string;
  gradientTo?: string;
  className?: string;
}

const GradientCTAButton = ({
  onClick,
  text,
  icon = "arrow",
  gradientFrom = "[#8B5CF6]",
  gradientVia = "[#D946EF]",
  gradientTo = "[#F97316]",
  className = "",
}: GradientCTAButtonProps) => {
  const Icon = icon === "arrow" ? ArrowRight : Sparkles;
  
  return (
    <Button
      onClick={onClick}
      size="lg"
      className={`bg-gradient-to-r from-${gradientFrom} via-${gradientVia} to-${gradientTo} 
        hover:opacity-90 text-white font-semibold px-6 py-4 h-auto group 
        relative overflow-hidden ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2 text-base">
        {text}
        <Icon className={`w-4 h-4 transition-transform ${
          icon === "arrow" ? "group-hover:translate-x-1" : "group-hover:rotate-12"
        }`} />
      </span>
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r from-${gradientFrom} via-${gradientVia} to-${gradientTo} 
          opacity-0 group-hover:opacity-100 transition-opacity`}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </Button>
  );
};

export default GradientCTAButton;