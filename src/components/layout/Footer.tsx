import { motion } from "framer-motion"
import FooterStars from "./footer/FooterStars"
import FooterSocialLinks from "./footer/FooterSocialLinks"
import FooterLinks from "./footer/FooterLinks"
import NewsletterSection from "./footer/NewsletterSection"

const Footer = () => {
  return (
    <>
      <FooterStars />
      <footer className="relative border-t border-purple-500/20 bg-[#221F26]/95 backdrop-blur-xl">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0">
            <svg className="w-full h-full opacity-80" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="starGlowBackground" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="white" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                </radialGradient>
              </defs>
              {[...Array(150)].map((_, i) => {
                const size = Math.random() * 2 + 0.5;
                const x = Math.random() * 100;
                const y = Math.random() * 100;
                const delay = Math.random() * 3;
                const duration = Math.random() * 3 + 2;
                
                return (
                  <circle
                    key={i}
                    cx={`${x}%`}
                    cy={`${y}%`}
                    r={size}
                    fill="url(#starGlowBackground)"
                    className="animate-[twinkle_3s_ease-in-out_infinite]"
                    style={{
                      animationDelay: `${delay}s`,
                      animationDuration: `${duration}s`
                    }}
                  />
                );
              })}
            </svg>
          </div>
        </div>

        <div className="container py-8 md:py-16 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="col-span-2 md:col-span-1 space-y-4">
              <h3 className="text-lg font-semibold bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
                Numerology 33
              </h3>
              <p className="text-sm text-muted-foreground">
                Discover your life's path through the ancient wisdom of numbers.
              </p>
              <FooterSocialLinks />
            </div>

            <FooterLinks />
            <NewsletterSection />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 md:mt-12 pt-8 border-t border-purple-500/20 text-center text-sm text-muted-foreground"
          >
            <p>&copy; {new Date().getFullYear()} Numerology Insights. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </>
  )
}

export default Footer