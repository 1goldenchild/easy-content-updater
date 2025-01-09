import { motion } from "framer-motion";
import { CarFront, Star, Award } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface CarBrand {
  brand_name: string;
  founding_year: number;
  chinese_zodiac: string;
}

const CarCompatibilitySection = () => {
  const [goodMatches, setGoodMatches] = useState<CarBrand[]>([]);
  const [badMatches, setBadMatches] = useState<CarBrand[]>([]);

  useEffect(() => {
    const fetchSampleData = async () => {
      try {
        // Fetch some sample good matches (using Dragon zodiac as example)
        const { data: goodData } = await supabase
          .from('car_brands')
          .select('*')
          .eq('chinese_zodiac', 'Dragon')
          .limit(3);

        // Fetch some sample bad matches (using Dog zodiac as opposite to Dragon)
        const { data: badData } = await supabase
          .from('car_brands')
          .select('*')
          .eq('chinese_zodiac', 'Dog')
          .limit(3);

        setGoodMatches(goodData || []);
        setBadMatches(badData || []);
      } catch (error) {
        console.error('Error fetching sample car data:', error);
      }
    };

    fetchSampleData();
  }, []);

  return (
    <div id="car-compatibility" className="rounded-xl bg-gradient-to-br from-[#8B5CF6]/30 to-[#0EA5E9]/30 p-4">
      <h3 className="text-sm font-semibold text-white/90 mb-3 flex items-center gap-2">
        <CarFront className="w-4 h-4 text-purple-400" />
        Car Compatibility
      </h3>
      
      <div className="space-y-4">
        {/* Best Car Matches */}
        <div>
          <h4 className="text-xs font-medium text-white/70 mb-2 flex items-center gap-2">
            <Award className="w-3 h-3 text-green-400" />
            Best Car Matches
          </h4>
          <div className="space-y-2">
            {goodMatches.map((car, index) => (
              <motion.div
                key={car.brand_name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 overflow-hidden group hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-2 z-10">
                  <CarFront className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-white/80 group-hover:text-white transition-colors">
                    {car.brand_name}
                  </span>
                </div>
                <div className="flex items-center gap-1 z-10">
                  <Star className="w-3 h-3 text-green-400" />
                  <span className="text-xs font-medium text-green-300">
                    {car.founding_year}
                  </span>
                </div>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="absolute left-0 top-0 h-full bg-green-500/10"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Challenging Car Matches */}
        <div>
          <h4 className="text-xs font-medium text-white/70 mb-2 flex items-center gap-2">
            <Award className="w-3 h-3 text-red-400" />
            Challenging Car Matches
          </h4>
          <div className="space-y-2">
            {badMatches.map((car, index) => (
              <motion.div
                key={car.brand_name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 overflow-hidden group hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-2 z-10">
                  <CarFront className="w-4 h-4 text-red-400" />
                  <span className="text-sm text-white/80 group-hover:text-white transition-colors">
                    {car.brand_name}
                  </span>
                </div>
                <div className="flex items-center gap-1 z-10">
                  <Star className="w-3 h-3 text-red-400" />
                  <span className="text-xs font-medium text-red-300">
                    {car.founding_year}
                  </span>
                </div>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="absolute left-0 top-0 h-full bg-red-500/10"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCompatibilitySection;