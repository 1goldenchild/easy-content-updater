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
    handleScroll()

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
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="relative px-4 py-2 bg-black/20 backdrop-blur-sm rounded-full">
        <div className="flex items-center gap-8 relative">
          {/* Progress line background */}
          <div className="absolute left-0 right-0 h-[2px] bg-white/10" />
          
          {/* Animated progress line */}
          <motion.div 
            className="absolute left-0 h-[2px] bg-gradient-to-r from-emerald-400 to-emerald-500"
            initial={{ width: "0%" }}
            animate={{ 
              width: `${(activeSection / (sections.length - 1)) * 100}%`
            }}
            transition={{ duration: 0.3 }}
          />

          {sections.map((section, index) => (
            <motion.button
              key={section}
              onClick={() => handleDotClick(index)}
              className="relative z-10 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
              
              <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium text-white/90 whitespace-nowrap bg-black/50 px-2 py-1 rounded-md backdrop-blur-sm">
                  {section}
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