import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Index = () => {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center space-y-4 text-center"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]">
              Discover Your Life's Path Through
              <span className="block mt-2">Numerology</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-white/90 md:text-xl dark:text-white/90">
              Unlock the hidden meanings behind your numbers and discover your true potential with our advanced numerology readings.
            </p>
            <Link to="/analysis">
              <Button size="lg" className="mt-6">
                Get Your Reading Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Animated Line Separator */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="w-full h-px bg-white/20 origin-left"
      />

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {[
              {
                title: "Life Path Number",
                description: "Discover your core purpose and life mission through your unique numerical signature.",
              },
              {
                title: "Expression Number",
                description: "Understand your natural abilities and how you express yourself to the world.",
              },
              {
                title: "Soul Urge Number",
                description: "Reveal your inner desires and what truly drives you forward in life.",
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * (index + 1) }}
              >
                <Card className="bg-black/20 backdrop-blur-sm border-purple-500/20">
                  <CardHeader>
                    <CardTitle>
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-white/70">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Another Animated Line Separator */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="w-full h-px bg-white/20 origin-left"
      />
    </div>
  )
}

export default Index