import { motion } from "framer-motion";

interface PhoneFrameEffectsProps {
  hasScrolled: boolean;
}

const PhoneFrameEffects = ({ hasScrolled }: PhoneFrameEffectsProps) => {
  return (
    <>
      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute -left-8 -bottom-8 w-24 h-24 bg-gradient-to-r from-[#8B5CF6]/30 to-[#D946EF]/30 rounded-full blur-xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-r from-[#0EA5E9]/30 to-[#8B5CF6]/30 rounded-full blur-xl"
      />

      {/* Frosted Glass Overlay */}
      {!hasScrolled && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 backdrop-blur-sm bg-white/10 z-20 pointer-events-none"
        />
      )}

      {/* Reflection Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
      
      {/* Scroll Fade Overlays */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#1A1F2C] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#1A1F2C] to-transparent pointer-events-none z-10" />
    </>
  );
};

export default PhoneFrameEffects;