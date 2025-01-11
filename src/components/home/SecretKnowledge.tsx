import { motion } from "framer-motion"
import { Star, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { scrollToTop } from "./CallToAction"

const SecretKnowledge = () => {
  const [showMatrix, setShowMatrix] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setShowMatrix(scrollPercent >= 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = () => {
    navigate('/collect-info');
    scrollToTop();
  };

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Animated background effect */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${showMatrix ? 'opacity-20' : 'opacity-0'}`}
           style={{
             backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Ctext x="10" y="15" font-family="monospace" font-size="15" fill="%238B5CF6" text-anchor="middle"%3E1%3C/text%3E%3C/svg%3E")',
             backgroundSize: '50px 50px',
           }}
      />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_70%)]" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Main content container */}
          <div className="max-w-3xl mx-auto">
            {/* Header section */}
            <div className="text-center space-y-6 relative">
              <div className="relative inline-block">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500 rounded-full blur-xl opacity-30"
                />
                <div className="relative bg-gradient-to-r from-[#1A1F2C] to-[#221F26] p-4 rounded-full border border-purple-500/20">
                  <Star className="w-8 h-8 text-purple-400" />
                </div>
              </div>
              
              <motion.h2 
                data-section="wisdom-heading"
                className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-300 to-amber-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Restricted Wisdom Now at Your Fingertips
              </motion.h2>

              {/* Content with gradient border */}
              <div className="relative p-8 rounded-2xl bg-gradient-to-b from-[#1A1F2C] to-[#221F26] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-fuchsia-500/10 to-purple-500/10" />
                <div className="relative space-y-6">
                  <p className="text-lg text-white/90 leading-relaxed">
                    For centuries, this powerful knowledge was hidden—reserved only for the world's wealthiest and most successful individuals. Kept secret under NDAs and passed down to a privileged few, it gave them a competitive edge that most could never access.
                  </p>
                  <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
                  <p className="text-lg text-white/90 leading-relaxed">
                    Now, that same exclusive knowledge is available to you.
                  </p>
                  <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
                  <p className="text-lg text-white/90 leading-relaxed">
                    Unlock the secrets that have shaped the fortunes of the elite. Gain the insights that have been guarded for generations—and use them to transform your life, accelerate your success, and create the future you've always desired.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-8">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#534363] via-[#534363] to-[#534363] rounded-md blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                  <Button 
                    onClick={handleNavigate}
                    className="relative w-full sm:w-auto bg-gradient-to-r from-[#534363] to-[#a39356] hover:from-[#534363] hover:to-[#a39356] text-amber-200/90 font-normal tracking-wider shadow-[0_0_15px_rgba(251,191,36,0.1)] transition-all duration-500 bg-[length:200%_auto] hover:bg-right-top hover:shadow-[0_0_20px_rgba(251,191,36,0.2)] border border-[#86736f] rounded-md overflow-hidden px-8 py-6"
                  >
                    <span className="relative z-10 flex items-center gap-2 text-lg">
                      Get Your Numerology Analysis
                      <Sparkles className="w-5 h-5" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-900/10 to-transparent translate-x-[-200%] animate-shimmer" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SecretKnowledge