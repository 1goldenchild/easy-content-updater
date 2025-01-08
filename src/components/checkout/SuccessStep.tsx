import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const SuccessStep = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto text-center space-y-8"
    >
      <div className="flex justify-center">
        <CheckCircle className="w-20 h-20 text-green-500" />
      </div>
      
      <h1 className="text-4xl font-bold">
        Thank You For Your Purchase!
      </h1>
      
      <p className="text-xl text-gray-300">
        Your order has been processed successfully. Check your email for access to your products.
      </p>
    </motion.div>
  )
}

export default SuccessStep