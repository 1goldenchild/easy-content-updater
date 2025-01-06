export const MASTER_NUMBERS = [33, 29, 22, 20, 11];

export const reduceToSingleDigit = (num: number): number => {
  // Convert to string to process individual digits
  const sumDigits = (n: number): number => {
    return n.toString()
      .split('')
      .reduce((sum, digit) => sum + parseInt(digit), 0);
  };

  let currentSum = sumDigits(num);
  
  // Check for master numbers before reducing further
  if (MASTER_NUMBERS.includes(currentSum)) {
    return currentSum;
  }

  // Keep reducing until we get a single digit or master number
  while (currentSum > 9) {
    currentSum = sumDigits(currentSum);
    if (MASTER_NUMBERS.includes(currentSum)) {
      return currentSum;
    }
  }

  return currentSum;
};

export const calculateLifePath = (date: Date): number => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  // Add all digits individually
  const allDigits = `${day}${month}${year}`.split('').map(Number);
  const sum = allDigits.reduce((a, b) => a + b, 0);

  return reduceToSingleDigit(sum);
};

export const calculatePartialEnergy = (day: number): number => {
  // Special cases for master numbers in day
  if (day === 29 || day === 20 || day === 11) {
    return 11;
  }
  if (day === 22) {
    return 22;
  }
  
  // For all other days, reduce to single digit
  return reduceToSingleDigit(day);
};

export const calculateSecretNumber = (date: Date): number => {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  
  console.log("Day of year:", dayOfYear);
  
  // Check the actual day number first for master numbers
  if (dayOfYear === 20 || dayOfYear === 29 || dayOfYear === 11) {
    return 11;
  }
  if (dayOfYear === 22) {
    return 22;
  }
  if (dayOfYear === 33) {
    return 33;
  }
  
  // If not a master number day, then reduce to single digit
  return reduceToSingleDigit(dayOfYear);
};

export const getChineseZodiac = (year: number): string => {
  const zodiacAnimals = [
    "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake",
    "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"
  ];
  
  const startYear = 1900; // Known Rat year
  const cyclePosition = (year - startYear) % 12;
  return zodiacAnimals[cyclePosition >= 0 ? cyclePosition : cyclePosition + 12];
};
