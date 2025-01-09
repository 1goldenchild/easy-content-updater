import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface DateSelectorProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  onCalculate: () => void;
}

const DateSelector = ({ date, setDate, onCalculate }: DateSelectorProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-white/90">Date of Birth</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-between text-left font-normal bg-[#1A1F2C] border-white/10 hover:bg-[#252a3a] transition-colors relative overflow-hidden group",
                !date && "text-muted-foreground"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-shine" />
              <div className="relative flex items-center">
                {date ? (
                  <span className="flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4 opacity-70" />
                    <span className="font-medium">{format(date, "MMMM d, yyyy")}</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4 opacity-50" />
                    <span>Pick your birth date</span>
                  </span>
                )}
              </div>
              <div className="relative ml-auto pl-3 opacity-60">
                <CalendarIcon className="h-4 w-4" />
              </div>
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
                  "h-9 w-9 p-0 font-normal rounded-md transition-colors hover:bg-white/10",
                  "aria-selected:opacity-100 aria-selected:bg-white/20 aria-selected:text-white hover:aria-selected:bg-white/20"
                ),
                day_selected: "bg-white/20 text-white hover:bg-white/20 hover:text-white focus:bg-white/20",
                day_today: "bg-white/5 text-white",
                day_outside: "text-white/20 opacity-50 aria-selected:bg-white/5 aria-selected:text-white/20",
                day_disabled: "text-white/20 opacity-50 hover:bg-transparent",
                day_range_middle: "aria-selected:bg-white/5 aria-selected:text-white",
                day_hidden: "invisible",
                dropdown: "bg-[#1A1F2C] border border-white/10 rounded-md p-1 shadow-lg",
                dropdown_month: "bg-[#1A1F2C] text-white hover:bg-white/10 rounded-md px-2 py-1 text-sm transition-colors cursor-pointer",
                dropdown_year: "bg-[#1A1F2C] text-white hover:bg-white/10 rounded-md px-2 py-1 text-sm transition-colors cursor-pointer",
                dropdown_icon: "opacity-50 group-hover:opacity-100 transition-opacity"
              }}
            />
          </PopoverContent>
        </Popover>
      </div>

      <Button 
        onClick={onCalculate}
        disabled={!date}
        className={cn(
          "w-full relative overflow-hidden group",
          "bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] hover:from-[#8B5CF6] hover:to-[#6E59A5]"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-shine" />
        <span className="relative">
          {date ? "Calculate Your Numbers" : "Please Select Your Birth Date"}
        </span>
      </Button>
    </div>
  );
};

export default DateSelector;