import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface ContactInfoProps {
  firstName: string
  lastName: string
  email: string
  onFieldChange: (field: string, value: string) => void
}

const ContactInfo = ({ firstName, lastName, email, onFieldChange }: ContactInfoProps) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4 text-gray-200">CONTACT INFORMATION</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            value={firstName}
            onChange={(e) => onFieldChange('firstName', e.target.value)}
            className="bg-[#2A2F3C] border-gray-700"
          />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            value={lastName}
            onChange={(e) => onFieldChange('lastName', e.target.value)}
            className="bg-[#2A2F3C] border-gray-700"
          />
        </div>
      </div>
      <div className="mt-4">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => onFieldChange('email', e.target.value)}
          className="bg-[#2A2F3C] border-gray-700"
        />
      </div>
    </div>
  )
}

export default ContactInfo