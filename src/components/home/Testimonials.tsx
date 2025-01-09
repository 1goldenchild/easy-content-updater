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

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="min-w-[300px] md:min-w-[400px] p-6 mx-4">
    <div className="bg-emerald-400/5 backdrop-blur-sm border border-emerald-500/10 rounded-lg p-6 hover:border-emerald-500/20 transition-colors h-full">
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-emerald-500 text-emerald-500"
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
    </div>
  </div>
)

const Testimonials = () => {
  const doubledTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="py-16 bg-gradient-to-b from-background to-background/80 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
            <span className="bg-gradient-to-r from-white via-white/90 to-white/80 text-transparent bg-clip-text animate-shine relative inline-block bg-[length:200%_100%]">
              Transforming Lives Through Energy Insights
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join over 1000 high-profile customers
          </p>
        </div>
        
        <div className="relative w-full">
          {/* Gradient masks for smooth fade effect */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Scrolling container */}
          <div className="overflow-hidden mask-edges">
            <div className="carousel-scroll">
              {doubledTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials