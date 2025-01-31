import { motion } from "framer-motion";
import { Sparkles, ChartLine, Heart, User, House, Car, Plane, Palette, Computer } from "lucide-react";

const Sales = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const features = [
    { icon: ChartLine, title: "Life Path Number Analysis", description: "Discover your core life purpose and destiny" },
    { icon: ChartLine, title: "Partial Energy Analysis", description: "Understand your daily energetic influences" },
    { icon: ChartLine, title: "Cycle Number Analysis", description: "Navigate your life's major cycles and transitions" },
    { icon: ChartLine, title: "2025 Energy Analysis", description: "Prepare for upcoming energetic shifts" },
    { icon: ChartLine, title: "Secret Number Analysis", description: "Uncover hidden aspects of your personality" },
    { icon: ChartLine, title: "Lucky Number Analysis", description: "Identify your most fortunate numbers" },
    { icon: User, title: "Numerological Compatibilities", description: "Learn how you connect with others" },
    { icon: Heart, title: "Love Compatibilities", description: "Find your ideal romantic matches" },
    { icon: User, title: "Career Paths Compatibilities", description: "Discover your professional potential" },
    { icon: House, title: "Houses Compatibilities", description: "Find your perfect living space" },
    { icon: Car, title: "Cars Compatibilities", description: "Choose vehicles that match your energy" },
    { icon: Plane, title: "Travel & Residence Compatibilities", description: "Find your ideal locations worldwide" },
    { icon: Palette, title: "Color Compatibilities", description: "Harness the power of colors in your life" },
    { icon: Computer, title: "Technology Compatibilities", description: "Optimize your digital environment" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1f3c] to-[#2d2b4a] p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent">
              What You'll Receive In Your Complete Numerology Analysis
            </span>
          </h2>
          <p className="text-lg text-white/80">
            Unlock the hidden blueprint of your energy force with our comprehensive analysis
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-3xl blur-xl" />
          <div className="relative bg-black/20 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
            <div className="grid grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={item}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-all duration-300">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-colors">
                      <feature.icon className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white/90 group-hover:text-white transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Mystery Bonus Section */}
              <motion.div
                variants={item}
                className="relative mt-8"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-purple-500/20 to-pink-500/20 rounded-xl blur-lg" />
                <div className="relative p-6 rounded-xl bg-black/40 border border-amber-500/30 backdrop-blur-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-amber-500/30 to-purple-500/30">
                      <Sparkles className="w-6 h-6 text-amber-400" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-purple-400 bg-clip-text text-transparent">
                      Mystery Bonus
                    </h3>
                  </div>
                  <p className="text-white/80 pl-14">
                    Unlock exclusive insights reserved for advanced seekers
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Sales;