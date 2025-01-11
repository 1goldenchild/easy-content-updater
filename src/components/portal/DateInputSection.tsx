import { useState } from "react";
import DateSelector from "@/components/numerology/DateSelector";
import { toast } from "sonner";

interface DateInputSectionProps {
  onCalculate: (date: Date) => void;
}

const DateInputSection = ({ onCalculate }: DateInputSectionProps) => {
  const [date, setDate] = useState<Date>();

  const handleCalculate = () => {
    if (!date) {
      toast.error("Please select your date of birth");
      return;
    }
    onCalculate(date);
  };

  return (
    <DateSelector 
      date={date}
      setDate={setDate}
      onCalculate={handleCalculate}
    />
  );
};

export default DateInputSection;