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
  });
  const [date, setDate] = useState<Date>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!date) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please select your date of birth.",
      });
      return;
    }
    setIsLoading(true);

    try {
      const { error } = await supabase.from("user_readings").insert([
        {
          name: formData.name,
          date_of_birth: date.toISOString().split('T')[0],
        },
      ]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your information has been submitted successfully.",
      });

      // Redirect to Numerology33 checkout page
      window.location.href = "https://www.numerology33.com/checkout";
      
    } catch (error) {
      console.error("Error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was a problem submitting your information.",
      });
    } finally {
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