import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { toast } from "sonner"
import { supabase } from "@/integrations/supabase/client"
import UpsellProduct from "@/components/upsell/UpsellProduct"
import { upsellProducts } from "@/components/upsell/upsellProducts"

const UpsellContent = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isProcessing, setIsProcessing] = useState(false)
  const [customerData, setCustomerData] = useState<any>(null)
  
  const currentStep = parseInt(location.pathname.split('/').pop() || '1')
  const currentProduct = upsellProducts[currentStep - 1]

  console.log('Current step:', currentStep)
  console.log('Current product:', currentProduct)

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

  if (!currentProduct) {
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