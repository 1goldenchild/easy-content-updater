import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { motion, useScroll } from "framer-motion"
import { ArrowRight, Star, Sparkles, Target, Users, TrendingUp, Lightbulb } from "lucide-react"
import { useEffect, useState } from "react"

const Index = () => {
  const { scrollYProgress } = useScroll();
  const [showMatrix, setShowMatrix] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setShowMatrix(scrollPercent >= 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center space-y-4 text-center relative z-10"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none">
              Reach the next level with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]">
                Numerology
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-white/90 md:text-xl dark:text-white/90">
              Discover the secrets the 1% and elite class have kept hidden—and how this powerful knowledge can transform your life, enhance your relationships, and even elevate your finances.
            </p>
            <Link to="/analysis">
              <Button size="lg" className="mt-6 group">
                Get Your Reading Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
        
        {/* Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 pointer-events-none" />
      </section>

      {/* Secret Knowledge Section */}
      <section className="py-16 relative overflow-hidden">
        <div className={`absolute inset-0 transition-opacity duration-1000 ${showMatrix ? 'opacity-30' : 'opacity-0'}`}
             style={{
               backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Ctext x="10" y="15" font-family="monospace" font-size="15" fill="%238B5CF6" text-anchor="middle"%3E1%3C/text%3E%3C/svg%3E")',
               backgroundSize: '50px 50px',
             }}
        />
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 bg-gradient-to-r from-[#1A1F2C] to-[#221F26] backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Star className="w-12 h-12 mx-auto text-purple-400 animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Restricted Wisdom Now at Your Fingertips
              </h2>
              <p className="text-lg text-white/80">
                For centuries, this powerful knowledge was hidden—reserved only for the world's wealthiest and most successful individuals. Kept secret under NDAs and passed down to a privileged few, it gave them a competitive edge that most could never access.
                <br /><br />
                Now, that same exclusive knowledge is available to you.
                <br /><br />
                Unlock the secrets that have shaped the fortunes of the elite. Gain the insights that have been guarded for generations—and use them to transform your life, accelerate your success, and create the future you've always desired.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Users,
                title: "Boost your relationships",
                description: "Use numerology to gain deep insights into yourself and others. Understand the motivations behind people's actions, discover why they behave the way they do, and unlock the hidden dynamics of your relationships. With this powerful tool, you can build stronger connections and cultivate a network of like-minded individuals who will elevate your life."
              },
              {
                icon: TrendingUp,
                title: "Accelerate your career",
                description: "Discover the opportunities meant for you by aligning your actions with your natural path. When you understand your true purpose, you can move with confidence and clarity, making decisions that resonate with your inner strengths. By tuning into the rhythm of your life, you'll effortlessly attract the right opportunities, relationships, and success, all while staying true to your authentic self."
              },
              {
                icon: Sparkles,
                title: "Unlock financial flow",
                description: "Tap into the powerful numbers that unlock prosperity and guide you toward smarter financial decisions. Use the precision of numerology to identify the most profitable opportunities, align your actions with abundance, and make decisions that maximize your income. With numerology as your guide, you'll gain the insights you need to optimize your wealth and consistently increase your profits through various Numerology tactics."
              },
              {
                icon: Target,
                title: "Become your best self",
                description: "The truth about your numbers will reveal powerful insights into who you really are—illuminating the reasons behind your behaviors, choices, and patterns in life. Numerology teaches you to understand not just your strengths and potential, but also the deeper motivations that drive your actions."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <benefit.icon className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-white/70">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-8 md:p-12"
          >
            <div className="relative z-10 text-center space-y-6">
              <Lightbulb className="w-16 h-16 mx-auto text-yellow-400" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Don't wait—the secret is out
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                It's time to use it to your advantage. Claim your Numerology Analysis now and start 
                living a life of clarity, purpose, and success.
              </p>
              <Link to="/analysis">
                <Button size="lg" variant="secondary" className="mt-4">
                  Get Your Personalized Reading
                </Button>
              </Link>
            </div>
            
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl" />
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Index