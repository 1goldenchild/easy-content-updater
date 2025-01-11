import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-slate-900 via-purple-900/50 to-slate-900">
      {/* Dark stormy background */}
      <div className="absolute inset-0 bg-slate-900/90" />
      
      {/* Main lightning flash */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/80 via-purple-400/40 to-transparent animate-lightning pointer-events-none z-10" />
      
      {/* Bright center flash */}
      <div 
        className="absolute inset-0 bg-white/60 animate-lightning pointer-events-none z-20"
        style={{ 
          animationDelay: '0.1s',
          clipPath: 'polygon(48% 0, 52% 0, 55% 25%, 58% 50%, 52% 75%, 50% 100%, 48% 75%, 42% 50%, 45% 25%)'
        }} 
      />
      
      {/* Secondary branches */}
      <div 
        className="absolute inset-0 bg-purple-300/40 animate-lightning pointer-events-none z-15"
        style={{ 
          animationDelay: '0.2s',
          clipPath: 'polygon(45% 0, 55% 0, 60% 30%, 65% 45%, 55% 60%, 58% 85%, 50% 100%, 42% 85%, 45% 60%, 35% 45%, 40% 30%)'
        }} 
      />
      
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-purple-600/20 animate-pulse pointer-events-none z-5" />

      <div className="container px-4 md:px-6 relative z-30">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Discover Your Numerology
          </h1>
          <p className="text-lg text-white/90 drop-shadow-md">
            Uncover the secrets of your life path and compatibility.
          </p>
          <Link to="/get-started">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 shadow-lg">
              Get Started
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;