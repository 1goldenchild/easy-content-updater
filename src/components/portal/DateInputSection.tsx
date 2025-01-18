import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ReloadIcon } from "@radix-ui/react-icons";

interface DateInputSectionProps {
  onEmailSubmit: (email: string) => void;
  isLoading: boolean;
}

const DateInputSection = ({ onEmailSubmit, isLoading }: DateInputSectionProps) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    onEmailSubmit(email);
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
          <Button 
            type="submit" 
            className="w-full"
            disabled={isLoading}
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