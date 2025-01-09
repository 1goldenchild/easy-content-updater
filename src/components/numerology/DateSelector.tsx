import { useState, useRef, KeyboardEvent, ChangeEvent } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface DateSelectorProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  onCalculate: () => void;
}

const DateSelector = ({ date, setDate, onCalculate }: DateSelectorProps) => {
  const [day, setDay] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")
  
  const dayRef = useRef<HTMLInputElement>(null)
  const monthRef = useRef<HTMLInputElement>(null)
  const yearRef = useRef<HTMLInputElement>(null)

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: "day" | "month" | "year",
    maxLength: number,
    nextRef?: React.RefObject<HTMLInputElement>
  ) => {
    const value = e.target.value.replace(/\D/g, "")
    
    // Validate input based on field type
    if (field === "day" && parseInt(value) > 31) return
    if (field === "month" && parseInt(value) > 12) return
    
    // Update state based on field type
    if (field === "day") setDay(value)
    if (field === "month") setMonth(value)
    if (field === "year") setYear(value)

    // Auto-advance to next field
    if (value.length === maxLength && nextRef?.current) {
      nextRef.current.focus()
    }
  }

  const handleKeyDown = (
    e: KeyboardEvent<HTMLInputElement>,
    field: "day" | "month" | "year",
    prevRef?: React.RefObject<HTMLInputElement>
  ) => {
    if (e.key === "Backspace") {
      if (field === "day" && day === "" && prevRef?.current) {
        prevRef.current.focus()
      }
      if (field === "month" && month === "" && prevRef?.current) {
        prevRef.current.focus()
      }
      if (field === "year" && year === "" && prevRef?.current) {
        prevRef.current.focus()
      }
    }
  }

  const handleSubmit = () => {
    if (day && month && year && year.length === 4) {
      const dateObj = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
      if (!isNaN(dateObj.getTime())) {
        setDate(dateObj)
        onCalculate()
      }
    }
  }

  const isComplete = day.length === 2 && month.length === 2 && year.length === 4

  return (
    <div className="w-full max-w-md mx-auto px-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">What's your date of birth?</h2>
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="relative">
            <input
              ref={dayRef}
              type="text"
              value={day}
              onChange={(e) => handleInputChange(e, "day", 2, monthRef)}
              onKeyDown={(e) => handleKeyDown(e, "day")}
              placeholder="DD"
              maxLength={2}
              className="w-16 h-14 bg-white/5 border border-white/10 rounded-lg text-center text-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <span className="text-2xl text-white/50">/</span>
          <div className="relative">
            <input
              ref={monthRef}
              type="text"
              value={month}
              onChange={(e) => handleInputChange(e, "month", 2, yearRef)}
              onKeyDown={(e) => handleKeyDown(e, "month", dayRef)}
              placeholder="MM"
              maxLength={2}
              className="w-16 h-14 bg-white/5 border border-white/10 rounded-lg text-center text-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <span className="text-2xl text-white/50">/</span>
          <div className="relative">
            <input
              ref={yearRef}
              type="text"
              value={year}
              onChange={(e) => handleInputChange(e, "year", 4)}
              onKeyDown={(e) => handleKeyDown(e, "year", monthRef)}
              placeholder="YYYY"
              maxLength={4}
              className="w-20 h-14 bg-white/5 border border-white/10 rounded-lg text-center text-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          {isComplete && (
            <Button
              onClick={handleSubmit}
              className={cn(
                "ml-2 rounded-full w-10 h-10 p-0",
                "bg-gradient-to-r from-purple-500 to-pink-500",
                "hover:from-purple-600 hover:to-pink-600",
                "transition-all duration-300"
              )}
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default DateSelector