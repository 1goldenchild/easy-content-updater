import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useMemo } from "react";

interface CareerCompatibilityProps {
  lifePath: string;
  isVisible: boolean;
}

const allCareerPaths: Record<string, string[]> = {
  "1": [
    "CEO", "Coach", "Professional Athlete", "Secret Spy", "Military",
    "Executive", "Lawyer", "Judge", "Construction", "Influencer"
  ],
  "2": [
    "Doctor", "Charity Work", "Journalism", "Human Resources", "Veterinarian",
    "Therapist", "Athlete", "Trainer", "Artist"
  ],
  "3": [
    "Radio Host", "Sales", "Blogger", "Writer", "Podcaster",
    "Actor", "Negotiator", "Therapist", "Artist", "Nomad Entrepreneur", "Comedian"
  ],
  "4": [
    "Policeman", "Lawyer", "Firefighter", "CEO", "Construction Worker",
    "Secret Spy", "Architect", "Military", "Detective", "Cybersecurity",
    "Bodybuilder", "Politics", "Coach"
  ],
  "5": [
    "Flight Attendant", "Pilot", "Internet Influencer", "YouTuber", "Model",
    "Nomad Entrepreneur", "E-commerce", "Crypto", "Affiliate Marketing",
    "Blogger", "Actor", "Freedom Fighter", "Truck Owner Operator", "Eco Researcher"
  ],
  "6": [
    "Doctor", "Therapist", "Charity Work", "Investor", "Chef",
    "Restaurant Owner", "CEO", "Child Care Provider", "Nurse"
  ],
  "7": [
    "Scientist", "Preacher", "Inventor", "Programmer", "Astrophysicist",
    "Rocket Scientist", "Teacher", "Researcher", "Doctor", "Philosopher",
    "Cybersecurity", "Financial Analyst", "Systems Administrator"
  ],
  "8": [
    "Banker", "Entrepreneur", "CEO", "Executive", "Insurance",
    "E-commerce", "Investor", "Sergeant", "Construction Worker", "Pilot",
    "Politics", "Preacher", "Scientist", "Judge", "Attorney", "Politician",
    "Financial Analyst"
  ],
  "9": [
    "Entrepreneur", "Philosopher", "Pilot", "Technology", "Crypto",
    "E-commerce", "Detective", "Real Estate Developer", "Investor", "Executive",
    "Cybersecurity", "Influencer", "Artist", "Astrophysicist", "Systems Administrator"
  ],
  "11": [
    "Sales", "TV", "Social Media", "CEO", "Executive",
    "Entrepreneur", "Philosopher", "Preacher", "Therapist", "Politics", "Influencer"
  ],
  "22": [
    "Sergeant", "Owner Operator", "Architect", "Executive", "CEO",
    "Construction Manager", "Real Estate Developer", "Engineer", "Bodybuilder", "Crypto"
  ],
  "33": [
    "Inventor", "Teacher", "Sales", "CEO", "Artist",
    "Singer", "Podcaster", "YouTuber", "Researcher", "E-commerce",
    "Crypto", "Politics", "Influencer", "Trainer", "Preacher",
    "Astrophysicist", "Financial Analyst", "Systems Administrator"
  ]
};

const getRandomCareers = (careers: string[], count: number = 5): string[] => {
  const shuffled = [...careers].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

const CareerCompatibility = ({ lifePath, isVisible }: CareerCompatibilityProps) => {
  const careers = useMemo(() => {
    if (!allCareerPaths[lifePath]) return null;
    
    const allCareers = allCareerPaths[lifePath];
    const recommended = getRandomCareers(allCareers, 5);
    
    // Get challenging careers from other life paths
    const otherPaths = Object.keys(allCareerPaths).filter(path => path !== lifePath);
    const randomPath = otherPaths[Math.floor(Math.random() * otherPaths.length)];
    const challenging = getRandomCareers(allCareerPaths[randomPath], 5);
    
    return {
      best: recommended,
      worst: challenging
    };
  }, [lifePath]);

  if (!isVisible || !careers) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#1a1f2c] to-[#2d3748] p-8 shadow-2xl"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50" />
      
      <div className="relative z-10">
        <h3 className="text-3xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Career Compatibility
          </span>
        </h3>

        <div className="grid grid-cols-1 gap-8">
          {/* Best Matches */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-8 h-8 text-green-400" />
              <h4 className="text-xl font-semibold text-green-400">Recommended Careers</h4>
            </div>
            <div className="space-y-3">
              {careers.best.map((career, index) => (
                <motion.div
                  key={career}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg transform transition-all duration-300 group-hover:scale-105" />
                  <div className="relative flex items-center gap-4 p-4 rounded-lg backdrop-blur-sm border border-green-500/20">
                    <Briefcase className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform" />
                    <span className="text-lg font-medium text-white group-hover:text-green-400 transition-colors">
                      {career}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Challenging Careers */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-8 h-8 text-red-400" />
              <h4 className="text-xl font-semibold text-red-400">Challenging Careers</h4>
            </div>
            <div className="space-y-3">
              {careers.worst.map((career, index) => (
                <motion.div
                  key={career}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-rose-500/20 rounded-lg transform transition-all duration-300 group-hover:scale-105" />
                  <div className="relative flex items-center gap-4 p-4 rounded-lg backdrop-blur-sm border border-red-500/20">
                    <Briefcase className="w-6 h-6 text-red-400 group-hover:scale-110 transition-transform" />
                    <span className="text-lg font-medium text-white group-hover:text-red-400 transition-colors">
                      {career}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CareerCompatibility;