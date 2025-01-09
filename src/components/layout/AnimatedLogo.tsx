import React from "react"

const AnimatedLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <span 
          className="font-serif text-2xl tracking-wider"
          style={{
            background: "linear-gradient(135deg, #B8860B 0%, #FFD700 50%, #B8860B 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 2px 15px rgba(184, 134, 11, 0.15)"
          }}
        >
          NUMEROLOGY
        </span>
        <div 
          className="absolute -bottom-0.5 left-0 right-0 h-[1px]"
          style={{
            background: "linear-gradient(90deg, transparent, #B8860B 50%, transparent)"
          }}
        />
      </div>
      <span 
        className="font-serif text-lg"
        style={{
          background: "linear-gradient(135deg, #B8860B 0%, #FFD700 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}
      >
        33
      </span>
    </div>
  )
}

export default AnimatedLogo