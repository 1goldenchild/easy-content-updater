import { motion } from "framer-motion";
import { Briefcase, Award, Star } from "lucide-react";

interface OccupationGuidanceProps {
  lifePath: number;
  isVisible: boolean;
}

const OccupationGuidance = ({ lifePath, isVisible }: OccupationGuidanceProps) => {
  console.log("OccupationGuidance rendering for lifePath:", lifePath);
  
  const getOccupations = (number: number) => {
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

  if (!isVisible) return null;

  const occupations = getOccupations(lifePath);
  console.log("Retrieved occupations:", occupations);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full mt-8"
    >
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 backdrop-blur-sm border border-white/10 p-6">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-6 h-6 text-purple-400" />
            <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
              Best Career Paths
            </h3>
          </div>

          <div className="grid gap-4">
            {occupations.map((occupation, index) => (
              <motion.div
                key={occupation}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                  {index === 0 ? (
                    <Award className="w-5 h-5 text-purple-400" />
                  ) : (
                    <Star className="w-5 h-5 text-purple-400" />
                  )}
                </div>
                <span className="text-white/90 group-hover:text-white transition-colors">
                  {occupation}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OccupationGuidance;