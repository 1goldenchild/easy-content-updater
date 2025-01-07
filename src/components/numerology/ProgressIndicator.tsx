import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useLocation } from "react-router-dom"
import { useIsMobile } from "@/hooks/use-mobile"

const ProgressIndicator = () => {
  const [activeSection, setActiveSection] = useState(0)
  const isMobile = useIsMobile()
  const location = useLocation()

  const sections = location.pathname === "/" 
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
      const headerOffset = 80 // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  if (isMobile) return null

  return (
    <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-50">
      <div className="relative w-full max-w-7xl mx-auto px-4">
        <div className="absolute right-0 flex items-center gap-2">
          <div className="space-y-4">
            {sections.map((section, index) => (
              <div 
                key={section}
                className="relative flex items-center gap-2 justify-end"
                onClick={() => handleDotClick(index)}
                style={{ cursor: 'pointer' }}
              >
                <motion.div
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === activeSection 
                      ? "bg-gradient-to-r from-purple-500 to-pink-500" 
                      : "bg-white/20"
                  }`}
                  animate={{
                    scale: index === activeSection ? 1.2 : 1
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressIndicator