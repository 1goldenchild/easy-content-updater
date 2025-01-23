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
  const [isSubmitted, setIsSubmitted] = useState(false);

  const scheduleEmailSequence = async (userReadingId: string, email: string, name: string, dateOfBirth: string) => {
    try {
      console.log("Starting email sequence scheduling for:", email);
      
      // Insert email sequence status
      const { error: sequenceError } = await supabase
        .from("email_sequence_status")
        .insert([{ user_reading_id: userReadingId }]);

      if (sequenceError) {
        console.error("Error inserting email sequence status:", sequenceError);
        throw sequenceError;
      }

      // Schedule the rolex email
      console.log("Scheduling rolex email");
      
      const { data: emailData, error: emailError } = await supabase.functions.invoke("send-styled-email", {
        body: {
          to: [email],
          templateName: "rolex",
          userData: { 
            name,
            dateOfBirth
          }
        }
      });

      if (emailError) {
        console.error("Error sending rolex email:", emailError);
        throw emailError;
      }

      console.log("Successfully sent rolex email:", emailData);

    } catch (error) {
      console.error("Error in scheduleEmailSequence:", error);
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
        description: "Your information has been submitted successfully. You will receive the email in about 1 minute.",
      });

      setIsSubmitted(true);
      
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

  const handleCheckoutClick = () => {
    console.log("Checkout button clicked");
    try {
      window.location.href = "https://checkout.numerology33.com/checkout";
      console.log("Navigation initiated");
    } catch (error) {
      console.error("Navigation error:", error);
      // Fallback navigation method
      window.open("https://checkout.numerology33.com/checkout", "_self");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10"
    >
      {!isSubmitted ? (
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
      ) : (
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Thank you!</h3>
          <p className="text-white/70 mb-6">Your analysis is being prepared. Check your email in about 1 minute.</p>
          <a
            href="https://checkout.numerology33.com/checkout"
            target="_self"
            onClick={(e) => {
              e.preventDefault();
              handleCheckoutClick();
            }}
            className="inline-block w-full py-4 px-6 text-lg font-semibold text-white rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] hover:from-[#7C4DEF] hover:to-[#D042E8] transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 shadow-lg hover:shadow-xl cursor-pointer"
          >
            Continue to Checkout
          </a>
        </div>
      )}
    </motion.div>
  );
};

export default CollectInfoForm;