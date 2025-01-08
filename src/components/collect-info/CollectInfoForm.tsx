import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CollectInfoForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dateOfBirth: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.from("user_readings").insert([
        {
          name: formData.name,
          email: formData.email,
          date_of_birth: formData.dateOfBirth,
        },
      ]);

      if (error) throw error;

      const { error: functionError } = await supabase.functions.invoke(
        "schedule-email",
        {
          body: {
            type: "welcome",
            data: {
              name: formData.name,
              email: formData.email,
              dateOfBirth: formData.dateOfBirth,
            },
          },
        }
      );

      if (functionError) {
        console.error("Error scheduling email:", functionError);
      }

      toast({
        title: "Success!",
        description: "Your information has been submitted successfully.",
      });

      navigate("/upsell");
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

        <div>
          <label
            htmlFor="dob"
            className="block text-sm font-medium text-white/70 mb-2"
          >
            Date of Birth
          </label>
          <Input
            id="dob"
            type="date"
            required
            value={formData.dateOfBirth}
            onChange={(e) =>
              setFormData({ ...formData, dateOfBirth: e.target.value })
            }
            className="w-full"
          />
        </div>

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