import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PhoneShowcase from "@/components/home/PhoneShowcase";

const CollectInfo = () => {
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

      // Schedule welcome email
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

      navigate("/analysis");
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
    <div className="flex-1 container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent mb-4">
            Discover Your Numerological Profile
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Enter your details below to receive a comprehensive analysis of your
            life path, relationships, and future opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Form Section */}
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

          {/* Preview Section */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="scale-75 md:scale-75 origin-top"
            >
              <PhoneShowcase />
            </motion.div>

            {/* What's Included Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10"
            >
              <h3 className="text-xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent mb-6">
                What's Included in Your Analysis
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Life Path Number</h4>
                    <p className="text-white/70 text-sm">Discover your core life purpose and the path you're destined to follow</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Compatibility Analysis</h4>
                    <p className="text-white/70 text-sm">Learn about your relationship dynamics and ideal partnerships</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Career Guidance</h4>
                    <p className="text-white/70 text-sm">Get insights into your ideal career path and professional opportunities</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Yearly Forecast</h4>
                    <p className="text-white/70 text-sm">Preview what the upcoming year holds for you based on your numbers</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectInfo;