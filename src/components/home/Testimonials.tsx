import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Entrepreneur",
    text: "The energy forecast was incredibly accurate. It helped me time major business decisions perfectly.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Creative Director",
    text: "I was skeptical at first, but the insights provided were remarkably precise. It's become an essential tool for my personal growth.",
    rating: 5
  },
  {
    name: "Emma Thompson",
    role: "Life Coach",
    text: "As someone who works with personal development, I'm amazed by the depth and accuracy of these readings.",
    rating: 5
  },
  {
    name: "David Rodriguez",
    role: "Tech Executive",
    text: "The career guidance was spot-on. It helped me make a crucial career move at exactly the right time.",
    rating: 5
  },
  {
    name: "Lisa Anderson",
    role: "Artist",
    text: "The insights about my creative cycles have transformed how I approach my work. Truly invaluable.",
    rating: 5
  },
  {
    name: "James Wilson",
    role: "Financial Advisor",
    text: "The precision of the readings is remarkable. It's become an integral part of my decision-making process.",
    rating: 5
  }
]

const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-background/80">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transforming Lives Through Energy Insights
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands who have discovered their true potential
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-primary/20 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-purple-500 text-purple-500"
                  />
                ))}
              </div>
              <blockquote className="mb-4 text-sm text-white/80 leading-relaxed">
                "{testimonial.text}"
              </blockquote>
              <footer>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </footer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials