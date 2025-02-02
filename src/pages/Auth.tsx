import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate("/mynumerology");
      }
    };
    checkAuth();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Starting auth process for email:", email);

    try {
      // First, check if the email exists in pending_users
      const { data: pendingData, error: pendingError } = await supabase
        .from('pending_users')
        .select('date_of_birth')
        .eq('email', email.toLowerCase().trim())
        .single();

      console.log("Pending users query result:", { pendingData, pendingError });

      if (pendingError || !pendingData) {
        console.error("Error fetching pending user:", pendingError);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Please complete the numerology form first.",
        });
        setIsLoading(false);
        return;
      }

      // Store DOB in localStorage for /mynumerology page
      console.log("Retrieved DOB from pending_users:", pendingData.date_of_birth);
      localStorage.setItem('userDOB', pendingData.date_of_birth);

      // Format the date consistently for use as password
      const formattedDate = pendingData.date_of_birth;
      console.log("Using formatted date for auth:", formattedDate);

      // Try to sign in first
      const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
        email: email.toLowerCase().trim(),
        password: formattedDate,
      });

      if (signInError) {
        console.log("Sign in failed, attempting signup:", signInError.message);
        
        // If login fails, try to sign up without email verification
        const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
          email: email.toLowerCase().trim(),
          password: formattedDate,
          options: {
            data: {
              date_of_birth: formattedDate
            }
          }
        });

        if (signUpError) {
          console.error("Signup error:", signUpError);
          toast({
            variant: "destructive",
            title: "Error",
            description: "Unable to create account. Please try again.",
          });
        } else if (signUpData.user) {
          // If signup is successful, try to sign in immediately
          const { error: immediateSignInError } = await supabase.auth.signInWithPassword({
            email: email.toLowerCase().trim(),
            password: formattedDate,
          });

          if (!immediateSignInError) {
            navigate("/mynumerology");
          } else {
            console.error("Immediate sign in error:", immediateSignInError);
            toast({
              variant: "destructive",
              title: "Error",
              description: "Unable to sign in. Please try again.",
            });
          }
        }
      } else if (signInData.user) {
        // Successful login
        console.log("Authentication successful, navigating to /mynumerology");
        navigate("/mynumerology");
      }
      
    } catch (error) {
      console.error("Authentication error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
          <h1 className="text-2xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
              Access Your Numerology
            </span>
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white/70 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500 text-white"
                placeholder="Enter your email"
                disabled={isLoading}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white py-2 px-4 rounded-lg font-medium hover:from-violet-700 hover:to-fuchsia-600 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? "Processing..." : "Continue"}
            </button>
          </form>

          <p className="mt-4 text-sm text-center text-white/50">
            Enter the email you used in the numerology form
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;