import { motion } from "framer-motion";
import FeatureList from "../FeatureList";

const MainContentSection = () => {
  return (
    <div className="space-y-24"> {/* Increased from space-y-12 to space-y-24 for much more spacing */}
      <motion.h2 
        data-section="profile-heading"
        className="text-3xl md:text-4xl font-bold text-center relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="absolute inset-0 bg-gradient-to-r from-[#534363] via-[#7E69AB] to-[#6E59A5] opacity-50 blur-lg animate-pulse" />
        <span className="relative bg-gradient-to-r from-[#9b87f5] via-[#D6BCFA] to-[#E5DEFF] bg-clip-text text-transparent">
          Unlock Your Complete Numerology Profile
        </span>
      </motion.h2>
      
      <FeatureList />
    </div>
  );
};

export default MainContentSection;