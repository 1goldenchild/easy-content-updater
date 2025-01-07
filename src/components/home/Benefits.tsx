import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "./CallToAction";
import GradientCTAButton from "./GradientCTAButton";
import { Sparkles, Lightbulb, Brain, Heart } from "lucide-react";

const benefits = [
  {
    title: "Personalized Insights",
    description: "Get deep, meaningful insights tailored specifically to your unique numerological profile.",
    icon: Sparkles,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Life Purpose",
    description: "Discover your true life purpose and align your actions with your destined path.",
    icon: Lightbulb,
    gradient: "from-blue-500 to-purple-500",
  },
  {
    title: "Personal Growth",
    description: "Understand your strengths and weaknesses to facilitate profound personal development.",
    icon: Brain,
    gradient: "from-pink-500 to-orange-500",
  },
  {
    title: "Relationship Guidance",
    description: "Gain insights into your relationships and learn how to nurture meaningful connections.",
    icon: Heart,
    gradient: "from-orange-500 to-red-500",
  },
];

const Benefits = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/collect-info');
    scrollToTop();
  };

  return (
    <section className="py-20 relative">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            Transform Your Life with Numerology
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Unlock the ancient wisdom of numbers and discover how they influence every aspect of your life journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/50 rounded-3xl transition-all duration-500 group-hover:scale-[0.98] shadow-xl" />
              <div className="relative p-6 md:p-8 rounded-3xl border bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-sm hover:bg-card/60 transition-colors shadow-lg">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${benefit.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <GradientCTAButton
            onClick={handleGetStarted}
            text="Start Your Free Analysis"
            icon="sparkles"
            gradientFrom="[#6366F1]"
            gradientVia="[#D946EF]"
            gradientTo="[#F97316]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;