import { useState } from "react";
import { toast } from "sonner";
import CollectInfoForm from "@/components/collect-info/CollectInfoForm";
import CollectInfoPreview from "@/components/collect-info/CollectInfoPreview";
import { 
  calculateLifePath, 
  calculatePartialEnergy, 
  calculateSecretNumber,
  getChineseZodiac 
} from "@/utils/numerologyCalculations";
import { supabase } from "@/integrations/supabase/client";

const CollectInfo = () => {
  const [showPreview, setShowPreview] = useState(false);

  const handleDateSubmit = async (date: Date) => {
    console.log("Calculating numerology for date:", date);
    
    // Calculate all numbers
    const lifePath = calculateLifePath(date);
    const partialEnergy = calculatePartialEnergy(date.getDate());
    const secretNumber = calculateSecretNumber(date);
    const chineseZodiac = getChineseZodiac(date.getFullYear());

    console.log("Calculated numbers:", {
      lifePath,
      partialEnergy,
      secretNumber,
      chineseZodiac
    });

    try {
      // Save to profiles table
      const { error } = await supabase
        .from('profiles')
        .update({
          date_of_birth: date.toISOString(),
          life_path: lifePath,
          partial_energy: partialEnergy,
          secret_number: secretNumber,
          chinese_zodiac: chineseZodiac
        })
        .eq('id', session?.user.id);

      if (error) throw error;

      toast.success("Your numerology reading has been saved!");
      setShowPreview(true);
    } catch (error) {
      console.error("Error saving profile:", error);
      toast.error("Failed to save your reading. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0F1117]">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {!showPreview ? (
            <CollectInfoForm onSubmit={handleDateSubmit} />
          ) : (
            <CollectInfoPreview />
          )}
        </div>
      </div>
    </div>
  );
};

export default CollectInfo;