import Hero from "@/components/home/Hero"
import SecretKnowledge from "@/components/home/SecretKnowledge"
import Benefits from "@/components/home/Benefits"
import SalesPitch from "@/components/home/SalesPitch"
import Testimonials from "@/components/home/Testimonials"
import BlogSection from "@/components/home/sections/BlogSection"

const Index = () => {
  return (
    <div className="flex-1">
      <div id="hero">
        <Hero />
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
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="blog">
        <BlogSection />
      </div>
    </div>
  );
};

export default Index;