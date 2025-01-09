import { motion } from "framer-motion"

const Privacy = () => {
  return (
    <div className="container py-8 md:py-16 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        
        <p className="text-muted-foreground">
          At Numerology 33, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you visit our website or engage with our services.
        </p>

        <div className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Information We Collect</h2>
            <div className="space-y-2">
              <h3 className="font-medium text-foreground">Personal Information</h3>
              <p className="text-muted-foreground">
                When you purchase a numerology analysis or sign up for our services, we may collect personal information such as your name, email address, and payment details.
              </p>
              <h3 className="font-medium text-foreground">Numerology Information</h3>
              <p className="text-muted-foreground">
                To provide you with accurate and personalized numerology analyses, we may ask for information about your birthdate and other relevant details.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">How We Use Your Information</h2>
            <div className="space-y-2">
              <h3 className="font-medium text-foreground">Personalization</h3>
              <p className="text-muted-foreground">
                We use the information we collect to personalize your experience and provide you with tailored numerology analyses and recommendations.
              </p>
              <h3 className="font-medium text-foreground">Communication</h3>
              <p className="text-muted-foreground">
                We may use your contact information to send you updates, newsletters, or promotional offers related to numerology products and services.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Information Sharing</h2>
            <p className="text-muted-foreground">
              We do not sell, trade, or rent your personal information to third parties. However, we may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions or concerns about our Privacy Policy, please contact us at support@numerology33.com
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  )
}

export default Privacy