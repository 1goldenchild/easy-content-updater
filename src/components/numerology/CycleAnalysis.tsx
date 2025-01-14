import { motion } from "framer-motion";
import { Infinity } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { calculateCycleNumber } from "@/utils/numerologyCalculations";

interface CycleAnalysisProps {
  isVisible: boolean;
  dateOfBirth: Date;
}

const CycleAnalysis = ({ isVisible, dateOfBirth }: CycleAnalysisProps) => {
  if (!isVisible) return null;

  const cycleNumber = calculateCycleNumber(dateOfBirth);
  const cycleDescription = cycleDescriptions[cycleNumber];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full mt-8"
    >
      <div className="rounded-lg bg-white/5 border border-white/10">
        <ScrollArea className="h-[400px] w-full">
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6">
              <Infinity className="w-6 h-6 text-blue-400" />
              <h3 className="text-2xl font-bold text-white/90">Cycle Number {cycleNumber} Analysis</h3>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-white/70 text-lg whitespace-pre-wrap">
                {cycleDescription}
              </p>
            </div>
          </div>
        </ScrollArea>
      </div>
    </motion.div>
  );
};

const cycleDescriptions: { [key: number]: string } = {
  1: "In Cycle 1, you are stepping into a new phase of personal growth, and this cycle is all about beginnings, independence, and leadership. This is a time to take charge, set new goals, and assert your individuality. It's a year where your natural leadership qualities come to the forefront, and you're driven to start something new. If you're passionate about a particular project, this is the time to dive in headfirst and initiate action.",
  
  2: "Cycle 2 brings a shift from action to collaboration. It's a year of partnerships, balance, and cooperation. For Lifepath 1, this is a time when the independent, goal-oriented energy starts to work alongside others. While you may naturally prefer to lead, in Cycle 2, you will need to rely on collaboration and partnership to achieve your goals. This may require you to learn patience and understanding, especially when working with those whose energy is more passive or less aggressive than your own.\n\nA major emotional aspect of Cycle 2: You may find yourself feeling extremely emotional during this time, and that's totally normal. The energy of the 2 brings heightened sensitivity and deeper emotional responses to situations. This cycle encourages you to connect more deeply with your emotions, and as a result, you may experience more vulnerability, empathy, or even mood swings. It's important to embrace these emotions rather than resist them, as they offer an opportunity for growth and understanding.",
  
  3: "Cycle 3 is a year of creative expression, joy, and optimism. This cycle invites you to express your individuality and creativity more freely. You may find yourself seeking new avenues for self-expression, whether through art, performance, or other forms of communication.",
  
  4: "Cycle 4 brings a focus on hard work, stability, and building. This cycle calls for practicality and structure. While you're still focused on leading and initiating, this year requires you to focus on building a solid foundation for long-term success. This may involve taking a more methodical approach to your goals, building systems that will support your ambitions in the future.",
  
  5: "Cycle 5 is all about freedom, change, and adventure. This is a time to break free from any limitations you may have set for yourself. You'll feel a strong desire to expand your horizons, try new things, and take risks. It's a time to embrace your independence and shake things up in your life. Travel, new opportunities, and a sense of personal freedom will be key.",
  
  6: "Cycle 6 is all about home, family, and responsibility. This is a time to nurture those around you, create a sense of security, and step into the role of a caretaker—whether it's for your family, friends, or even yourself. The focus now shifts toward creating a harmonious and loving environment. You may find yourself drawn to your home, feeling a deep need to nurture and care for those you love. This is a time for stability, balance, and taking responsibility for your actions.",
  
  7: "Cycle 7 is all about introspection, knowledge, and spiritual growth. This is a time to dive deep within yourself, search for truth, and connect with your inner wisdom. You may feel more introspective than usual, longing for solitude and quiet reflection. It's a time to pull away from the noise of the world and focus on your personal development and spiritual journey. This cycle encourages you to explore philosophical or esoteric topics, and it may push you to ask bigger questions about life and existence.\n\nHowever, there's a key note of caution in Cycle 7: it is the number of injury. This means you need to be extremely careful when engaging in physical activities or sports. The energy of the 7 can make you more prone to accidents, strains, or injuries during this period, especially if you're pushing yourself too hard or not paying attention to your body's limits. While seeking knowledge and spiritual growth, also make sure to nurture your physical health and avoid taking unnecessary risks in sports or physical activities.\n\nDuring this time, the focus is on mental and spiritual elevation, but it's equally important to balance that with physical well-being. Take extra care when participating in activities that could lead to injury or physical strain—avoid overextending yourself and listen to your body. It's crucial to practice mindfulness in all areas of life, including physical movement, to ensure you don't push yourself beyond what your body can handle.",
  
  8: "Cycle 8 is all about power, success, and achievement. This is a time to step into your personal strength and claim your place in the world. You'll feel a strong desire to make things happen, whether it's in your career, finances, or personal goals. It's a time to be assertive, take charge, and set your sights on what you want to accomplish.",
  
  9: "Cycle 9 is all about completion, compassion, and letting go. This is a time to reflect on your journey and consider what you've learned. You may feel a strong desire to help others, contribute to a cause, or make a positive impact on the world. It's a time for closure and for wrapping up loose ends, whether it's in relationships, projects, or situations that no longer serve you.\n\nYou'll be thinking about your legacy and how you can leave the world a better place. There's a strong urge to serve others and share your wisdom, and you may find yourself drawn to humanitarian work or creative projects that have a positive impact. As you release what no longer serves you, you create space for new beginnings and fresh opportunities.\n\nHowever, Cycle 9 also calls for deep self-awareness—this is the time to work on your ego. The energy of the 9 can make you feel like you're above others or that you know better than most. It's essential to stay grounded, humble, and focused on service. If you get caught up in ego-driven behavior, it will block your ability to truly help others and close out chapters in your life. This cycle asks you to check your pride and work on letting go of any inflated sense of self.\n\nAdditionally, Cycle 9 is a time to stay away from any substances or escapism. Whether it's alcohol, drugs, or anything that helps you avoid facing reality, it's time to step into your highest potential and let go of any unhealthy distractions. You may feel tempted to numb yourself from the intensity of this cycle's transformative energy, but resisting that temptation will help you emerge stronger, wiser, and more aligned with your true purpose."
};

export default CycleAnalysis;