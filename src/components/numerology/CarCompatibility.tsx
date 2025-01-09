import { motion } from "framer-motion";
import { Car, CarFront } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface CarCompatibilityProps {
  chineseZodiac: string;
  isVisible: boolean;
}

interface CarBrand {
  brand_name: string;
  founding_year: number;
  chinese_zodiac: string;
}

const CarCompatibility = ({ chineseZodiac, isVisible }: CarCompatibilityProps) => {
  const [compatibleBrands, setCompatibleBrands] = useState<CarBrand[]>([]);
  const [incompatibleBrands, setIncompatibleBrands] = useState<CarBrand[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCarBrands = async () => {
      try {
        console.log('Fetching car brands for zodiac:', chineseZodiac);
        
        // Fetch compatible brands (same zodiac)
        const { data: compatibleData, error: compatibleError } = await supabase
          .from('car_brands')
          .select('*')
          .eq('chinese_zodiac', chineseZodiac)
          .order('brand_name');

        if (compatibleError) {
          console.error('Error fetching compatible brands:', compatibleError);
          return;
        }

        // Get opposite zodiac for incompatible matches
        const oppositeZodiacs: Record<string, string> = {
          'Rat': 'Horse',
          'Horse': 'Rat',
          'Ox': 'Goat',
          'Goat': 'Ox',
          'Tiger': 'Monkey',
          'Monkey': 'Tiger',
          'Rabbit': 'Rooster',
          'Rooster': 'Rabbit',
          'Dragon': 'Dog',
          'Dog': 'Dragon',
          'Snake': 'Pig',
          'Pig': 'Snake'
        };

        const oppositeZodiac = oppositeZodiacs[chineseZodiac];
        
        // Fetch incompatible brands (opposite zodiac)
        const { data: incompatibleData, error: incompatibleError } = await supabase
          .from('car_brands')
          .select('*')
          .eq('chinese_zodiac', oppositeZodiac)
          .order('brand_name')
          .limit(5);

        if (incompatibleError) {
          console.error('Error fetching incompatible brands:', incompatibleError);
          return;
        }

        console.log('Compatible brands:', compatibleData);
        console.log('Incompatible brands:', incompatibleData);

        setCompatibleBrands(compatibleData || []);
        setIncompatibleBrands(incompatibleData || []);
        setIsLoading(false);
      } catch (error) {
        console.error('Error in fetchCarBrands:', error);
        setIsLoading(false);
      }
    };

    if (isVisible && chineseZodiac) {
      fetchCarBrands();
    }
  }, [chineseZodiac, isVisible]);

  if (!isVisible || !chineseZodiac || isLoading) return null;

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
              {compatibleBrands.map((brand, index) => (
                <motion.div
                  key={brand.brand_name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg transform transition-all duration-300 group-hover:scale-105" />
                  <div className="relative flex items-center justify-between p-4 rounded-lg backdrop-blur-sm border border-green-500/20">
                    <div className="flex items-center gap-4">
                      <CarFront className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform" />
                      <span className="text-lg font-medium text-white group-hover:text-green-400 transition-colors">
                        {brand.brand_name}
                      </span>
                    </div>
                    <span className="text-sm text-green-400/80">
                      {brand.founding_year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Challenging Matches */}
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
              {incompatibleBrands.map((brand, index) => (
                <motion.div
                  key={brand.brand_name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-rose-500/20 rounded-lg transform transition-all duration-300 group-hover:scale-105" />
                  <div className="relative flex items-center justify-between p-4 rounded-lg backdrop-blur-sm border border-red-500/20">
                    <div className="flex items-center gap-4">
                      <CarFront className="w-6 h-6 text-red-400 group-hover:scale-110 transition-transform" />
                      <span className="text-lg font-medium text-white group-hover:text-red-400 transition-colors">
                        {brand.brand_name}
                      </span>
                    </div>
                    <span className="text-sm text-red-400/80">
                      {brand.founding_year}
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