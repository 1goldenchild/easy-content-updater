import Hero from "@/components/home/Hero"
import SecretKnowledge from "@/components/home/SecretKnowledge"
import Benefits from "@/components/home/Benefits"
import SalesPitch from "@/components/home/SalesPitch"
import Testimonials from "@/components/home/Testimonials"
import BlogSection from "@/components/home/sections/BlogSection"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

const Index = () => {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
};

export default Index;