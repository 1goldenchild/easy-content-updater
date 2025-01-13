import { Sparkles, Brain, Rocket, Target, Heart, Star } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  neonColor: string;
  number: number;
}

export const features: Feature[] = [
  {
    icon: Sparkles,
    title: "Personalized Insights",
    description: "Get deep, personalized numerological insights based on your unique birth date.",
    gradient: "from-purple-500 to-indigo-500",
    neonColor: "rgba(147, 51, 234, 0.5)",
    number: 1
  },
  {
    icon: Brain,
    title: "Life Path Analysis",
    description: "Discover your life path number and understand your core personality traits and life purpose.",
    gradient: "from-blue-500 to-cyan-500",
    neonColor: "rgba(59, 130, 246, 0.5)",
    number: 2
  },
  {
    icon: Heart,
    title: "Relationship Compatibility",
    description: "Explore relationship dynamics and compatibility with partners through numerology.",
    gradient: "from-pink-500 to-rose-500",
    neonColor: "rgba(236, 72, 153, 0.5)",
    number: 3
  },
  {
    icon: Target,
    title: "Career Guidance",
    description: "Get insights into your ideal career path and professional opportunities based on your numbers.",
    gradient: "from-green-500 to-emerald-500",
    neonColor: "rgba(16, 185, 129, 0.5)",
    number: 4
  },
  {
    icon: Rocket,
    title: "Future Predictions",
    description: "Understand upcoming trends and potential opportunities in your life journey.",
    gradient: "from-orange-500 to-amber-500",
    neonColor: "rgba(245, 158, 11, 0.5)",
    number: 5
  },
  {
    icon: Star,
    title: "Daily Numbers",
    description: "Receive daily numerological guidance and lucky numbers for optimal decision-making.",
    gradient: "from-violet-500 to-purple-500",
    neonColor: "rgba(139, 92, 246, 0.5)",
    number: 6
  }
];