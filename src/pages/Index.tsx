import Hero from "@/components/home/Hero"
import SecretKnowledge from "@/components/home/SecretKnowledge"
import Benefits from "@/components/home/Benefits"
import CallToAction from "@/components/home/CallToAction"

const Index = () => {
  return (
    <div className="flex-1">
      <Hero />
      <SecretKnowledge />
      <Benefits />
      <CallToAction />
    </div>
  )
}

export default Index