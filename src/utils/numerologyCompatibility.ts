interface CompatibilityData {
  compatible: number[];
  challenging: number[];
  loveCompatible: number[];
  loveDescription?: string;
}

export const numerologyCompatibility: Record<number, CompatibilityData> = {
  1: {
    compatible: [2, 9, 3],
    challenging: [4, 6, 11],
    loveCompatible: [9],
    loveDescription: "Your strongest romantic connection is with Life Path 9. This pairing creates a deeply spiritual and transformative relationship."
  },
  2: {
    compatible: [1, 2, 4],
    challenging: [9],
    loveCompatible: [1],
    loveDescription: "Your ideal romantic match is with Life Path 1. This combination brings balance between leadership and partnership."
  },
  3: {
    compatible: [1, 2, 3],
    challenging: [4, 7],
    loveCompatible: [3],
    loveDescription: "You find greatest harmony with another Life Path 3. This creates a relationship full of creativity and joy."
  },
  4: {
    compatible: [7, 4, 6],
    challenging: [5],
    loveCompatible: [8],
    loveDescription: "Your best romantic match is with Life Path 8. This partnership brings stability and material success."
  },
  5: {
    compatible: [5, 7, 33],
    challenging: [8, 6],
    loveCompatible: [5],
    loveDescription: "You're most compatible with another Life Path 5. This creates an exciting and freedom-loving relationship."
  },
  6: {
    compatible: [5, 33, 3, 6],
    challenging: [7],
    loveCompatible: [5, 33],
    loveDescription: "Your ideal matches are Life Paths 5 and 33. These relationships bring harmony and spiritual growth."
  },
  7: {
    compatible: [11],
    challenging: [6],
    loveCompatible: [11],
    loveDescription: "Your soulmate connection is with Life Path 11. This creates a deeply spiritual and intellectual bond."
  },
  8: {
    compatible: [4, 6, 1],
    challenging: [5],
    loveCompatible: [2],
    loveDescription: "Your best romantic match is with Life Path 2. This brings balance between power and partnership."
  },
  9: {
    compatible: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    challenging: [11, 22, 33],
    loveCompatible: [1, 7, 5],
    loveDescription: "You find harmony with Life Paths 1, 7, and 5. These relationships bring spiritual growth and understanding."
  },
  11: {
    compatible: [33, 22, 11, 5, 7],
    challenging: [9],
    loveCompatible: [5],
    loveDescription: "Your ideal romantic match is with Life Path 5. This brings excitement while maintaining spiritual depth."
  },
  22: {
    compatible: [33, 22, 11, 4],
    challenging: [9],
    loveCompatible: [11, 22],
    loveDescription: "You find greatest harmony with master numbers 11 and 22. These relationships amplify your spiritual potential."
  },
  33: {
    compatible: [33, 22, 11, 5, 6, 7],
    challenging: [9],
    loveCompatible: [22, 33],
    loveDescription: "Your ideal matches are master numbers 22 and 33. These relationships focus on spiritual growth and service to humanity."
  }
};

export const getNeutralNumbers = (compatibleNums: number[], challengingNums: number[]): number[] => {
  // Include master numbers in the possible numbers array
  const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33];
  return allNumbers.filter(num => !compatibleNums.includes(num) && !challengingNums.includes(num));
};