import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

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

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent">
            What You Receive In Your Analysis
          </span>
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"
        />
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6"
      >
        {/* Core Features Section */}
        <motion.div variants={item} className="space-y-4">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative p-6 bg-black/40 backdrop-blur-sm rounded-lg border border-purple-500/20">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-4 flex-1">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Lifepath Number</h3>
                      <p className="text-gray-400">Uncover your unique energetic blueprint</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Partial Energy</h3>
                      <p className="text-gray-400">Understand the subtle influences that shape your personality</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Cycle Number</h3>
                      <p className="text-gray-400">Gain awareness of your current energy cycle</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Advanced Features Section */}
        <motion.div variants={item} className="space-y-4">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-orange-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative p-6 bg-black/40 backdrop-blur-sm rounded-lg border border-pink-500/20">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-4 flex-1">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">Numerological Compatibility</h3>
                      <p className="text-gray-400">Master relationship and business dynamics</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">Career Path Insights</h3>
                      <p className="text-gray-400">Discover industries aligned with your energy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Premium Features Section */}
        <motion.div variants={item} className="space-y-4">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative p-6 bg-black/40 backdrop-blur-sm rounded-lg border border-orange-500/20">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-4 flex-1">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Environment Energy Control</h3>
                      <p className="text-gray-400">Master the art of energy manipulation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">VIP Energy Mastery Bonus</h3>
                      <p className="text-gray-400">Exclusive advanced manifestation techniques</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Sales;