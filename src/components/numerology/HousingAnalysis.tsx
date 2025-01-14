import { motion } from "framer-motion";
import { Home, ThumbsUp, ThumbsDown } from "lucide-react";

interface HousingAnalysisProps {
  chineseZodiac: string;
  isVisible: boolean;
}

const HousingAnalysis = ({ chineseZodiac, isVisible }: HousingAnalysisProps) => {
  if (!isVisible) return null;

  const getHousingAnalysis = (zodiac: string) => {
    const analyses = {
      Rat: "Rats thrive in modern apartments with smart technology. They need a dedicated workspace and plenty of storage solutions.",
      Ox: "Oxen prefer traditional homes with large gardens. They appreciate sturdy construction and classic architecture.",
      Tiger: "Tigers need spacious homes with high ceilings and large windows. They benefit from having a private retreat space.",
      Rabbit: "Rabbits flourish in cozy, well-decorated homes. They should focus on comfortable furnishings and soft lighting.",
      Dragon: "Dragons require grand spaces with impressive architecture. They benefit from homes with unique features and character.",
      Snake: "Snakes prefer sleek, minimalist designs. They thrive in spaces with good natural light and private areas.",
      Horse: "Horses need open spaces and room to move. They benefit from homes with outdoor access and natural materials.",
      Goat: "Goats appreciate artistic homes with creative spaces. They thrive in environments with artistic touches and natural elements.",
      Monkey: "Monkeys need versatile spaces that can adapt to different activities. They benefit from modern, flexible layouts.",
      Rooster: "Roosters thrive in well-organized homes with defined spaces. They appreciate clean lines and functional design.",
      Dog: "Dogs need comfortable, secure homes. They benefit from cozy spaces with good security features.",
      Pig: "Pigs flourish in luxurious, comfortable settings. They appreciate high-quality materials and comfortable furnishings."
    };
    
    return analyses[zodiac as keyof typeof analyses] || "Your ideal living space combines comfort with functionality.";
  };

  const getCompatibleYears = (zodiac: string) => {
    const yearRanges: Record<string, { good: number[], challenging: number[] }> = {
      Rat: {
        good: [1960, 1972, 1984, 1996, 2008, 2020],
        challenging: [1966, 1978, 1990, 2002, 2014, 2026]
      },
      Ox: {
        good: [1961, 1973, 1985, 1997, 2009, 2021],
        challenging: [1967, 1979, 1991, 2003, 2015, 2027]
      },
      Tiger: {
        good: [1962, 1974, 1986, 1998, 2010, 2022],
        challenging: [1968, 1980, 1992, 2004, 2016, 2028]
      },
      Rabbit: {
        good: [1963, 1975, 1987, 1999, 2011, 2023],
        challenging: [1969, 1981, 1993, 2005, 2017, 2029]
      },
      Dragon: {
        good: [1964, 1976, 1988, 2000, 2012, 2024],
        challenging: [1970, 1982, 1994, 2006, 2018, 2030]
      },
      Snake: {
        good: [1965, 1977, 1989, 2001, 2013, 2025],
        challenging: [1971, 1983, 1995, 2007, 2019, 2031]
      },
      Horse: {
        good: [1966, 1978, 1990, 2002, 2014, 2026],
        challenging: [1972, 1984, 1996, 2008, 2020, 2032]
      },
      Goat: {
        good: [1967, 1979, 1991, 2003, 2015, 2027],
        challenging: [1973, 1985, 1997, 2009, 2021, 2033]
      },
      Monkey: {
        good: [1968, 1980, 1992, 2004, 2016, 2028],
        challenging: [1974, 1986, 1998, 2010, 2022, 2034]
      },
      Rooster: {
        good: [1969, 1981, 1993, 2005, 2017, 2029],
        challenging: [1975, 1987, 1999, 2011, 2023, 2035]
      },
      Dog: {
        good: [1970, 1982, 1994, 2006, 2018, 2030],
        challenging: [1976, 1988, 2000, 2012, 2024, 2036]
      },
      Pig: {
        good: [1971, 1983, 1995, 2007, 2019, 2031],
        challenging: [1977, 1989, 2001, 2013, 2025, 2037]
      }
    };

    return yearRanges[zodiac] || { good: [], challenging: [] };
  };

  const compatibility = getCompatibleYears(chineseZodiac);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8 space-y-6 p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-white">
          <Home className="w-6 h-6 text-purple-400" />
          Energetic Properties of Houses
        </h2>
      </div>

      <div className="text-left space-y-4">
        <p className="text-purple-200">
          Based on your Chinese zodiac sign ({chineseZodiac}), here are insights about your ideal living space:
        </p>
        <p className="text-sm leading-relaxed text-purple-100">
          {getHousingAnalysis(chineseZodiac)}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {/* Good Years */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <ThumbsUp className="w-5 h-5 text-green-400" />
              <h3 className="font-medium text-purple-200">Good Years for Housing Changes</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {compatibility.good.map((year) => (
                <div
                  key={year}
                  className="bg-green-500/10 border border-green-500/20 rounded-lg p-2 text-center"
                >
                  <span className="text-green-300 font-medium">{year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenging Years */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <ThumbsDown className="w-5 h-5 text-red-400" />
              <h3 className="font-medium text-purple-200">Challenging Years</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {compatibility.challenging.map((year) => (
                <div
                  key={year}
                  className="bg-red-500/10 border border-red-500/20 rounded-lg p-2 text-center"
                >
                  <span className="text-red-300 font-medium">{year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-2 mt-6">
          <h3 className="font-medium text-purple-200">General Housing Tips:</h3>
          <ul className="list-disc pl-5 text-sm space-y-1 text-purple-100">
            <li>Consider the direction your main door faces</li>
            <li>Pay attention to the flow of natural light</li>
            <li>Balance the five elements in your living space</li>
            <li>Create harmony between work and rest areas</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default HousingAnalysis;