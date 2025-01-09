export const getOccupations = (number: number) => {
  console.log("Getting occupations for lifePath:", number);
  switch (number) {
    case 1:
      return [
        "Entrepreneur",
        "CEO/Executive",
        "Military Leader",
        "Sales Director",
        "Project Manager",
        "Business Owner",
        "Innovator",
        "Independent Contractor",
        "Politician",
        "Startup Founder"
      ];
    case 2:
      return [
        "Diplomat",
        "Counselor/Therapist",
        "Human Resources Manager",
        "Mediator",
        "Social Worker",
        "Teacher",
        "Nurse",
        "Psychologist",
        "Team Coordinator",
        "Peace Negotiator"
      ];
    case 3:
      return [
        "Artist/Designer",
        "Writer/Journalist",
        "Actor/Performer",
        "Marketing Creative",
        "Public Speaker",
        "Musician",
        "Fashion Designer",
        "Interior Designer",
        "Creative Director",
        "Entertainment Producer"
      ];
    case 4:
      return [
        "Engineer",
        "Architect",
        "Financial Analyst",
        "Systems Administrator",
        "Construction Manager",
        "Accountant",
        "Project Planner",
        "Quality Control Manager",
        "Database Administrator",
        "Real Estate Developer"
      ];
    case 5:
      return [
        "Travel Guide",
        "Digital Nomad",
        "Journalist",
        "Sales Representative",
        "Event Planner",
        "Adventure Tour Leader",
        "Marketing Manager",
        "Communications Director",
        "Foreign Correspondent",
        "Social Media Manager"
      ];
    case 6:
      return [
        "Teacher",
        "Healthcare Provider",
        "Interior Designer",
        "Chef/Restaurateur",
        "Family Counselor",
        "Nurse",
        "Social Worker",
        "Wedding Planner",
        "Child Care Provider",
        "Home Designer"
      ];
    case 7:
      return [
        "Researcher",
        "Scientist",
        "Philosopher",
        "Technical Analyst",
        "Strategic Consultant",
        "Professor",
        "Data Scientist",
        "Investigator",
        "Technology Researcher",
        "Mystery Writer"
      ];
    case 8:
      return [
        "Investment Banker",
        "Real Estate Developer",
        "Business Consultant",
        "Corporate Lawyer",
        "Stock Trader",
        "CEO",
        "Financial Manager",
        "Business Owner",
        "Executive Director",
        "Venture Capitalist"
      ];
    case 9:
      return [
        "Humanitarian",
        "International Relations",
        "Non-profit Director",
        "Environmental Scientist",
        "Religious Leader",
        "World Health Worker",
        "Human Rights Advocate",
        "Charity Organizer",
        "Global Education Coordinator",
        "Peace Corps Worker"
      ];
    case 11:
      return [
        "Spiritual Teacher",
        "Motivational Speaker",
        "Life Coach",
        "Political Leader",
        "Religious Advisor",
        "Inspirational Writer",
        "Meditation Guide",
        "Spiritual Counselor",
        "Visionary Leader",
        "Humanitarian Leader"
      ];
    case 22:
      return [
        "Visionary Architect",
        "Global Business Leader",
        "Innovative Engineer",
        "International Developer",
        "Technology Pioneer",
        "World Leader",
        "Philanthropist",
        "Scientific Innovator",
        "Global Project Manager",
        "Revolutionary Inventor"
      ];
    case 33:
      return [
        "Spiritual Leader",
        "Humanitarian Leader",
        "Global Education Director",
        "Peace Ambassador",
        "Transformational Coach",
        "World Healer",
        "Spiritual Guide",
        "Global Peace Worker",
        "Universal Teacher",
        "Enlightened Leader"
      ];
    default:
      console.log("No occupations found for lifePath:", number);
      return [];
  }
};