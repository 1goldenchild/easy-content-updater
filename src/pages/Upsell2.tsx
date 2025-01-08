import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { supabase } from "@/integrations/supabase/client"
import UpsellProduct from "@/components/upsell/UpsellProduct"
import { upsellProducts2 } from "@/components/upsell/upsellProducts2"

const Upsell2 = () => {
  const navigate = useNavigate()
  const [isProcessing, setIsProcessing] = useState(false)
  const [customerData, setCustomerData] = useState<any>(null)
  
  const currentProduct = upsellProducts2[0]
  
  console.log('Upsell2 page rendering with product:', currentProduct)

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        console.log('Fetching customer data...')
        const { data: { session } } = await supabase.auth.getSession()
        
        if (!session?.user?.email) {
          console.log('No user session found')
          navigate('/success')
          return
        }

        const { data, error: dbError } = await supabase
          .from('customers')
          .select('*')
          .eq('email', session.user.email)
          .single()

        if (dbError) {
          console.error('Error fetching customer:', dbError)
          navigate('/success')
          return
        }

        if (data) {
          console.log('Customer data fetched:', data)
          setCustomerData(data)
        }
      } catch (err) {
        console.error('Error in fetchCustomerData:', err)
        navigate('/success')
      }
    }

    fetchCustomerData()
  }, [navigate])

  const handleAccept = async () => {
    if (!customerData) {
      console.error('No customer data available')
      toast.error("Unable to process. Please try again.")
      navigate('/success')
      return
    }

    setIsProcessing(true)
    
    try {
      console.log('Processing upsell payment for:', {
        customerEmail: customerData.email,
        product: currentProduct.name
      })
      
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
      
      if (!data?.success) {
        throw new Error(data?.error || "Payment failed")
      }

      console.log('Upsell payment successful')
      toast.success("Thank you for your purchase!")
      navigate('/success')
    } catch (error: any) {
      console.error('Upsell payment error:', error)
      toast.error(error.message || "Payment failed. Please try again.")
    } finally {
      setIsProcessing(false)
    }
  }

  const handleDecline = () => {
    console.log('User declined upsell')
    navigate('/success')
  }

  if (!currentProduct) {
    console.log('No product found, redirecting to success')
    navigate('/success')
    return null
  }

  console.log('Rendering UpsellProduct component with:', currentProduct)
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

export default Upsell2