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
        console.log('Attempting to fetch customer data...')
        
        // Using correct PostgREST syntax for checking if table is accessible
        const { data: testData, error: testError } = await supabase
          .from('customers')
          .select('id')
          .limit(1)
          
        if (testError) {
          console.error('Connection test error:', testError)
          throw testError
        }
        
        console.log('Connection test successful:', testData)

        const { data: customers, error } = await supabase
          .from("customers")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(1)
        
        if (error) {
          console.error('Customer fetch error:', error)
          throw error
        }
        
        if (customers && customers.length > 0) {
          console.log('Customer data fetched successfully:', customers[0])
          setCustomerData(customers[0])
        } else {
          console.log('No customer data found')
        }
      } catch (err) {
        console.error('Error in fetchCustomerData:', err)
        toast.error("Unable to load customer data. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchCustomerData()
  }, [])

  const handlePurchase = async () => {
    if (!customerData) {
      console.error('No customer data available')
      toast.error("Unable to process purchase. Please try again later.")
      return
    }

    setIsProcessing(true)
    try {
      console.log('Processing upsell purchase:', {
        product: currentProduct,
        customerData
      })
      
      const { data, error } = await supabase.functions.invoke('create-payment', {
        body: {
          priceId: currentProduct.priceId,
          customerId: customerData?.stripe_customer_id,
          customerEmail: customerData?.email,
          amount: currentProduct.price,
          mode: 'payment'
        }
      })

      if (error) {
        console.error('Payment processing error:', error)
        throw error
      }

      if (!data?.success) {
        throw new Error(data?.error || 'Failed to create payment session')
      }

      if (data?.url) {
        console.log('Redirecting to payment URL:', data.url)
        window.location.href = data.url
      } else {
        console.error('No payment URL received')
        throw new Error('No payment URL received')
      }
    } catch (error) {
      console.error("Error creating checkout session:", error)
      toast.error("Failed to process purchase. Please try again.")
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
    return (
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <div className="text-center">Loading...</div>
      </div>
    )
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