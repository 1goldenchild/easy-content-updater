import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { loadStripe } from "@stripe/stripe-js"
import { supabase } from "@/integrations/supabase/client"
import { toast } from "sonner"

// Initialize Stripe
const stripePromise = loadStripe("pk_test_your_publishable_key") // Replace with your Stripe publishable key

const CheckoutStep1 = () => {
  const navigate = useNavigate()
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#001a00] text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <h1 className="text-4xl font-bold text-center">
            Wait! Special One-Time Offer
          </h1>
          
          <div className="bg-gray-800/50 rounded-lg p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-yellow-400">
              Upgrade Your Package
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-full space-y-4">
                  <h3 className="text-xl font-medium">Premium Package</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      Basic Numerology Guide
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      Advanced Manifestation Techniques
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      Personal Success Calendar
                    </li>
                  </ul>
                  <div className="text-2xl font-bold text-yellow-400">
                    $97 <span className="text-sm text-gray-400 line-through">$197</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4"
                onClick={() => navigate("/checkout/step2")}
              >
                Yes, Upgrade My Order!
                <ArrowRight className="ml-2" />
              </Button>
              
              <button
                className="w-full text-gray-400 hover:text-gray-300 py-2"
                onClick={() => navigate("/checkout/step2")}
              >
                No thanks, continue with basic package
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

const CheckoutStep2 = () => {
  const navigate = useNavigate()
  const [isProcessing, setIsProcessing] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cardNumber: "",
    expiry: "",
    cvc: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    try {
      // Call our Supabase Edge Function to create payment intent
      const { data, error } = await supabase.functions.invoke('create-payment-intent', {
        body: {
          amount: 3700, // $37.00
          email: formData.email,
          name: formData.name
        }
      })

      if (error) throw error

      // Handle successful payment
      toast.success("Payment successful!")
      navigate("/checkout/success")
    } catch (error) {
      console.error('Payment error:', error)
      toast.error("Payment failed. Please try again.")
    } finally {
      setIsProcessing(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#001a00] text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <h1 className="text-4xl font-bold text-center">
            Complete Your Order
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded bg-gray-800/50 border border-gray-700"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded bg-gray-800/50 border border-gray-700"
                  required
                />
              </div>

              <div id="card-element" className="p-3 rounded bg-gray-800/50 border border-gray-700">
                {/* Stripe Elements will be mounted here */}
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4"
              disabled={isProcessing}
            >
              {isProcessing ? (
                "Processing..."
              ) : (
                <>
                  Complete Purchase
                  <ArrowRight className="ml-2" />
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

const CheckoutSuccess = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#001a00] text-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <h1 className="text-4xl font-bold">
            Thank You For Your Purchase!
          </h1>
          <p className="text-xl">
            Your order has been processed successfully. Check your email for access to your products.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

const Checkout = () => {
  const { step } = useParams()
  
  switch(step) {
    case "step1":
      return <CheckoutStep1 />
    case "step2":
      return <CheckoutStep2 />
    case "success":
      return <CheckoutSuccess />
    default:
      return <CheckoutStep1 />
  }
}

export default Checkout