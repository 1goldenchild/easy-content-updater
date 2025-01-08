import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { supabase } from "@/integrations/supabase/client"
import { upsellProducts2 } from "@/components/upsell/upsellProducts2"
import UpsellProduct from "@/components/upsell/UpsellProduct"
import { useToast } from "@/components/ui/use-toast"

const Upsell2 = () => {
  const navigate = useNavigate()
  const { toast } = useToast()
  const [customerData, setCustomerData] = useState<any>(null)
  const [isProcessing, setIsProcessing] = useState(false)

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
      const response = await fetch("/api/create-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: upsellProducts2[0].priceId,
          customerId: customerData?.stripe_customer_id,
          customerEmail: customerData?.email
        }),
      })

      const data = await response.json()

      if (data.url) {
        window.location.href = data.url
      }
    } catch (error) {
      console.error("Error creating checkout session:", error)
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to process purchase"
      })
    } finally {
      setIsProcessing(false)
    }
  }

  const handleDecline = () => {
    navigate("/portal")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
        {upsellProducts2.map((product) => (
          <UpsellProduct
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            features={product.features}
            image={product.image}
            isProcessing={isProcessing}
            onAccept={handlePurchase}
            onDecline={handleDecline}
          />
        ))}
      </div>
    </div>
  )
}

export default Upsell2