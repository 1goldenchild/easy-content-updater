import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import FooterSocialLinks from "./footer/FooterSocialLinks"
import NewsletterSection from "./footer/NewsletterSection"
import FooterLinks from "./footer/FooterLinks"

const Footer = () => {
  return (
    <footer className="relative border-t border-purple-500/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
      
      <div className="container relative py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 rounded-full bg-[#86736f] animate-pulse" />
                <div className="absolute inset-[2px] rounded-full bg-[#1A1F2C] flex items-center justify-center">
                  <span className="text-xl font-black tracking-tighter text-amber-200/90">33</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold bg-gradient-to-r from-amber-200 to-purple-500 bg-clip-text text-transparent">
                Numerology 33
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Unlock the secrets of your life path through ancient numerological wisdom.
            </p>
            
            <FooterSocialLinks />
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold bg-gradient-to-r from-amber-200 to-purple-500 bg-clip-text text-transparent">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/collect-info" className="text-sm text-muted-foreground hover:text-amber-200/90 transition-colors">
                Get Reading
              </Link>
              <Link to="/blog" className="text-sm text-muted-foreground hover:text-amber-200/90 transition-colors">
                Blog
              </Link>
              <Link to="/support" className="text-sm text-muted-foreground hover:text-amber-200/90 transition-colors">
                Support
              </Link>
              <Link to="/portal" className="text-sm text-muted-foreground hover:text-amber-200/90 transition-colors">
                Portal
              </Link>
            </nav>
          </div>

          <FooterLinks />
          <NewsletterSection />
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-purple-500/20">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Numerology 33. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer