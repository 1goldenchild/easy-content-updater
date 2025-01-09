import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useLocation } from "react-router-dom"

const ProgressIndicator = () => {
  const [activeSection, setActiveSection] = useState(0)
  const location = useLocation()

  // Define sections based on their IDs and display names
  const sections = [
    { id: "hero", name: "Hero" },
    { id: "scroll-start", name: "Overview" },
    { id: "preview", name: "Preview" },
    { id: "numerology-profile", name: "Profile" },
    { id: "testimonials", name: "Testimonials" },
    { id: "secret-knowledge", name: "Wisdom" },
    { id: "cta", name: "Get Started" }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const viewportHeight = window.innerHeight
      
      // First section is always visible at start
      if (scrollPosition === 0) {
        setActiveSection(0)
        return
      }

      // Second section activates on first scroll
      if (scrollPosition > 50) {
        setActiveSection(Math.max(1, activeSection))
      }

      // Check sections by their data attributes
      const sectionElements = {
        preview: document.querySelector('[data-section="preview-heading"]'),
        "numerology-profile": document.querySelector('[data-section="profile-heading"]'),
        testimonials: document.querySelector('[data-section="testimonials-heading"]'),
        "secret-knowledge": document.querySelector('[data-section="wisdom-heading"]'),
        cta: document.querySelector('[data-section="cta-heading"]')
      }

      // Find the active section based on element visibility
      Object.entries(sectionElements).forEach(([key, element], index) => {
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= viewportHeight * 0.7 && rect.bottom >= 0) {
            setActiveSection(index + 2) // +2 because we have two initial sections
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDotClick = (index: number) => {
    const section = sections[index]
    let element: Element | null = null

    switch (section.id) {
      case "hero":
        window.scrollTo({ top: 0, behavior: "smooth" })
        break
      case "scroll-start":
        window.scrollTo({ top: 100, behavior: "smooth" })
        break
      default:
        element = document.getElementById(section.id)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
    }
  }

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50">
      <div className="relative py-4 bg-black/20 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-8 relative">
          {/* Vertical progress line background */}
          <div className="absolute top-0 bottom-0 w-[2px] bg-white/10" />
          
          {/* Animated progress line */}
          <motion.div 
            className="absolute top-0 w-[2px] bg-gradient-to-b from-emerald-400 to-emerald-500"
            initial={{ height: "0%" }}
            animate={{ 
              height: `${(activeSection / (sections.length - 1)) * 100}%`
            }}
            transition={{ duration: 0.3 }}
          />

          {sections.map((section, index) => (
            <motion.button
              key={section.name}
              onClick={() => handleDotClick(index)}
              className="relative z-10 group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative">
                <motion.div
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeSection
                      ? "bg-gradient-to-r from-emerald-400 to-emerald-500 scale-125"
                      : index < activeSection
                      ? "bg-emerald-400"
                      : "bg-white/20 group-hover:bg-white/40"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                />
                {index === activeSection && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-emerald-400/20"
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.8, opacity: 0 }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeOut"
                    }}
                  />
                )}
              </div>
              
              <div className="pointer-events-none absolute left-full ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium text-white/90 whitespace-nowrap bg-black/50 px-2 py-1 rounded-md backdrop-blur-sm">
                  {section.name}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProgressIndicator