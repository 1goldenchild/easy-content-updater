import { Routes, Route, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const SalesIntro = () => {
  const navigate = useNavigate()

  const images = [
    "ixS7UCr4_ps",
    "u2Ru4QBXA5Q",
    "5fNmWej4tAA",
    "LrxSNa0-dhc",
    "4-EeTnaC1S4",
    "QckxruozjRg",
    "gcsNOsPEXfs",
    "iar-afB0QQw",
    "npxXWgQ33ZQ",
    "cckf4TsHAuw",
  ]

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
        className="w-full max-w-5xl mx-auto px-8"
      >
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
            skipSnaps: true,
            containScroll: false,
          }}
          plugins={[
            Autoplay({
              delay: 0,
              stopOnInteraction: false,
              stopOnMouseEnter: false,
              rootNode: null,
              playOnInit: true,
            }),
          ]}
          className="relative"
        >
          <CarouselContent 
            className="mask-edges" 
            style={{ 
              scrollBehavior: 'smooth', 
              transitionDuration: '20s',
              transform: 'translateX(-100%)',
              animation: 'scroll 20s linear infinite'
            }}
          >
            {[...images, ...images, ...images].map((id, index) => (
              <CarouselItem key={index} className="basis-1/4 md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <img
                    src={`https://source.unsplash.com/${id}/800x600`}
                    alt={`Success story ${index + 1}`}
                    className="rounded-lg object-cover aspect-[4/3] w-full h-full"
                    loading="eager"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
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