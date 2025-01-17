import React from 'react';
import Hero from "@/components/home/Hero";
import Benefits from "@/components/home/Benefits";
import PhoneShowcase from "@/components/home/PhoneShowcase";
import SecretKnowledge from "@/components/home/SecretKnowledge";
import CTASection from "@/components/home/CTASection";
import Testimonials from "@/components/home/Testimonials";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Benefits />
      <PhoneShowcase />
      <SecretKnowledge />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default Home;