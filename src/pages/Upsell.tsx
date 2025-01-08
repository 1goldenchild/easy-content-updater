import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { supabase } from "@/integrations/supabase/client"

const upsellProducts = [
  {
    id: 2,
    name: "Money Numerology Secrets eBook (2023 Edition)",
    description: "Unlock the ancient secrets of wealth attraction through the power of numerology. This comprehensive guide reveals how numbers influence your financial destiny.",
    price: 37.00,
    priceId: "price_1QepknCibdAmag3rYOiVW2bl",
    features: [
      "Calculate your personal wealth number",
      "Daily money manifestation rituals based on numerology",
      "Learn which numbers attract prosperity in your life",
      "Discover the best dates for financial decisions",
      "Bonus: Money affirmations aligned with your numbers"
    ],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2936&auto=format&fit=crop"
  }
]

const UpsellContent = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isProcessing, setIsProcessing] = useState(false)
  const [customerData, setCustomerData] = useState<any>(null)
  
  const currentStep = parseInt(location.pathname.split('/').pop() || '1')
  console.log('Current step:', currentStep)
  
  const currentProduct = upsellProducts[currentStep - 1]
  console.log('Current product:', currentProduct)

  // Redirect if no valid product found
  useEffect(() => {
    if (!currentProduct) {
      console.log('No product found for step:', currentStep)
      toast.error("Product not found")
      navigate('/success')
    }
  }, [currentStep, currentProduct, navigate])

  useEffect(() => {
    const fetchCustomerData = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (session?.user?.email) {
        const { data, error } = await supabase
          .from('customers')
          .select('*')
          .eq('email', session.user.email)
          .single()

        if (error) {
          console.error('Error fetching customer:', error)
          navigate('/success')
          return
        }

        if (data) {
          setCustomerData(data)
        }
      }
    }

    fetchCustomerData()
  }, [navigate])

  const handleAccept = async () => {
    if (!customerData) {
      toast.error("Customer information not found")
      navigate('/success')
      return
    }

    if (!currentProduct) {
      toast.error("Product not found")
      navigate('/success')
      return
    }

    setIsProcessing(true)
    
    try {
      console.log('Processing one-click upsell for:', currentProduct.name)
      
      const { data, error } = await supabase.functions.invoke('create-payment', {
        body: {
          priceId: currentProduct.priceId,
          amount: currentProduct.price,
          isOneClick: true,
          email: customerData.email,
          name: `${customerData.first_name} ${customerData.last_name}`
        }
      })

      if (error) throw error
      if (!data.success) throw new Error(data.error || "Payment failed")

      toast.success("Thank you for your purchase!")
      
      if (currentStep === 1) {
        navigate('/upsell/2')
      } else {
        navigate('/success')
      }
    } catch (error) {
      console.error('Upsell payment error:', error)
      toast.error(error.message || "Payment failed. Please try again.")
      navigate('/success')
    } finally {
      setIsProcessing(false)
    }
  }

  const handleDecline = () => {
    if (currentStep === 1) {
      navigate('/upsell/2')
    } else {
      navigate('/success')
    }
  }

  // Don't render anything if no product is found
  if (!currentProduct) {
    return null
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <div className="bg-[#1A1F2C] p-8 rounded-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 text-transparent bg-clip-text animate-shine">
            Special One-Time Offer!
          </h1>
          <p className="text-gray-400">
            Enhance Your Numerology Reading with Advanced Money Manifestation Secrets
          </p>
        </div>

        <div className="bg-[#2A2F3C] p-6 rounded-lg mb-8">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <img 
                  src={currentProduct.image} 
                  alt={currentProduct.name}
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="absolute -top-2 -right-2 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Special Offer
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-semibold mb-4">{currentProduct.name}</h2>
              <p className="text-gray-300 mb-4">{currentProduct.description}</p>
              <ul className="space-y-2">
                {currentProduct.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="mr-2 text-purple-400">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  ${currentProduct.price.toFixed(2)}
                </div>
                <p className="text-gray-400 text-sm">
                  One-time payment - Instant digital delivery
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Button 
            onClick={handleAccept}
            disabled={isProcessing}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg py-6"
          >
            {isProcessing ? "Processing..." : `Yes! Add This To My Order For $${currentProduct.price.toFixed(2)}`}
          </Button>
          
          <Button 
            onClick={handleDecline}
            variant="outline"
            className="w-full text-lg py-6"
          >
            No thanks, I'll pass
          </Button>
        </div>
      </div>
    </div>
  )
}

const Upsell = () => {
  return <UpsellContent />
}

export default Upsell