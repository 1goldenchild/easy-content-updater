import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface DateSelectorProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  onCalculate: () => void;
}

const DateSelector = ({ date, setDate, onCalculate }: DateSelectorProps) => {
  const [input, setInput] = useState("")

  const handleNumberClick = (num: string) => {
    if (input.length < 8) {
      let newInput = input + num
      setInput(newInput)
      
      // Format as user types: DD/MM/YYYY
      if (newInput.length === 2 || newInput.length === 4) {
        newInput += "/"
        setInput(newInput)
      }
    }
  }

  const handleDelete = () => {
    if (input.length > 0) {
      let newInput = input.slice(0, -1)
      // Remove trailing slash if deleting
      if (newInput.endsWith("/")) {
        newInput = newInput.slice(0, -1)
      }
      setInput(newInput)
    }
  }

  const handleSubmit = () => {
    if (input.length === 10) { // DD/MM/YYYY format
      const [day, month, year] = input.split("/")
      const dateObj = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
      
      if (!isNaN(dateObj.getTime())) {
        setDate(dateObj)
        onCalculate()
      }
    }
  }

  const renderButton = (content: React.ReactNode, onClick: () => void, className?: string) => (
    <Button
      type="button"
      variant="outline"
      onClick={onClick}
      className={cn(
        "h-16 text-xl font-medium bg-white/5 border-white/10 hover:bg-white/10 transition-colors",
        className
      )}
    >
      {content}
    </Button>
  )

  return (
    <div className="space-y-6 max-w-md mx-auto">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">What's your date of birth?</h2>
        <div className="relative w-full h-14 bg-white/5 rounded-lg border border-white/10 mb-8">
          <input
            type="text"
            value={input}
            readOnly
            placeholder="DD/MM/YYYY"
            className="w-full h-full bg-transparent px-4 text-xl text-center"
          />
          {input.length === 10 && (
            <Button
              onClick={handleSubmit}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full w-10 h-10 p-0 bg-black hover:bg-gray-800"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <div key={num}>
            {renderButton(
              <div className="flex flex-col items-center">
                <span>{num}</span>
                <span className="text-xs opacity-60 mt-1">
                  {num === 1 ? "" :
                   num === 2 ? "ABC" :
                   num === 3 ? "DEF" :
                   num === 4 ? "GHI" :
                   num === 5 ? "JKL" :
                   num === 6 ? "MNO" :
                   num === 7 ? "PQRS" :
                   num === 8 ? "TUV" :
                   "WXYZ"}
                </span>
              </div>,
              () => handleNumberClick(num.toString())
            )}
          </div>
        ))}
        <div>{renderButton("＊", () => {})}</div>
        <div>{renderButton("0", () => handleNumberClick("0"))}</div>
        <div>
          {renderButton(
            <X className="h-6 w-6" />,
            handleDelete,
            "hover:bg-red-500/20"
          )}
        </div>
      </div>
    </div>
  )
}

export default DateSelector