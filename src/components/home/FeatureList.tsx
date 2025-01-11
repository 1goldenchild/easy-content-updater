import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ChartPieIcon, 
  Fingerprint, 
  Globe2, 
  Car, 
  HeartHandshake,
  Briefcase,
  Circle
} from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: Fingerprint,
    title: "Personalize Analysis",
    description: "Unlock deeper insights into yourself with this personalized analysis",
    gradient: "from-[#9b87f5] to-[#D6BCFA]",
    neonColor: "rgb(214, 188, 250)",
    number: 1
  },
  {
    icon: ChartPieIcon,
    title: "Interactive Charts",
    description: "Visualize your numerological characteristics through dynamic, interactive charts",
    gradient: "from-[#7E69AB] to-[#9b87f5]",
    neonColor: "rgb(155, 135, 245)",
    number: 2
  },
  {
    icon: Globe2,
    title: "Global Compatibility",
    description: "Find the best countries and locations aligned with your numerological profile",
    gradient: "from-[#6E59A5] to-[#7E69AB]",
    neonColor: "rgb(126, 105, 171)",
    number: 3
  },
  {
    icon: Car,
    title: "Vehicle Compatibility",
    description: "Learn which vehicles resonate best with your energy patterns",
    gradient: "from-[#534363] to-[#6E59A5]",
    neonColor: "rgb(110, 89, 165)",
    number: 4
  },
  {
    icon: HeartHandshake,
    title: "Relationship Insights",
    description: "Understand compatibility patterns in your personal and professional relationships",
    gradient: "from-[#E5DEFF] to-[#D6BCFA]",
    neonColor: "rgb(229, 222, 255)",
    number: 5
  },
  {
    icon: Briefcase,
    title: "Career Guidance",
    description: "Get tailored career recommendations based on your numerological profile",
    gradient: "from-[#D6BCFA] to-[#9b87f5]",
    neonColor: "rgb(214, 188, 250)",
    number: 6
  }
];

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
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut"
            }}
            className="relative group"
          >
            <motion.div
              style={{ opacity: progress }}
              className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-transparent via-[rgba(155,135,245,0.1)] to-transparent"
              transition={{ duration: 0.3 }}
            />
            <motion.div
              style={{
                opacity: progress,
                boxShadow: `0 0 10px 1px ${feature.neonColor}, 
                           0 0 20px 2px ${feature.neonColor}`
              }}
              className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"
            />
            <div className="relative h-full p-6 rounded-2xl bg-[#1A1F2C]/40 backdrop-blur-sm border border-[#534363]/10">
              <div className="flex items-center gap-4 mb-4">
                <motion.div 
                  className="relative w-8 h-8"
                  style={{ opacity: progress }}
                >
                  <Circle className="w-8 h-8 text-[#F1F0FB]/50" />
                  <span className="absolute inset-0 flex items-center justify-center text-[#F1F0FB] font-bold">
                    {feature.number}
                  </span>
                </motion.div>
                <motion.div 
                  className={`relative w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} p-2.5`}
                  style={{
                    opacity: progress,
                    boxShadow: `0 0 5px 1px ${feature.neonColor}, 
                               0 0 10px 2px ${feature.neonColor}`
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <feature.icon className="w-full h-full text-white" />
                </motion.div>
              </div>
              
              <motion.h3 
                className={`text-xl font-bold mb-2 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}
                style={{ opacity: progress }}
              >
                {feature.title}
              </motion.h3>
              
              <motion.p 
                className="text-[#F1F0FB]/70 text-sm leading-relaxed"
                style={{ opacity: progress }}
              >
                {feature.description}
              </motion.p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FeatureList;