import { motion } from "framer-motion"
import FooterStars from "./footer/FooterStars"
import FooterSocialLinks from "./footer/FooterSocialLinks"
import FooterLinks from "./footer/FooterLinks"
import NewsletterSection from "./footer/NewsletterSection"

const Footer = () => {
  return (
    <>
      <FooterStars />
      <footer className="relative border-t border-purple-500/10 bg-[#151318]/95 backdrop-blur-xl">
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
            className="mt-8 md:mt-12 pt-8 border-t border-purple-500/10 text-center text-sm text-muted-foreground"
          >
            <p>&copy; 2025 Numerology 33. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </>
  )
}

export default Footer