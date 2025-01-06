import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Sarah Johnson",
    avatar: "/placeholder.svg",
    initials: "SJ",
    text: "The numerology reading was eye-opening! It helped me understand my life path and make better decisions.",
    rating: 5
  },
  {
    name: "Michael Chen",
    avatar: "/placeholder.svg",
    initials: "MC",
    text: "I was skeptical at first, but the accuracy of my reading was uncanny. It's transformed how I approach my career.",
    rating: 5
  },
  {
    name: "Emma Davis",
    avatar: "/placeholder.svg",
    initials: "ED",
    text: "The insights about my relationships were spot-on. I've made positive changes that have improved my life.",
    rating: 5
  },
  {
    name: "James Wilson",
    avatar: "/placeholder.svg",
    initials: "JW",
    text: "This reading revealed aspects of my personality I never understood before. Truly enlightening!",
    rating: 5
  }
]

const Testimonials = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Purple Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-background pointer-events-none" />
      
      <div className="container px-4 md:px-6 relative">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            <span className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Over 1,000 Happy Customers
            </span>
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transforming Lives Through Numerology
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have discovered their true potential through our personalized numerology readings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 relative group hover:bg-white/10 transition-colors"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-purple-400/20" />
              <div className="flex items-start gap-4">
                <Avatar className="w-12 h-12 border-2 border-purple-400/20">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback className="bg-purple-900/50">{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/80 mb-2">{testimonial.text}</p>
                  <p className="font-semibold text-purple-400">{testimonial.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials