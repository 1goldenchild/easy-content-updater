import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/components/auth/AuthProvider";

const Auth = () => {
  const navigate = useNavigate();
  const { session } = useAuth();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  // Redirect if already logged in
  useEffect(() => {
    if (session) {
      navigate("/portal");
    }
  }, [session, navigate]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    console.log("Attempting signin with:", { email });

    try {
      // First, get the user's DOB from user_readings
      const { data: readingData, error: readingError } = await supabase
        .from('user_readings')
        .select('date_of_birth')
        .eq('email', email)
        .single();

      if (readingError || !readingData) {
        throw new Error("No reading found for this email. Please complete the analysis form first.");
      }

      // Use the DOB as password
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password: readingData.date_of_birth,
      });

      if (signInError) {
        // If user doesn't exist, create them
        const { error: signUpError } = await supabase.auth.signUp({
          email,
          password: readingData.date_of_birth,
        });

        if (signUpError) {
          throw signUpError;
        }
      }

      toast.success("Successfully signed in!");
      navigate("/portal");
    } catch (error) {
      console.error("Login error:", error);
      toast.error(error instanceof Error ? error.message : "An error occurred during sign in");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Access Your Reading
          </h1>
          <p className="text-white/70 mt-2">
            Enter your email to view your numerological destiny
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
          <form onSubmit={handleSignIn} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              disabled={loading}
            >
              {loading ? "Processing..." : "Sign In"}
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;