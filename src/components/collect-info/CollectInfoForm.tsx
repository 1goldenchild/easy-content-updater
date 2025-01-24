import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import DateSelector from "@/components/numerology/DateSelector";
import FormFields from "./FormFields";
import SubmitButton from "./SubmitButton";
import { FormData } from "./types";
import { useNavigate } from "react-router-dom"; // Add this import

const CollectInfoForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate(); // Add this
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
  });
  const [date, setDate] = useState<Date>();

  const handleFieldChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submission started");
    
    if (!date) {
      console.log("Date validation failed - no date selected");
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please select your date of birth.",
      });
      return;
    }

    if (!formData.name || !formData.email) {
      console.log("Form validation failed - missing name or email");
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all required fields.",
      });
      return;
    }

    setIsLoading(true);
    console.log("Starting background operations with data:", { ...formData, date });

    try {
      const formattedDate = date.toISOString().split('T')[0];
      
      // Save data to Supabase
      console.log("Attempting to save data to user_readings");
      const { error: supabaseError } = await supabase
        .from("user_readings")
        .insert([{
          name: formData.name,
          email: formData.email,
          date_of_birth: formattedDate,
        }]);

      if (supabaseError) {
        console.error("Supabase save error:", supabaseError);
        throw supabaseError;
      }
      console.log("Successfully saved to user_readings");

      // Add to Klaviyo
      console.log("Attempting to add to Klaviyo");
      const { error: klaviyoError } = await supabase.functions.invoke('add-to-klaviyo', {
        body: {
          email: formData.email,
          name: formData.name,
        }
      });

      if (klaviyoError) {
        console.error("Klaviyo error:", klaviyoError);
        throw klaviyoError;
      }
      console.log("Klaviyo function called successfully");

      // If everything is successful, redirect to local checkout route
      console.log("All operations successful, redirecting to checkout");
      navigate('/checkout');
      
    } catch (error) {
      console.error("Operation failed:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "An error occurred. Please try again.",
      });
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormFields
          isLoading={isLoading}
          formData={formData}
          onFormChange={handleFieldChange}
        />

        <DateSelector 
          date={date}
          setDate={setDate}
        />

        <SubmitButton isLoading={isLoading} />
      </form>
    </motion.div>
  );
};

export default CollectInfoForm;