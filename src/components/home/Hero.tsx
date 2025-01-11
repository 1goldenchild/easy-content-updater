import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Lightning effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-600/30 via-transparent to-transparent animate-lightning pointer-events-none z-10" />
      
      {/* Additional lightning flashes */}
      <div className="absolute inset-0 bg-white/5 animate-lightning pointer-events-none z-20" 
        style={{ animationDelay: '0.5s' }} />
      <div className="absolute inset-0 bg-purple-400/10 animate-lightning pointer-events-none z-20" 
        style={{ animationDelay: '1.5s' }} />
      
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Discover Your Numerology
          </h1>
          <p className="text-lg text-white/80">
            Uncover the secrets of your life path and compatibility.
          </p>
          <Link to="/get-started">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400">
              Get Started
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;