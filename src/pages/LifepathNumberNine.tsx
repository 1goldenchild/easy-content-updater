import { motion } from "framer-motion";
import { Eye, Infinity, Shapes, Brain, Sparkles, AlertTriangle } from "lucide-react";

const LifepathNumberNine = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900/20 to-pink-900/20">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
            Life Path Number 9
          </h1>
          <p className="text-lg text-white/80">
            The Number of Completion & Transcendence
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Introduction Section */}
          <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <Infinity className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-semibold text-white">The Matrix Number</h2>
            </div>
            <p className="text-white/80 leading-relaxed">
              9 is one of the most misunderstood numbers out here; it's an extremely important number in the matrix. 
              It represents completion and ending, but when something comes to a 9, either it ends right there, or it 
              gets transcended to the next level into a better version.
            </p>
          </motion.section>

          {/* Reality & Illusion Section */}
          <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-pink-500/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-pink-400" />
              <h2 className="text-2xl font-semibold text-white">Reality & Illusion</h2>
            </div>
            <div className="space-y-4 text-white/80 leading-relaxed">
              <p>
                9 is the number of reality and illusion. Reality starts with "R," which is the 18th letter, 
                and illusion starts with "I," which is the 9th letter. Because reality is not really the realm we live in.
              </p>
              <p>
                Everything is an illusion; nothing is really there. That table you see is not actually hard; 
                the energy is just moving extremely slowly to a point where you think it's solid, but solid matter 
                is not actually real.
              </p>
            </div>
          </motion.section>

            <motion.section 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <Shapes className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-semibold text-white">Sacred Geometry</h2>
              </div>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  Every single thing around you is a 9. If it's physical, it has a shape by definition. 
                  Just look at all the shapes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>A circle has 360 degrees (3+6=9)</li>
                  <li>A square: 1 angle has 90 degrees</li>
                  <li>2 angles is 180 (1+8=9)</li>
                  <li>3 angles is 270 (2+7=9)</li>
                  <li>All four angles have 360 degrees (3+6=9)</li>
                </ul>
              </div>
            </motion.section>

            {/* Spiritual Nature Section */}
            <motion.section 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-pink-500/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-pink-400" />
                <h2 className="text-2xl font-semibold text-white">Spiritual Nature</h2>
              </div>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  9s are extremely spiritual and usually rebellious; they don't fit well in the box; 
                  they like to live outside the box. They are also one of the smartest numbers, but a lot 
                  of them are complete failures.
                </p>
                <p>
                  9 used to be widely respected in multiple ancient civilizations; in other numerology systems, 
                  they don't even include the 9 because they have too much respect for it.
                </p>
              </div>
            </motion.section>

            {/* Modern Challenges Section */}
            <motion.section 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-semibold text-white">Modern Challenges</h2>
              </div>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  The more this new world evolves with all technologies and especially the elite controlling us 
                  and blocking our spiritual ability, 9s have become kind of obsolete. That's why a lot of them 
                  are addicted to drugs.
                </p>
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mt-4">
                  <p className="text-red-300">
                    Warning: 9s should be very careful with substances because they have an addictive personality 
                    as it's hard for them to live in this era.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Ego & Power Section */}
            <motion.section 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-pink-500/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-6 h-6 text-pink-400" />
                <h2 className="text-2xl font-semibold text-white">Ego & Power</h2>
              </div>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  9 also has the biggest ego. If you look at gematria, ego equals 9, and an ego is a superpower 
                  as long as you work hard to enjoy it.
                </p>
                <p>
                  9 is all around you; everything always comes back to 9; 9x2 is 18, 1+8 is 9, and you can do so 
                  with any number. That's also why they are very adaptable; they can adapt to every situation.
                </p>
              </div>
            </motion.section>

            {/* Mystical Secrets Section */}
            <motion.section 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-semibold text-white">Mystical Secrets</h2>
              </div>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  9 is connected to the eye. 👁️ The letter "I" is the 9th letter; pronounce "eye" and "I," 
                  same thing right? The frequency you use when saying it is the exact same, even in Arabic, 
                  the 18th letter when you say it is the same.
                </p>
                <p>
                  9 is also strongly linked to the number 2, which is the feminine, extremely intuitive. 
                  Just look at the word "femi(nine)"; you can't say it without the 9 in there.
                </p>
                <p>
                  9s are also energy suckers; they suck energy out of the numbers like a black hole. 
                  If you draw a 9 starting from the bottom and continue the motion, you will actually make 
                  a continuous spiral.
                </p>
              </div>
            </motion.section>

            {/* Compatibility Section */}
            <motion.section 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-pink-500/20 mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Infinity className="w-6 h-6 text-pink-400" />
                <h2 className="text-2xl font-semibold text-white">Number Compatibility</h2>
              </div>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  The friendly numbers of the number 9 are the 1-9, and the enemies are the 11-22 and the 33.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <h3 className="text-green-400 font-semibold mb-2">Friendly Numbers</h3>
                    <p className="text-white/80">1, 2, 3, 4, 5, 6, 7, 8, 9</p>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                    <h3 className="text-red-400 font-semibold mb-2">Enemy Numbers</h3>
                    <p className="text-white/80">11, 22, 33</p>
                  </div>
                </div>
              </div>
            </motion.section>
        </div>
      </div>
    </div>
  );
};

export default LifepathNumberNine;
