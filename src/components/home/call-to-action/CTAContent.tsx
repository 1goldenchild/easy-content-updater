import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../CallToAction";
import AnimatedIcon from "./AnimatedIcon";

const CTAContent = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/collect-info');
    scrollToTop();
  };

  return (
    <div className="relative z-10 text-center space-y-4 md:space-y-6">
      <AnimatedIcon />

      <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
        Get Your Personalized Numerology Analysis Today
      </h2>

      <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
        Uncover the secrets behind your numbers, unlock your potential, and start 
        living a life that aligns with your true purpose.
      </p>

      <div className="flex justify-center">
        <div className="w-full max-w-[280px]">
          <Button 
            onClick={handleNavigate}
            size="lg" 
            className="w-full relative bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-200"
          >
            Get Your Personalized Analysis
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTAContent;