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
    "photo-1649972904349-6e44c42644a7",
    "photo-1488590528505-98d2b5aba04b",
    "photo-1518770660439-4636190af475",
    "photo-1461749280684-dccba630e2f6",
    "photo-1486312338219-ce68d2c6f44d",
    "photo-1581091226825-a6a2a5aee158",
    "photo-1485827404703-89b55fcc595e",
    "photo-1526374965328-7f61d4dc18c5",
    "photo-1531297484001-80022131f5a1",
    "photo-1487058792275-0ad4aaf24ca7",
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
          <CarouselContent className="mask-edges" style={{ scrollBehavior: 'smooth', transitionDuration: '20s' }}>
            {[...images, ...images, ...images].map((id, index) => (
              <CarouselItem key={index} className="basis-1/4 md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <img
                    src={`https://images.unsplash.com/${id}`}
                    alt={`Success story ${index + 1}`}
                    className="rounded-lg object-cover aspect-[4/3]"
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