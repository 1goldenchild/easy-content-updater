import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { toast } from "sonner"
import { supabase } from "@/integrations/supabase/client"
import NumerologyResults from "@/components/numerology/NumerologyResults"
import CompatibilityChart from "@/components/numerology/CompatibilityChart"
import CountryCompatibility from "@/components/numerology/CountryCompatibility"
import CarCompatibility from "@/components/numerology/CarCompatibility"
import OccupationGuidance from "@/components/numerology/OccupationGuidance"
import DateSelector from "@/components/numerology/DateSelector"
import ProgressIndicator from "@/components/numerology/ProgressIndicator"
import LoveCompatibility from "@/components/numerology/LoveCompatibility"
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
    window.scrollTo(0, 0)
  }, [])

  const handleCalculate = async () => {
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

    // Save results to Supabase
    try {
      const { error } = await supabase
        .from('user_readings')
        .insert([
          {
            date_of_birth: date.toISOString().split('T')[0],
            name: 'Anonymous', // You might want to add a name input field later
            email: 'anonymous@example.com', // You might want to add an email input field later
          }
        ])

      if (error) {
        console.error("Error saving to Supabase:", error)
        toast.error("Failed to save your reading")
        throw error
      }

      console.log("Successfully saved reading to database")
      toast.success("Your reading has been saved!")
    } catch (error) {
      console.error("Error in save operation:", error)
      // Continue showing results even if save fails
    }

    setResults({
      lifePath,
      partialEnergy,
      secretNumber,
      chineseZodiac
    })
    setShowResults(true)
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center">
          {showResults && <ProgressIndicator />}
          <div className="w-full space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10"
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
                <div id="compatibility" className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10"
                  >
                    <h3 className="text-2xl font-bold text-white/90 mb-6">Compatibility Analysis</h3>
                    <div className="space-y-8">
                      <CompatibilityChart 
                        lifePath={results.lifePath}
                        isVisible={showResults}
                      />
                      <LoveCompatibility
                        lifePathNumber={results.lifePath}
                      />
                    </div>
                  </motion.div>
                </div>

                <div id="occupation">
                  <OccupationGuidance
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
    </div>
  )
}

export default Portal