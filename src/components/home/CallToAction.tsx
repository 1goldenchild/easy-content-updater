import { motion } from "framer-motion";
import BackgroundEffects from "./call-to-action/BackgroundEffects";
import CTAContent from "./call-to-action/CTAContent";

// Add this at the top level of your file, outside any component
export const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const CallToAction = () => {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F2C]/95 via-[#1A1F2C]/80 to-[#1A1F2C]" />

      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900/90 to-pink-900/90 p-6 md:p-12"
        >
          <BackgroundEffects />
          <CTAContent />
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;