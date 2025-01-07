import { useState } from "react"
import { motion } from "framer-motion"
import { toast } from "sonner"
import NumerologyResults from "@/components/numerology/NumerologyResults"
import CompatibilityChart from "@/components/numerology/CompatibilityChart"
import CountryCompatibility from "@/components/numerology/CountryCompatibility"
import CarCompatibility from "@/components/numerology/CarCompatibility"
import DateSelector from "@/components/numerology/DateSelector"
import { 
  calculateLifePath, 
  calculatePartialEnergy, 
  calculateSecretNumber, 
  getChineseZodiac 
} from "@/utils/numerologyCalculations"

const Portal = () => {
  const [date, setDate] = useState<Date>()
  const [showResults, setShowResults] = useState(false)
  const [results, setResults] = useState({
    lifePath: 0,
    partialEnergy: 0,
    secretNumber: 0,
    chineseZodiac: ""
  })

  // Define numerology stats based on results
  const numerologyStats = [
    { subject: 'Leadership', value: results.lifePath === 1 ? 9 : 5 },
    { subject: 'Intuition', value: results.lifePath === 2 ? 9 : 6 },
    { subject: 'Creativity', value: results.lifePath === 3 ? 9 : 4 },
    { subject: 'Stability', value: results.lifePath === 4 ? 9 : 7 },
    { subject: 'Freedom', value: results.lifePath === 5 ? 9 : 5 },
    { subject: 'Harmony', value: results.lifePath === 6 ? 9 : 6 },
    { subject: 'Analysis', value: results.lifePath === 7 ? 9 : 4 },
    { subject: 'Power', value: results.lifePath === 8 ? 9 : 5 },
    { subject: 'Wisdom', value: results.lifePath === 9 ? 9 : 6 }
  ];

  const handleCalculate = () => {
    if (!date) {
      toast.error("Please select your date of birth")
      return
    }

    console.log("Calculating numerology for date:", date)
    
    const lifePath = calculateLifePath(date)
    const partialEnergy = calculatePartialEnergy(date.getDate())
    const secretNumber = calculateSecretNumber(date)
    const chineseZodiac = getChineseZodiac(date.getFullYear())

    console.log("Calculation results:", {
      lifePath,
      partialEnergy,
      secretNumber,
      chineseZodiac
    })

    setResults({
      lifePath,
      partialEnergy,
      secretNumber,
      chineseZodiac
    })
    setShowResults(true)
    toast.success("Calculation complete!")
  }

  return (
    <div className="flex-1 p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full space-y-8 bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]">
              Numerology Calculator
            </h2>
            <p className="mt-2 text-white/70">
              Discover your life path number and more
            </p>
          </div>

          <DateSelector 
            date={date}
            setDate={setDate}
            onCalculate={handleCalculate}
          />

          <NumerologyResults 
            lifePath={results.lifePath}
            partialEnergy={results.partialEnergy}
            secretNumber={results.secretNumber}
            chineseZodiac={results.chineseZodiac}
            isVisible={showResults}
          />
        </motion.div>

        {showResults && (
          <>
            <CompatibilityChart 
              lifePath={results.lifePath}
              isVisible={showResults}
            />

            <CountryCompatibility
              chineseZodiac={results.chineseZodiac}
              isVisible={showResults}
            />

            <CarCompatibility
              chineseZodiac={results.chineseZodiac}
              isVisible={showResults}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default Portal
