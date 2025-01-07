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
      <div id="hero">
        <Hero />
      </div>
      <ProgressIndicator />
      {/* Example of how to add a GIF */}
      <div className="flex justify-center py-8">
        <img 
          src="your-gif-url.gif" 
          alt="Description of your GIF"
          className="rounded-lg shadow-lg max-w-md" 
        />
      </div>
      <div id="benefits">
        <Benefits />
      </div>
      <div id="sales">
        <SalesPitch />
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