// Master numbers and special numbers that map to 11
const MASTER_NUMBERS = [11, 22, 33];
const NUMBERS_TO_ELEVEN = [20, 29, 38];

// Sum all digits in a number individually (e.g., 29 becomes 2+9=11)
const sumIndividualDigits = (dateString: string): number => {
  // Convert the date string to an array of individual digits and sum them
  const sum = dateString
    .split('')
    .filter(char => char !== '/') // Remove any date separators
    .map(Number)
    .reduce((acc, digit) => acc + digit, 0);
    
  console.log(`Sum of individual digits: ${sum}`);
  return sum;
};

// Check if a number is special (maps to 11) or is a master number
const isSpecialNumber = (num: number): boolean => {
  return NUMBERS_TO_ELEVEN.includes(num) || MASTER_NUMBERS.includes(num);
};

// Get the final life path number based on the rules
const getFinalLifePathNumber = (sum: number): number => {
  // If it's a special number that maps to 11 or is 22 or 33, return it as is
  if (NUMBERS_TO_ELEVEN.includes(sum)) {
    console.log(`${sum} is a special number that maps to 11`);
    return 11;
  }
  
  if (MASTER_NUMBERS.includes(sum)) {
    console.log(`${sum} is a master number, keeping as is`);
    return sum;
  }
  
  // If it's a double digit that's not special, reduce to single digit
  if (sum > 9) {
    const reducedNumber = sumIndividualDigits(sum.toString());
    console.log(`Reduced ${sum} to ${reducedNumber}`);
    return reducedNumber;
  }
  
  return sum;
};

// Calculate Life Path Number from a given date
export const calculateLifePath = (date: Date): number => {
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are 0-indexed in JavaScript
  const year = date.getFullYear();
  
  // Convert the date to a string format that we can process
  const dateString = `${day}${month}${year}`;
  console.log(`Calculating life path for: ${month}/${day}/${year}`);
  
  // Sum all individual digits
  const sum = sumIndividualDigits(dateString);
  console.log(`Initial sum of all digits: ${sum}`);
  
  // Get the final life path number based on the rules
  const lifePath = getFinalLifePathNumber(sum);
  console.log(`Final life path number: ${lifePath}`);
  
  return lifePath;
};

// Calculate Partial Energy from day of birth
export const calculatePartialEnergy = (day: number): number => {
  // Simply reduce the day to a single digit, no master number check
  let result = day;
  while (result > 9) {
    result = sumIndividualDigits(result.toString());
  }
  return result;
};

// Calculate Chinese Zodiac sign from year
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

// Calculate Secret Number from date
export const calculateSecretNumber = (date: Date): number => {
  // Calculate the day of the year (1-366)
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  console.log(`Date: ${date.toDateString()}`);
  console.log(`Day of year: ${dayOfYear}`);

  // Simply reduce to single digit, no special cases
  let result = dayOfYear;
  while (result > 9) {
    result = sumIndividualDigits(result.toString());
  }
  
  console.log(`Final secret number: ${result}`);
  return result;
};