import { useState, useEffect } from "react"
import { toast } from "sonner"
import NumerologyResults from "@/components/numerology/NumerologyResults"
import CountryCompatibility from "@/components/numerology/CountryCompatibility"
import CarCompatibility from "@/components/numerology/CarCompatibility"
import OccupationGuidance from "@/components/numerology/OccupationGuidance"
import DateSelector from "@/components/numerology/DateSelector"
import ProgressIndicator from "@/components/numerology/ProgressIndicator"
import PortalHeader from "@/components/portal/PortalHeader"
import CompatibilitySection from "@/components/portal/CompatibilitySection"
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
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center">
          {showResults && <ProgressIndicator />}
          <div className="w-full space-y-8">
            <PortalHeader />

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

            {showResults && (
              <>
                <div id="compatibility">
                  <CompatibilitySection
                    lifePath={results.lifePath}
                    isVisible={showResults}
                  />
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
  );
};

export default Portal;