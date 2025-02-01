import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTAButtonProps {
  onClick?: () => void;
  text: string;
  icon?: "arrow" | "sparkles";
}

const CTAButton = ({ onClick, text, icon = "arrow" }: CTAButtonProps) => {
  const isReadingPage = window.location.pathname === '/reading';
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.location.href = "https://numerology33.com/collect-info";
    }
  };

  return (
    <div className="w-full max-w-[280px] relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/50 via-violet-600/50 to-purple-500/50 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
      <Button 
        onClick={handleClick}
        size="lg"
        className="w-full block relative px-4 sm:px-8 py-2 rounded-lg bg-gradient-to-br from-purple-500/80 to-violet-600/80 backdrop-blur-sm border border-purple-400/50 text-white font-semibold hover:text-purple-100 transition-colors"
      >
        <span className="relative z-10 flex items-center justify-center gap-2 font-semibold text-lg">
          {isReadingPage ? text.replace('Analysis', 'Reading') : text}
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