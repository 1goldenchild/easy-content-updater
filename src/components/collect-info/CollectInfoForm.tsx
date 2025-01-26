import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import DateSelector from "@/components/numerology/DateSelector";
import FormFields from "./FormFields";
import SubmitButton from "./SubmitButton";
import { FormData } from "./types";

const CollectInfoForm = () => {
  const { toast } = useToast();
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

    // First, redirect to checkout
    console.log("Redirecting to checkout");
    window.location.href = "https://checkout.numerology33.com/checkout";

    // Then handle the background operations
    try {
      const formattedDate = date.toISOString().split('T')[0];
      
      // Save data to Supabase
      console.log("Saving data to user_readings in background");
      supabase.from("user_readings").insert([
        {
          name: formData.name,
          email: formData.email,
          date_of_birth: formattedDate,
        },
      ]).then(({ error }) => {
        if (error) {
          console.error("Background Supabase error:", error);
        } else {
          console.log("Background Supabase save successful");
          
          // After Supabase success, add to Klaviyo
          console.log("Adding to Klaviyo list in background");
          supabase.functions.invoke('add-to-klaviyo', {
            body: {
              email: formData.email,
              name: formData.name,
            }
          }).then(({ error, data }) => {
            if (error) {
              console.error("Background Klaviyo error:", error);
            } else {
              console.log("Background Klaviyo success:", data);
            }
          });
        }
      });
      
    } catch (error) {
      console.error("Background operation error:", error);
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