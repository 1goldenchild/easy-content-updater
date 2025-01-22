import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DateSelector from "@/components/numerology/DateSelector";

const CollectInfoForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [date, setDate] = useState<Date>();

  const scheduleEmailSequence = async (userReadingId: string, email: string, name: string, dateOfBirth: string) => {
    try {
      // Insert email sequence status
      const { error: sequenceError } = await supabase
        .from("email_sequence_status")
        .insert([{ user_reading_id: userReadingId }]);

      if (sequenceError) throw sequenceError;

      // Schedule first email (Rolex) for 8 minutes from now
      const firstEmailDate = new Date(Date.now() + 8 * 60 * 1000);
      
      const { error: scheduleError } = await supabase.functions.invoke("schedule-email", {
        body: {
          to: email,
          templateName: "analysis",
          userData: { name, dateOfBirth },
          sendAt: firstEmailDate.toISOString()
        }
      });

      if (scheduleError) throw scheduleError;

    } catch (error) {
      console.error("Error scheduling email sequence:", error);
      throw error;
    }
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
    console.log("Setting loading state to true");

    try {
      const formattedDate = date.toISOString().split('T')[0];
      console.log("Attempting to save data:", {
        name: formData.name,
        email: formData.email,
        date_of_birth: formattedDate,
      });
      
      const { data, error } = await supabase.from("user_readings").insert([
        {
          name: formData.name,
          email: formData.email,
          date_of_birth: formattedDate,
        },
      ]).select();

      if (error) {
        console.error("Supabase error:", error);
        throw error;
      }

      console.log("Data saved successfully:", data);

      // Schedule email sequence
      if (data && data[0]) {
        await scheduleEmailSequence(
          data[0].id,
          formData.email,
          formData.name,
          formattedDate
        );
      }

      toast({
        title: "Success!",
        description: "Your information has been submitted successfully.",
      });

      window.location.replace("https://checkout.numerology33.com/checkout");
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was a problem submitting your information. Please try again.",
      });
    } finally {
      console.log("Setting loading state to false");
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
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white/70 mb-2"
          >
            Full Name
          </label>
          <Input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white/70 mb-2"
          >
            Email
          </label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full"
            placeholder="Enter your email"
          />
        </div>

        <DateSelector 
          date={date}
          setDate={setDate}
        />

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] hover:from-[#7C4DEF] hover:to-[#D042E8]"
        >
          {isLoading ? "Processing..." : "Get Your Analysis"}
        </Button>
      </form>
    </motion.div>
  );
};

export default CollectInfoForm;