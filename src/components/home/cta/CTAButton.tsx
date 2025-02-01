import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../CallToAction";

const CTAButton = () => {
  const navigate = useNavigate();
  const isReadingPage = window.location.pathname === '/reading';
  const buttonText = isReadingPage ? "Start Your Reading" : "Start Your Analysis";

  const handleGetStarted = () => {
    navigate('/collect-info');
    scrollToTop();
  };

  return (
    <Button
      onClick={handleGetStarted}
      size="lg"
      className="bg-gradient-to-r from-[#0466c8] to-[#023e8a] hover:from-[#0353a4] hover:to-[#012a70] text-white font-semibold px-8 py-6 text-lg h-auto relative overflow-hidden group"
    >
      <span className="relative z-10">{buttonText}</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
        animate={{
          x: ['-100%', '200%'],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 1
        }}
      />
    </Button>
  );
};

export default CTAButton;