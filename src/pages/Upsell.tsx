import { useState, useEffect } from "react"
import { useNavigate, useLocation, Navigate } from "react-router-dom"
import { toast } from "sonner"
import { supabase } from "@/integrations/supabase/client"
import UpsellProduct from "@/components/upsell/UpsellProduct"
import { upsellProducts } from "@/components/upsell/upsellProducts"

const UpsellContent = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isProcessing, setIsProcessing] = useState(false)
  const [customerData, setCustomerData] = useState<any>(null)
  
  // Extract step from URL or default to 1
  const currentStep = parseInt(location.pathname.split('/').pop() || '1')
  const currentProduct = upsellProducts[currentStep - 1]

  console.log('Current step:', currentStep)
  console.log('Current product:', currentProduct)
  console.log('Current pathname:', location.pathname)

  // If we're on the base /upsell route, redirect to /upsell/1
  if (location.pathname === '/upsell') {
    console.log('Redirecting to /upsell/1')
    return <Navigate to="/upsell/1" replace />
  }

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

  if (!currentProduct) {
    console.log('No product found, redirecting to success')
    navigate('/success')
    return null
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <UpsellProduct
        {...currentProduct}
        isProcessing={isProcessing}
        onAccept={handleAccept}
        onDecline={handleDecline}
      />
    </div>
  )
}

const Upsell = () => {
  return <UpsellContent />
}

export default Upsell