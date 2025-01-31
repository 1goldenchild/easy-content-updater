import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Sales = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900/20 to-indigo-900/20 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent animate-text-shimmer">
              What You Receive In Your Analysis
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
        </motion.div>

        {/* Single Unified Benefits Section */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-orange-600/20 rounded-lg blur-lg" />
          <div className="relative bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
            <div className="space-y-8">
              <motion.div variants={item} className="group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Core Energy Analysis
                  </h3>
                </div>
                <div className="pl-16 space-y-6">
                  <div className="group/item">
                    <h4 className="text-xl font-medium text-white mb-2 group-hover/item:text-purple-400 transition-colors">
                      ✧ Lifepath Number
                    </h4>
                    <p className="text-gray-400 group-hover/item:text-gray-300 transition-colors">
                      Uncover your unique energetic blueprint that guides your journey
                    </p>
                  </div>
                  <div className="group/item">
                    <h4 className="text-xl font-medium text-white mb-2 group-hover/item:text-purple-400 transition-colors">
                      ✧ Partial Energy
                    </h4>
                    <p className="text-gray-400 group-hover/item:text-gray-300 transition-colors">
                      Understand the subtle influences that shape your personality
                    </p>
                  </div>
                  <div className="group/item">
                    <h4 className="text-xl font-medium text-white mb-2 group-hover/item:text-purple-400 transition-colors">
                      ✧ Cycle Number
                    </h4>
                    <p className="text-gray-400 group-hover/item:text-gray-300 transition-colors">
                      Gain awareness of your current energy cycle and its impact
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={item} className="group pt-8 border-t border-purple-500/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                    Path Mastery
                  </h3>
                </div>
                <div className="pl-16 space-y-6">
                  <div className="group/item">
                    <h4 className="text-xl font-medium text-white mb-2 group-hover/item:text-pink-400 transition-colors">
                      ✧ Numerological Compatibility
                    </h4>
                    <p className="text-gray-400 group-hover/item:text-gray-300 transition-colors">
                      Master relationship and business dynamics through numbers
                    </p>
                  </div>
                  <div className="group/item">
                    <h4 className="text-xl font-medium text-white mb-2 group-hover/item:text-pink-400 transition-colors">
                      ✧ Career Path Insights
                    </h4>
                    <p className="text-gray-400 group-hover/item:text-gray-300 transition-colors">
                      Discover industries and paths perfectly aligned with your energy
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={item} className="group pt-8 border-t border-purple-500/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    Advanced Mastery
                  </h3>
                </div>
                <div className="pl-16 space-y-6">
                  <div className="group/item">
                    <h4 className="text-xl font-medium text-white mb-2 group-hover/item:text-orange-400 transition-colors">
                      ✧ Environment Energy Control
                    </h4>
                    <p className="text-gray-400 group-hover/item:text-gray-300 transition-colors">
                      Master the art of energy manipulation in your surroundings
                    </p>
                  </div>
                  <div className="group/item">
                    <h4 className="text-xl font-medium text-white mb-2 group-hover/item:text-orange-400 transition-colors">
                      ✧ VIP Energy Mastery Bonus
                    </h4>
                    <p className="text-gray-400 group-hover/item:text-gray-300 transition-colors">
                      Exclusive advanced manifestation techniques and practices
                    </p>
                  </div>
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