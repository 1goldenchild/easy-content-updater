import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { supabase } from "@/integrations/supabase/client"
import UpsellProduct from "@/components/upsell/UpsellProduct"
import { upsellProducts } from "@/components/upsell/upsellProducts"

const Upsell = () => {
  const navigate = useNavigate()
  const [isProcessing, setIsProcessing] = useState(false)
  const [customerEmail, setCustomerEmail] = useState<string | null>(null)
  const currentProduct = upsellProducts[0]
  
  useEffect(() => {
    const getCustomerEmail = async () => {
      const { data, error } = await supabase
        .from('customers')
        .select('email')
        .order('created_at', { ascending: false })
        .limit(1)
        .single()
      
      if (error) {
        console.error('Error fetching customer:', error)
        return
      }

      if (data?.email) {
        console.log('Customer email found:', data.email)
        setCustomerEmail(data.email)
      }
    }

    getCustomerEmail()
  }, [])

  const handlePurchase = async () => {
    if (!customerEmail) {
      console.error('No customer email found')
      toast.error("Unable to process purchase. Please try again.")
      return
    }

    setIsProcessing(true)
    try {
      console.log('Processing upsell purchase for:', customerEmail)
      
      const { data, error } = await supabase.functions.invoke('create-payment', {
        body: {
          customerEmail,
          priceId: currentProduct.priceId,
          amount: currentProduct.price,
          mode: 'payment'
        }
      })

      if (error) throw error

      if (data?.url) {
        window.location.href = data.url
      } else {
        navigate('/upsell2')
      }
    } catch (error) {
      console.error("Payment error:", error)
      toast.error("Failed to process purchase")
      navigate('/upsell2')
    } finally {
      setIsProcessing(false)
    }
  }

  const handleDecline = () => {
    navigate('/upsell2')
  }

  if (!currentProduct) {
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