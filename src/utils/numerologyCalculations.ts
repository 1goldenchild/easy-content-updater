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
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
  // Adjust February for leap year
  if (date.getFullYear() % 4 === 0) {
    daysInMonth[1] = 29;
  }
  
  // Calculate day of year by counting days in previous months plus current day
  let dayOfYear = date.getDate(); // Start with the current day
  for (let month = 0; month < date.getMonth(); month++) {
    dayOfYear += daysInMonth[month];
  }

  console.log(`Date: ${date.toDateString()}`);
  console.log(`Day of year: ${dayOfYear}`);

  // Check for special master number days
  if ([11, 20, 110, 101].includes(dayOfYear)) {
    console.log("Special case: Secret number 11");
    return 11;
  }
  
  if ([22, 220, 202].includes(dayOfYear)) {
    console.log("Special case: Secret number 22");
    return 22;
  }
  
  if ([33, 330, 303].includes(dayOfYear)) {
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
