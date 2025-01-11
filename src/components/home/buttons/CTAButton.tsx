import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface CTAButtonProps {
  onClick: () => void;
  text: string;
  icon?: "arrow" | "sparkles";
}

const CTAButton = ({ onClick, text, icon = "arrow" }: CTAButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="relative group overflow-hidden px-4 sm:px-8 py-2 rounded-lg bg-gradient-to-br from-amber-200/20 to-purple-500/20 backdrop-blur-sm border border-amber-200/30 text-amber-100 hover:text-amber-50 transition-colors"
    >
      <span className="relative z-10 flex items-center gap-2">
        {text}
        {icon === "arrow" ? (
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        ) : (
          <Sparkles className="w-5 h-5 transition-transform group-hover:rotate-12" />
        )}
      </span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-amber-200/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
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

export default CTAButton;