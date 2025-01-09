import { motion } from "framer-motion"
import { ReactNode } from "react"
import PreviewOverlay from "./PreviewOverlay"

interface PhoneFrameProps {
  children: ReactNode;
}

const PhoneFrame = ({ children }: PhoneFrameProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-[300px] h-[600px] rounded-[3rem] border-8 border-black bg-black overflow-hidden"
    >
      <div className="relative w-full h-full bg-background overflow-hidden rounded-[2.3rem]">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-3xl z-20" />
        
        {/* Screen Content */}
        <div className="absolute inset-0 overflow-y-auto overflow-x-hidden scrollbar-hide">
          {children}
        </div>

        {/* Reflection Effect */}
        <PreviewOverlay />
      </div>
    </motion.div>
  )
}

export default PhoneFrame