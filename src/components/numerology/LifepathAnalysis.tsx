import { motion } from "framer-motion";

interface LifepathAnalysisProps {
  lifePath: number;
  isVisible: boolean;
}

const LifepathAnalysis = ({ lifePath, isVisible }: LifepathAnalysisProps) => {
  if (!isVisible) return null;

  const getLifepathDescription = (number: number): string => {
    const descriptions: { [key: number]: string } = {
      33: "The Lifepath master number 33 is at the pinnacle of the number sequence. They are the master teachers, possessing the highest frequency among all numbers. As a 33, you are a trailblazer with revolutionary ideas that help masses progress. You possess incredible intellect matching that of the 7s, with the capability to go even further. Your ideas have the power to reach global scales. You excel in fields involving communication and should meditate regularly. You do well with master numbers, numbers 6 and 7, but should be cautious with number 9.",
      22: "As a master number 22, you are the master builder. You have an elevated master frequency and can bring any project or goal to a global scale. You're an excellent coach with assertive yet compassionate nature. You possess natural strength and are one of the hardest workers. You thrive in fields where you can build and see progress. You do well with master numbers and should avoid getting stuck in emotionally draining situations.",
      11: "As a Lifepath 11, you possess an elevated frequency and natural charisma. You excel in leadership, sales, and social media due to your unique ability to connect with people emotionally. You have both masculine drive and feminine emotion, making you naturally charismatic. You should be in fields where you're compensated based on your social skills. Your soulmate number is 5, and you should be cautious with number 9 energy.",
      1: "As a Lifepath 1, you embody masculine energy and natural leadership. You're competitive, focused, and thrive on taking action. You excel in performance-based fields and entrepreneurial ventures. You lead from the front and have natural business acumen. Your soulmate number is 9, and you have a complex relationship with number 8. You do well with number 3 energy.",
      2: "As a Lifepath 2, you embody feminine energy and natural intuition. You're diplomatic, nurturing, and excel in supportive roles. You have a natural ability to maintain harmony and balance. Your strength lies in partnerships and cooperation. You thrive in environments where emotional intelligence is valued.",
      3: "As a Lifepath 3, you possess natural creativity and expression. You maintain a childlike enthusiasm and excel in communication. You're naturally entertaining and can explain complex topics simply. You thrive in fields involving communication: teaching, sales, social media, radio, voice acting, and coaching. You do best with other 3s and have good relationships with numbers 1 and 2.",
      4: "As a Lifepath 4, you are the hardest worker of all numbers. You find joy in work and have natural physical strength. You excel in fields requiring discipline and order. You're logical, practical, and bring stability to any situation. Your soulmate number is 8, and you work well in structured environments. You should avoid partnerships with number 3 energy.",
      5: "As a Lifepath 5, you embody freedom and adaptability. You love travel and constant motion. You're naturally entertaining and possess good looks and charm. You're among the smartest numbers and excel in fields requiring flexibility and quick thinking. Your soulmate is another 5, and you do well with 7s and 33s. Be cautious with number 8 energy.",
      6: "As a Lifepath 6, you value home, family, and responsibility. You excel in nurturing roles and bring stability to relationships. You're naturally responsible and find peace in traditional family life. You have a special connection with numbers 5 and 33. Be cautious with number 7 energy as it can create friction.",
      7: "As a Lifepath 7, you possess exceptional intelligence and analytical abilities. You're naturally introspective and excel in intellectual pursuits. While you may prefer solitude, you have unique insights and deep understanding. You work well with number 9 and should be cautious with number 6. Focus on fields that stimulate you mentally.",
      8: "As a Lifepath 8, you embody abundance and authority. You excel in positions of power and leadership. You have natural business acumen and understand the flow of energy and resources. You work well with number 4 and should be cautious with number 5. Focus on balancing wealth with other life aspects.",
      9: "As a Lifepath 9, you represent completion and transformation. You're highly spiritual and adaptable. You excel in fields requiring deep understanding and spiritual awareness. You work well with number 1 but should be cautious with master numbers. You have natural wisdom and the ability to see beyond illusions."
    };

    return descriptions[number] || "Invalid lifepath number";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8 p-6 rounded-lg bg-white/5 border border-white/10"
    >
      <h3 className="text-2xl font-bold text-white/90 mb-4">Your Lifepath Analysis</h3>
      <div className="prose prose-invert max-w-none">
        <p className="text-white/80 leading-relaxed">
          {getLifepathDescription(lifePath)}
        </p>
      </div>
    </motion.div>
  );
};

export default LifepathAnalysis;