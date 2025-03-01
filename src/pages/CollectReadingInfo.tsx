
import { motion } from "framer-motion";
import CollectReadingInfoForm from "@/components/collect-info/CollectReadingInfoForm";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { usePageTracking } from "@/hooks/usePageTracking";

const CollectReadingInfo = () => {
  usePageTracking();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-center space-y-4"
          >
            <h1 className="text-3xl md:text-4xl font-bold">
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 opacity-50 blur-lg animate-pulse" />
                <span className="relative bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent animate-shine">
                  Enter your analysis information
                </span>
              </span>
            </h1>
          </motion.div>
          <CollectReadingInfoForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CollectReadingInfo;
