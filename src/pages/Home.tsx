
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Heart, Target, Trophy, Star, CheckCircle2, Clock, AlertTriangle, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToTop } from "@/components/home/CallToAction";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/collect-info');
    scrollToTop();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1f3c] to-[#2d2b4a]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-purple-500 to-amber-200 bg-clip-text text-transparent"
            >
              Your Birth Date Holds the Key to Unlocking Your True Potential!
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-white/80 mb-8"
            >
              Discover the Hidden Code That Determines Your Destiny and Transforms Your Life Instantly!
            </motion.p>
            <p className="text-white/70 mb-8">
              For centuries, numerology has been the secret weapon of the world's most successful people. 
              Now, it's your turn to decode the numbers and gain clarity, purpose, and success beyond your imagination.
            </p>
          </div>
        </div>
      </section>

      {/* Truth Section */}
      <section className="py-12 md:py-20 bg-purple-900/10">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              The Truth No One Told You About Your Life Path
            </h2>
            <div className="space-y-6 text-white/80">
              <p>
                You feel stuck. You wonder why things don't seem to align for you. Relationships, career, finances—everything feels like a struggle.
              </p>
              <p className="text-xl text-amber-200">
                What if we told you that the answers have been in front of you this whole time? That your birth date reveals a roadmap, guiding you to abundance, love, and fulfillment?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              The Pain You're Experiencing Is <span className="text-red-400">NOT</span> a Coincidence
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white/5 p-6 rounded-xl border border-purple-500/20"
              >
                <Target className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Facing Obstacles</h3>
                <p className="text-white/70">Unsure why life feels like an uphill battle?</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white/5 p-6 rounded-xl border border-purple-500/20"
              >
                <Heart className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Repeating Patterns</h3>
                <p className="text-white/70">Making the same mistakes in love, career, or self development?</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 p-6 rounded-xl border border-purple-500/20"
              >
                <Star className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Untapped Potential</h3>
                <p className="text-white/70">Feel like you're meant for more but can't figure out how to reach it?</p>
              </motion.div>
            </div>
            
            <p className="text-white/80 mt-8 text-center">
              Your struggles are NOT random. They're patterns written in your numbers, and until you decode them, you'll keep facing the same roadblocks.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-12 md:py-20 bg-purple-900/10">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              The Solution: A Deep, Personalized Numerology Reading Like No Other
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Your Life Path Number and what it means for your destiny",
                "The hidden challenges holding you back—and how to overcome them",
                "Your natural strengths and how to use them to create success",
                "The ideal career, relationships, and opportunities for your unique numbers",
                "A step-by-step action plan to align with your true path",
                "Advanced insights including Partial Energy, Core Traits, Cycle Number Analysis",
                "2025 Energy Analysis, Secret Number Analysis, Lucky Number",
                "Compatibility for Love and Friendship, Best Career Path",
                "Best House to Live In, Best Car, Best Countries and Travel Locations",
                "Best Color, Best Crystal, and Most Compatible Technology Brand",
                "And Much More Advanced Insights!"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <p className="text-white/80">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Why Trust Us? Here's Our Proven Track Record
            </h2>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white/5 p-6 rounded-xl border border-purple-500/20"
              >
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-12 h-12 text-amber-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">100,000+ TikTok Followers</h3>
                    <p className="text-white/70">
                      Over 24 million views in the last 12 months. Unlike other numerologists who simply regurgitate 
                      the same information, we actively practice what we preach and bring real, actionable insights 
                      from working with thousands of people.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white/5 p-6 rounded-xl border border-purple-500/20"
              >
                <div className="flex items-start gap-4">
                  <Trophy className="w-12 h-12 text-amber-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Global Recognition</h3>
                    <p className="text-white/70">
                      We've helped thousands of customers find clarity, purpose, and life-changing breakthroughs. 
                      Our readings are renowned for their accuracy and premium quality all over the world.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Here's What You'll Get With Your Personalized Numerology Reading
            </h2>
            <div className="space-y-4 mb-12">
              {[
                "A detailed, in-depth numerology reading tailored specifically to you",
                "Actionable insights and guidance you can apply immediately",
                "A step-by-step breakdown of your numbers and how to use them",
                "A BONUS Numerology Ebook to deepen your understanding"
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-white/5 p-4 rounded-lg border border-purple-500/20"
                >
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <p className="text-white/80">{benefit}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-purple-500/20 text-center">
              <div className="mb-8">
                <p className="text-2xl text-red-400 line-through mb-2">Total Value: $197</p>
                <p className="text-4xl md:text-5xl font-bold text-green-400">Today Only: $27!</p>
              </div>
              <div className="flex items-center justify-center gap-2 mb-8">
                <Clock className="w-5 h-5 text-amber-400" />
                <p className="text-amber-400">Limited Time Offer - Price Increasing Soon!</p>
              </div>
              <Button
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-6 text-xl h-auto hover:opacity-90 transition-opacity"
              >
                Get Your Reading Now
              </Button>
              <div className="mt-6 p-4 bg-white/5 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">100% Risk-Free Guarantee</h3>
                <p className="text-white/70 text-sm">
                  We're so confident in the accuracy and life-changing impact of our readings that we offer a 100% Money-Back Guarantee. 
                  If you don't find immense value in your reading, just let us know—we'll refund you, no questions asked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mb-12">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-400" />
                <h3 className="text-xl font-semibold text-white">Warning: This Offer Won't Last Forever</h3>
              </div>
              <p className="text-white/80">
                Due to high demand, we may close this special offer at any time and increase prices. 
                If you leave this page, you might not see this deal again.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                P.S. Don't Miss This Life-Changing Opportunity
              </h3>
              <p className="text-white/80 mb-8">
                Your birth numbers have been waiting for you to decode them. Stop wondering and start knowing. 
                Grab your personalized numerology reading now and unlock the clarity and direction you deserve!
              </p>
              <Button
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-amber-400 to-amber-600 text-white px-8 py-6 text-xl h-auto hover:opacity-90 transition-opacity"
              >
                Unlock Your Numerology Reading Now
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
