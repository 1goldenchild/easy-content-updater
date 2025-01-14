interface TechCompany {
  name: string;
  zodiac: string;
  year: number;
}

export const techCompanies: TechCompany[] = [
  { name: "Apple", zodiac: "Rooster", year: 1976 },
  { name: "Samsung Electronics", zodiac: "Tiger", year: 1969 },
  { name: "Huawei", zodiac: "Ox", year: 1987 },
  { name: "Sony", zodiac: "Rooster", year: 1946 },
  { name: "Microsoft", zodiac: "Monkey", year: 1975 },
  { name: "Lenovo", zodiac: "Dragon", year: 1984 },
  { name: "Dell", zodiac: "Rooster", year: 1984 },
  { name: "LG Electronics", zodiac: "Rabbit", year: 1958 },
  { name: "Asus", zodiac: "Snake", year: 1989 },
  { name: "Acer", zodiac: "Snake", year: 1976 },
  { name: "Xiaomi", zodiac: "Dragon", year: 2010 },
  { name: "Motorola", zodiac: "Rooster", year: 1928 },
  { name: "OnePlus", zodiac: "Monkey", year: 2013 },
  { name: "Google", zodiac: "Snake", year: 1998 },
  { name: "Nokia", zodiac: "Monkey", year: 1865 },
  { name: "BlackBerry", zodiac: "Pig", year: 1984 },
  { name: "Meizu", zodiac: "Horse", year: 2003 },
  { name: "HTC", zodiac: "Goat", year: 1997 },
  { name: "Toshiba", zodiac: "Dog", year: 1939 },
  { name: "Nintendo", zodiac: "Pig", year: 1889 },
  { name: "Sharp", zodiac: "Rabbit", year: 1912 }
];

export const getCompatibility = (userZodiac: string, companyZodiac: string): number => {
  const compatibilityMap: { [key: string]: { good: string[], bad: string[] } } = {
    Rat: {
      good: ["Dragon", "Monkey", "Ox"],
      bad: ["Horse", "Rabbit", "Goat"]
    },
    Ox: {
      good: ["Snake", "Rooster", "Rat"],
      bad: ["Goat", "Horse", "Dragon"]
    },
    Tiger: {
      good: ["Horse", "Dog", "Pig"],
      bad: ["Monkey", "Snake", "Tiger"]
    },
    Rabbit: {
      good: ["Goat", "Pig", "Dog"],
      bad: ["Rooster", "Dragon", "Rat"]
    },
    Dragon: {
      good: ["Rat", "Monkey", "Rooster"],
      bad: ["Dog", "Rabbit", "Dragon"]
    },
    Snake: {
      good: ["Ox", "Rooster", "Monkey"],
      bad: ["Tiger", "Pig", "Snake"]
    },
    Horse: {
      good: ["Tiger", "Dog", "Goat"],
      bad: ["Rat", "Ox", "Horse"]
    },
    Goat: {
      good: ["Rabbit", "Horse", "Pig"],
      bad: ["Ox", "Dog", "Rat"]
    },
    Monkey: {
      good: ["Rat", "Dragon", "Snake"],
      bad: ["Tiger", "Pig", "Monkey"]
    },
    Rooster: {
      good: ["Ox", "Snake", "Dragon"],
      bad: ["Rabbit", "Dog", "Rooster"]
    },
    Dog: {
      good: ["Tiger", "Horse", "Rabbit"],
      bad: ["Dragon", "Goat", "Dog"]
    },
    Pig: {
      good: ["Tiger", "Rabbit", "Goat"],
      bad: ["Snake", "Monkey", "Pig"]
    }
  };

  if (compatibilityMap[userZodiac]) {
    if (compatibilityMap[userZodiac].good.includes(companyZodiac)) {
      return 95;
    } else if (compatibilityMap[userZodiac].bad.includes(companyZodiac)) {
      return 45;
    }
  }
  return 75;
};