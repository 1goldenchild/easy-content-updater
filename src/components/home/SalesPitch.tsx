import { motion } from "framer-motion";
import PreviewSection from "./sections/PreviewSection";
import MainContentSection from "./sections/MainContentSection";

const SalesPitch = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <section className="w-full max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-2xl flex flex-col items-center"
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