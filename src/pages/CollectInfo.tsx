import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { supabase } from "@/integrations/supabase/client"
import { toast } from "sonner"
import { DateSelector } from "@/components/numerology/DateSelector"
import { UserForm } from "@/components/numerology/UserForm"

const CollectInfo = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [date, setDate] = useState<Date>()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!name || !email || !date) {
      toast.error("Please fill in all fields")
      return
    }

    setIsSubmitting(true)

    try {
      const formattedDate = format(date, 'yyyy-MM-dd')
      console.log("Starting form submission with data:", { name, email, formattedDate })
      
      const { data, error } = await supabase
        .from('user_readings')
        .insert([
          {
            name,
            email,
            date_of_birth: formattedDate
          }
        ])
        .select()

      console.log("Supabase response:", { data, error })

      if (error) {
        console.error("Error saving to Supabase:", error)
        toast.error(error.message || "There was an error saving your information. Please try again.")
        return
      }

      if (!data || data.length === 0) {
        console.error("No data returned from Supabase")
        toast.error("There was an error saving your information. Please try again.")
        return
      }

      // Send welcome email
      const { error: emailError } = await supabase.functions.invoke('send-styled-email', {
        body: {
          to: [email],
          templateName: "welcome",
          userData: {
            name,
            dateOfBirth: formattedDate
          }
        }
      })

      if (emailError) {
        console.error("Error sending welcome email:", emailError)
        toast.error("Your information was saved but we couldn't send the welcome email.")
      } else {
        console.log("Welcome email sent successfully")
      }

      console.log("Successfully saved user reading:", data)
      toast.success("Information saved successfully!")
      
      // Redirect to the numerology checkout page
      window.location.href = "https://www.numerology33.com/checkout"
    } catch (error) {
      console.error("Error in form submission:", error)
      toast.error("There was an error saving your information. Please try again.")
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