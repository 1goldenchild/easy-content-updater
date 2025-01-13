import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { features } from "./data/features";
import FeatureCard from "./features/FeatureCard";
import { motion } from "framer-motion";

const FeatureList = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <div className="space-y-8">
      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const progress = useTransform(
            scrollYProgress,
            [Math.max(0, index * 0.1), Math.min(1, (index + 1) * 0.1)],
            [0, 1]
          );

          return (
            <FeatureCard
              key={index}
              feature={feature}
              progress={progress}
              index={index}
            />
          );
        })}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-center"
      >
        <span className="relative inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#9b87f5] via-[#D6BCFA] to-[#E5DEFF] text-transparent bg-clip-text text-lg font-medium hover:opacity-90 transition-opacity animate-text-shimmer cursor-default border border-[#9b87f5]/20">
          And more
        </span>
      </motion.div>
    </div>
  );
};

export default FeatureList;