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
            {/* Preview Heading - Visible on larger screens */}
            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative mb-8"
              >
                <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-2">
                  What's included in your analysis?
                </h3>
                <p className="text-white/70 text-lg">
                  See a sneak peek →
                </p>
                {/* Decorative elements */}
                <div className="absolute -left-4 -top-4 w-20 h-20 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-full blur-xl" />
                <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-gradient-to-r from-fuchsia-500/20 to-violet-500/20 rounded-full blur-xl" />
              </motion.div>
            </div>

            <PhoneShowcase />
            
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0466c8] to-[#023e8a] bg-clip-text text-transparent text-center">
              Unlock Your Complete Numerology Profile
            </h2>
            
            <FeatureList />
          </motion.div>

          {/* Preview Heading - Visible on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:hidden text-center mb-8"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-2">
              What's included in your analysis?
            </h3>
            <p className="text-white/70 text-lg">
              See a sneak peek →
            </p>
          </motion.div>

          {/* Right Column - CTA Section */}
          <CTASection />
        </div>
      </div>
    </section>
  );
};

export default SalesPitch;