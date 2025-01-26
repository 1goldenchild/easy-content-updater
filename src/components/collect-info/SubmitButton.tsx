import { Button } from "@/components/ui/button";

interface SubmitButtonProps {
  isLoading: boolean;
}

const SubmitButton = ({ isLoading }: SubmitButtonProps) => {
  return (
    <div className="space-y-2">
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] hover:from-[#7C4DEF] hover:to-[#D042E8]"
      >
        {isLoading ? "Processing..." : "Get Your Analysis"}
      </Button>
      <p className="text-xs text-white/60 text-center">
        By submitting, you agree to receive emails from Numerology 33. You can unsubscribe anytime.
      </p>
    </div>
  );
};

export default SubmitButton;