export const MASTER_NUMBERS = [33, 22, 11];

const isMasterNumber = (num: number): boolean => {
  return MASTER_NUMBERS.includes(num);
};

const sumDigits = (num: number): number => {
  return num
    .toString()
    .split('')
    .map(Number)
    .reduce((a, b) => a + b, 0);
};

// Reduce a number to a single digit while preserving master numbers
export const reduceToSingleDigit = (num: number): number => {
  // First check if the initial number is a master number
  if (isMasterNumber(num)) {
    console.log(`Initial number ${num} is a master number, preserving it`);
    return num;
  }

  let result = num;
  
  // Only reduce if it's not already a single digit
  if (result > 9) {
    result = sumDigits(result);
    // Check if the first reduction gives us a master number
    if (isMasterNumber(result)) {
      console.log(`Found master number ${result} after first reduction`);
      return result;
    }
    
    // If not a master number and still > 9, reduce to single digit
    while (result > 9) {
      result = sumDigits(result);
    }
  }

  return result;
};

export const calculateLifePath = (date: Date): number => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  console.log(`Calculating Life Path for date: ${month}/${day}/${year}`);

  // First, reduce the day number while preserving master numbers
  let daySum = day;
  if (day > 9) {
    daySum = sumDigits(day);
    if (isMasterNumber(daySum)) {
      console.log(`Day ${day} reduces to master number ${daySum}`);
    } else {
      daySum = reduceToSingleDigit(day);
    }
  }

  // Reduce month (usually not needed as months are 1-12)
  const monthSum = month > 9 ? sumDigits(month) : month;

  // Reduce year
  let yearSum = sumDigits(year);
  if (yearSum > 9) {
    yearSum = reduceToSingleDigit(yearSum);
  }

  console.log(`Components: Day=${daySum}, Month=${monthSum}, Year=${yearSum}`);

  // Calculate total sum
  const totalSum = daySum + monthSum + yearSum;
  console.log(`Total sum before final reduction: ${totalSum}`);

  // Check if the total sum is a master number
  if (isMasterNumber(totalSum)) {
    console.log(`Final sum ${totalSum} is a master number, preserving it`);
    return totalSum;
  }

  // If not a master number, perform final reduction
  const lifePath = reduceToSingleDigit(totalSum);
  console.log(`Final Life Path number: ${lifePath}`);

  return lifePath;
};

// Keep other utility functions
export const calculatePartialEnergy = (day: number): number => {
  // Special cases for master numbers in day
  if (isMasterNumber(day)) {
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
