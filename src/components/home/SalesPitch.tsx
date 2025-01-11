import { motion } from "framer-motion";
import PreviewSection from "./sections/PreviewSection";
import MainContentSection from "./sections/MainContentSection";

const SalesPitch = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background relative overflow-hidden">
      {/* Stars Background */}
      <div className="absolute inset-0 h-[125%] overflow-hidden pointer-events-none">
        {[...Array(63)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3,
              backgroundColor: '#10B981', // emerald-500 color
              zIndex: 10
            }}
          />
        ))}
      </div>

      <section className="w-full max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-2xl flex flex-col items-center space-y-16"
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