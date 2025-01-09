import { useState } from "react";
import { Input } from "@/components/ui/input";

interface DateSelectorProps {
  date?: Date;
  setDate: (date: Date) => void;
  onCalculate?: () => void;
}

const DateSelector = ({ date, setDate, onCalculate }: DateSelectorProps) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleDateChange = (
    value: string,
    setter: (value: string) => void,
    maxLength: number
  ) => {
    const numericValue = value.replace(/\D/g, "");
    if (numericValue.length <= maxLength) {
      setter(numericValue);
      updateDate(
        setter === setDay ? numericValue : day,
        setter === setMonth ? numericValue : month,
        setter === setYear ? numericValue : year
      );
    }
  };

  const updateDate = (
    newDay: string,
    newMonth: string,
    newYear: string
  ) => {
    if (newDay && newMonth && newYear && 
        newYear.length === 4 && 
        newMonth.length >= 1 && 
        newDay.length >= 1) {
      const dateObj = new Date(parseInt(newYear), parseInt(newMonth) - 1, parseInt(newDay));
      if (!isNaN(dateObj.getTime())) {
        setDate(dateObj);
        // Only call onCalculate if it's provided
        if (onCalculate) {
          onCalculate();
        }
      }
    }
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-white/70">
        Date of Birth
      </label>
      <div className="flex gap-4">
        <div>
          <Input
            type="text"
            placeholder="DD"
            value={day}
            onChange={(e) => handleDateChange(e.target.value, setDay, 2)}
            className="w-20"
            maxLength={2}
          />
        </div>
        <div>
          <Input
            type="text"
            placeholder="MM"
            value={month}
            onChange={(e) => handleDateChange(e.target.value, setMonth, 2)}
            className="w-20"
            maxLength={2}
          />
        </div>
        <div>
          <Input
            type="text"
            placeholder="YYYY"
            value={year}
            onChange={(e) => handleDateChange(e.target.value, setYear, 4)}
            className="w-28"
            maxLength={4}
          />
        </div>
      </div>
    </div>
  );
};

export default DateSelector;