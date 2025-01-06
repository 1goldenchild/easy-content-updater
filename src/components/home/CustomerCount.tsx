import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { scrollToTop } from "./CallToAction"

const CustomerCount = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/collect-info');
    scrollToTop();
  };

  return (
    <section className="py-16 relative overflow-hidden">
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
              Join the Community of Enlightened Individuals
            </h2>
            <p className="text-lg text-white/80">
              Thousands have already transformed their lives with our insights. Are you ready to take the leap?
            </p>
            <div className="w-full max-w-[280px] mx-auto">
              <Button 
                onClick={handleNavigate}
                size="lg"
                className="w-full bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white font-semibold"
              >
                Start Your Journey Now
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CustomerCount
