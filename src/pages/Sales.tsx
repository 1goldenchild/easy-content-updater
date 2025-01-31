import { Check } from "lucide-react";

const Sales = () => {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        What You Receive In Your Analysis
      </h2>

      <div className="space-y-6">
        {/* Core Features */}
        <div className="space-y-4">
          <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-purple-500/20">
            <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-white">Lifepath Number</h3>
              <p className="text-gray-400">Uncover your unique energetic blueprint</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-purple-500/20">
            <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-white">Partial Energy</h3>
              <p className="text-gray-400">Understand the subtle influences that shape your personality</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-purple-500/20">
            <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-white">Cycle Number</h3>
              <p className="text-gray-400">Gain awareness of your current energy cycle</p>
            </div>
          </div>
        </div>

        {/* Advanced Features */}
        <div className="space-y-4">
          <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-purple-500/20">
            <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-white">Numerological Compatibility</h3>
              <p className="text-gray-400">Master relationship and business dynamics</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-purple-500/20">
            <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-white">Career Path Insights</h3>
              <p className="text-gray-400">Discover industries aligned with your energy</p>
            </div>
          </div>
        </div>

        {/* Premium Features */}
        <div className="space-y-4">
          <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-purple-500/20">
            <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-white">Environment Energy Control</h3>
              <p className="text-gray-400">Master the art of energy manipulation</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
            <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-white">VIP Energy Mastery Bonus</h3>
              <p className="text-gray-400">Exclusive advanced manifestation techniques</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;