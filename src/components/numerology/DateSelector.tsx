import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface DateSelectorProps {
  date?: Date;
  setDate: (date: Date) => void;
  onCalculate?: () => void;
}

const DateSelector = ({ date, setDate, onCalculate }: DateSelectorProps) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const monthInputRef = useRef<HTMLInputElement>(null);
  const yearInputRef = useRef<HTMLInputElement>(null);

  const handleDateChange = (
    value: string,
    setter: (value: string) => void,
    maxLength: number,
    nextRef?: React.RefObject<HTMLInputElement>
  ) => {
    const numericValue = value.replace(/\D/g, "");
    if (numericValue.length <= maxLength) {
      setter(numericValue);
      updateDate(
        setter === setDay ? numericValue : day,
        setter === setMonth ? numericValue : month,
        setter === setYear ? numericValue : year
      );
      
      // Auto-focus next input when current input is filled
      if (numericValue.length === maxLength && nextRef?.current) {
        nextRef.current.focus();
      }
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
            onChange={(e) => handleDateChange(e.target.value, setDay, 2, monthInputRef)}
            className="w-20"
            maxLength={2}
          />
        </div>
        <div>
          <Input
            ref={monthInputRef}
            type="text"
            placeholder="MM"
            value={month}
            onChange={(e) => handleDateChange(e.target.value, setMonth, 2, yearInputRef)}
            className="w-20"
            maxLength={2}
          />
        </div>
        <div>
          <Input
            ref={yearInputRef}
            type="text"
            placeholder="YYYY"
            value={year}
            onChange={(e) => handleDateChange(e.target.value, setYear, 4)}
            className="w-28"
            maxLength={4}
          />
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