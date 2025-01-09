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
  if (MASTER_NUMBERS.includes(num)) {
    console.log(`Found master number in original input: ${num}`);
    return num;
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

  // Handle master numbers in day and month separately
  const dayNum = MASTER_NUMBERS.includes(day) ? day : reduceToSingleDigit(day);
  const monthNum = MASTER_NUMBERS.includes(month) ? month : reduceToSingleDigit(month);
  
  // Calculate year sum
  const yearNum = reduceToSingleDigit(year);

  console.log(`Processed numbers - Day: ${dayNum}, Month: ${monthNum}, Year: ${yearNum}`);
  
  // Sum all components
  const sum = dayNum + monthNum + yearNum;
  console.log(`Total sum before final reduction: ${sum}`);

  // Check if final sum is a master number
  if (MASTER_NUMBERS.includes(sum)) {
    console.log(`Found master number in final sum: ${sum}`);
    return sum;
  }

  // If not a master number, reduce to single digit
  const lifePath = reduceToSingleDigit(sum);
  console.log(`Final lifepath number: ${lifePath}`);

  return lifePath;
};

export const calculatePartialEnergy = (day: number): number => {
  // Special cases for master numbers in day
  if (MASTER_NUMBERS.includes(day)) {
    console.log(`Found master number in day: ${day}`);
    return day;
  }
  
  // For all other days, reduce to single digit
  return reduceToSingleDigit(day);
};

export const calculateSecretNumber = (date: Date): number => {
  // Calculate the day of the year (1-366)
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

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
  console.log(`Calculating Chinese zodiac for year: ${year}`);
  
  // Create a mapping of years to zodiac signs based on the provided list
  const zodiacMap: Record<number, string> = {
    2042: 'Horse', 2041: 'Snake', 2040: 'Dragon', 2039: 'Rabbit',
    2038: 'Tiger', 2037: 'Ox', 2036: 'Rat', 2035: 'Pig',
    2034: 'Dog', 2033: 'Rooster', 2032: 'Monkey', 2031: 'Sheep',
    2030: 'Horse', 2029: 'Snake', 2028: 'Dragon', 2027: 'Rabbit',
    2026: 'Tiger', 2025: 'Ox', 2024: 'Rat', 2023: 'Pig',
    2022: 'Dog', 2021: 'Rooster', 2020: 'Monkey', 2019: 'Sheep',
    2018: 'Horse', 2017: 'Snake', 2016: 'Dragon', 2015: 'Rabbit',
    2014: 'Tiger', 2013: 'Ox', 2012: 'Rat', 2011: 'Pig',
    2010: 'Dog', 2009: 'Rooster', 2008: 'Monkey', 2007: 'Sheep',
    2006: 'Horse', 2005: 'Snake', 2004: 'Dragon', 2003: 'Rabbit',
    2002: 'Tiger', 2001: 'Ox', 2000: 'Rat', 1999: 'Pig',
    1998: 'Dog', 1997: 'Rooster', 1996: 'Monkey', 1995: 'Sheep',
    1994: 'Horse', 1993: 'Snake', 1992: 'Dragon', 1991: 'Rabbit',
    1990: 'Tiger', 1989: 'Ox', 1988: 'Rat', 1987: 'Pig',
    1986: 'Dog', 1985: 'Rooster', 1984: 'Monkey', 1983: 'Sheep',
    1982: 'Horse', 1981: 'Snake', 1980: 'Dragon', 1979: 'Rabbit',
    1978: 'Tiger', 1977: 'Ox', 1976: 'Rat', 1975: 'Pig',
    1974: 'Dog', 1973: 'Rooster', 1972: 'Monkey', 1971: 'Sheep',
    1970: 'Horse', 1969: 'Snake', 1968: 'Dragon', 1967: 'Rabbit',
    1966: 'Tiger', 1965: 'Ox', 1964: 'Rat', 1963: 'Pig'
  };

  // If the year is in our map, return the exact zodiac sign
  if (year in zodiacMap) {
    console.log(`Found exact year match: ${zodiacMap[year]}`);
    return zodiacMap[year];
  }

  // For years outside our map, calculate based on the 12-year cycle
  // We'll use 2024 (Rat year) as our reference point
  const baseYear = 2024;
  const zodiacCycle = [
    'Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake',
    'Horse', 'Sheep', 'Monkey', 'Rooster', 'Dog', 'Pig'
  ];
  
  let yearDiff = year - baseYear;
  // Ensure we get a positive number for the modulo operation
  while (yearDiff < 0) yearDiff += 12;
  
  const cyclePosition = yearDiff % 12;
  const zodiacSign = zodiacCycle[cyclePosition];
  
  console.log(`Calculated zodiac sign for year ${year}: ${zodiacSign}`);
  return zodiacSign;
};
