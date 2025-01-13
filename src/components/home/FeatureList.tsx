import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { features } from "./data/features";
import FeatureCard from "./features/FeatureCard";

const FeatureList = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
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
  );
};

export default FeatureList;