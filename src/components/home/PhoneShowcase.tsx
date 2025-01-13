import { useState } from "react";
import PhoneFrame from "./phone/PhoneFrame";
import NumberSections from "./phone/sections/NumberSections";
import CoreTraits from "./phone/sections/CoreTraits";
import CareerPaths from "./phone/sections/CareerPaths";
import YearlyForecast from "./phone/sections/YearlyForecast";
import CompatibilitySection from "./phone/CompatibilitySection";
import CountryCompatibility from "./phone/sections/CountryCompatibility";
import CarCompatibilitySection from "./phone/sections/CarCompatibilitySection";
import TechCompatibilitySection from "./phone/sections/TechCompatibilitySection";
import LoveCompatibility from "./phone/sections/LoveCompatibility";
import MysteryBonus from "./phone/sections/MysteryBonus";
import ScrollHandler from "./phone/ScrollHandler";

const PhoneShowcase = () => {
  const [activeSection, setActiveSection] = useState("lifepath");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // For demo purposes, using a hardcoded life path number
  const lifePathNumber = 1;

  return (
    <PhoneFrame activeSection={activeSection} onSectionChange={scrollToSection}>
      <ScrollHandler onSectionChange={setActiveSection} />
      <div className="w-full space-y-6 p-4">
        <NumberSections />
        <CoreTraits />
        <CompatibilitySection />
        <LoveCompatibility lifePathNumber={lifePathNumber} />
        <CareerPaths />
        <CountryCompatibility />
        <CarCompatibilitySection />
        <TechCompatibilitySection />
        <YearlyForecast />
        <MysteryBonus />
      </div>
    </PhoneFrame>
  );
};

export default PhoneShowcase;