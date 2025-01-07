import Hero from "@/components/home/Hero"
import SecretKnowledge from "@/components/home/SecretKnowledge"
import Benefits from "@/components/home/Benefits"
import CallToAction from "@/components/home/CallToAction"
import CustomerCount from "@/components/home/CustomerCount"
import SalesPitch from "@/components/home/SalesPitch"
import ProgressIndicator from "@/components/numerology/ProgressIndicator"
import Testimonials from "@/components/home/Testimonials"

const Index = () => {
  return (
    <div className="flex-1">
      <div id="hero">
        <Hero />
      </div>
      <ProgressIndicator />
      <div id="benefits">
        <Benefits />
      </div>
      <div id="sales">
        <SalesPitch />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="knowledge">
        <SecretKnowledge />
      </div>
      <div id="cta">
        <CallToAction />
      </div>
      <div id="stats">
        <CustomerCount />
      </div>
    </div>
  )
}

export default Index