import { Button } from "@/components/ui/button";

interface SubmitButtonProps {
  isLoading: boolean;
  text?: string;
}

const SubmitButton = ({ isLoading, text = "Get Your Analysis" }: SubmitButtonProps) => {
  return (
    <div className="space-y-2">
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] hover:from-[#7C4DEF] hover:to-[#D042E8]"
      >
        {isLoading ? "Processing..." : text}
      </Button>
      <p className="text-sm text-gray-400 text-center">
        By submitting, you agree to receive emails from Numerology 33. You can unsubscribe anytime.
      </p>
    </div>
  );
};

export default SubmitButton;