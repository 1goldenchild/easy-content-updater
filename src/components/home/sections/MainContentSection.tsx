import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import FeatureList from "../FeatureList";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { scrollToTop } from "../CallToAction";

const MainContentSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/collect-info');
    scrollToTop();
  };

  return (
    <div className="space-y-8">
      <motion.h2 
        data-section="profile-heading"
        className="text-3xl md:text-4xl font-bold text-center relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="relative inline-block">
          <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 opacity-50 blur-lg animate-pulse" />
          <span className="relative bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent animate-shine">
            Unlock Your Complete Numerology Profile
          </span>
        </span>
      </motion.h2>
      
      <FeatureList />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-center pt-8"
      >
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#534363] via-[#534363] to-[#534363] rounded-md blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <Button 
            onClick={handleGetStarted}
            className="w-full bg-gradient-to-r from-[#534363] to-[#a39356] hover:from-[#534363] hover:to-[#a39356] text-amber-200/90 font-normal tracking-wider shadow-[0_0_15px_rgba(251,191,36,0.1)] transition-all duration-500 bg-[length:200%_auto] hover:bg-right-top hover:shadow-[0_0_20px_rgba(251,191,36,0.2)] border border-[#86736f] rounded-md relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Your Journey Now
              <Sparkles className="w-4 h-4" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-900/10 to-transparent translate-x-[-200%] animate-shimmer" />
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default MainContentSection;