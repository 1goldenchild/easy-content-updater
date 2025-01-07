import { motion } from "framer-motion";
import { Car, CarFront, ThumbsUp, ThumbsDown } from "lucide-react";

interface CarCompatibilityProps {
  chineseZodiac: string;
  isVisible: boolean;
}

const carCompatibility: Record<string, { best: { brand: string }, worst: { brand: string } }> = {
  "Rat": {
    best: { brand: "Tesla" },
    worst: { brand: "Hummer" }
  },
  "Ox": {
    best: { brand: "Volvo" },
    worst: { brand: "Smart" }
  },
  "Tiger": {
    best: { brand: "Porsche" },
    worst: { brand: "Fiat" }
  },
  "Rabbit": {
    best: { brand: "Lexus" },
    worst: { brand: "Dodge" }
  },
  "Dragon": {
    best: { brand: "Ferrari" },
    worst: { brand: "Nissan" }
  },
  "Snake": {
    best: { brand: "Aston Martin" },
    worst: { brand: "Mitsubishi" }
  },
  "Horse": {
    best: { brand: "Mustang" },
    worst: { brand: "Chevrolet" }
  },
  "Goat": {
    best: { brand: "Range Rover" },
    worst: { brand: "Suzuki" }
  },
  "Monkey": {
    best: { brand: "BMW" },
    worst: { brand: "Dacia" }
  },
  "Rooster": {
    best: { brand: "Mercedes" },
    worst: { brand: "Tata" }
  },
  "Dog": {
    best: { brand: "Subaru" },
    worst: { brand: "Lada" }
  },
  "Pig": {
    best: { brand: "Bentley" },
    worst: { brand: "Yugo" }
  }
};

const CarCompatibility = ({ chineseZodiac, isVisible }: CarCompatibilityProps) => {
  if (!isVisible || !carCompatibility[chineseZodiac]) return null;

  const compatibility = carCompatibility[chineseZodiac];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="w-full space-y-8 bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10 mb-8"
    >
      <h3 className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]">
        Your Zodiac Car Compatibility
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <ThumbsUp className="w-6 h-6 text-green-500" />
            <h4 className="text-lg font-semibold text-white/90">Best Car Match</h4>
          </div>
          <div className="p-6 rounded-lg bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20">
            <div className="flex items-center gap-4">
              <CarFront className="w-12 h-12 text-green-500" />
              <div>
                <p className="text-xl font-bold text-white">{compatibility.best.brand}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <ThumbsDown className="w-6 h-6 text-red-500" />
            <h4 className="text-lg font-semibold text-white/90">Worst Car Match</h4>
          </div>
          <div className="p-6 rounded-lg bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/20">
            <div className="flex items-center gap-4">
              <Car className="w-12 h-12 text-red-500" />
              <div>
                <p className="text-xl font-bold text-white">{compatibility.worst.brand}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCompatibility;