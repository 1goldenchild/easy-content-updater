import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import DecorativeElements from "./secret/DecorativeElements";
import ContentSection from "./secret/ContentSection";

const SecretKnowledge = () => {
  const [showMatrix, setShowMatrix] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setShowMatrix(scrollPercent >= 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-16 relative overflow-hidden">
      <DecorativeElements showMatrix={showMatrix} />
      
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-6 relative">
              <motion.h2 
                data-section="wisdom-heading"
                className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-300 to-amber-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Restricted Wisdom Now at Your Fingertips
              </motion.h2>

              <ContentSection />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecretKnowledge;