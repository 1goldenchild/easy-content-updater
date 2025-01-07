import { motion } from "framer-motion";
import PreviewSection from "./sections/PreviewSection";
import MainContentSection from "./sections/MainContentSection";

const SalesPitch = () => {
  return (
    <div className="flex justify-center w-full bg-background">
      <section className="w-full max-w-7xl py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Features List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <PreviewSection />
            <MainContentSection />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SalesPitch;