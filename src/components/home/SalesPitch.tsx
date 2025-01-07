import { motion } from "framer-motion";
import FeatureList from "./FeatureList";
import CTASection from "./CTASection";
import PhoneShowcase from "./PhoneShowcase";

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
            <PhoneShowcase />
            
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0466c8] to-[#023e8a] bg-clip-text text-transparent text-center">
              Unlock Your Complete Numerology Profile
            </h2>
            
            <FeatureList />
          </motion.div>

          {/* Right Column - CTA Section */}
          <CTASection />
        </div>
      </div>
    </section>
  );
};

export default SalesPitch;