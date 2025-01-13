import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Mail, Youtube, Instagram } from "lucide-react"
import TikTokIcon from "../icons/TikTokIcon"

const Footer = () => {
  return (
    <footer className="relative border-t border-purple-500/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
      
      {/* Main Footer Content */}
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
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://www.tiktok.com/@numerology_33"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-200/20 to-purple-500/20 p-[1px] hover:scale-110 transition-transform group"
              >
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center group-hover:bg-amber-950/50 transition-colors">
                  <TikTokIcon className="w-4 h-4 text-amber-200/90" />
                </div>
              </a>
              <a
                href="https://www.youtube.com/@numerology-33"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-200/20 to-purple-500/20 p-[1px] hover:scale-110 transition-transform group"
              >
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center group-hover:bg-amber-950/50 transition-colors">
                  <Youtube className="w-4 h-4 text-amber-200/90" />
                </div>
              </a>
              <a
                href="https://www.instagram.com/33.numerology33"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-200/20 to-purple-500/20 p-[1px] hover:scale-110 transition-transform group"
              >
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center group-hover:bg-amber-950/50 transition-colors">
                  <Instagram className="w-4 h-4 text-amber-200/90" />
                </div>
              </a>
            </div>
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

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold bg-gradient-to-r from-amber-200 to-purple-500 bg-clip-text text-transparent">
              Legal
            </h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-amber-200/90 transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-amber-200/90 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/refund" className="text-sm text-muted-foreground hover:text-amber-200/90 transition-colors">
                Refund Policy
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold bg-gradient-to-r from-amber-200 to-purple-500 bg-clip-text text-transparent">
              Stay Connected
            </h4>
            <p className="text-sm text-muted-foreground">
              Subscribe to receive numerology insights and updates.
            </p>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-200/20 via-purple-500/20 to-amber-200/20 rounded-lg blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 text-sm rounded-l-lg bg-secondary border border-r-0 border-amber-200/20 focus:border-amber-200/40 focus:ring-2 focus:ring-amber-200/20 transition-all"
                />
                <button className="px-4 py-2 rounded-r-lg bg-gradient-to-br from-amber-200/20 to-purple-500/20 backdrop-blur-sm border border-amber-200/30 text-amber-100 hover:text-amber-50 transition-colors">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
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