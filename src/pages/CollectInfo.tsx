import { useState } from "react"
import { motion } from "framer-motion"
import { format } from "date-fns"
import { supabase } from "@/integrations/supabase/client"
import { toast } from "sonner"
import { UserForm } from "@/components/numerology/UserForm"
import { useNavigate } from "react-router-dom"

const CollectInfo = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [date, setDate] = useState<Date>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!name || !email || !date) {
      toast.error("Please fill in all fields")
      return
    }

    setIsSubmitting(true)

    try {
      const formattedDate = format(date, 'yyyy-MM-dd')
      console.log("[Form Submission] Starting with data:", { name, email, formattedDate })
      
      // Step 1: Save to database
      const { data: savedData, error: dbError } = await supabase
        .from('user_readings')
        .insert([
          {
            name,
            email,
            date_of_birth: formattedDate
          }
        ])
        .select()

      console.log("[Database] Insert response:", { savedData, dbError })

      if (dbError) {
        console.error("[Database] Error saving to Supabase:", dbError)
        toast.error("Database Error: " + (dbError.message || "Failed to save your information"))
        return
      }

      if (!savedData || savedData.length === 0) {
        console.error("[Database] No data returned from Supabase")
        toast.error("Failed to save your information. Please try again.")
        return
      }

      // Step 2: Send welcome email
      console.log("[Email] Attempting to send welcome email...")
      const { data: welcomeData, error: welcomeEmailError } = await supabase.functions.invoke('send-styled-email', {
        body: {
          to: [email],
          templateName: "welcome",
          userData: {
            name,
            dateOfBirth: formattedDate
          }
        }
      })

      console.log("[Email] Welcome email response:", { welcomeData, welcomeEmailError })

      if (welcomeEmailError) {
        console.error("[Email] Error sending welcome email:", welcomeEmailError)
        toast.error("Your information was saved but we couldn't send the welcome email. Our team will look into this.")
      } else {
        toast.success("Information saved successfully! Check your inbox (and spam folder) for our welcome email.")
      }

      // Step 3: Schedule analysis email
      console.log("[Schedule] Attempting to schedule analysis email...")
      const { data: scheduleData, error: scheduleError } = await supabase.functions.invoke('schedule-email', {
        body: {
          to: email,
          templateName: "analysis",
          userData: {
            name,
            dateOfBirth: formattedDate
          },
          sendAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // 24 hours from now
        }
      })

      console.log("[Schedule] Schedule email response:", { scheduleData, scheduleError })

      if (scheduleError) {
        console.error("[Schedule] Error scheduling analysis email:", scheduleError)
        toast.error("Your information was saved but we couldn't schedule the analysis email. Our team will look into this.")
      }

      // Navigate to checkout using React Router
      window.open("https://www.numerology33.com/checkout", "_blank")
    } catch (error) {
      console.error("[Error] Unexpected error in form submission:", error)
      toast.error("An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex-1 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md space-y-8 bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]">
            Get Your Personalized Analysis
          </h2>
          <p className="mt-2 text-white/70">
            Enter your details below to receive your numerology insights
          </p>
        </div>

        <UserForm
          name={name}
          email={email}
          date={date}
          setName={setName}
          setEmail={setEmail}
          setDate={setDate}
          isSubmitting={isSubmitting}
          onSubmit={handleSubmit}
        />
      </motion.div>
    </div>
  )
}

export default CollectInfo