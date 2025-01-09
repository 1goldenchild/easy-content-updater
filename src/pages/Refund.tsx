import { motion } from "framer-motion"

const Refund = () => {
  return (
    <div className="container py-8 md:py-16 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
          Refund Policy
        </h1>
        
        <p className="text-muted-foreground">
          At Numerology 33, we are committed to providing accurate and insightful numerology analyses to our customers. We stand behind the quality of our services and offer a refund policy to ensure your satisfaction.
        </p>

        <div className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Refund Eligibility</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>We offer a full refund on numerology analyses if you do not learn any new information from the analysis.</li>
              <li>To be eligible for a refund, you must have filled in the email sent at the time of purchase, answering the questions provided.</li>
              <li>Refund requests must be submitted within 1 day of receiving your numerology analysis.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">How to Request a Refund</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>To request a refund, please contact us at Support@numerology33.com with your refund request and the email you provided at the time of purchase.</li>
              <li>Please include the reasons why you believe you did not learn any new information from the analysis.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Refund Process</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Once your refund request is received and reviewed, we will notify you of the approval or rejection of your refund.</li>
              <li>If your refund is approved, it will be processed, and a credit will automatically be applied to your original method of payment.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions or concerns about our refund policy, please contact us at support@Numerology33.com. We are here to assist you and ensure your satisfaction with our services.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  )
}

export default Refund