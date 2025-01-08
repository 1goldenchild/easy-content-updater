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
  
  // Extract step from URL or default to 1
  const currentStep = parseInt(location.pathname.split('/').pop() || '1')
  const currentProduct = upsellProducts[currentStep - 1]

  console.log('Upsell Component - Current state:', {
    step: currentStep,
    pathname: location.pathname,
    productFound: !!currentProduct,
    productDetails: currentProduct,
    isProcessing
  })

  // If we're on the base /upsell route, redirect to /upsell/1
  if (location.pathname === '/upsell') {
    console.log('Redirecting to /upsell/1')
    return <Navigate to="/upsell/1" replace />
  }

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        console.log('Fetching customer data...')
        const { data: { session } } = await supabase.auth.getSession()
        
        if (!session?.user?.email) {
          console.log('No user session found')
          setError('No user session found')
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
          setError(dbError.message)
          navigate('/success')
          return
        }

        if (data) {
          console.log('Customer data fetched successfully')
          setCustomerData(data)
        } else {
          console.log('No customer data found')
          setError('Customer not found')
          navigate('/success')
        }
      } catch (err) {
        console.error('Error in fetchCustomerData:', err)
        setError(err.message)
        navigate('/success')
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
      console.error('No product found for current step')
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
    console.log('User declined upsell:', { currentStep })
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