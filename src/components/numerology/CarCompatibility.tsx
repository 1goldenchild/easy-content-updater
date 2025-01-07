import { motion } from "framer-motion";
import { Car, CarFront } from "lucide-react";

interface CarCompatibilityProps {
  chineseZodiac: string;
  isVisible: boolean;
}

const carCompatibility: Record<string, { best: string[], worst: string[] }> = {
  "Rat": {
    best: ["Tesla", "BMW", "Mercedes", "Porsche", "Audi"],
    worst: ["Hummer", "Jeep", "RAM", "Ford F150", "GMC"]
  },
  "Ox": {
    best: ["Volvo", "Toyota", "Honda", "Subaru", "Lexus"],
    worst: ["Smart", "Mini", "Fiat", "Suzuki", "Dacia"]
  },
  "Tiger": {
    best: ["Porsche", "Ferrari", "Lamborghini", "McLaren", "Bugatti"],
    worst: ["Fiat", "Lada", "Tata", "Proton", "Chery"]
  },
  "Rabbit": {
    best: ["Lexus", "Infiniti", "Genesis", "Acura", "Lincoln"],
    worst: ["Dodge", "Chrysler", "Plymouth", "Pontiac", "Saturn"]
  },
  "Dragon": {
    best: ["Ferrari", "Maserati", "Alfa Romeo", "Pagani", "Koenigsegg"],
    worst: ["Nissan", "Mitsubishi", "Mazda", "Kia", "Hyundai"]
  },
  "Snake": {
    best: ["Aston Martin", "Bentley", "Rolls Royce", "Maybach", "Lotus"],
    worst: ["Mitsubishi", "Daihatsu", "Seat", "Skoda", "Opel"]
  },
  "Horse": {
    best: ["Mustang", "Corvette", "Camaro", "Viper", "GT"],
    worst: ["Chevrolet", "Buick", "Oldsmobile", "Mercury", "Geo"]
  },
  "Goat": {
    best: ["Range Rover", "Land Rover", "Cadillac", "Lincoln", "Genesis"],
    worst: ["Suzuki", "Isuzu", "Mahindra", "Great Wall", "Haval"]
  },
  "Monkey": {
    best: ["BMW", "Audi", "Mercedes", "Porsche", "Volkswagen"],
    worst: ["Dacia", "Renault", "Citroen", "Peugeot", "Vauxhall"]
  },
  "Rooster": {
    best: ["Mercedes", "Maybach", "AMG", "Brabus", "Alpina"],
    worst: ["Tata", "Maruti", "Holden", "Daewoo", "Scion"]
  },
  "Dog": {
    best: ["Subaru", "Volvo", "Toyota", "Honda", "Mazda"],
    worst: ["Lada", "UAZ", "GAZ", "ZAZ", "Moskvitch"]
  },
  "Pig": {
    best: ["Bentley", "Rolls Royce", "Maybach", "Lexus", "Range Rover"],
    worst: ["Yugo", "Trabant", "Wartburg", "FSO", "ARO"]
  }
};

const CarCompatibility = ({ chineseZodiac, isVisible }: CarCompatibilityProps) => {
  if (!isVisible || !carCompatibility[chineseZodiac]) return null;

  const compatibility = carCompatibility[chineseZodiac];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#1a1f2c] to-[#2d3748] p-8 shadow-2xl"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent opacity-50" />
      
      <div className="relative z-10">
        <h3 className="text-3xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Your Perfect Car Match
          </span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Best Matches */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Car className="w-8 h-8 text-green-400" />
              <h4 className="text-xl font-semibold text-green-400">Best Matches</h4>
            </div>
            <div className="space-y-3">
              {compatibility.best.map((brand, index) => (
                <motion.div
                  key={brand}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg transform transition-all duration-300 group-hover:scale-105" />
                  <div className="relative flex items-center gap-4 p-4 rounded-lg backdrop-blur-sm border border-green-500/20">
                    <CarFront className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform" />
                    <span className="text-lg font-medium text-white group-hover:text-green-400 transition-colors">
                      {brand}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Worst Matches */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Car className="w-8 h-8 text-red-400" />
              <h4 className="text-xl font-semibold text-red-400">Challenging Matches</h4>
            </div>
            <div className="space-y-3">
              {compatibility.worst.map((brand, index) => (
                <motion.div
                  key={brand}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-rose-500/20 rounded-lg transform transition-all duration-300 group-hover:scale-105" />
                  <div className="relative flex items-center gap-4 p-4 rounded-lg backdrop-blur-sm border border-red-500/20">
                    <CarFront className="w-6 h-6 text-red-400 group-hover:scale-110 transition-transform" />
                    <span className="text-lg font-medium text-white group-hover:text-red-400 transition-colors">
                      {brand}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCompatibility;