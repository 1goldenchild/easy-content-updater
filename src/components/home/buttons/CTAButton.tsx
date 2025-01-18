import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTAButtonProps {
  onClick: () => void;
  text: string;
  icon?: "arrow" | "sparkles";
}

const CTAButton = ({ onClick, text, icon = "arrow" }: CTAButtonProps) => {
  return (
    <div className="w-full max-w-[280px] relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-amber-200/30 via-purple-500/30 to-amber-200/30 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
      <Button 
        onClick={onClick}
        size="lg"
        className="w-full block relative px-4 sm:px-8 py-2 rounded-lg bg-gradient-to-br from-amber-200/30 to-purple-500/30 backdrop-blur-sm border border-amber-200/50 text-amber-200 hover:text-amber-100 transition-colors"
      >
        <span className="relative z-10 flex items-center justify-center gap-2 font-semibold text-lg">
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