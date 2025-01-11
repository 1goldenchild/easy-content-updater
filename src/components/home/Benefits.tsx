import { motion, useScroll, useTransform } from "framer-motion";
import { TrendingUp, Target, Sparkles, Users } from "lucide-react";
import { useRef } from "react";
import BenefitsHeader from "./benefits/BenefitsHeader";
import BenefitCard from "./benefits/BenefitCard";

const benefits = [
  {
    icon: Users,
    title: "Understand People Better",
    description: "Use numerology to gain deep insights into yourself and others. Understand the motivations behind people's actions, discover why they behave the way they do, and unlock the hidden dynamics of your relationships.",
    bgGradient: "from-[#FEC6A1] via-[#D946EF]/20 to-[#9b87f5]/30",
    iconColor: "text-[#FEC6A1]",
    borderColor: "border-[#FEC6A1]/20",
    burnGradient: "from-[#FEC6A1]/0 via-[#FEC6A1]/20 to-[#D946EF]/10",
    glowColor: "amber",
    neonColor: "rgba(254, 198, 161, 0.5)"
  },
  {
    icon: TrendingUp,
    title: "Find Your True Path",
    description: "Discover the opportunities meant for you by aligning your actions with your natural path. When you understand your true purpose, you can move with confidence and clarity, making decisions that resonate with your inner strengths.",
    bgGradient: "from-[#9b87f5] via-[#7E69AB]/20 to-[#D946EF]/30",
    iconColor: "text-[#9b87f5]",
    borderColor: "border-[#9b87f5]/20",
    burnGradient: "from-[#9b87f5]/0 via-[#9b87f5]/20 to-[#7E69AB]/10",
    glowColor: "purple",
    neonColor: "rgba(155, 135, 245, 0.5)"
  },
  {
    icon: Sparkles,
    title: "Unlock Abundance",
    description: "Tap into the powerful numbers that unlock prosperity and guide you toward smarter financial decisions. Use the precision of numerology to identify the most profitable opportunities and align your actions with abundance.",
    bgGradient: "from-[#D946EF] via-[#9b87f5]/20 to-[#FEC6A1]/30",
    iconColor: "text-[#D946EF]",
    borderColor: "border-[#D946EF]/20",
    burnGradient: "from-[#D946EF]/0 via-[#D946EF]/20 to-[#9b87f5]/10",
    glowColor: "pink",
    neonColor: "rgba(217, 70, 239, 0.5)"
  },
  {
    icon: Target,
    title: "Discover Your Truth",
    description: "The truth about your numbers will reveal powerful insights into who you really are—illuminating the reasons behind your behaviors, choices, and patterns in life. Numerology teaches you to understand not just your strengths and potential.",
    bgGradient: "from-[#7E69AB] via-[#D946EF]/20 to-[#9b87f5]/30",
    iconColor: "text-[#7E69AB]",
    borderColor: "border-[#7E69AB]/20",
    burnGradient: "from-[#7E69AB]/0 via-[#7E69AB]/20 to-[#D946EF]/10",
    glowColor: "purple",
    neonColor: "rgba(126, 105, 171, 0.5)"
  }
];

const Benefits = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"]
  });

  return (
    <section className="relative -mt-10 py-20 overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a21] via-[#1A1F2C]/95 to-[#221F26]" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.15),transparent_50%)]" 
             style={{ transform: 'translateY(25%)' }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-3 md:px-4">
        <BenefitsHeader />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 relative">
          {benefits.map((benefit, index) => {
            const startTrigger = 0.1 + (index * 0.08);
            const endTrigger = startTrigger + 0.15;

            const cardProgress = useTransform(
              scrollYProgress,
              [startTrigger, endTrigger],
              [0, 1]
            );

            return (
              <BenefitCard
                key={index}
                {...benefit}
                progress={cardProgress}
                index={index}
                alwaysLit={true}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;