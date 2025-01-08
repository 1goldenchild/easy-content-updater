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
  const [error, setError] = useState<string | null>(null)
  
  const currentProduct = upsellProducts[0]

  console.log('Upsell Component - Current state:', {
    productFound: !!currentProduct,
    productDetails: currentProduct,
    isProcessing
  })

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        console.log('Fetching customer data...')
        const { data: { session } } = await supabase.auth.getSession()
        
        if (!session?.user?.email) {
          console.log('No user session found')
          setError('No user session found')
          return
        }

        const { data, error: dbError } = await supabase
          .from('customers')
          .select('*')
          .eq('email', session.user.email)
          .single()

        if (dbError) {
          console.error('Error fetching customer:', dbError)
          setError(dbError.message)
          return
        }

        if (data) {
          console.log('Customer data fetched successfully')
          setCustomerData(data)
        } else {
          console.log('No customer data found')
          setError('Customer not found')
        }
      } catch (err) {
        console.error('Error in fetchCustomerData:', err)
        setError(err.message)
      }
    }

    fetchCustomerData()
  }, [navigate])

  const handleAccept = async () => {
    if (!customerData) {
      console.error('No customer data available')
      toast.error("Customer information not found")
      navigate('/success')
      return
    }

    if (!currentProduct) {
      console.error('No product found')
      toast.error("Product not found")
      navigate('/success')
      return
    }

    setIsProcessing(true)
    
    try {
      console.log('Processing one-click upsell for:', {
        productName: currentProduct.name,
        customerEmail: customerData.email
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

      if (error) {
        console.error('Payment processing error:', error)
        throw error
      }
      
      if (!data?.success) {
        console.error('Payment failed:', data?.error)
        throw new Error(data?.error || "Payment failed")
      }

      console.log('Payment successful')
      toast.success("Thank you for your purchase!")
      navigate('/success')
    } catch (error) {
      console.error('Upsell payment error:', error)
      toast.error(error.message || "Payment failed. Please try again.")
      navigate('/success')
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

  if (error) {
    console.log('Error state:', error)
    return null
  }

  console.log('Rendering UpsellProduct with:', currentProduct)
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