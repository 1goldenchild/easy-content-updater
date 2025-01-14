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
import CycleSection from "./phone/sections/CycleSection";
import EnergySection from "./phone/sections/EnergySection";
import SecretSection from "./phone/sections/SecretSection";
import ColorCompatibility from "@/components/numerology/ColorCompatibility";

const PhoneShowcase = () => {
  const [activeSection, setActiveSection] = useState("lifepath");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // For demo purposes, using a hardcoded life path number and date
  const lifePathNumber = 1;
  const demoDate = new Date(2000, 0, 1); // January 1, 2000

  return (
    <PhoneFrame activeSection={activeSection} onSectionChange={scrollToSection}>
      <ScrollHandler onSectionChange={setActiveSection} />
      <div className="w-full space-y-6 p-4">
        <NumberSections />
        <CoreTraits />
        <CompatibilitySection />
        <CareerPaths />
        <ColorCompatibility lifePath={lifePathNumber} isVisible={true} />
        <CycleSection dateOfBirth={demoDate} />
        <EnergySection />
        <SecretSection />
        <LoveCompatibility lifePathNumber={lifePathNumber} />
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