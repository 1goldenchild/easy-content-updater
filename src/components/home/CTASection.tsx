import { motion } from "framer-motion";
import BackgroundParticles from "./cta/BackgroundParticles";
import GlowingOrbs from "./cta/GlowingOrbs";
import CTAContent from "./cta/CTAContent";

const CTASection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden bg-gradient-to-br from-[#001233] to-[#023e8a] rounded-3xl p-8 md:p-12 border border-[#0466c8]/30"
    >
      <BackgroundParticles />

      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-emerald-500/10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <GlowingOrbs />
      <CTAContent />
    </motion.div>
  );
};

export default CTASection;