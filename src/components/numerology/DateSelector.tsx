import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DateSelectorProps {
  date?: Date;
  setDate: (date: Date) => void;
  onCalculate?: () => void;
}

const DateSelector = ({ date, setDate, onCalculate }: DateSelectorProps) => {
  const [day, setDay] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");

  // Generate arrays for days, months, and years
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, '0'));
  const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: 100 },
    (_, i) => (currentYear - i + 1).toString()
  );

  const updateDate = (newDay: string, newMonth: string, newYear: string) => {
    if (newDay && newMonth && newYear) {
      const dateObj = new Date(
        parseInt(newYear),
        parseInt(newMonth) - 1,
        parseInt(newDay)
      );
      if (!isNaN(dateObj.getTime())) {
        console.log("Setting new date:", dateObj);
        setDate(dateObj);
      }
    }
  };

  // Update date whenever day, month, or year changes
  useEffect(() => {
    updateDate(day, month, year);
  }, [day, month, year]);

  // Adjust days based on selected month and year
  const getDaysInMonth = (month: string, year: string): string[] => {
    if (!month || !year) return days;
    const daysInMonth = new Date(parseInt(year), parseInt(month), 0).getDate();
    return Array.from(
      { length: daysInMonth },
      (_, i) => (i + 1).toString().padStart(2, '0')
    );
  };

  // Array of English month names
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="space-y-4">
      <Label className="block text-sm font-medium text-white/70">
        Date of Birth
      </Label>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-1/3">
          <Select value={month} onValueChange={setMonth}>
            <SelectTrigger>
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent 
              className="max-h-[300px]" 
              position="popper"
            >
              {months.map((m) => (
                <SelectItem key={m} value={m}>
                  {monthNames[parseInt(m) - 1]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="w-full sm:w-1/3">
          <Select value={day} onValueChange={setDay}>
            <SelectTrigger>
              <SelectValue placeholder="Day" />
            </SelectTrigger>
            <SelectContent 
              className="max-h-[300px]"
              position="popper"
            >
              {getDaysInMonth(month, year).map((d) => (
                <SelectItem key={d} value={d}>
                  {d}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="w-full sm:w-1/3">
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger>
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent 
              className="max-h-[300px]"
              position="popper"
            >
              {years.map((y) => (
                <SelectItem key={y} value={y}>
                  {y}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      {onCalculate && (
        <Button 
          onClick={onCalculate}
          className="w-full bg-gradient-to-r from-[#0EA5E9] to-[#1EAEDB] hover:from-[#0C8BC7] hover:to-[#1A9AC2]"
        >
          Calculate
        </Button>
      )}
    </div>
  );
};

export default DateSelector;