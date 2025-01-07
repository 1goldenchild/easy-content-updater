import Hero from "@/components/home/Hero"
import SecretKnowledge from "@/components/home/SecretKnowledge"
import Benefits from "@/components/home/Benefits"
import CallToAction from "@/components/home/CallToAction"
import CustomerCount from "@/components/home/CustomerCount"
import SalesPitch from "@/components/home/SalesPitch"
import ProgressIndicator from "@/components/numerology/ProgressIndicator"

const Index = () => {
  return (
    <div className="flex-1">
      <Hero />
      <ProgressIndicator />
      <SecretKnowledge />
      <Benefits />
      <SalesPitch />
      <CallToAction />
      <CustomerCount />
    </div>
  )
}

export default Index