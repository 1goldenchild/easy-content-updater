import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { motion } from "framer-motion"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const CollectInfo = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [date, setDate] = useState<Date>()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!name || !email || !date) {
      toast.error("Please fill in all fields")
      return
    }

    // For now just show success - we'll add Supabase integration later
    toast.success("Information submitted successfully!")
    console.log({ name, email, date })
  }

  return (
    <div className="flex-1 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md space-y-8 bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]">
            Get Your Personalized Analysis
          </h2>
          <p className="mt-2 text-white/70">
            Enter your details below to receive your numerology insights
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="bg-white/5 border-white/10"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="bg-white/5 border-white/10"
            />
          </div>

          <div className="space-y-2">
            <Label>Date of Birth</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-between text-left font-normal bg-white/5 border-white/10 hover:bg-white/10",
                    !date && "text-muted-foreground"
                  )}
                >
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  captionLayout="dropdown-buttons"
                  fromYear={1900}
                  toYear={new Date().getFullYear()}
                  classNames={{
                    caption: "flex justify-center pt-1 relative items-center px-8",
                    caption_label: "text-sm font-medium",
                    nav: "space-x-1 flex items-center",
                    nav_button: cn(
                      "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 hover:bg-accent"
                    ),
                    nav_button_previous: "absolute left-1",
                    nav_button_next: "absolute right-1",
                    table: "w-full border-collapse space-y-1",
                    head_row: "flex",
                    head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
                    row: "flex w-full mt-2",
                    cell: cn(
                      "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent/50",
                      "first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
                    ),
                    day: cn(
                      "h-8 w-8 p-0 font-normal aria-selected:opacity-100 hover:bg-accent rounded-md"
                    ),
                    day_range_end: "day-range-end",
                    day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                    day_today: "bg-accent text-accent-foreground",
                    day_outside: "text-muted-foreground opacity-50",
                    day_disabled: "text-muted-foreground opacity-50",
                    day_hidden: "invisible",
                  }}
                  disabled={(date) =>
                    date > new Date() || date < new Date("1900-01-01")
                  }
                />
              </PopoverContent>
            </Popover>
          </div>

          <Button 
            type="submit"
            className="w-full bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] hover:from-[#8B5CF6] hover:to-[#6E59A5]"
          >
            Get Your Analysis
          </Button>
        </form>
      </motion.div>
    </div>
  )
}

export default CollectInfo