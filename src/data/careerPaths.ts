export const careerPaths = {
  1: [
    "CEO",
    "Coach",
    "Professional Athlete",
    "Secret Spy",
    "Military",
    "Executive",
    "Lawyer",
    "Judge",
    "Construction",
    "Influencer"
  ],
  2: [
    "Doctor",
    "Charity Work",
    "Journalism",
    "Human Resources",
    "Veterinarian",
    "Therapist",
    "Athlete",
    "Trainer",
    "Artist"
  ],
  3: [
    "Radio Host",
    "Sales",
    "Great Blogger",
    "Great Writer",
    "Podcaster",
    "Actor",
    "Negotiator",
    "Therapist",
    "Artist",
    "Nomad Entrepreneur",
    "Comedian"
  ],
  4: [
    "Engineer",
    "Architect",
    "Financial Analyst",
    "Systems Administrator",
    "Construction Manager",
    "Project Manager",
    "Accountant",
    "Database Administrator",
    "Quality Assurance Manager",
    "Operations Manager"
  ],
  5: [
    "Flight Attendant",
    "Pilot",
    "Internet Influencer",
    "YouTuber",
    "Model",
    "Nomad Entrepreneur",
    "Ecommerce",
    "Crypto",
    "Affiliate Marketing",
    "Blogger",
    "Actor",
    "Freedom Fighter",
    "Truck Owner Operator",
    "Eco Researcher"
  ],
  6: [
    "Doctor",
    "Therapist",
    "Charity Work",
    "Investor",
    "Chef",
    "Restaurant Owner",
    "CEO",
    "Child Care Provider",
    "Nurse"
  ],
  7: [
    "Scientist",
    "Preacher",
    "Inventor",
    "Programmer",
    "Astrophysicist",
    "Rocket Scientist",
    "Teacher",
    "Researcher",
    "Doctor",
    "Philosopher",
    "Science",
    "Cybersecurity",
    "Financial Analyst",
    "Systems Administrator"
  ],
  8: [
    "Banker",
    "Entrepreneur",
    "CEO",
    "Executive",
    "Insurance",
    "Ecommerce",
    "Investor",
    "Sergeant",
    "Construction Worker",
    "Pilot",
    "Politics",
    "Preacher",
    "Scientist",
    "Judge",
    "Attorney",
    "Politician",
    "Financial Analyst"
  ],
  9: [
    "Entrepreneur",
    "Philosopher",
    "Pilot",
    "Technology",
    "Crypto",
    "Ecommerce",
    "Detective",
    "Real Estate Developer",
    "Investor",
    "Executive",
    "Cybersecurity",
    "Influencer",
    "Artist",
    "Astrophysicist",
    "Systems Administrator"
  ],
  11: [
    "Sales",
    "TV",
    "Social Media",
    "CEO",
    "Executive",
    "Entrepreneur",
    "Philosopher",
    "Preacher",
    "Therapist",
    "Politics",
    "Influencer"
  ],
  22: [
    "Sergeant",
    "Owner Operator",
    "Architect",
    "Executive",
    "CEO",
    "Construction Manager",
    "Real Estate Developer",
    "Engineer",
    "Bodybuilder",
    "Crypto"
  ],
  33: [
    "Inventor",
    "Teacher",
    "Sales",
    "CEO",
    "Artist",
    "Singer",
    "Podcaster",
    "YouTuber",
    "Researcher",
    "Ecommerce",
    "Crypto",
    "Politics",
    "Influencer",
    "Trainer",
    "Preacher",
    "Astrophysicist",
    "Financial Analyst",
    "Systems Administrator"
  ]
};

export const getRandomCareers = (careers: string[], count: number): string[] => {
  const shuffled = [...careers].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};