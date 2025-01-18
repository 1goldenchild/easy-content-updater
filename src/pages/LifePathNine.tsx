import { ScrollArea } from "@/components/ui/scroll-area"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

const LifePathNine = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900 text-white p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
            Life Path 9
          </h1>
          <p className="text-xl md:text-2xl text-purple-200">
            The Spiritual Transcendent
          </p>
        </div>

        {/* Main Content */}
        <ScrollArea className="h-[calc(100vh-200px)]">
          <div className="space-y-8 pr-4">
            {/* Introduction Card */}
            <Card className="p-6 bg-white/10 backdrop-blur-lg border-purple-500/20">
              <h2 className="text-2xl font-semibold mb-4 text-purple-200">
                The Matrix of Nine
              </h2>
              <p className="text-gray-200 leading-relaxed">
                9 is one of the most misunderstood numbers out here; it's an extremely important number in the matrix. 9 is the number of completion and ending, but not only that, when something comes to a 9, either it ends right there, or it gets transcended to the next level into a better version.
              </p>
            </Card>

            {/* Reality and Illusion Section */}
            <Card className="p-6 bg-white/10 backdrop-blur-lg border-purple-500/20">
              <h2 className="text-2xl font-semibold mb-4 text-purple-200">
                Reality vs. Illusion
              </h2>
              <div className="space-y-4 text-gray-200">
                <p>
                  9 is the number of reality and illusion. Reality starts with "R," which is the 18th letter, and illusion starts with "I," which is the 9th letter. Because reality is not really the realm we live in.
                </p>
                <blockquote className="border-l-4 border-purple-400 pl-4 italic">
                  Everything is an illusion; nothing is really there. That table you see is not actually hard; the energy is just moving extremely slowly to a point where you think it's solid, but solid matter is not actually real.
                </blockquote>
              </div>
            </Card>

            {/* Spiritual Nature */}
            <Card className="p-6 bg-white/10 backdrop-blur-lg border-purple-500/20">
              <h2 className="text-2xl font-semibold mb-4 text-purple-200">
                Spiritual Connection
              </h2>
              <div className="space-y-4 text-gray-200">
                <p>
                  9 thrives in society when it's based on spirituality. If it's not based on spirituality, they have a hard time finding their purpose.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-purple-800/30 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Characteristics</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Extremely spiritual</li>
                      <li>Usually rebellious</li>
                      <li>Don't fit in the box</li>
                      <li>One of the smartest numbers</li>
                    </ul>
                  </div>
                  <div className="bg-purple-800/30 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Historical Significance</h3>
                    <p>Widely respected in multiple ancient civilizations, some numerology systems don't even include 9 due to its sacred nature.</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Modern Challenges */}
            <Card className="p-6 bg-white/10 backdrop-blur-lg border-purple-500/20">
              <h2 className="text-2xl font-semibold mb-4 text-purple-200">
                Modern Era Challenges
              </h2>
              <div className="space-y-4 text-gray-200">
                <p>
                  In this modern world of technology, 9s face unique challenges. The elite controlling and blocking spiritual abilities has made 9s somewhat obsolete. However, evolved 9s (like you, reading this) exist and thrive.
                </p>
                <div className="bg-red-900/20 p-4 rounded-lg border border-red-500/20">
                  <h3 className="text-red-300 font-semibold mb-2">⚠️ Warning</h3>
                  <p>
                    9s should be very careful with substances due to their addictive personality. It's harder for them to live in this era, but with awareness comes strength.
                  </p>
                </div>
              </div>
            </Card>

            {/* The Eye Connection */}
            <Card className="p-6 bg-white/10 backdrop-blur-lg border-purple-500/20">
              <h2 className="text-2xl font-semibold mb-4 text-purple-200">
                The Eye Connection 👁️
              </h2>
              <div className="space-y-4 text-gray-200">
                <p>
                  9 is connected to the eye. The letter "I" is the 9th letter; pronounce "eye" and "I" - same frequency, same meaning. This connection runs deep, even in Arabic.
                </p>
                <div className="bg-indigo-800/30 p-4 rounded-lg">
                  <p>
                    Many 9s with karmic debt have eye problems, but this often leads to stronger development of other senses, contributing to their spiritual advancement.
                  </p>
                </div>
              </div>
            </Card>

            {/* Compatibility */}
            <Card className="p-6 bg-white/10 backdrop-blur-lg border-purple-500/20">
              <h2 className="text-2xl font-semibold mb-4 text-purple-200">
                Numerological Relationships
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-200">
                <div className="bg-green-800/30 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Friendly Numbers</h3>
                  <p>Numbers 1-9</p>
                </div>
                <div className="bg-red-800/30 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Challenging Numbers</h3>
                  <p>Master numbers 11, 22, and 33</p>
                </div>
              </div>
            </Card>

            {/* Final Thoughts */}
            <Card className="p-6 bg-white/10 backdrop-blur-lg border-purple-500/20">
              <h2 className="text-2xl font-semibold mb-4 text-purple-200">
                Destiny of Nine
              </h2>
              <p className="text-gray-200 leading-relaxed">
                If there is ever utopia on earth, 9 will be one of the major reasons behind it. 9 is also the most useful energy if you want to open your third eye. Remember, your ego can be your superpower - as long as you work hard to justify it.
              </p>
            </Card>
          </div>
        </ScrollArea>
      </motion.div>
    </div>
  )
}

export default LifePathNine