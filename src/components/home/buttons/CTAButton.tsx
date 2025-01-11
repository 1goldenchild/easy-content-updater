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
      <div className="absolute -inset-1 bg-gradient-to-r from-[#2A2311] via-[#3B3015] to-[#2A2311] rounded-md blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
      <Button 
        onClick={onClick}
        size="lg"
        className="w-full bg-gradient-to-r from-[#1A1508] via-[#2A2311] to-[#1A1508] hover:from-[#2A2311] hover:via-[#3B3015] hover:to-[#2A2311] text-amber-200/90 font-semibold shadow-[0_0_15px_rgba(251,191,36,0.1)] transition-all duration-500 bg-[length:200%_auto] hover:bg-right-top hover:shadow-[0_0_20px_rgba(251,191,36,0.2)] border border-amber-900/30 rounded-md relative overflow-hidden"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {text}
          {icon === "arrow" ? (
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          ) : (
            <Sparkles className="ml-2 group-hover:rotate-12 transition-transform" />
          )}
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-900/10 to-transparent translate-x-[-200%] animate-shimmer" />
      </Button>
    </div>
  );
};

export default CTAButton;