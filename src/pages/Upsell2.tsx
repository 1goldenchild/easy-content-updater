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

  const handlePurchase = async (productId: string) => {
    try {
      const response = await fetch("/api/create-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId,
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
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Special One-Time Offer!
      </h1>
      <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
        {upsellProducts2.map((product) => (
          <UpsellProduct
            key={product.id}
            product={product}
            onPurchase={() => handlePurchase(product.id)}
          />
        ))}
      </div>
      <div className="text-center mt-8">
        <button
          onClick={() => navigate("/portal")}
          className="text-blue-600 hover:text-blue-800 underline"
        >
          No thanks, take me to my dashboard
        </button>
      </div>
    </div>
  )
}

export default Upsell2