import React from "react"

const AnimatedLogo = () => {
  return (
    <div className="flex items-center">
      <span 
        className="font-serif text-2xl tracking-wider"
        style={{
          background: "linear-gradient(135deg, #E5E7EB 0%, #9CA3AF 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 2px 10px rgba(255, 255, 255, 0.1)"
        }}
      >
        Numerology 33
      </span>
    </div>
  )
}

export default AnimatedLogo