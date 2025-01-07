import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useLocation } from "react-router-dom"
import { useIsMobile } from "@/hooks/use-mobile"

const ProgressIndicator = () => {
  const [activeSection, setActiveSection] = useState(0)
  const isMobile = useIsMobile()
  const location = useLocation()

  const sections = location.pathname === "/"
    ? ["hero", "benefits", "features", "cta"]
    : ["info", "analysis", "results"]

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => 
        document.getElementById(section)
      )

      const viewportHeight = window.innerHeight
      const scrollPosition = window.scrollY + (viewportHeight / 3)

      const activeSectionIndex = sectionElements.findIndex((element, index) => {
        if (!element) return false
        const nextElement = sectionElements[index + 1]
        
        const elementTop = element.offsetTop
        const elementBottom = nextElement 
          ? nextElement.offsetTop 
          : document.documentElement.scrollHeight

        return scrollPosition >= elementTop && scrollPosition < elementBottom
      })

      if (activeSectionIndex !== -1) {
        setActiveSection(activeSectionIndex)
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [location.pathname, sections])

  const handleDotClick = (index: number) => {
    const sectionElement = document.getElementById(sections[index])
    if (sectionElement) {
      const offset = 80 // Adjust this value based on your header height
      const elementPosition = sectionElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  if (location.pathname !== "/" && location.pathname !== "/portal") {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className={`fixed ${isMobile ? "bottom-24 right-4" : "right-8 top-1/2 -translate-y-1/2"} z-50`}
    >
      <div className="flex flex-col gap-3">
        {sections.map((section, index) => (
          <button
            key={section}
            onClick={() => handleDotClick(index)}
            className="group relative p-1"
          >
            <div
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                activeSection === index
                  ? "bg-purple-500 scale-150"
                  : "bg-gray-400 group-hover:bg-purple-400"
              }`}
            />
            {!isMobile && (
              <span className="absolute left-0 top-1/2 -translate-x-[calc(100%+0.75rem)] -translate-y-1/2 rounded bg-gray-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
            )}
          </button>
        ))}
      </div>
    </motion.div>
  )
}

export default ProgressIndicator