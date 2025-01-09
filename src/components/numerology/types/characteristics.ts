export interface CharacteristicsTrait {
  trait: string;
  value: number;
}

export interface LifePathCharacteristics {
  [key: string]: CharacteristicsTrait[];
}

export const characteristicsData: LifePathCharacteristics = {
  "1": [
    { trait: "Intelligence", value: 7 },
    { trait: "Creativity", value: 4 },
    { trait: "Leadership", value: 10 },
    { trait: "Assertiveness", value: 9 },
    { trait: "Receptiveness", value: 3 },
    { trait: "Conscientiousness", value: 7 },
    { trait: "Financial Prosperity", value: 8 }
  ],
  "2": [
    { trait: "Intelligence", value: 7 },
    { trait: "Creativity", value: 9 },
    { trait: "Leadership", value: 3 },
    { trait: "Assertiveness", value: 4 },
    { trait: "Receptiveness", value: 10 },
    { trait: "Conscientiousness", value: 7 },
    { trait: "Financial Prosperity", value: 7 }
  ],
  // ... continuing with all numbers up to 33
  "3": [
    { trait: "Intelligence", value: 7 },
    { trait: "Creativity", value: 10 },
    { trait: "Leadership", value: 7 },
    { trait: "Assertiveness", value: 5 },
    { trait: "Receptiveness", value: 6 },
    { trait: "Conscientiousness", value: 7 },
    { trait: "Financial Prosperity", value: 9 }
  ],
  "4": [
    { trait: "Intelligence", value: 6 },
    { trait: "Creativity", value: 5 },
    { trait: "Leadership", value: 8 },
    { trait: "Assertiveness", value: 9 },
    { trait: "Receptiveness", value: 4 },
    { trait: "Conscientiousness", value: 10 },
    { trait: "Financial Prosperity", value: 8 }
  ],
  "5": [
    { trait: "Intelligence", value: 8 },
    { trait: "Creativity", value: 7 },
    { trait: "Leadership", value: 5 },
    { trait: "Assertiveness", value: 6 },
    { trait: "Receptiveness", value: 7 },
    { trait: "Conscientiousness", value: 6 },
    { trait: "Financial Prosperity", value: 7 }
  ],
  "6": [
    { trait: "Intelligence", value: 7 },
    { trait: "Creativity", value: 4 },
    { trait: "Leadership", value: 8 },
    { trait: "Assertiveness", value: 6 },
    { trait: "Receptiveness", value: 9 },
    { trait: "Conscientiousness", value: 8 },
    { trait: "Financial Prosperity", value: 8 }
  ],
  "7": [
    { trait: "Intelligence", value: 10 },
    { trait: "Creativity", value: 9 },
    { trait: "Leadership", value: 5 },
    { trait: "Assertiveness", value: 5 },
    { trait: "Receptiveness", value: 3 },
    { trait: "Conscientiousness", value: 8 },
    { trait: "Financial Prosperity", value: 9 }
  ],
  "8": [
    { trait: "Intelligence", value: 8 },
    { trait: "Creativity", value: 5 },
    { trait: "Leadership", value: 9 },
    { trait: "Assertiveness", value: 10 },
    { trait: "Receptiveness", value: 5 },
    { trait: "Conscientiousness", value: 8 },
    { trait: "Financial Prosperity", value: 10 }
  ],
  "9": [
    { trait: "Intelligence", value: 8 },
    { trait: "Creativity", value: 7 },
    { trait: "Leadership", value: 7 },
    { trait: "Assertiveness", value: 6 },
    { trait: "Receptiveness", value: 6 },
    { trait: "Conscientiousness", value: 4 },
    { trait: "Financial Prosperity", value: 8 }
  ],
  "11": [
    { trait: "Intelligence", value: 9 },
    { trait: "Creativity", value: 8 },
    { trait: "Leadership", value: 9 },
    { trait: "Assertiveness", value: 7 },
    { trait: "Receptiveness", value: 6 },
    { trait: "Conscientiousness", value: 7 },
    { trait: "Financial Prosperity", value: 9 }
  ],
  "22": [
    { trait: "Intelligence", value: 8 },
    { trait: "Creativity", value: 8 },
    { trait: "Leadership", value: 10 },
    { trait: "Assertiveness", value: 7 },
    { trait: "Receptiveness", value: 6 },
    { trait: "Conscientiousness", value: 8 },
    { trait: "Financial Prosperity", value: 9 }
  ],
  "33": [
    { trait: "Intelligence", value: 10 },
    { trait: "Creativity", value: 7 },
    { trait: "Leadership", value: 8 },
    { trait: "Assertiveness", value: 6 },
    { trait: "Receptiveness", value: 7 },
    { trait: "Conscientiousness", value: 8 },
    { trait: "Financial Prosperity", value: 10 }
  ]
};