export const MASTER_NUMBERS = [33, 22, 11];

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
    console.log(`Found master number: ${currentSum}`);
    return currentSum;
  }

  // Keep reducing until we get a single digit or master number
  while (currentSum > 9) {
    currentSum = sumDigits(currentSum);
    if (MASTER_NUMBERS.includes(currentSum)) {
      console.log(`Found master number after reduction: ${currentSum}`);
      return currentSum;
    }
  }

  return currentSum;
};

export const calculateLifePath = (date: Date): number => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  console.log(`Calculating lifepath for date: ${day}/${month}/${year}`);

  // Add all digits individually
  const allDigits = `${day}${month}${year}`.split('').map(Number);
  const sum = allDigits.reduce((a, b) => a + b, 0);
  
  console.log(`Total sum before reduction: ${sum}`);

  // Check if sum is a master number
  if (MASTER_NUMBERS.includes(sum)) {
    console.log(`Found master number in sum: ${sum}`);
    return sum;
  }

  // If not a master number, reduce to single digit
  const lifePath = reduceToSingleDigit(sum);
  console.log(`Final lifepath number: ${lifePath}`);

  return lifePath;
};

export const calculatePartialEnergy = (day: number): number => {
  // Special cases for master numbers in day
  if (day === 29 || day === 20 || day === 11) {
    return 11;
  }
  if (day === 22) {
    return 22;
  }
  if (day === 33) {
    return 33;
  }
  
  // For all other days, reduce to single digit
  return reduceToSingleDigit(day);
};

export const calculateSecretNumber = (date: Date): number => {
  // Get the start of the year
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const diff = date.getTime() - startOfYear.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay) + 1; // Adding 1 because we want Jan 1st to be day 1

  console.log(`Date: ${date.toISOString()}`);
  console.log(`Start of year: ${startOfYear.toISOString()}`);
  console.log(`Day of year: ${dayOfYear}`);

  // Check for special master number days
  if (dayOfYear === 11 || dayOfYear === 110 || dayOfYear === 101) {
    console.log("Special case: Secret number 11");
    return 11;
  }
  
  if (dayOfYear === 22 || dayOfYear === 220 || dayOfYear === 202) {
    console.log("Special case: Secret number 22");
    return 22;
  }
  
  if (dayOfYear === 33 || dayOfYear === 330 || dayOfYear === 303) {
    console.log("Special case: Secret number 33");
    return 33;
  }

  // For all other days, reduce to single digit
  console.log(`Reducing day ${dayOfYear} to single digit`);
  const secretNumber = reduceToSingleDigit(dayOfYear);
  console.log(`Final secret number: ${secretNumber}`);
  
  return secretNumber;
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
