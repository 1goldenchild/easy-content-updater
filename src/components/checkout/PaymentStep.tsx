import { motion } from "framer-motion"
import { StripePaymentForm } from "./StripeElements"

const PaymentStep = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto space-y-8"
    >
      <h1 className="text-3xl font-bold text-center">
        Complete Your Purchase
      </h1>

      <div className="bg-gray-800/50 rounded-lg p-8">
        <StripePaymentForm />
      </div>
    </motion.div>
  )
}

export default PaymentStep