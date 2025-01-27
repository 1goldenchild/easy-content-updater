import { Routes, Route, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const SalesIntro = () => {
  const navigate = useNavigate()

  const images = [
    "bBiuSdck8tU",
    "R-LK3sqLiBw",
    "N-Y88TWmGwA",
    "505eectW54k",
    "xG8IQMqMITM"
  ].map(id => {
    const url = `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&h=600`
    console.log('Loading image:', url)
    return url
  })

  return (
    <div className="flex flex-col items-center justify-center space-y-20 py-12 px-4">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Ever Wonder How These People Get to Where They Are?{" "}
          <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text">
            Numerology.
          </span>
        </h1>
      </motion.div>

      {/* Carousel Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-full max-w-5xl mx-auto px-8 overflow-hidden"
      >
        <div className="relative overflow-hidden">
          <div className="mask-edges">
            <div className="carousel-scroll">
              {[...images, ...images].map((url, index) => (
                <div
                  key={index}
                  className="w-[300px] flex-shrink-0 px-2"
                >
                  <img
                    src={url}
                    alt={`Success story ${index + 1}`}
                    className="rounded-lg object-cover w-full h-[225px]"
                    loading="eager"
                    onError={(e) => console.error('Image failed to load:', url, e)}
                    onLoad={() => console.log('Image loaded successfully:', url)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Get to Know Yourself Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="space-y-6 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Get to Know Yourself Through Numerology Analysis
        </h2>
        <p className="text-xl text-muted-foreground">
          Unlock the hidden patterns in your life and discover your true potential through our comprehensive numerology analysis.
        </p>
      </motion.div>

      {/* NDA Protected Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="space-y-8 max-w-3xl mx-auto text-center"
      >
        <div className="bg-secondary/50 p-8 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Exclusive Access to Protected Insights
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Get access to personalized information about your numbers that we've recently secured behind an NDA. Unlock secrets that few have access to.
          </p>
          <Button
            size="lg"
            className="text-lg px-8"
            onClick={() => navigate("info")}
          >
            Start Your Reading
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

const Sales = () => {
  return (
    <div className="flex-1 bg-background">
      <Routes>
        <Route index element={<SalesIntro />} />
        <Route path="info" element={<div>Info collection form will go here</div>} />
        <Route path="plans" element={<div>Plan selection will go here</div>} />
      </Routes>
    </div>
  )
}

export default Sales
