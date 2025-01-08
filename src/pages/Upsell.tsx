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
  
  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        console.log('Fetching customer data...')
        const { data: { session } } = await supabase.auth.getSession()
        
        if (!session?.user?.email) {
          console.log('No user session found')
          navigate('/upsell2')
          return
        }

        const { data, error: dbError } = await supabase
          .from('customers')
          .select('*')
          .eq('email', session.user.email)
          .single()

        if (dbError) {
          console.error('Error fetching customer:', dbError)
          navigate('/upsell2')
          return
        }

        if (data) {
          console.log('Customer data fetched:', data)
          setCustomerData(data)
        }
      } catch (err) {
        console.error('Error in fetchCustomerData:', err)
        navigate('/upsell2')
      }
    }

    fetchCustomerData()
  }, [navigate])

  const handlePurchase = async (priceId: string) => {
    setIsProcessing(true)
    try {
      const response = await fetch("/api/create-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: priceId,
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
      toast.error("Failed to process purchase")
    } finally {
      setIsProcessing(false)
    }
  }

  const handleDecline = () => {
    console.log('User declined upsell')
    navigate('/upsell2')
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      {upsellProducts.map((product) => (
        <UpsellProduct
          key={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          features={product.features}
          image={product.image}
          isProcessing={isProcessing}
          onAccept={() => handlePurchase(product.priceId)}
          onDecline={handleDecline}
        />
      ))}
    </div>
  )
}

export default Upsell