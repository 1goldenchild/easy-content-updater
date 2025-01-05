import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Index = () => {
  return (
    <div className="flex-1">
      {/* Hero Section with Animated Gradient */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1F2C] via-[#8B5CF6] to-[#D946EF] opacity-20" />
        <div className="container px-4 md:px-6 relative">
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
            <p className="mx-auto max-w-[700px] text-white/90 md:text-xl dark:text-white/90 backdrop-blur-sm">
              Unlock the hidden meanings behind your numbers and discover your true potential with our advanced numerology readings.
            </p>
            <Link to="/analysis">
              <Button size="lg" className="mt-6 bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] hover:opacity-90 transition-all duration-300 transform hover:scale-105">
                Get Your Reading Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section with Animated Cards */}
      <section className="py-16 md:py-24 bg-[#1A1F2C]/50">
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
                gradient: "from-[#8B5CF6] to-[#D946EF]"
              },
              {
                title: "Expression Number",
                description: "Understand your natural abilities and how you express yourself to the world.",
                gradient: "from-[#0EA5E9] to-[#8B5CF6]"
              },
              {
                title: "Soul Urge Number",
                description: "Reveal your inner desires and what truly drives you forward in life.",
                gradient: "from-[#F97316] to-[#D946EF]"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * (index + 1) }}
              >
                <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 bg-black/20 backdrop-blur-sm border-purple-500/20">
                  <CardHeader>
                    <CardTitle className={`bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
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
    </div>
  )
}

export default Index