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
  // Get day of year, adding 1 because getTime() starts counting from 0
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;
  
  console.log("Day of year:", dayOfYear);
  
  // Get initial sum of the day of year digits
  const initialSum = dayOfYear.toString()
    .split('')
    .reduce((sum, digit) => sum + parseInt(digit), 0);
    
  console.log("Initial sum:", initialSum);
  
  // Check if initial sum is a master number
  if (MASTER_NUMBERS.includes(initialSum)) {
    console.log("Found master number in initial sum:", initialSum);
    return initialSum === 29 || initialSum === 20 ? 11 : initialSum;
  }
  
  // If not, reduce to single digit or until we find a master number
  let currentSum = initialSum;
  while (currentSum > 9) {
    currentSum = currentSum.toString()
      .split('')
      .reduce((sum, digit) => sum + parseInt(digit), 0);
    console.log("Reduced to:", currentSum);
    
    // Check if reduced sum is a master number
    if (MASTER_NUMBERS.includes(currentSum)) {
      console.log("Found master number after reduction:", currentSum);
      return currentSum === 29 || currentSum === 20 ? 11 : currentSum;
    }
  }
  
  console.log("Final number:", currentSum);
  return currentSum;
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
