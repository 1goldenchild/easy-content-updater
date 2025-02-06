
import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import DateSelector from "@/components/numerology/DateSelector";
import FormFields from "./FormFields";
import SubmitButton from "./SubmitButton";
import { FormData } from "./types";
import { supabase } from "@/integrations/supabase/client";

const CollectReadingInfoForm = () => {
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
    console.log("Starting background operations with data:", { ...formData, date });

    try {
      // First, call Klaviyo function
      console.log("Attempting to add to Klaviyo");
      const { error: klaviyoError } = await supabase.functions.invoke('add-to-klaviyo', {
        body: {
          email: formData.email,
          name: formData.name,
        }
      });
      
      if (klaviyoError) {
        console.error("Klaviyo function error:", klaviyoError);
        // Continue with form submission even if Klaviyo fails
      } else {
        console.log("Klaviyo function called successfully");
      }
      
      // Store in pending_users for auth flow
      const { error: pendingError } = await supabase
        .from('pending_users')
        .upsert([
          {
            email: formData.email.toLowerCase().trim(),
            date_of_birth: date.toISOString().split('T')[0]
          }
        ], { onConflict: 'email' });

      if (pendingError) {
        console.error("Error storing pending user:", pendingError);
        throw pendingError;
      }
      
      // Redirect to checkout
      console.log("Redirecting to checkout2");
      window.location.href = "https://checkout.numerology33.com/checkout2";
      
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

        <SubmitButton isLoading={isLoading} text="Get Your Reading" />
      </form>
    </motion.div>
  );
};

export default CollectReadingInfoForm;
