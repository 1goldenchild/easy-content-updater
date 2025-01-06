import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { motion } from "framer-motion"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import NumerologyResults from "@/components/numerology/NumerologyResults"
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
    <div className="flex-1 flex items-center justify-center p-4 min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md space-y-8 bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]">
            Numerology Calculator
          </h2>
          <p className="mt-2 text-white/70">
            Discover your life path number and more
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white/90">Date of Birth</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-between text-left font-normal bg-[#1A1F2C] border-white/10 hover:bg-[#252a3a] transition-colors",
                    !date && "text-muted-foreground"
                  )}
                >
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                  <CalendarIcon className="h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent 
                className="w-auto p-0 bg-[#1A1F2C] border-white/10" 
                align="start"
              >
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  captionLayout="dropdown-buttons"
                  fromYear={1900}
                  toYear={new Date().getFullYear()}
                  classNames={{
                    months: "space-y-4",
                    caption: "relative flex items-center justify-center pt-4 pb-2 px-8",
                    caption_label: "text-base font-medium text-white/90",
                    nav: "flex items-center gap-1",
                    nav_button: cn(
                      "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 hover:bg-white/10 rounded-md transition-colors",
                      "disabled:opacity-20 disabled:hover:bg-transparent"
                    ),
                    nav_button_previous: "absolute left-1",
                    nav_button_next: "absolute right-1",
                    table: "w-full border-collapse",
                    head_row: "flex",
                    head_cell: "text-white/50 rounded-md w-9 font-normal text-[0.8rem] p-0",
                    row: "flex w-full mt-2",
                    cell: cn(
                      "relative p-0 text-center text-sm focus-within:relative focus-within:z-20",
                      "first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md",
                      "[&:has([aria-selected])]:bg-white/10"
                    ),
                    day: cn(
                      "h-9 w-9 p-0 font-normal rounded-md transition-colors",
                      "hover:bg-white/10 focus:bg-white/10",
                      "aria-selected:opacity-100"
                    ),
                    day_selected: "bg-white/20 text-white hover:bg-white/20 hover:text-white focus:bg-white/20",
                    day_today: "bg-white/5 text-white",
                    day_outside: "text-white/20 opacity-50 aria-selected:bg-white/5 aria-selected:text-white/20",
                    day_disabled: "text-white/20 opacity-50 hover:bg-transparent",
                    day_range_middle: "aria-selected:bg-white/5 aria-selected:text-white",
                    day_hidden: "invisible",
                    dropdown: "bg-[#1A1F2C] border border-white/10 rounded-md p-1",
                    dropdown_month: "bg-[#1A1F2C] text-white hover:bg-white/10 rounded-md px-2 py-1 text-sm transition-colors",
                    dropdown_year: "bg-[#1A1F2C] text-white hover:bg-white/10 rounded-md px-2 py-1 text-sm transition-colors",
                    dropdown_icon: "opacity-50 group-hover:opacity-100 transition-opacity"
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>

          <Button 
            onClick={handleCalculate}
            className="w-full bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] hover:from-[#8B5CF6] hover:to-[#6E59A5]"
          >
            Calculate
          </Button>

          <NumerologyResults 
            lifePath={results.lifePath}
            partialEnergy={results.partialEnergy}
            secretNumber={results.secretNumber}
            chineseZodiac={results.chineseZodiac}
            isVisible={showResults}
          />
        </div>
      </motion.div>
    </div>
  )
}

export default Portal