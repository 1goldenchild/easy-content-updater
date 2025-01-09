import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"
import { cn } from "@/lib/utils"

interface CareerCompatibilityProps {
  lifePath: number
  isVisible: boolean
}

const careerPaths = {
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
    "Policeman",
    "Lawyer",
    "Firefighter",
    "CEO",
    "Construction Worker",
    "Secret Spy",
    "Architect",
    "Military",
    "Detective",
    "Cybersecurity",
    "Bodybuilder",
    "Politics",
    "Coach"
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
} as const

const getRandomCareers = (careers: string[], count: number) => {
  const shuffled = [...careers].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

const CareerCompatibility = ({ lifePath, isVisible }: CareerCompatibilityProps) => {
  const [recommendedCareers, setRecommendedCareers] = useState<string[]>([])
  
  useEffect(() => {
    console.log("Calculating career recommendations for lifePath:", lifePath)
    const lifePathCareers = careerPaths[lifePath as keyof typeof careerPaths] || careerPaths[4]
    const selectedCareers = getRandomCareers(lifePathCareers, 5)
    console.log("Selected careers:", selectedCareers)
    setRecommendedCareers(selectedCareers)
  }, [lifePath])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="w-full bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10"
    >
      <div className="flex items-center gap-3 mb-6">
        <Briefcase className="w-6 h-6 text-purple-400" />
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Career Compatibility
        </h2>
      </div>

      <div className="space-y-4">
        <p className="text-white/70">
          Based on your Life Path Number {lifePath}, here are your recommended career paths:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recommendedCareers.map((career, index) => (
            <motion.div
              key={career}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className={cn(
                "p-4 rounded-lg border border-white/10",
                "bg-gradient-to-br from-purple-500/10 to-pink-500/10",
                "hover:from-purple-500/20 hover:to-pink-500/20",
                "transition-all duration-300"
              )}
            >
              <p className="text-lg font-medium text-white">{career}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default CareerCompatibility