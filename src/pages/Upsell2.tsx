import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { supabase } from "@/integrations/supabase/client"
import { upsellProducts2 } from "@/components/upsell/upsellProducts2"
import UpsellProduct from "@/components/upsell/UpsellProduct"
import { useToast } from "@/hooks/use-toast"

const Upsell2 = () => {
  const navigate = useNavigate()
  const { toast } = useToast()
  const [customerData, setCustomerData] = useState<any>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const currentProduct = upsellProducts2[0]

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const { data: customers, error } = await supabase
          .from("customers")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(1)
        
        if (error) throw error
        
        if (customers && customers.length > 0) {
          setCustomerData(customers[0])
        }
      } catch (error) {
        console.error("Error fetching customer data:", error)
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to load customer data"
        })
      }
    }

    fetchCustomerData()
  }, [toast])

  const handlePurchase = async () => {
    setIsProcessing(true)
    try {
      const { data, error } = await supabase.functions.invoke('create-payment', {
        body: {
          priceId: currentProduct.priceId,
          customerId: customerData?.stripe_customer_id,
          customerEmail: customerData?.email,
          amount: currentProduct.price
        }
      })

      if (error) {
        console.error('Payment processing error:', error)
        throw error
      }

      if (data?.url) {
        window.location.href = data.url
      } else {
        console.log('No payment URL, navigating to portal')
        navigate('/portal')
      }
    } catch (error) {
      console.error("Error creating checkout session:", error)
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to process purchase"
      })
      navigate('/portal')
    } finally {
      setIsProcessing(false)
    }
  }

  const handleDecline = () => {
    navigate("/portal")
  }

  if (!currentProduct) {
    console.log('No product found, redirecting to portal')
    navigate('/portal')
    return null
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
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
    </div>
  )
}

export default Upsell2