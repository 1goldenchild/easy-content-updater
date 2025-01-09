import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const Support = () => {
  return (
    <div className="container py-8 md:py-16 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
          Support
        </h1>
        
        <div className="space-y-6">
          <p className="text-muted-foreground">
            We're here to help! If you have any questions, concerns, or need assistance with our services, please don't hesitate to reach out to our support team.
          </p>

          <div className="bg-card p-6 rounded-lg border space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Contact Information</h2>
            <p className="text-muted-foreground">
              For the fastest response, please email us at:
            </p>
            <Button
              variant="secondary"
              className="gap-2"
              onClick={() => window.location.href = "mailto:support@numerology33.com"}
            >
              <Mail className="h-4 w-4" />
              support@numerology33.com
            </Button>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Support Hours</h2>
            <p className="text-muted-foreground">
              Our support team typically responds within 24 hours during business days. We strive to provide the best possible assistance to all our customers.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Common Topics</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Questions about your numerology analysis</li>
              <li>Technical issues with the website</li>
              <li>Refund requests</li>
              <li>Account-related inquiries</li>
              <li>General questions about our services</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Support