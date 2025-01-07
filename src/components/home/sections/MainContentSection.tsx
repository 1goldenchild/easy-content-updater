import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import FeatureList from "../FeatureList";
import CTAButton from "../buttons/CTAButton";
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
        <CTAButton 
          onClick={handleGetStarted}
          text="Start Your Journey Now"
          icon="sparkles"
        />
      </motion.div>
    </div>
  );
};

export default MainContentSection;