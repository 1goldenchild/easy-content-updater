import { motion } from "framer-motion";
import { Car, CarFront, ThumbsUp, ThumbsDown } from "lucide-react";

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
            <h4 className="text-lg font-semibold text-white/90">Best Car Matches</h4>
          </div>
          <div className="p-6 rounded-lg bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20">
            <div className="space-y-4">
              {compatibility.best.map((brand, index) => (
                <motion.div 
                  key={brand}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <CarFront className="w-8 h-8 text-green-500" />
                  <p className="text-lg font-semibold text-white">{brand}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <ThumbsDown className="w-6 h-6 text-red-500" />
            <h4 className="text-lg font-semibold text-white/90">Worst Car Matches</h4>
          </div>
          <div className="p-6 rounded-lg bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/20">
            <div className="space-y-4">
              {compatibility.worst.map((brand, index) => (
                <motion.div 
                  key={brand}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <Car className="w-8 h-8 text-red-500" />
                  <p className="text-lg font-semibold text-white">{brand}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCompatibility;