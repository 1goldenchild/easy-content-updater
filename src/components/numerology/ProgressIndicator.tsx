import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { scrollToTop } from "../home/CallToAction"

const ProgressIndicator = () => {
  const [activeSection, setActiveSection] = useState(0)
  const navigate = useNavigate()

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
      
      console.log("Scroll position:", scrollPosition);
      
      // First section is always visible at start
      if (scrollPosition === 0) {
        setActiveSection(0)
        return
      }

      // Second section activates on first scroll
      if (scrollPosition > 50 && activeSection < 1) {
        console.log("Activating second section");
        setActiveSection(1)
      }

      // Check sections by their data attributes
      const sectionElements = {
        preview: document.querySelector('[data-section="preview-heading"]'),
        "numerology-profile": document.querySelector('[data-section="profile-heading"]'),
        testimonials: document.querySelector('[data-section="testimonials-heading"]'),
        "secret-knowledge": document.querySelector('[data-section="wisdom-heading"]'),
        cta: document.querySelector('[data-section="cta-heading"]')
      }

      // Log which elements are found
      Object.entries(sectionElements).forEach(([key, element]) => {
        console.log(`Section ${key}:`, element ? 'found' : 'not found');
        if (element) {
          const rect = element.getBoundingClientRect();
          console.log(`${key} position:`, rect.top, rect.bottom);
        }
      });

      // Find the active section based on element visibility
      Object.entries(sectionElements).forEach(([key, element], index) => {
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= viewportHeight * 0.7 && rect.bottom >= 0) {
            console.log(`Setting active section to ${index + 2} for ${key}`);
            setActiveSection(index + 2)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSectionClick = (index: number) => {
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
        element = document.querySelector(`[data-section="${section.id}-heading"]`)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
    }
  }

  return (
    <div className="fixed left-0 top-0 h-full z-50 flex items-center">
      <div className="relative h-[60vh] flex items-center">
        {/* Background line */}
        <div className="absolute left-0 w-1 h-full bg-gradient-to-b from-white/5 via-white/10 to-white/5 rounded-full backdrop-blur-sm" />
        
        {/* Animated progress line */}
        <motion.div 
          className="absolute left-0 w-1 bg-gradient-to-b from-purple-500 via-fuchsia-500 to-pink-500 rounded-full"
          style={{
            height: `${(activeSection / (sections.length - 1)) * 100}%`,
            top: 0,
          }}
          initial={{ height: "0%" }}
          animate={{ 
            height: `${(activeSection / (sections.length - 1)) * 100}%`,
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Glowing effect */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-purple-500 via-fuchsia-500 to-pink-500 blur-md opacity-50" />
          
          {/* Animated particle effect at the bottom of the progress */}
          <motion.div
            className="absolute -bottom-2 -left-1 w-3 h-3 bg-white rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="absolute inset-0 bg-white/20 rounded-full blur-md" />
          </motion.div>
        </motion.div>

        {/* Section labels */}
        <div className="absolute left-4 h-full">
          {sections.map((section, index) => (
            <motion.button
              key={section.name}
              onClick={() => handleSectionClick(index)}
              className={`relative text-sm font-medium transition-all duration-300 ${
                index === activeSection 
                  ? "text-white" 
                  : "text-white/40 hover:text-white/60"
              }`}
              style={{
                position: "absolute",
                top: `${(index / (sections.length - 1)) * 100}%`,
                transform: "translateY(-50%)",
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="whitespace-nowrap bg-black/50 px-2 py-1 rounded-md backdrop-blur-sm">
                {section.name}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProgressIndicator