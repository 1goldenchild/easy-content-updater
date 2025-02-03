import { motion } from "framer-motion";
import CollectReadingInfoForm from "@/components/collect-info/CollectReadingInfoForm";
import CollectInfoPreview from "@/components/collect-info/CollectInfoPreview";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { usePageTracking } from "@/hooks/usePageTracking";

const CollectReadingInfo = () => {
  usePageTracking();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Form Section with Title */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 text-center lg:text-left space-y-4"
              >
                <h1 className="text-3xl md:text-4xl font-bold">
                  <span className="relative inline-block">
                    <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 opacity-50 blur-lg animate-pulse" />
                    <span className="relative bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent animate-shine">
                      Unlock Your Complete Numerology Reading
                    </span>
                  </span>
                </h1>
                
                {/* Instant Delivery Message */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block"
                >
                  <div className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 backdrop-blur-sm">
                    <p className="text-sm font-medium text-emerald-300 flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Reading is usually delivered in 4-6 hours
                    </p>
                  </div>
                </motion.div>

                {/* Cutting Edge Knowledge Message */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="inline-block"
                >
                  <div className="px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-500/20 via-purple-500/20 to-pink-500/20 border border-fuchsia-500/30 backdrop-blur-sm shadow-lg shadow-fuchsia-500/10">
                    <p className="text-sm font-medium text-fuchsia-300 flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-fuchsia-400 animate-text-shimmer bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400" />
                      Access cutting edge numerology knowledge
                    </p>
                  </div>
                </motion.div>
              </motion.div>
              <CollectReadingInfoForm />
            </div>

            {/* Preview Section */}
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
      <Footer />
    </div>
  );
};

export default CollectReadingInfo;