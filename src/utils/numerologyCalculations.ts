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

export const getLifepathDescription = (lifePath: number): string => {
  switch (lifePath) {
    case 1:
      return "Life Path 1: The Leader\n\nYou are a natural born leader with strong ambition and determination. Your independence and creativity drive you to pioneer new paths and inspire others. You excel in positions of authority and have the potential to achieve great success through your innovative ideas and decisive action.";
    case 2:
      return "Life Path 2: The Mediator\n\nYou are diplomatic, cooperative, and highly intuitive. Your greatest strength lies in your ability to bring harmony to any situation and work well with others. You're a natural peacemaker with deep emotional intelligence and excel in partnerships and group endeavors.";
    case 3:
      return "Life Path 3: The Creator\n\nYou possess exceptional creative and communicative abilities. Your optimistic nature and self-expression make you naturally charismatic. You have the power to uplift others through your artistic talents and joyful approach to life.";
    case 4:
      return "Life Path 4: The Builder\n\nYou are practical, reliable, and highly organized. Your methodical approach and strong work ethic make you an excellent manager and problem solver. You excel in creating stable foundations and bringing order to chaos.";
    case 5:
      return "Life Path 5: The Freedom Seeker\n\nYou are adventurous, versatile, and progressive. Your dynamic energy and adaptability make you an excellent agent of change. You thrive on new experiences and have the ability to inspire others to embrace freedom and growth.";
    case 6:
      return "Life Path 6: The Nurturer\n\nYou are compassionate, responsible, and naturally protective of others. Your caring nature and sense of justice make you an excellent counselor or teacher. You excel in creating harmony in home and community environments.";
    case 7:
      return "Life Path 7: The Seeker\n\nYou are analytical, introspective, and highly intellectual. Your quest for knowledge and understanding makes you an excellent researcher or specialist. You have deep spiritual awareness and the ability to uncover hidden truths.";
    case 8:
      return "Life Path 8: The Powerhouse\n\nYou have natural executive ability and excellent judgment in business and material matters. Your ambition and efficiency make you a natural leader in the corporate world. You have the potential to achieve great financial and material success.";
    case 9:
      return "Life Path 9: The Humanitarian\n\nYou are compassionate, selfless, and have a strong sense of global consciousness. Your wisdom and universal love make you an excellent counselor or philanthropist. You have the ability to see the bigger picture and inspire positive change in the world.";
    case 11:
      return "Life Path 11: The Illuminator\n\nAs a master number, you possess high spiritual and intuitive abilities. Your inspirational nature and visionary thinking make you a natural spiritual teacher or leader. You have the potential to bring enlightenment to others.";
    case 22:
      return "Life Path 22: The Master Builder\n\nAs a master number, you have exceptional practical vision and the ability to manifest grand ideas. Your leadership and organizational skills can help you achieve massive undertakings that benefit humanity.";
    case 33:
      return "Life Path 33: The Master Teacher\n\nAs the highest master number, you embody divine consciousness and selfless service. Your nurturing wisdom and healing abilities make you an exceptional mentor and guide. You have the potential to create profound positive change through teaching and example.";
    default:
      return "Invalid Life Path Number";
  }
};
