import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import { CardElement } from "@stripe/react-stripe-js"
import { toast } from "sonner"

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

const packages = [
  {
    id: "basic",
    name: "Numerology Analysis Basic Package™",
    price: 33.00
  },
  {
    id: "premium",
    name: "Numerology Analysis Premium Package™ (Hidden Number Revealed!)",
    price: 44.00
  },
  {
    id: "supreme",
    name: "⭐Numerology Analysis Supreme Package™ (Astrology Included)",
    price: 49.40,
    originalPrice: 71.00,
    isBestSelling: true
  }
]

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    apartment: "",
    country: "",
    state: "",
    city: "",
    postalCode: "",
    selectedPackage: "supreme",
    isVip: false
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here we'll add the Stripe payment processing
    toast.success("Processing payment...")
  }

  const selectedPackage = packages.find(pkg => pkg.id === formData.selectedPackage)
  const total = (selectedPackage?.price || 0) + (formData.isVip ? 11 : 0)

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <form onSubmit={handleSubmit} className="space-y-8 bg-[#1A1F2C] p-6 rounded-lg">
        {/* Contact Information */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-gray-200">CONTACT INFORMATION</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="bg-[#2A2F3C] border-gray-700"
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="bg-[#2A2F3C] border-gray-700"
              />
            </div>
          </div>
          <div className="mt-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-[#2A2F3C] border-gray-700"
            />
          </div>
        </div>

        {/* Product Selection */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-gray-200">SELECT PRODUCT</h2>
          <RadioGroup
            value={formData.selectedPackage}
            onValueChange={(value) => setFormData({ ...formData, selectedPackage: value })}
            className="space-y-2"
          >
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`flex items-center justify-between p-4 rounded-lg ${
                  pkg.isBestSelling ? 'bg-[#2A2F3C] border border-purple-500' : 'hover:bg-[#2A2F3C]'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value={pkg.id} id={pkg.id} />
                  <Label htmlFor={pkg.id} className="cursor-pointer">
                    {pkg.isBestSelling && <span className="text-sm text-purple-400 block">BEST SELLING</span>}
                    {pkg.name}
                  </Label>
                </div>
                <div className="text-right">
                  {pkg.originalPrice && (
                    <span className="text-sm line-through text-gray-400 mr-2">${pkg.originalPrice.toFixed(2)}</span>
                  )}
                  <span className="text-white">${pkg.price.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Billing Information */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-gray-200">BILLING INFORMATION</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="bg-[#2A2F3C] border-gray-700"
              />
            </div>
            <div>
              <Label htmlFor="apartment">Apartment, building, floor (optional)</Label>
              <Input
                id="apartment"
                value={formData.apartment}
                onChange={(e) => setFormData({ ...formData, apartment: e.target.value })}
                className="bg-[#2A2F3C] border-gray-700"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="country">Country</Label>
                <Select
                  value={formData.country}
                  onValueChange={(value) => setFormData({ ...formData, country: value })}
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
                  value={formData.state}
                  onValueChange={(value) => setFormData({ ...formData, state: value })}
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
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="bg-[#2A2F3C] border-gray-700"
                />
              </div>
              <div>
                <Label htmlFor="postalCode">Postal Code</Label>
                <Input
                  id="postalCode"
                  value={formData.postalCode}
                  onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                  className="bg-[#2A2F3C] border-gray-700"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Payment Information */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-gray-200">PAYMENT INFORMATION</h2>
          <Elements stripe={stripePromise}>
            <div className="space-y-4">
              <div className="bg-[#2A2F3C] p-4 rounded-lg border border-gray-700">
                <CardElement
                  options={{
                    style: {
                      base: {
                        fontSize: '16px',
                        color: '#ffffff',
                        '::placeholder': {
                          color: '#aab7c4',
                        },
                      },
                      invalid: {
                        color: '#fa755a',
                      },
                    },
                  }}
                />
              </div>
            </div>
          </Elements>
        </div>

        {/* VIP Option */}
        <div className="border border-purple-500 rounded-lg p-4 bg-[#2A2F3C]/50">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-purple-400">⭐VIP CUSTOMER⭐</h3>
              <p className="text-sm text-gray-400">By Joining The VIP List You Get to Skip The Line And Receive Your Analysis Sooner!</p>
            </div>
            <div className="text-right">
              <div className="text-white mb-1">$11.00</div>
              <Button
                type="button"
                variant="outline"
                className={`border-purple-500 ${formData.isVip ? 'bg-purple-500 text-white' : 'text-purple-500'}`}
                onClick={() => setFormData({ ...formData, isVip: !formData.isVip })}
              >
                {formData.isVip ? '- Remove' : '+ Add'}
              </Button>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-[#2A2F3C] p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Total:</span>
            <span className="text-xl font-bold">${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-purple-500 hover:bg-purple-600 text-white py-6"
        >
          Submit
        </Button>

        <p className="text-center text-sm text-gray-400">
          We Never Share Your Information With Anyone
        </p>
      </form>
    </div>
  )
}

export default Checkout