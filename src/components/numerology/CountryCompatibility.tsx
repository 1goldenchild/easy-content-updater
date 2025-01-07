import { motion } from "framer-motion";
import { Globe2, MapPin, AlertTriangle } from "lucide-react";
import EarthGlobe from "./EarthGlobe";

interface CountryCompatibilityProps {
  chineseZodiac: string;
  isVisible: boolean;
}

// This is a simplified list. In a real app, you'd want a more comprehensive database
const countryFoundingDates: { country: string; year: number; continent: string; flag: string }[] = [
  { country: "United States", year: 1776, continent: "North America", flag: "🇺🇸" },
  { country: "Australia", year: 1901, continent: "Oceania", flag: "🇦🇺" },
  { country: "Brazil", year: 1822, continent: "South America", flag: "🇧🇷" },
  { country: "Canada", year: 1867, continent: "North America", flag: "🇨🇦" },
  { country: "India", year: 1947, continent: "Asia", flag: "🇮🇳" },
  { country: "Singapore", year: 1965, continent: "Asia", flag: "🇸🇬" },
  { country: "South Africa", year: 1961, continent: "Africa", flag: "🇿🇦" },
  { country: "New Zealand", year: 1907, continent: "Oceania", flag: "🇳🇿" },
  { country: "Japan", year: 660, continent: "Asia", flag: "🇯🇵" },
  { country: "Thailand", year: 1238, continent: "Asia", flag: "🇹🇭" },
  { country: "Switzerland", year: 1291, continent: "Europe", flag: "🇨🇭" },
  { country: "France", year: 843, continent: "Europe", flag: "🇫🇷" }
];

const getChineseZodiac = (year: number): string => {
  const zodiacAnimals = [
    "Rat", "Ox", "Tiger", "Cat", "Dragon", "Snake",
    "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"
  ];
  
  const startYear = 1900; // Known Rat year
  const cyclePosition = (year - startYear) % 12;
  return zodiacAnimals[cyclePosition >= 0 ? cyclePosition : cyclePosition + 12];
};

const calculateCompatibility = (countryYear: number, userZodiac: string): "compatible" | "neutral" | "avoid" => {
  const countryZodiac = getChineseZodiac(countryYear);
  const zodiacCycle = [
    "Rat", "Ox", "Tiger", "Cat", "Dragon", "Snake",
    "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"
  ];

  const userIndex = zodiacCycle.indexOf(userZodiac);
  const countryIndex = zodiacCycle.indexOf(countryZodiac);
  
  // Calculate the shortest distance between signs in the cycle
  const distance = Math.min(
    Math.abs(userIndex - countryIndex),
    12 - Math.abs(userIndex - countryIndex)
  );

  if (distance === 0) return "compatible";
  if (distance === 6) return "avoid";
  return "neutral";
};

const CountryCompatibility = ({ chineseZodiac, isVisible }: CountryCompatibilityProps) => {
  if (!isVisible) return null;

  const categorizedCountries = countryFoundingDates.reduce((acc, country) => {
    const compatibility = calculateCompatibility(country.year, chineseZodiac);
    acc[compatibility].push(country);
    return acc;
  }, {
    compatible: [] as typeof countryFoundingDates,
    neutral: [] as typeof countryFoundingDates,
    avoid: [] as typeof countryFoundingDates
  });

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
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Compatible Countries */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-500" />
                <h4 className="text-lg font-semibold text-white/80">
                  Recommended Destinations
                </h4>
              </div>
              <div className="space-y-2">
                {categorizedCountries.compatible.map((country) => (
                  <div
                    key={country.country}
                    className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center gap-3"
                  >
                    <span className="text-2xl">{country.flag}</span>
                    <div>
                      <div className="font-medium text-green-300">{country.country}</div>
                      <div className="text-sm text-green-300/70">{country.continent}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Countries to Avoid */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <h4 className="text-lg font-semibold text-white/80">
                  Places to Avoid
                </h4>
              </div>
              <div className="space-y-2">
                {categorizedCountries.avoid.map((country) => (
                  <div
                    key={country.country}
                    className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center gap-3"
                  >
                    <span className="text-2xl">{country.flag}</span>
                    <div>
                      <div className="font-medium text-red-300">{country.country}</div>
                      <div className="text-sm text-red-300/70">{country.continent}</div>
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
