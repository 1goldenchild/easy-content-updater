import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { scrollToTop } from "./CallToAction"

const testimonials = [
  {
    name: "Michael Chen",
    role: "Creative Director",
    text: "I never got a more accurate analysis than with these guys. They got it down to a science and offered it in a visually appealing and easily digestible content and It's freaking incredible.",
    rating: 5,
    image: "/lovable-uploads/533da3b0-d8d6-44dc-908c-64a8e126b669.png"
  },
  {
    name: "Jessica Turner",
    role: "Community Organizer",
    text: "I loved the reading and it was super incentive but the precision of it all is what really surprised me with things that i didn't even think were possible with numerology.",
    rating: 5,
    image: "/lovable-uploads/712974a5-ebed-4c39-a091-d7927ca6ba90.png"
  },
  {
    name: "James Wilson",
    role: "Owner Operator",
    text: "I bought a ton of different analyses but you guys are the only ones providing charts and graphics and it just lets us have a different vision and perspective so thanks to the numerology 33 team.",
    rating: 5,
    image: "/lovable-uploads/b30ccbfc-50cd-455d-a03d-bd742e6d77da.png"
  },
  {
    name: "Lisa Anderson",
    role: "Dentist",
    text: "This is the 3rd numerology reading that I've gotten and for the first time I don't feel like I'm reading some fortune cookie BS. This one felt extremely accurate and valuable with some crazy new things that I discovered about myself so thanks a lot!",
    rating: 5,
    image: "/lovable-uploads/06bbaf93-ba80-44d9-aee8-9b3069ab81e3.png"
  },
  {
    name: "Sarah Johnson",
    role: "Medical Assistant",
    text: "I never realized how much the energy around me was influencing my decisions. Now I'm already feeling more in tune with my inner me :)",
    rating: 5,
    image: "/lovable-uploads/1e3f4b34-6805-4822-a03b-71cee7add12f.png"
  },
  {
    name: "Mark Thompson",
    role: "Kindergarten Teacher",
    text: "I teach 8 years old and every year I order new reading for my new class. It's the first time with you guys and I must say the information in there is simply amazing. The level that you guys operate at is incredible and I'm looking forward to seeing what is available to us in the future.",
    rating: 5,
    image: "/lovable-uploads/d66893a4-4810-4ad2-822b-eaa0a0063c22.png"
  },
  {
    name: "Chris Thompson",
    role: "Flooring Contractor",
    text: "It's just amazing that we can use numerology to pinpoint our strengths and challenges. It's literally like having a cheat code that a few people know...",
    rating: 5,
    image: "/lovable-uploads/984813d9-700a-4057-a369-08ae4035507b.png"
  },
  {
    name: "Ethan Lee",
    role: "Corporate Sales",
    text: "This is crazy. I just got out of a 13 year marriage and the analysis literally told me that I was married to my enemy number and it makes so much sense. Highly recommended if you guys have never done it.",
    rating: 5,
    image: "/lovable-uploads/19898ce0-901a-4b63-8681-b754a34b3b41.png"
  },
  {
    name: "David Rodriguez",
    role: "Tech Executive",
    text: "I was strictly interested in numerology to know the money secret tricks and I was stunned by it but I think the best was with my personality and I react in certain ways when I'm in stressful environments. This deepness of this value is really something so thanks to Numerology33.com!",
    rating: 5,
    image: "/lovable-uploads/ddcf7f13-8161-4035-8bf0-380df27a4222.png"
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="min-w-[300px] md:min-w-[400px] p-6 mx-4">
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-emerald-400/5 backdrop-blur-sm border border-emerald-500/10 rounded-lg p-6 hover:border-emerald-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5 h-full"
    >
      <div className="flex items-center gap-4 mb-6">
        <Avatar className="h-12 w-12 border-2 border-emerald-500/20">
          <AvatarImage src={testimonial.image} alt={testimonial.name} />
          <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-semibold">{testimonial.name}</div>
          <div className="text-sm text-muted-foreground">
            {testimonial.role}
          </div>
        </div>
      </div>
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-emerald-500 text-emerald-500"
          />
        ))}
      </div>
      <blockquote className="text-sm text-white/80 leading-relaxed">
        "{testimonial.text}"
      </blockquote>
    </motion.div>
  </div>
)

const Testimonials = () => {
  const navigate = useNavigate();
  // Triple the testimonials to ensure smooth infinite scroll
  const tripleTestimonials = [...testimonials, ...testimonials, ...testimonials]

  const handleGetStarted = () => {
    navigate('/collect-info');
    scrollToTop();
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-background/80 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 
            data-section="testimonials-heading"
            className="text-3xl md:text-4xl font-bold mb-4 relative"
          >
            <span className="bg-gradient-to-r from-white via-white/90 to-white/80 text-transparent bg-clip-text animate-shine relative inline-block bg-[length:200%_100%]">
              Transforming Lives Through Energy Insights
            </span>
          </h2>
          <p className="text-lg text-muted-foreground flex items-center justify-center gap-2">
            <Star className="w-5 h-5 fill-emerald-500 text-emerald-500" />
            Join over 1000 high-profile customers
            <Star className="w-5 h-5 fill-emerald-500 text-emerald-500" />
          </p>
        </div>
        
        <div className="relative w-full">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />
          
          <div className="overflow-hidden mask-edges">
            <div 
              className="carousel-scroll infinite-scroll"
              style={{
                animation: 'scroll 60s linear infinite',
                willChange: 'transform',
                display: 'flex',
                width: 'fit-content'
              }}
            >
              {tripleTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 via-emerald-600 to-emerald-600 rounded-md blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <Button 
              onClick={handleGetStarted}
              className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-normal tracking-wider shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all duration-500 bg-[length:200%_auto] hover:bg-right-top hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] border border-emerald-600 rounded-md relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Start Your Journey Now
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="ml-2"
                >
                  →
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent translate-x-[-200%] animate-shimmer" />
            </Button>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.33%);
            }
          }
          
          .infinite-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  )
}

export default Testimonials
