import { motion } from "framer-motion"
import { Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const CallToAction = () => {
  return (
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
              Get Your Personalized Numerology Analysis Today
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Uncover the secrets behind your numbers, unlock your potential, and start 
              living a life that aligns with your true purpose. Click below to claim your 
              numerology analysis now and take the first step toward a clearer, more 
              empowered future.
            </p>
            <Link to="/analysis">
              <Button size="lg" variant="secondary" className="mt-4">
                Get Your Personalized Reading
              </Button>
            </Link>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl" />
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction