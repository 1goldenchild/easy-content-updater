import { motion } from "framer-motion"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="container py-8 md:py-16 max-w-4xl mx-auto flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
            Terms And Conditions
          </h1>
          
          <p className="text-muted-foreground">
            Welcome to Numerology 33! By accessing our website and using our services, you agree to comply with and be bound by the following Terms and Conditions. Please read these Terms carefully before using our website or engaging with our services.
          </p>

          <div className="space-y-6">
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content, materials, and analyses provided on Numerology 33 are the property of Numerology 33 and are protected by copyright laws. You may not reproduce, distribute, or modify any content without prior written consent.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Numerology Analyses</h2>
              <p className="text-muted-foreground">
                Our numerology analyses are provided for informational purposes only and should not be considered as professional or medical advice. We do not guarantee the accuracy or effectiveness of our analyses, and you should consult a qualified professional for personalized guidance.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Refund Policy</h2>
              <p className="text-muted-foreground">
                We guarantee to reimburse your money on numerology analyses if we fail to provide you with information that you didn't already know. To be eligible for a refund, you must fill us the email sent at purchase stating what you already know about the number.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                Numerology 33 shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of our website or services.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}

export default Terms