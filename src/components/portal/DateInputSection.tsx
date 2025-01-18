import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ReloadIcon } from "@radix-ui/react-icons";
import { calculateLifePath, calculatePartialEnergy, calculateSecretNumber, getChineseZodiac } from "@/utils/numerologyCalculations";
import DateSelector from "@/components/numerology/DateSelector";

interface DateInputSectionProps {
  onResultsCalculated: (results: {
    lifePath: number;
    partialEnergy: number;
    secretNumber: number;
    chineseZodiac: string;
  }, date: Date) => void;
  isLoading?: boolean;
}

const DateInputSection = ({ onResultsCalculated, isLoading = false }: DateInputSectionProps) => {
  const [email, setEmail] = useState("");
  const [date, setDate] = useState<Date>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !date) return;

    const lifePath = calculateLifePath(date);
    const partialEnergy = calculatePartialEnergy(date.getDate());
    const secretNumber = calculateSecretNumber(date);
    const chineseZodiac = getChineseZodiac(date.getFullYear());

    onResultsCalculated(
      {
        lifePath,
        partialEnergy,
        secretNumber,
        chineseZodiac,
      },
      date
    );
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white/5 p-8 rounded-lg border border-white/10">
        <h2 className="text-xl font-semibold text-white/90 mb-6 text-center">
          Access Your Reading
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/5 border-white/10 text-white"
              required
            />
          </div>
          <DateSelector date={date} setDate={setDate} />
          <Button 
            type="submit" 
            className="w-full"
            disabled={isLoading || !date}
          >
            {isLoading ? (
              <>
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                Loading...
              </>
            ) : (
              "Access Reading"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default DateInputSection;