import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTAButtonProps {
  onClick: () => void;
  text: string;
  icon?: "arrow" | "sparkles";
}

const CTAButton = ({ onClick, text, icon = "arrow" }: CTAButtonProps) => {
  return (
    <div className="w-full max-w-[280px] relative">
      <Button 
        onClick={onClick}
        size="lg"
        className="w-full block relative px-4 sm:px-8 py-2 rounded-lg bg-gradient-to-br from-amber-200/20 to-purple-500/20 backdrop-blur-sm border border-amber-200/30 text-amber-100 hover:text-amber-50 transition-colors"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {text}
          {icon === "arrow" ? (
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          ) : (
            <Sparkles className="ml-2 group-hover:rotate-12 transition-transform" />
          )}
        </span>
      </Button>
    </div>
  );
};

export default CTAButton;