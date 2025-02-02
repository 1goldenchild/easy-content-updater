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
      // Create a user reading entry
      const { error } = await supabase
        .from('user_readings')
        .insert([{
          date_of_birth: date.toISOString(),
          name: 'Anonymous', // We'll update this later when we collect more info
          email: 'anonymous@example.com' // We'll update this later when we collect more info
        }]);

      if (error) throw error;

      toast.success("Your numerology reading is ready!");
      setShowPreview(true);
    } catch (error) {
      console.error("Error saving reading:", error);
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