import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

const EbookSales = () => {
  const navigate = useNavigate()
  const benefits = [
    "Discover Your Wealth Number for 2024",
    "Learn Money Manifestation Techniques",
    "Unlock Hidden Financial Opportunities",
    "Master Number Secrets for Success",
    "Daily Wealth Rituals & Practices",
    "Compatibility with Business Partners"
  ]

  const handleCheckout = () => {
    navigate("/checkout/step1")
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-black to-[#001a00] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left side - Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <img 
              src="/lovable-uploads/cf91d418-9032-4c3b-9342-2ac117c5ab2d.png"
              alt="Get Rich Using Numerology 2024 Edition"
              className="w-full max-w-md rounded-lg shadow-[0_0_30px_rgba(0,255,0,0.15)]"
            />
          </motion.div>

          {/* Right side - Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Get <span className="text-yellow-400">Rich</span> Using Numerology
                <span className="block text-2xl md:text-3xl mt-2 text-yellow-400">2024 EDITION</span>
              </h1>
              
              <p className="text-lg text-gray-300">
                Unlock the ancient secrets of wealth manifestation through the power of numbers. This comprehensive guide reveals how to align your numerological profile with financial success in 2024.
              </p>
            </div>

            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-green-400 w-5 h-5 flex-shrink-0" />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="space-y-4 pt-6"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold">$37</span>
                <span className="text-lg line-through text-gray-400">$97</span>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                  62% OFF
                </span>
              </div>

              <Button 
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold text-lg px-8 py-6 h-auto"
                onClick={handleCheckout}
              >
                <span className="flex items-center gap-2">
                  Get Instant Access
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Button>

              <p className="text-sm text-gray-400 text-center sm:text-left">
                🔒 Secure Payment • Instant Digital Delivery
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default EbookSales