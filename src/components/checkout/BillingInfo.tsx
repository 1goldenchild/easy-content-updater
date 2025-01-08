import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface BillingInfoProps {
  address: string
  apartment: string
  country: string
  state: string
  city: string
  postalCode: string
  onFieldChange: (field: string, value: string) => void
}

const BillingInfo = ({ 
  address, 
  apartment, 
  country, 
  state, 
  city, 
  postalCode, 
  onFieldChange 
}: BillingInfoProps) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4 text-gray-200">BILLING INFORMATION</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            value={address}
            onChange={(e) => onFieldChange('address', e.target.value)}
            className="bg-[#2A2F3C] border-gray-700"
          />
        </div>
        <div>
          <Label htmlFor="apartment">Apartment, building, floor (optional)</Label>
          <Input
            id="apartment"
            value={apartment}
            onChange={(e) => onFieldChange('apartment', e.target.value)}
            className="bg-[#2A2F3C] border-gray-700"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="country">Country</Label>
            <Select
              value={country}
              onValueChange={(value) => onFieldChange('country', value)}
            >
              <SelectTrigger className="bg-[#2A2F3C] border-gray-700">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="state">State</Label>
            <Select
              value={state}
              onValueChange={(value) => onFieldChange('state', value)}
            >
              <SelectTrigger className="bg-[#2A2F3C] border-gray-700">
                <SelectValue placeholder="Select state" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ny">New York</SelectItem>
                <SelectItem value="ca">California</SelectItem>
                <SelectItem value="tx">Texas</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              value={city}
              onChange={(e) => onFieldChange('city', e.target.value)}
              className="bg-[#2A2F3C] border-gray-700"
            />
          </div>
          <div>
            <Label htmlFor="postalCode">Postal Code</Label>
            <Input
              id="postalCode"
              value={postalCode}
              onChange={(e) => onFieldChange('postalCode', e.target.value)}
              className="bg-[#2A2F3C] border-gray-700"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BillingInfo