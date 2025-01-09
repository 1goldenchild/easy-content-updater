import React from "react"

const AnimatedLogo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <span 
          className="font-serif text-2xl tracking-wider"
          style={{
            background: "linear-gradient(135deg, #2A2311 0%, #3B3015 50%, #2A2311 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 2px 15px rgba(58, 48, 21, 0.3)"
          }}
        >
          NUMEROLOGY
        </span>
        <div 
          className="absolute -bottom-0.5 left-0 right-0 h-[1px]"
          style={{
            background: "linear-gradient(90deg, transparent, #3B3015 50%, transparent)"
          }}
        />
      </div>
      <span 
        className="font-serif text-xl"
        style={{
          background: "linear-gradient(135deg, #2A2311 0%, #3B3015 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 2px 10px rgba(58, 48, 21, 0.2)"
        }}
      >
        33
      </span>
    </div>
  )
}

export default AnimatedLogo