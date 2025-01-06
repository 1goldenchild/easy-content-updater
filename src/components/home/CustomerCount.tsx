import { motion } from "framer-motion"
import { Star } from "lucide-react"

const CustomerCount = () => {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <div className="flex items-center justify-center gap-2">
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            <span className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Over 1,000 Happy Customers
            </span>
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Transforming Lives Through Numerology
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have discovered their true potential through our personalized numerology readings.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CustomerCount