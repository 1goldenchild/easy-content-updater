import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const SecretKnowledge = () => {
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
            <div className="pt-6">
              <Link to="/collect-info" className="inline-block">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8"
                >
                  Get Your Numerology Analysis
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SecretKnowledge