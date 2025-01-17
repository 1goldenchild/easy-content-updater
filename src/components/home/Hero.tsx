import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import CTAButton from "./buttons/CTAButton"
import { useAuth } from "@/hooks/useAuth"

const Hero = () => {
  const navigate = useNavigate()
  const { session } = useAuth()

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/20 backdrop-blur-sm" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Discover Your Life Path Through{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Numerology
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-200 max-w-2xl mx-auto">
            Unlock the secrets of your life path number and discover what the universe has in store for you
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {!session ? (
              <>
                <CTAButton
                  onClick={() => navigate("/numerology/analysis")}
                  text="Get Started"
                  icon="sparkles"
                />
                <CTAButton
                  onClick={() => navigate("/auth")}
                  text="Sign In"
                />
              </>
            ) : (
              <CTAButton
                onClick={() => navigate("/portal")}
                text="Go to Your Portal"
                icon="sparkles"
              />
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero