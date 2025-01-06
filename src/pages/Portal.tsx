import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { motion } from "framer-motion"
import { format } from "date-fns"
import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { toast } from "sonner"

const Portal = () => {
  const [date, setDate] = useState<Date>()
  const [lifePath, setLifePath] = useState<string>("")
  const [partialEnergies, setPartialEnergies] = useState<{
    month: number;
    day: number;
    year: number;
  }>({ month: 0, day: 0, year: 0 })

  const calculateLifePath = (birthDate: Date) => {
    console.log("Calculating life path for date:", birthDate)
    
    const day = birthDate.getDate()
    const month = birthDate.getMonth() + 1
    const year = birthDate.getFullYear()

    // Calculate partial energies first
    const dayEnergy = reduceToSingleDigit(day)
    const monthEnergy = reduceToSingleDigit(month)
    const yearEnergy = reduceToSingleDigit(year)

    setPartialEnergies({
      day: dayEnergy,
      month: monthEnergy,
      year: yearEnergy
    })

    // Calculate life path number
    const sum = dayEnergy + monthEnergy + yearEnergy
    const lifePathNumber = reduceToSingleDigit(sum)

    console.log("Life path calculation:", {
      day: dayEnergy,
      month: monthEnergy,
      year: yearEnergy,
      final: lifePathNumber
    })

    return lifePathNumber.toString()
  }

  const reduceToSingleDigit = (num: number): number => {
    if (num <= 9) return num
    return reduceToSingleDigit(
      num.toString().split("").reduce((sum, digit) => sum + parseInt(digit), 0)
    )
  }

  const handleCalculate = () => {
    if (!date) {
      toast.error("Please select your date of birth")
      return
    }

    const result = calculateLifePath(date)
    setLifePath(result)
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
            Life Path Calculator
          </h2>
          <p className="mt-2 text-white/70">
            Discover your life path number and partial energies
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
                  components={{
                    IconLeft: () => <ChevronLeft className="h-4 w-4" />,
                    IconRight: () => <ChevronRight className="h-4 w-4" />,
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

          {lifePath && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4 p-4 rounded-lg bg-white/5 border border-white/10"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white/90">Your Life Path Number</h3>
                <p className="text-4xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]">
                  {lifePath}
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                <div className="text-center">
                  <p className="text-sm text-white/70">Month Energy</p>
                  <p className="text-xl font-semibold text-white/90">{partialEnergies.month}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-white/70">Day Energy</p>
                  <p className="text-xl font-semibold text-white/90">{partialEnergies.day}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-white/70">Year Energy</p>
                  <p className="text-xl font-semibold text-white/90">{partialEnergies.year}</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default Portal