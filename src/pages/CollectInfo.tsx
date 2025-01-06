import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { motion } from "framer-motion"

const CollectInfo = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [dob, setDob] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!name || !email || !dob) {
      toast.error("Please fill in all fields")
      return
    }

    // For now just show success - we'll add Supabase integration later
    toast.success("Information submitted successfully!")
    console.log({ name, email, dob })
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

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="bg-white/5 border-white/10"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="bg-white/5 border-white/10"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dob">Date of Birth</Label>
            <Input
              id="dob"
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="bg-white/5 border-white/10 [color-scheme:dark]"
            />
          </div>

          <Button 
            type="submit"
            className="w-full bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] hover:from-[#8B5CF6] hover:to-[#6E59A5]"
          >
            Get Your Analysis
          </Button>
        </form>
      </motion.div>
    </div>
  )
}

export default CollectInfo