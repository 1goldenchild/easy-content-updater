import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../CallToAction";

const ContentSection = () => {
  const navigate = useNavigate();
  const isReadingPage = window.location.pathname === '/reading';

  const handleNavigate = () => {
    navigate('/collect-reading-info');
    scrollToTop();
  };

  return (
    <div className="relative p-8 rounded-2xl bg-gradient-to-b from-[#1A1F2C] to-[#221F26] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-fuchsia-500/10 to-purple-500/10" />
      <div className="relative space-y-6">
        <p className="text-lg text-white/90 leading-relaxed">
          For centuries, this powerful knowledge was hidden—reserved only for the world's wealthiest and most successful individuals. Kept secret under NDAs and passed down to a privileged few, it gave them a competitive edge that most could never access.
        </p>
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        <p 
          className="text-lg leading-relaxed bg-clip-text animate-text-shimmer"
          style={{
            background: 'linear-gradient(to right, #FFD700, #FFC000, #FFD700)',
            WebkitBackgroundClip: 'text',
            backgroundSize: '200% auto',
            color: 'transparent'
          }}
        >
          Now, that same exclusive knowledge is available to you.
        </p>
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        <p className="text-lg leading-relaxed" style={{ color: '#F1F0FB' }}>
          Discover how numerology can revolutionize your understanding of yourself and the world, and unlock its transformative benefits.
        </p>
      </div>

      <div className="pt-8">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#534363] via-[#534363] to-[#534363] rounded-md blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
          <Button 
            onClick={handleNavigate}
            className="relative w-full sm:w-auto bg-gradient-to-r from-[#534363] to-[#a39356] hover:from-[#534363] hover:to-[#a39356] text-amber-200/90 font-normal tracking-wider shadow-[0_0_15px_rgba(251,191,36,0.1)] transition-all duration-500 bg-[length:200%_auto] hover:bg-right-top hover:shadow-[0_0_20px_rgba(251,191,36,0.2)] border border-[#86736f] rounded-md overflow-hidden px-8 py-6"
          >
            <span className="relative z-10 flex items-center gap-2 text-base">
              Get Your Numerology Reading
              <Sparkles className="w-5 h-5" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-900/10 to-transparent translate-x-[-200%] animate-shimmer" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;