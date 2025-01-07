import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import DateSelector from "./DateSelector"

interface UserFormProps {
  name: string
  email: string
  date: Date | undefined
  setName: (name: string) => void
  setEmail: (email: string) => void
  setDate: (date: Date | undefined) => void
  isSubmitting: boolean
  onSubmit: (e: React.FormEvent) => void
}

export const UserForm = ({
  name,
  email,
  date,
  setName,
  setEmail,
  setDate,
  isSubmitting,
  onSubmit
}: UserFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
          className="bg-white/5 border-white/10"
          disabled={isSubmitting}
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
          disabled={isSubmitting}
        />
      </div>

      <DateSelector
        date={date}
        setDate={setDate}
        onCalculate={() => {}}
      />

      <Button 
        type="submit"
        className="w-full bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] hover:from-[#8B5CF6] hover:to-[#6E59A5]"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Saving..." : "Get Your Analysis"}
      </Button>
    </form>
  )
}