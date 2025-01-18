import { motion } from "framer-motion";
import { Eye, Star, Circle, Square, Brain, Heart, Sparkles, Infinity } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const LifePathNine = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2A0E61] to-[#1B0B3B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center"
            >
              <span className="text-5xl font-bold text-white">9</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
            >
              Life Path Number 9
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-xl text-purple-200"
            >
              The Number of Completion & Universal Love
            </motion.p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Spiritual Nature Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="col-span-1 md:col-span-2 lg:col-span-3 bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-purple-500/20">
                  <Star className="w-8 h-8 text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Spiritual Significance</h2>
              </div>
              <p className="text-lg text-white/80 leading-relaxed">
                9 is one of the most misunderstood numbers out here; it's an extremely important number in the matrix. 9 is the number of completion and ending, but not only that, when something comes to a 9, either it ends right there, or it gets transcended to the next level into a better version.
              </p>
            </motion.div>

            {/* Reality & Illusion Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-blue-500/20">
                  <Eye className="w-8 h-8 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Reality & Illusion</h2>
              </div>
              <p className="text-lg text-white/80 leading-relaxed">
                9 is the number of reality and illusion. Reality starts with "R," which is the 18th letter, and illusion starts with "I," which is the 9th letter. Everything is an illusion; nothing is really there. That table you see is not actually hard; the energy is just moving extremely slow to a point where you think it's solid.
              </p>
            </motion.div>

            {/* Geometric Connection Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-green-500/20">
                  <Square className="w-8 h-8 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Geometric Harmony</h2>
              </div>
              <p className="text-lg text-white/80 leading-relaxed">
                Every shape connects to 9. A circle has 360 degrees (3+6=9). A square's angles: 90×4=360 (3+6=9). This universal pattern shows 9's fundamental role in geometry and nature's design. The number 9 appears in all regular geometric forms, revealing its deep connection to physical reality.
              </p>
            </motion.div>

            {/* Intelligence & Spirituality Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-pink-500/20">
                  <Brain className="w-8 h-8 text-pink-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Intelligence & Spirituality</h2>
              </div>
              <p className="text-lg text-white/80 leading-relaxed">
                9s are extremely spiritual and usually rebellious; they don't fit well in the box; they like to live outside the box. They are also one of the smartest numbers, but a lot of them are complete failures. 9 used to be widely respected in multiple ancient civilizations; in other numerology systems, they don't even include the 9 because they have too much respect for it.
              </p>
            </motion.div>

            {/* Modern Challenges Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-red-500/20">
                  <Heart className="w-8 h-8 text-red-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Modern Challenges</h2>
              </div>
              <p className="text-lg text-white/80 leading-relaxed">
                In this modern world with its technologies and societal controls blocking spiritual abilities, 9s often struggle to find their place. This can lead to challenges with substances and addictive behaviors. However, evolved 9s can transcend these challenges and reach their full potential.
              </p>
            </motion.div>

            {/* Universal Connection Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-yellow-500/20">
                  <Infinity className="w-8 h-8 text-yellow-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Universal Connection</h2>
              </div>
              <p className="text-lg text-white/80 leading-relaxed">
                9 is all around us; everything always comes back to 9. Multiply 9 by any number and add the digits of the result - it always reduces to 9. This mathematical magic shows 9's role as a number of completion and universal connection.
              </p>
            </motion.div>

            {/* Eye Connection Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="col-span-1 md:col-span-2 lg:col-span-3 bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-indigo-500/20">
                  <Eye className="w-8 h-8 text-indigo-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">The Eye Connection</h2>
              </div>
              <p className="text-lg text-white/80 leading-relaxed">
                9 has a profound connection to vision and perception. The letter "I" is the 9th letter, sharing the same sound as "eye". This connection extends to spiritual vision - many 9s develop enhanced intuition and spiritual sight, especially if they've experienced physical vision challenges. This spiritual compensation often leads to heightened awareness and deeper understanding.
              </p>
            </motion.div>

            {/* Compatibility Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="col-span-1 md:col-span-2 lg:col-span-3 bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-purple-500/20">
                  <Sparkles className="w-8 h-8 text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Number Compatibility</h2>
              </div>
              <p className="text-lg text-white/80 leading-relaxed">
                The friendly numbers of the number 9 are 1-9, while the master numbers (11, 22, and 33) can create challenging dynamics. 9s are energy absorbers, which can create complex relationships with these powerful numbers. Understanding these dynamics is crucial for 9s in both personal and professional relationships.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LifePathNine;