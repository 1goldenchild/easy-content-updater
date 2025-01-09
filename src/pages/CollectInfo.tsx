import { motion } from "framer-motion";
import PhoneShowcase from "@/components/home/PhoneShowcase";
import CollectInfoForm from "@/components/collect-info/CollectInfoForm";

const CollectInfo = () => {
  return (
    <div className="flex-1 container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Form Section with Title */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 text-center"
            >
              <h1 className="text-3xl md:text-4xl font-bold">
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 opacity-50 blur-lg animate-pulse" />
                  <span className="relative bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent animate-shine">
                    Unlock Your Complete Numerology Profile
                  </span>
                </span>
              </h1>
            </motion.div>
            <CollectInfoForm />
          </div>

          {/* Preview Section - Only visible on desktop */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="scale-75 origin-top"
            >
              <PhoneShowcase />
            </motion.div>
          </div>

          {/* Preview Section - Only visible on mobile */}
          <div className="block lg:hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="scale-75 origin-top"
            >
              <PhoneShowcase />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectInfo;