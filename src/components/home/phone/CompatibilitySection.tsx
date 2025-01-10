import { motion } from "framer-motion";
import { numerologyCompatibility } from "@/utils/numerologyCompatibility";

interface CompatibilitySectionProps {
  lifePath: number;
}

const CompatibilitySection = ({ lifePath }: CompatibilitySectionProps) => {
  const compatibility = numerologyCompatibility[lifePath];

  if (!compatibility) return null;

  const { compatible, neutral, challenging, loveCompatible } = compatibility;

  // Calculate percentages for the donut chart
  const total = compatible.length + neutral.length + challenging.length;
  const compatiblePercentage = (compatible.length / total) * 100;
  const neutralPercentage = (neutral.length / total) * 100;
  const challengingPercentage = (challenging.length / total) * 100;

  return (
    <div id="compatibility" className="rounded-xl bg-gradient-to-br from-[#8B5CF6]/30 to-[#0EA5E9]/30 p-4">
      <h3 className="text-sm font-semibold text-white/90 mb-3">Best Matches</h3>
      
      {/* Donut Chart with Labels */}
      <div className="relative w-full aspect-square max-w-[120px] ml-2 mb-4">
        {/* Labels */}
        <div className="absolute -right-16 top-2 text-[10px] text-purple-300 font-medium flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-purple-500" />
          Compatible
        </div>
        <div className="absolute -right-16 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 font-medium flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-gray-400" />
          Neutral
        </div>
        <div className="absolute -right-16 bottom-2 text-[10px] text-red-300 font-medium flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500" />
          Challenging
        </div>

        <svg viewBox="0 0 100 100" className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#1f2937"
            strokeWidth="12"
            className="opacity-20"
          />
          {/* Compatible segment */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            d={describeArc(50, 50, 40, 0, (compatiblePercentage * 360) / 100)}
            fill="none"
            stroke="#8B5CF6"
            strokeWidth="12"
            strokeLinecap="round"
            className="opacity-80"
          />
          {/* Neutral segment */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
            d={describeArc(
              50,
              50,
              40,
              (compatiblePercentage * 360) / 100,
              ((compatiblePercentage + neutralPercentage) * 360) / 100
            )}
            fill="none"
            stroke="#6B7280"
            strokeWidth="12"
            strokeLinecap="round"
            className="opacity-80"
          />
          {/* Challenging segment */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
            d={describeArc(
              50,
              50,
              40,
              ((compatiblePercentage + neutralPercentage) * 360) / 100,
              360
            )}
            fill="none"
            stroke="#EF4444"
            strokeWidth="12"
            strokeLinecap="round"
            className="opacity-80"
          />
        </svg>
      </div>

      <div className="space-y-3">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-500" />
            <span className="text-xs text-white/70">Compatible</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            {compatible.map((num) => (
              <motion.div
                key={num}
                whileHover={{ scale: 1.05 }}
                className="w-10 h-8 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center"
              >
                <span className="text-sm font-bold text-purple-300">{num}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-400" />
            <span className="text-xs text-white/70">Neutral</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            {neutral.map((num) => (
              <motion.div
                key={num}
                whileHover={{ scale: 1.05 }}
                className="w-10 h-8 rounded-lg bg-gray-500/20 border border-gray-500/30 flex items-center justify-center"
              >
                <span className="text-sm font-bold text-gray-300">{num}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-xs text-white/70">Challenging</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            {challenging.map((num) => (
              <motion.div
                key={num}
                whileHover={{ scale: 1.05 }}
                className="w-10 h-8 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center justify-center"
              >
                <span className="text-sm font-bold text-red-300">{num}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to create arc paths
function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");
}

export default CompatibilitySection;