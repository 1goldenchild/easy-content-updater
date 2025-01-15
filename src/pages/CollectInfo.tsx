import { motion } from "framer-motion";
import CollectInfoForm from "@/components/collect-info/CollectInfoForm";
import CollectInfoPreview from "@/components/collect-info/CollectInfoPreview";

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
              className="mb-8 text-center lg:text-left"
            >
              <h1 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent animate-shine">
                  Unlock Your Complete Numerology Profile
                </span>
              </h1>
            </motion.div>
            <CollectInfoForm />
          </div>

          {/* Preview Section - Now visible on all screens */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:sticky lg:top-8"
          >
            <CollectInfoPreview />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CollectInfo;