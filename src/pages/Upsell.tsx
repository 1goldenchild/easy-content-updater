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
  
  const currentProduct = upsellProducts[0]
  
  console.log('Upsell page rendering with product:', currentProduct)

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        console.log('Fetching customer data...')
        const { data: customers, error } = await supabase
          .from("customers")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(1)
        
        if (error) throw error
        
        if (customers && customers.length > 0) {
          console.log('Customer data fetched:', customers[0])
          setCustomerData(customers[0])
        }
      } catch (err) {
        console.error('Error in fetchCustomerData:', err)
        toast.error("Failed to load customer data")
      }
    }

    fetchCustomerData()
  }, [])

  const handlePurchase = async () => {
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