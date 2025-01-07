import { motion } from "framer-motion";
import CTASection from "./CTASection";
import PreviewSection from "./sections/PreviewSection";
import MainContentSection from "./sections/MainContentSection";

const SalesPitch = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container px-4 md:px-6">
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

          {/* Right Column - CTA Section */}
          <CTASection />
        </div>
      </div>
    </section>
  );
};

export default SalesPitch;