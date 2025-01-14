interface CrystalInfo {
  primary: string[];
  description: string;
}

export const crystalsByLifePath: { [key: number]: CrystalInfo } = {
  1: {
    primary: ["Garnet", "Sunstone"],
    description: "These crystals enhance your natural leadership abilities and creative power."
  },
  2: {
    primary: ["Moonstone", "Turquoise"],
    description: "These stones amplify your intuitive abilities and emotional balance."
  },
  3: {
    primary: ["Carnelian", "Blue Kyanite"],
    description: "These crystals boost your creative expression and communication skills."
  },
  4: {
    primary: ["Hematite", "Malachite"],
    description: "These stones ground your energy and enhance your practical abilities."
  },
  5: {
    primary: ["Aquamarine", "Citrine"],
    description: "These crystals support your freedom-loving nature and adaptability."
  },
  6: {
    primary: ["Amethyst", "Rose Quartz"],
    description: "These stones enhance your nurturing abilities and heart-centered energy."
  },
  7: {
    primary: ["Clear Quartz", "Lapis Lazuli"],
    description: "These crystals amplify your spiritual awareness and analytical abilities."
  },
  8: {
    primary: ["Golden Topaz", "Black Tourmaline"],
    description: "These stones support your manifestation powers and protection."
  },
  9: {
    primary: ["Sapphire", "Jade"],
    description: "These crystals enhance your wisdom and completion energies."
  },
  11: {
    primary: ["Ruby"],
    description: "This master crystal amplifies your intuitive and leadership qualities."
  },
  22: {
    primary: ["Emerald"],
    description: "This master builder stone supports your manifestation abilities."
  },
  33: {
    primary: ["Diamond"],
    description: "This master teacher crystal enhances your spiritual enlightenment."
  }
};