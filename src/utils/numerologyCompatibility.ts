interface CompatibilityData {
  compatible: number[];
  challenging: number[];
  loveCompatible: number[];
  loveDescription?: string;
}

export const numerologyCompatibility: Record<number, CompatibilityData> = {
  1: {
    compatible: [3, 5, 9],
    challenging: [4, 6, 8],
    loveCompatible: [3, 5, 6],
    loveDescription: "Best romantic matches are with numbers 3, 5, and 6. These combinations create a balanced and harmonious relationship."
  },
  2: {
    compatible: [4, 6, 8],
    challenging: [1, 7, 9],
    loveCompatible: [4, 6, 8],
    loveDescription: "Most compatible in love with numbers 4, 6, and 8. These partnerships bring stability and emotional understanding."
  },
  3: {
    compatible: [1, 5, 7],
    challenging: [4, 8],
    loveCompatible: [1, 5, 9],
    loveDescription: "Finds greatest romantic harmony with numbers 1, 5, and 9. These relationships are filled with creativity and joy."
  },
  4: {
    compatible: [2, 8],
    challenging: [1, 3, 7],
    loveCompatible: [2, 7, 8],
    loveDescription: "Best love matches are with numbers 2, 7, and 8. These connections provide security and long-term stability."
  },
  5: {
    compatible: [1, 3, 7],
    challenging: [2, 4, 8],
    loveCompatible: [1, 3, 7],
    loveDescription: "Most compatible romantically with numbers 1, 3, and 7. These relationships bring adventure and excitement."
  },
  6: {
    compatible: [2, 8, 9],
    challenging: [1, 5, 7],
    loveCompatible: [2, 8, 9],
    loveDescription: "Finds romantic harmony with numbers 2, 8, and 9. These partnerships are nurturing and balanced."
  },
  7: {
    compatible: [3, 5, 9],
    challenging: [2, 4, 6],
    loveCompatible: [4, 5, 7],
    loveDescription: "Best love matches are with numbers 4, 5, and 7. These relationships provide intellectual stimulation and depth."
  },
  8: {
    compatible: [2, 4, 6],
    challenging: [1, 3, 5],
    loveCompatible: [2, 4, 6],
    loveDescription: "Most compatible in love with numbers 2, 4, and 6. These partnerships bring material and emotional security."
  },
  9: {
    compatible: [1, 6, 7],
    challenging: [2, 4, 8],
    loveCompatible: [3, 6, 9],
    loveDescription: "Finds greatest romantic harmony with numbers 3, 6, and 9. These relationships are spiritually and emotionally fulfilling."
  },
  11: {
    compatible: [2, 4],
    challenging: [6, 8],
    loveCompatible: [2, 11, 22],
    loveDescription: "Best matched with numbers 2, 11, and 22. These spiritual partnerships bring enlightenment and growth."
  },
  22: {
    compatible: [4, 8],
    challenging: [1, 9],
    loveCompatible: [11, 22, 33],
    loveDescription: "Most compatible with numbers 11, 22, and 33. These master number combinations create powerful spiritual bonds."
  },
  33: {
    compatible: [6, 9],
    challenging: [2, 4],
    loveCompatible: [22, 33],
    loveDescription: "Finds harmony with numbers 22 and 33. These relationships focus on spiritual growth and humanitarian goals."
  }
};

export const getNeutralNumbers = (compatibleNums: number[], challengingNums: number[]): number[] => {
  const allNumbers = Array.from({ length: 9 }, (_, i) => i + 1);
  return allNumbers.filter(num => !compatibleNums.includes(num) && !challengingNums.includes(num));
};