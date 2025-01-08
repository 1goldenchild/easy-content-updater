import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

const packages = [
  {
    id: "basic",
    name: "Essential Insights",
    price: 29.99,
    features: [
      "Basic Life Path Number Analysis",
      "Personality Number Reading",
      "Core Numbers Interpretation",
      "24-hour Support"
    ]
  },
  {
    id: "premium",
    name: "Deep Discovery",
    price: 49.99,
    features: [
      "Everything in Essential",
      "Detailed Compatibility Analysis",
      "Career Path Guidance",
      "Monthly Numerology Forecast",
      "Priority Support"
    ]
  },
  {
    id: "ultimate",
    name: "Complete Transformation",
    price: 99.99,
    features: [
      "Everything in Deep Discovery",
      "Personal Year Cycles",
      "Life Purpose Analysis",
      "Karmic Debt Numbers",
      "Weekly Video Consultations",
      "VIP Support"
    ]
  }
]

const ebooks = [
  {
    id: "ebook1",
    name: "Mastering Numerology",
    price: 19.99,
    description: "A comprehensive guide to understanding and applying numerology in your daily life."
  },
  {
    id: "ebook2",
    name: "Sacred Numbers",
    price: 24.99,
    description: "Discover the ancient wisdom and spiritual significance behind numbers."
  }
]

const Checkout = () => {
  const [step, setStep] = useState<"package" | "ebook1" | "ebook2" | "payment">("package")
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null)
  const [selectedEbooks, setSelectedEbooks] = useState<string[]>([])
  const navigate = useNavigate()

  const handlePackageSelect = (packageId: string) => {
    setSelectedPackage(packageId)
    setStep("ebook1")
  }

  const handleEbookSelect = (ebookId: string, addToCart: boolean) => {
    if (addToCart) {
      setSelectedEbooks([...selectedEbooks, ebookId])
    }
    
    if (step === "ebook1") {
      setStep("ebook2")
    } else if (step === "ebook2") {
      setStep("payment")
      // Here we would normally initialize the payment process
      toast.success("Proceeding to payment...")
      // For now, just redirect back to home
      setTimeout(() => navigate("/"), 2000)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      {step === "package" && (
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Choose Your Numerology Package
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Select the package that best suits your journey of self-discovery
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-semibold text-center">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-center text-purple-600">
                    ${pkg.price}
                  </div>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-purple-500">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    onClick={() => handlePackageSelect(pkg.id)}
                  >
                    Select Package
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {(step === "ebook1" || step === "ebook2") && (
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Special Offer
            </h2>
            <p className="text-muted-foreground">
              Enhance your numerology journey with our exclusive ebook
            </p>
          </div>

          <Card className="p-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">
                {ebooks[step === "ebook1" ? 0 : 1].name}
              </h3>
              <p className="text-muted-foreground">
                {ebooks[step === "ebook1" ? 0 : 1].description}
              </p>
              <div className="text-2xl font-bold text-purple-600">
                ${ebooks[step === "ebook1" ? 0 : 1].price}
              </div>
              <div className="flex gap-4">
                <Button
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  onClick={() => handleEbookSelect(ebooks[step === "ebook1" ? 0 : 1].id, true)}
                >
                  Add to Order
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => handleEbookSelect(ebooks[step === "ebook1" ? 0 : 1].id, false)}
                >
                  No, Thanks
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}

export default Checkout