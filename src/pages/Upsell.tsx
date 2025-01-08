import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { supabase } from "@/integrations/supabase/client"
import UpsellProduct from "@/components/upsell/UpsellProduct"
import { upsellProducts } from "@/components/upsell/upsellProducts"

const Upsell = () => {
  const navigate = useNavigate()
  const [isProcessing, setIsProcessing] = useState(false)
  const [customerData, setCustomerData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  
  const currentProduct = upsellProducts[0]
  
  console.log('Upsell page rendering with product:', currentProduct)

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        setIsLoading(true)
        console.log('Fetching customer data...')
        const { data: { session } } = await supabase.auth.getSession()
        
        if (!session?.user?.email) {
          console.log('No user session found')
          toast.error("User session not found")
          navigate('/checkout')
          return
        }

        const { data, error: dbError } = await supabase
          .from('customers')
          .select('*')
          .eq('email', session.user.email)
          .single()

        if (dbError) {
          console.error('Error fetching customer:', dbError)
          toast.error("Failed to fetch customer data")
          return
        }

        if (data) {
          console.log('Customer data fetched:', data)
          setCustomerData(data)
        } else {
          console.error('No customer data found')
          toast.error("Customer data not found")
          navigate('/checkout')
        }
      } catch (err) {
        console.error('Error in fetchCustomerData:', err)
        toast.error("Failed to load customer data")
      } finally {
        setIsLoading(false)
      }
    }

    fetchCustomerData()
  }, [navigate])

  const handlePurchase = async () => {
    if (isLoading) {
      toast.error("Please wait while we load your data")
      return
    }

    if (!customerData?.email) {
      console.error('No customer email found')
      toast.error("Customer data is missing")
      return
    }

    setIsProcessing(true)
    try {
      console.log('Processing upsell purchase with customer data:', {
        email: customerData.email,
        stripeCustomerId: customerData?.stripe_customer_id
      })
      
      const { data, error } = await supabase.functions.invoke('create-payment', {
        body: {
          priceId: currentProduct.priceId,
          customerId: customerData?.stripe_customer_id,
          customerEmail: customerData.email,
          amount: currentProduct.price,
          mode: 'payment'
        }
      })

      if (error) {
        console.error('Payment processing error:', error)
        throw error
      }

      if (data?.url) {
        console.log('Redirecting to Stripe checkout:', data.url)
        window.location.href = data.url
      } else {
        console.log('No payment URL received, navigating to upsell2')
        navigate('/upsell2')
      }
    } catch (error) {
      console.error("Error creating checkout session:", error)
      toast.error("Failed to process purchase")
      navigate('/upsell2')
    } finally {
      setIsProcessing(false)
    }
  }

  const handleDecline = () => {
    console.log('User declined first upsell, navigating to second upsell')
    navigate('/upsell2')
  }

  if (!currentProduct) {
    console.log('No product found, redirecting to upsell2')
    navigate('/upsell2')
    return null
  }

  if (isLoading) {
    return <div className="container max-w-4xl mx-auto px-4 py-8">Loading...</div>
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <UpsellProduct
        name={currentProduct.name}
        description={currentProduct.description}
        price={currentProduct.price}
        features={currentProduct.features}
        image={currentProduct.image}
        isProcessing={isProcessing}
        onAccept={handlePurchase}
        onDecline={handleDecline}
      />
    </div>
  )
}

export default Upsell