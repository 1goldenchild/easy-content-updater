import { motion } from "framer-motion";

const AnalysisFeatures = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10"
    >
      <h3 className="text-xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent mb-6">
        What's Included in Your Analysis
      </h3>
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] flex items-center justify-center text-white font-bold">
            1
          </div>
          <div>
            <h4 className="text-white font-medium mb-1">Life Path Number</h4>
            <p className="text-white/70 text-sm">
              Discover your core life purpose and the path you're destined to follow
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] flex items-center justify-center text-white font-bold">
            2
          </div>
          <div>
            <h4 className="text-white font-medium mb-1">Compatibility Analysis</h4>
            <p className="text-white/70 text-sm">
              Learn about your relationship dynamics and ideal partnerships
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] flex items-center justify-center text-white font-bold">
            3
          </div>
          <div>
            <h4 className="text-white font-medium mb-1">Career Guidance</h4>
            <p className="text-white/70 text-sm">
              Get insights into your ideal career path and professional opportunities
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] flex items-center justify-center text-white font-bold">
            4
          </div>
          <div>
            <h4 className="text-white font-medium mb-1">Yearly Forecast</h4>
            <p className="text-white/70 text-sm">
              Preview what the upcoming year holds for you based on your numbers
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AnalysisFeatures;