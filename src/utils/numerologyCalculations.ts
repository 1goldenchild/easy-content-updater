// Master numbers that are preserved and not reduced further
export const MASTER_NUMBERS = [33, 22, 11];

// Check if the number is a master number (11, 22, 33)
const isMasterNumber = (num: number): boolean => {
  return MASTER_NUMBERS.includes(num);
};

// Sum the digits of a number
const sumDigits = (num: number): number => {
  return num
    .toString() // Convert number to string to split it
    .split('') // Split each digit into an array
    .map(Number) // Convert the split string back into numbers
    .reduce((a, b) => a + b, 0); // Sum all the digits
};

// Reduce the number to a single digit, unless it's a Master Number
export const reduceToSingleDigit = (num: number): number => {
  if (isMasterNumber(num)) {
    console.log(`Number ${num} is a master number, returning as is`);
    return num; // If it's a master number, return it as is
  }

  let result = num;

  // Keep reducing the number until it becomes a single digit (between 1-9)
  while (result > 9) {
    result = sumDigits(result);
    // If a Master Number is encountered during reduction, return it
    if (isMasterNumber(result)) {
      console.log(`Found master number during reduction: ${result}`);
      return result; // Return the Master Number
    }
  }

  return result; // Return the final reduced number
};

// Check if a number should be treated as a Life Path 11 (20, 29, 38)
const checkSpecialCase = (num: number): number => {
  if ([20, 29, 38].includes(num)) {
    console.log(`Number ${num} is a special case, treating as Life Path 11`);
    return 11; // Treat 20, 29, or 38 as Life Path 11
  }
  return num;
};

// Calculate Life Path Number from a given date
export const calculateLifePath = (date: Date): number => {
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are 0-indexed in JavaScript, so add 1
  const year = date.getFullYear();

  console.log(`Calculating Life Path for date: ${month}/${day}/${year}`);

  // Calculate individual sums for day, month, and year
  const daySum = sumDigits(day); // Sum digits of the day
  const monthSum = sumDigits(month); // Sum digits of the month
  const yearSum = sumDigits(year); // Sum digits of the year

  console.log(`Day sum: ${daySum}, Month sum: ${monthSum}, Year sum: ${yearSum}`);

  // Get the total sum of all individual sums
  let totalSum = daySum + monthSum + yearSum;
  console.log(`Total sum before reduction: ${totalSum}`);

  // Check if the total sum is a special case (20, 29, 38)
  totalSum = checkSpecialCase(totalSum);

  // If the total sum is already a Master Number, return it immediately
  if (isMasterNumber(totalSum)) {
    console.log(`Total sum ${totalSum} is a master number`);
    return totalSum;
  }

  // If the total sum is not a Master Number, reduce it to a single digit
  const lifePath = reduceToSingleDigit(totalSum);
  console.log(`Final Life Path number: ${lifePath}`);

  return lifePath;
};

// For Chinese Zodiac calculation
export const getChineseZodiac = (year: number): string => {
  console.log(`Calculating Chinese zodiac for year: ${year}`);
  
  const zodiacMap: Record<number, string> = {
    2028: 'Dragon', 2027: 'Snake', 2026: 'Horse', 2025: 'Goat',
    2024: 'Monkey', 2023: 'Rooster', 2022: 'Dog', 2021: 'Ox',
    2020: 'Rat', 2019: 'Pig', 2018: 'Dog', 2017: 'Rooster',
    2016: 'Monkey', 2015: 'Goat', 2014: 'Horse', 2013: 'Snake',
    2012: 'Dragon', 2011: 'Rabbit', 2010: 'Tiger', 2009: 'Ox',
    2008: 'Rat', 2007: 'Pig', 2006: 'Dog', 2005: 'Rooster',
    2004: 'Monkey', 2003: 'Goat', 2002: 'Horse', 2001: 'Snake',
    2000: 'Dragon', 1999: 'Rabbit', 1998: 'Tiger', 1997: 'Ox',
    1996: 'Rat', 1995: 'Pig', 1994: 'Dog', 1993: 'Rooster',
    1992: 'Monkey', 1991: 'Goat', 1990: 'Horse', 1989: 'Snake',
    1988: 'Dragon', 1987: 'Rabbit', 1986: 'Tiger', 1985: 'Ox',
    1984: 'Rat', 1983: 'Pig', 1982: 'Dog', 1981: 'Rooster',
    1980: 'Monkey', 1979: 'Goat', 1978: 'Horse', 1977: 'Snake',
    1976: 'Dragon', 1975: 'Rabbit', 1974: 'Tiger', 1973: 'Ox',
    1972: 'Rat', 1971: 'Pig', 1970: 'Dog', 1969: 'Rooster',
    1968: 'Monkey', 1967: 'Goat', 1966: 'Horse', 1965: 'Snake',
    1964: 'Dragon', 1963: 'Rabbit', 1962: 'Tiger', 1961: 'Ox',
    1960: 'Rat', 1959: 'Pig', 1958: 'Dog', 1957: 'Rooster',
    1956: 'Monkey', 1955: 'Goat', 1954: 'Horse', 1953: 'Snake',
    1952: 'Dragon', 1951: 'Rabbit', 1950: 'Tiger', 1949: 'Ox',
    1948: 'Rat', 1947: 'Pig', 1946: 'Dog', 1945: 'Rooster',
    1944: 'Monkey', 1943: 'Goat', 1942: 'Horse', 1941: 'Snake',
    1940: 'Dragon'
  };

  // If the year is in our map, return the exact zodiac sign
  if (year in zodiacMap) {
    console.log(`Found exact year match: ${zodiacMap[year]}`);
    return zodiacMap[year];
  }

  // For years outside our map, calculate based on the 12-year cycle
  // We'll use 2024 (Monkey year) as our reference point
  const baseYear = 2024;
  const zodiacCycle = [
    'Monkey', 'Rooster', 'Dog', 'Pig', 'Rat', 'Ox',
    'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat'
  ];
  
  let yearDiff = year - baseYear;
  // Ensure we get a positive number for the modulo operation
  while (yearDiff < 0) yearDiff += 12;
  
  const cyclePosition = yearDiff % 12;
  const zodiacSign = zodiacCycle[cyclePosition];
  
  console.log(`Calculated zodiac sign for year ${year}: ${zodiacSign}`);
  return zodiacSign;
};
