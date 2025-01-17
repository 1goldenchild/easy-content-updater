import { motion } from "framer-motion";
import { Eye, Infinity, Brain, Shapes, Sparkles, AlertTriangle } from "lucide-react";

const LifePathNine = () => {
  return (
    <div className="min-h-screen bg-[#221F26] text-white pb-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Life Path 9: The Spiritual Transcendent
            </h1>
            <p className="mt-6 text-xl text-center text-gray-300 max-w-3xl mx-auto">
              One of the most misunderstood numbers in numerology, 9 represents completion, 
              transcendence, and the bridge between reality and illusion.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Core Concepts Section */}
        <section>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-purple-500/10">
                  <Infinity className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold">Completion & Transcendence</h3>
              </div>
              <p className="text-gray-300">
                9 marks either an absolute ending or a transformation to a higher level. 
                It's the number where cycles complete and new beginnings emerge.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-purple-500/10">
                  <Eye className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold">Reality & Illusion</h3>
              </div>
              <p className="text-gray-300">
                The number 9 bridges reality and illusion, understanding that what we perceive 
                as solid matter is actually energy in constant motion.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Spiritual Nature Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent rounded-xl" />
          <div className="relative p-8 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-purple-500/10">
                <Sparkles className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold">Spiritual Intelligence</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-300 mb-4">
                  9s are extremely spiritual and usually rebellious, not fitting well within conventional 
                  boundaries. They possess remarkable intelligence but may struggle to find their place 
                  in a materialistic world.
                </p>
                <p className="text-gray-300">
                  In ancient civilizations, 9 was so revered that some numerology systems excluded it 
                  entirely out of respect. However, in our modern technological era, many 9s struggle 
                  to maintain their spiritual connection.
                </p>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="font-semibold mb-2">Mathematical Harmony</h4>
                  <p className="text-sm text-gray-400">
                    360° (circle) = 3+6+0 = 9<br />
                    90° × 4 (square) = 360° = 9<br />
                    9 × 2 = 18 → 1+8 = 9
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Warnings & Guidance Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-xl bg-gradient-to-br from-red-900/20 to-transparent border border-red-500/10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-red-500/10">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <h2 className="text-2xl font-bold">Important Considerations</h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300">
                9s must be cautious with substances due to their addictive personalities. Their 
                struggle to find purpose in a materialistic world can lead to destructive coping 
                mechanisms.
              </p>
              <p className="text-gray-300">
                The ego of a 9 can be both a blessing and a curse. While it's a potential 
                superpower, it must be balanced with genuine effort and achievement to avoid 
                self-destructive patterns.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Relationships Section */}
        <section className="p-8 rounded-xl bg-white/5 border border-white/10">
          <h2 className="text-2xl font-bold mb-6">Numerological Relationships</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-400">Friendly Numbers</h3>
              <p className="text-gray-300">
                Numbers 1-9 generally work well with Life Path 9, creating harmonious relationships 
                and productive collaborations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-400">Challenging Numbers</h3>
              <p className="text-gray-300">
                Master numbers (11, 22, 33) can create tension with 9s, as their high energy 
                levels can be depleted by 9's natural energy-absorbing qualities.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LifePathNine;