import { motion } from "framer-motion";
import { Globe2, MapPin } from "lucide-react";
import EarthGlobe from "./EarthGlobe";

interface CountryCompatibilityProps {
  chineseZodiac: string;
  isVisible: boolean;
}

const zodiacCountries = {
  "Rat": [
    { country: "New Zealand", flag: "🇳🇿" },
    { country: "Austria", flag: "🇦🇹" },
    { country: "South Korea", flag: "🇰🇷" },
    { country: "Chile", flag: "🇨🇱" },
    { country: "Nepal", flag: "🇳🇵" }
  ],
  "Ox": [
    { country: "Australia", flag: "🇦🇺" },
    { country: "Italy", flag: "🇮🇹" },
    { country: "The Bahamas", flag: "🇧🇸" },
    { country: "Cayman Islands", flag: "🇰🇾" },
    { country: "Trinidad and Tobago", flag: "🇹🇹" },
    { country: "Armenia", flag: "🇦🇲" }
  ],
  "Tiger": [
    { country: "Bora Bora", flag: "🇵🇫" },
    { country: "Mexico", flag: "🇲🇽" },
    { country: "Romania", flag: "🇷🇴" },
    { country: "Sri Lanka", flag: "🇱🇰" }
  ],
  "Rabbit": [
    { country: "Portugal", flag: "🇵🇹" },
    { country: "Russia", flag: "🇷🇺" },
    { country: "Poland", flag: "🇵🇱" },
    { country: "Cyprus", flag: "🇨🇾" }
  ],
  "Dragon": [
    { country: "Ireland", flag: "🇮🇪" },
    { country: "Japan", flag: "🇯🇵" },
    { country: "Ecuador", flag: "🇪🇨" },
    { country: "Georgia", flag: "🇬🇪" }
  ],
  "Snake": [
    { country: "Sweden", flag: "🇸🇪" },
    { country: "Singapore", flag: "🇸🇬" },
    { country: "Maldives", flag: "🇲🇻" },
    { country: "Monaco", flag: "🇲🇨" },
    { country: "Egypt", flag: "🇪🇬" },
    { country: "Turkey", flag: "🇹🇷" },
    { country: "Croatia", flag: "🇭🇷" }
  ],
  "Horse": [
    { country: "Denmark", flag: "🇩🇰" },
    { country: "Luxembourg", flag: "🇱🇺" },
    { country: "Iceland", flag: "🇮🇸" },
    { country: "Belgium", flag: "🇧🇪" },
    { country: "Argentina", flag: "🇦🇷" },
    { country: "Paraguay", flag: "🇵🇾" }
  ],
  "Goat": [
    { country: "Switzerland", flag: "🇨🇭" },
    { country: "Malaysia", flag: "🇲🇾" },
    { country: "Taiwan", flag: "🇹🇼" },
    { country: "Canada", flag: "🇨🇦" },
    { country: "Peru", flag: "🇵🇪" },
    { country: "Montenegro", flag: "🇲🇪" }
  ],
  "Monkey": [
    { country: "United States", flag: "🇺🇸" },
    { country: "Spain", flag: "🇪🇸" },
    { country: "Kenya", flag: "🇰🇪" },
    { country: "Malta", flag: "🇲🇹" },
    { country: "Bulgaria", flag: "🇧🇬" }
  ],
  "Dog": [
    { country: "Norway", flag: "🇳🇴" },
    { country: "Thailand", flag: "🇹🇭" },
    { country: "Brazil", flag: "🇧🇷" }
  ],
  "Pig": [
    { country: "Netherlands", flag: "🇳🇱" },
    { country: "Germany", flag: "🇩🇪" },
    { country: "United Kingdom", flag: "🇬🇧" },
    { country: "Slovakia", flag: "🇸🇰" }
  ]
};

const CountryCompatibility = ({ chineseZodiac, isVisible }: CountryCompatibilityProps) => {
  console.log("Current Chinese Zodiac:", chineseZodiac);
  
  if (!isVisible) return null;

  const compatibleCountries = zodiacCountries[chineseZodiac as keyof typeof zodiacCountries] || [];
  console.log("Compatible countries:", compatibleCountries);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-4 mt-8"
    >
      <div className="p-6 rounded-lg bg-gradient-to-br from-[#1a1f3c] to-[#2a2f4c] border border-white/10">
        <div className="flex items-center gap-2 mb-6">
          <Globe2 className="w-6 h-6 text-blue-400" />
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4B9FFF] to-[#46B4FF]">
            Travel & Residence Compatibility
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Earth Globe Section */}
          <div className="lg:col-span-1 flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
              <EarthGlobe />
            </div>
          </div>

          {/* Countries List Section */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-500" />
                <h4 className="text-lg font-semibold text-white/80">
                  Compatible Destinations for {chineseZodiac}
                </h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {compatibleCountries.map((country) => (
                  <div
                    key={country.country}
                    className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center gap-3 hover:bg-green-500/20 transition-colors"
                  >
                    <span className="text-2xl">{country.flag}</span>
                    <div className="font-medium text-green-300">
                      {country.country}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CountryCompatibility;