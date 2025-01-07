import { motion } from "framer-motion";
import { 
  ChartPieIcon, 
  Fingerprint, 
  Globe2, 
  Car, 
  HeartHandshake,
  Briefcase,
  CircleIcon1,
  CircleIcon2,
  CircleIcon3,
  CircleIcon4,
  CircleIcon5,
  CircleIcon6,
} from "lucide-react";

const features = [
  {
    icon: Fingerprint,
    title: "Personal Life Path Analysis",
    description: "Discover your core numbers and their profound meaning in your life journey",
    gradient: "from-blue-500 to-purple-500",
    numberIcon: CircleIcon1
  },
  {
    icon: ChartPieIcon,
    title: "Interactive Charts",
    description: "Visualize your numerological characteristics through dynamic, interactive charts",
    gradient: "from-purple-500 to-pink-500",
    numberIcon: CircleIcon2
  },
  {
    icon: Globe2,
    title: "Global Compatibility",
    description: "Find the best countries and locations aligned with your numerological profile",
    gradient: "from-pink-500 to-red-500",
    numberIcon: CircleIcon3
  },
  {
    icon: Car,
    title: "Vehicle Harmony",
    description: "Learn which vehicles resonate best with your energy patterns",
    gradient: "from-red-500 to-orange-500",
    numberIcon: CircleIcon4
  },
  {
    icon: HeartHandshake,
    title: "Relationship Insights",
    description: "Understand compatibility patterns in your personal and professional relationships",
    gradient: "from-orange-500 to-yellow-500",
    numberIcon: CircleIcon5
  },
  {
    icon: Briefcase,
    title: "Career Guidance",
    description: "Get tailored career recommendations based on your numerological profile",
    gradient: "from-yellow-500 to-green-500",
    numberIcon: CircleIcon6
  }
];

const FeatureList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          className="relative group text-left"
        >
          <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl -z-10" />
          <div className={`h-full p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden`}>
            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
            
            {/* Content */}
            <div className="relative z-10">
              {/* Number and Icon with gradient background */}
              <div className="flex items-center gap-4 mb-4">
                <feature.numberIcon className="w-8 h-8 text-white" />
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} p-2.5 shadow-lg`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>
              </div>
              
              {/* Title with gradient text */}
              <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-white/70 text-sm leading-relaxed">
                {feature.description}
              </p>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-xl" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureList;