import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import BenefitsHeader from "./benefits/BenefitsHeader";
import BenefitCard from "./benefits/BenefitCard";
import { benefits } from "./data/benefits";

const Benefits = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"]
  });

  return (
    <section className="relative -mt-10 py-20 overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a21] via-[#1A1F2C]/95 to-[#221F26]" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.15),transparent_50%)]" 
             style={{ transform: 'translateY(25%)' }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-3 md:px-4">
        <BenefitsHeader />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 relative">
          {benefits.map((benefit, index) => {
            const startTrigger = 0.1 + (index * 0.08);
            const endTrigger = startTrigger + 0.15;

            const cardProgress = useTransform(
              scrollYProgress,
              [startTrigger, endTrigger],
              [0, 1]
            );

            return (
              <BenefitCard
                key={index}
                {...benefit}
                progress={cardProgress}
                index={index}
                alwaysLit={true}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;