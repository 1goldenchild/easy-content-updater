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
    bgGradient: "from-blue-400/10 via-blue-500/5 to-purple-500/10",
    iconColor: "text-blue-400",
    borderColor: "border-blue-500/20",
    burnGradient: "from-blue-400/0 via-blue-400/10 to-purple-500/5",
    glowColor: "blue",
    neonColor: "rgba(59, 130, 246, 0.5)"
  },
  {
    icon: TrendingUp,
    title: "Find Your True Path",
    description: "Discover the opportunities meant for you by aligning your actions with your natural path. When you understand your true purpose, you can move with confidence and clarity, making decisions that resonate with your inner strengths.",
    bgGradient: "from-purple-400/10 via-pink-500/5 to-red-500/10",
    iconColor: "text-purple-400",
    borderColor: "border-purple-500/20",
    burnGradient: "from-purple-400/0 via-purple-400/10 to-pink-500/5",
    glowColor: "purple",
    neonColor: "rgba(168, 85, 247, 0.5)" // Purple neon
  },
  {
    icon: Sparkles,
    title: "Unlock Abundance",
    description: "Tap into the powerful numbers that unlock prosperity and guide you toward smarter financial decisions. Use the precision of numerology to identify the most profitable opportunities and align your actions with abundance.",
    bgGradient: "from-amber-400/10 via-orange-500/5 to-red-500/10",
    iconColor: "text-amber-400",
    borderColor: "border-amber-500/20",
    burnGradient: "from-amber-400/0 via-amber-400/10 to-orange-500/5",
    glowColor: "amber",
    neonColor: "rgba(251, 191, 36, 0.5)" // Amber neon
  },
  {
    icon: Target,
    title: "Discover Your Truth",
    description: "The truth about your numbers will reveal powerful insights into who you really are—illuminating the reasons behind your behaviors, choices, and patterns in life. Numerology teaches you to understand not just your strengths and potential.",
    bgGradient: "from-emerald-400/10 via-teal-500/5 to-cyan-500/10",
    iconColor: "text-emerald-400",
    borderColor: "border-emerald-500/20",
    burnGradient: "from-emerald-400/0 via-emerald-400/10 to-teal-500/5",
    glowColor: "emerald",
    neonColor: "rgba(52, 211, 153, 0.5)" // Emerald neon
  }
];

const NeonLine = ({ isReversed = false }: { isReversed?: boolean }) => (
  <div className="relative w-full h-24 overflow-hidden my-8">
    <motion.div 
      className={`absolute w-full h-[2px] bg-gradient-to-r from-purple-600/0 via-purple-600 to-purple-600/0 ${
        isReversed ? "-scale-x-100" : ""
      }`}
      style={{
        boxShadow: "0 0 10px #9333ea, 0 0 20px #9333ea, 0 0 30px #9333ea",
      }}
      initial={{ x: "-100%" }}
      animate={{ x: "100%" }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  </div>
);

const ConnectingLines = () => (
  <div className="absolute inset-0 pointer-events-none">
    <div className="h-full w-full flex flex-col justify-between py-20">
      {[0, 1].map((index) => (
        <motion.div
          key={index}
          className="w-full h-[2px] bg-gradient-to-r from-purple-600/0 via-purple-600 to-purple-600/0"
          style={{
            boxShadow: "0 0 10px #9333ea, 0 0 20px #9333ea, 0 0 30px #9333ea",
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: index * 0.3 }}
        />
      ))}
    </div>
  </div>
);

const Benefits = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section className="relative py-20 overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-900/50 via-zinc-900 to-zinc-900" />
      
      <div className="relative max-w-7xl mx-auto px-3 md:px-4">
        <BenefitsHeader />
        
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6">
          <ConnectingLines />
          
          {benefits.map((benefit, index) => {
            const progress = useTransform(
              scrollYProgress,
              [index * 0.2, (index + 1) * 0.2],
              [0, 1]
            );

            const nextProgress = index < benefits.length - 1 
              ? useTransform(
                  scrollYProgress,
                  [(index + 1) * 0.2, (index + 2) * 0.2],
                  [0, 1]
                )
              : null;

            return (
              <>
                <BenefitCard
                  key={benefit.title}
                  {...benefit}
                  progress={progress}
                  nextProgress={nextProgress}
                  index={index}
                />
                {index < benefits.length - 1 && index % 2 === 0 && (
                  <NeonLine isReversed={index % 4 === 2} />
                )}
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
