import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useLocation } from "react-router-dom"

const ProgressIndicator = () => {
  const [activeSection, setActiveSection] = useState(0)
  const location = useLocation()

  const sections = location.pathname === "/numerology-reading" 
    ? ["Hero", "Knowledge", "Benefits", "Sales", "CTA", "Stats"]
    : ["results", "occupation", "compatibility", "country", "car"]

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => 
        document.getElementById(section.toLowerCase())
      )

      const viewportHeight = window.innerHeight
      const scrollPosition = window.scrollY + (viewportHeight / 3)

      const activeIndex = sectionElements.findIndex((element, index) => {
        if (!element) return false
        const nextElement = sectionElements[index + 1]
        
        const elementTop = element.offsetTop
        const elementBottom = nextElement 
          ? nextElement.offsetTop 
          : document.documentElement.scrollHeight

        return scrollPosition >= elementTop && scrollPosition < elementBottom
      })

      if (activeIndex !== -1) {
        setActiveSection(activeIndex)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  const handleDotClick = (index: number) => {
    const sectionId = sections[index].toLowerCase()
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col items-center gap-3">
        {sections.map((section, index) => (
          <motion.button
            key={section}
            onClick={() => handleDotClick(index)}
            className="group relative flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="relative">
              <motion.div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeSection
                    ? "bg-gradient-to-r from-emerald-400 to-emerald-500 scale-125"
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
            
            <div className="pointer-events-none absolute right-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm font-medium text-white/90 whitespace-nowrap bg-black/50 px-2 py-1 rounded-md backdrop-blur-sm">
                {section}
              </span>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  )
}

export default ProgressIndicator