import { motion } from "framer-motion";
import { 
  ChartPieIcon, 
  Fingerprint, 
  Globe2, 
  Car, 
  HeartHandshake,
  Briefcase,
} from "lucide-react";

const features = [
  {
    icon: Fingerprint,
    title: "Personal Life Path Analysis",
    description: "Discover your core numbers and their profound meaning in your life journey"
  },
  {
    icon: ChartPieIcon,
    title: "Interactive Charts",
    description: "Visualize your numerological characteristics through dynamic, interactive charts"
  },
  {
    icon: Globe2,
    title: "Global Compatibility",
    description: "Find the best countries and locations aligned with your numerological profile"
  },
  {
    icon: Car,
    title: "Vehicle Harmony",
    description: "Learn which vehicles resonate best with your energy patterns"
  },
  {
    icon: HeartHandshake,
    title: "Relationship Insights",
    description: "Understand compatibility patterns in your personal and professional relationships"
  },
  {
    icon: Briefcase,
    title: "Career Guidance",
    description: "Get tailored career recommendations based on your numerological profile"
  }
];

const FeatureList = () => {
  return (
    <div className="grid gap-6">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
        >
          <feature.icon className="w-6 h-6 text-[#0466c8] flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-white/90">{feature.title}</h3>
            <p className="text-white/70 text-sm">{feature.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureList;