import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Youtube, Instagram } from "lucide-react"
import TikTokIcon from "../icons/TikTokIcon"

const Footer = () => {
  return (
    <>
      {/* Stars Background */}
      <div className="w-full h-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#1A1F2C]">
            <svg className="w-full h-full opacity-70" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="starGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="white" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                </radialGradient>
              </defs>
              {[...Array(50)].map((_, i) => {
                const size = Math.random() * 2 + 1;
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
                    fill="url(#starGlow)"
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
        </div>
      </div>

      <footer className="relative border-t border-purple-500/20 bg-[#1A1F2C]/95 backdrop-blur-xl">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0">
            <svg className="w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
              {[...Array(100)].map((_, i) => {
                const size = Math.random() * 1.5 + 0.5;
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
                    fill="white"
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
                Numerology Insights
              </h3>
              <p className="text-sm text-muted-foreground">
                Discover your life's path through the ancient wisdom of numbers.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex flex-col items-center">
                  <a
                    href="https://www.tiktok.com/@numerology_33"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#D946EF] p-[1px] hover:scale-110 transition-transform"
                  >
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <span className="sr-only">TikTok</span>
                      <TikTokIcon className="w-5 h-5 text-white" />
                    </div>
                  </a>
                  <span className="text-xs text-white mt-1">87k</span>
                </div>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#D946EF] p-[1px] hover:scale-110 transition-transform"
                >
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <span className="sr-only">Instagram</span>
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                </a>

                <a
                  href="https://www.youtube.com/@numerology-33"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#D946EF] p-[1px] hover:scale-110 transition-transform"
                >
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <span className="sr-only">YouTube</span>
                    <Youtube className="w-5 h-5 text-white" />
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4 bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-sm text-muted-foreground hover:text-[#8B5CF6] transition-colors">Home</Link>
                </li>
                <li>
                  <Link to="/analysis" className="text-sm text-muted-foreground hover:text-[#8B5CF6] transition-colors">Analysis</Link>
                </li>
                <li>
                  <Link to="/blog" className="text-sm text-muted-foreground hover:text-[#8B5CF6] transition-colors">Blog</Link>
                </li>
                <li>
                  <Link to="/portal" className="text-sm text-muted-foreground hover:text-[#8B5CF6] transition-colors">Portal</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4 bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-[#8B5CF6] transition-colors">About Numerology</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-[#8B5CF6] transition-colors">FAQ</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-[#8B5CF6] transition-colors">Contact</a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="text-sm font-semibold mb-4 bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">Newsletter</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Subscribe to receive numerology insights and updates.
              </p>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 text-sm border rounded-lg bg-background/50 backdrop-blur-sm border-purple-500/20 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] opacity-0 hover:opacity-10 transition-opacity pointer-events-none" />
              </div>
            </div>
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