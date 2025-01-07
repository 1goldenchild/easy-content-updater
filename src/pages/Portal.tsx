import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { toast } from "sonner"
import NumerologyResults from "@/components/numerology/NumerologyResults"
import CompatibilityChart from "@/components/numerology/CompatibilityChart"
import CountryCompatibility from "@/components/numerology/CountryCompatibility"
import CarCompatibility from "@/components/numerology/CarCompatibility"
import OccupationGuidance from "@/components/numerology/OccupationGuidance"
import DateSelector from "@/components/numerology/DateSelector"
import ProgressIndicator from "@/components/numerology/ProgressIndicator"
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

  useEffect(() => {
    // Reset scroll position when component mounts
    window.scrollTo(0, 0)
  }, [])

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
      <div className="flex">
        {showResults && <ProgressIndicator />}
        <div id="portal-content" className="flex-1 max-w-7xl mx-auto space-y-8">
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

            <div id="results">
              <NumerologyResults 
                lifePath={results.lifePath}
                partialEnergy={results.partialEnergy}
                secretNumber={results.secretNumber}
                chineseZodiac={results.chineseZodiac}
                isVisible={showResults}
              />
            </div>
          </motion.div>

          {showResults && (
            <>
              <div id="occupation">
                <OccupationGuidance
                  lifePath={results.lifePath}
                  isVisible={showResults}
                />
              </div>
              
              <div id="compatibility">
                <CompatibilityChart 
                  lifePath={results.lifePath}
                  isVisible={showResults}
                />
              </div>

              <div id="country">
                <CountryCompatibility
                  chineseZodiac={results.chineseZodiac}
                  isVisible={showResults}
                />
              </div>

              <div id="car">
                <CarCompatibility
                  chineseZodiac={results.chineseZodiac}
                  isVisible={showResults}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Portal