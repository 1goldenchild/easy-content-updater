import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LifepathAnalysisProps {
  lifePath: number;
  isVisible: boolean;
}

const LifepathAnalysis = ({ lifePath, isVisible }: LifepathAnalysisProps) => {
  if (!isVisible) return null;

  const getLifepathDescription = (number: number): string => {
    const descriptions: Record<number, string> = {
      33: `The Lifepath master number 33 is at the pinnacle of the number sequence. They are the master teachers, possessing the highest frequency among all numbers. It's a real powerhouse, also representing transcendence. Those with a 33 Lifepath have the most influence in societies; they are the trailblazers, always coming up with revolutionary ideas that help the masses progress. But one must understand that with great power also comes great responsibility. Being a 33 Lifepath is not easy. They possess an incredible intellect matching that of the 7s, with the capability to go even further. They don't just have intelligence but also the skills and influence to bring their ideas to the world. Anything they do has the power to reach global scales, and that should be their aim.`,
      22: `The master number 22 is the number of the master builder. They are the second rarest number after the number 33, and they have an elevated master number frequency. These people, just like the 33, can bring any project or goal to a global scale. They are the master builders, from people to themselves to projects to companies. If you have a 22 on board, you already know you're in a good position.`,
      11: `As a Lifepath 11, firstly, the Lifepath 11 is a master number. The master number doesn't operate on the same frequency as others. You have a elevated frequency, which means your base level is higher than others'. If someone is the base level model, you are the upgraded version.`,
      1: `So the Lifepath 1 is active, masculine, the opposite of Lifepath 2, which is passive, feminine. It embodies male energy, making its individuals the most aggressive of all numbers, not necessarily in a negative way, but you have to channel that energy correctly.`,
      2: `So you're a Life Path 2. 2 is the number of feminine energy, exuding compassion, care, and a natural inclination for diplomacy.`,
      3: `So you're a Life Path 3. 3 is the number of the child, 1 is the masculine number, 2 is the feminine number, and 3 is the childish number. When we say 'oh, you're childish,' it's usually an insult, but in this case, it is not.`,
      4: `So you're a Life Path 4. 4 is the number of the hardest worker; individuals with 4 energy can work like no one else, especially if it's your Life Path number.`,
      5: `So you're a Life Path 5. The 5 is the number of freedom. They love freedom like no other number. They are not really the type to be fine with a 9-5, and they often fight to think outside the box.`,
      6: `So you're a Life Path 6. 6 is the number of home and family; they love to settle down and have a family, unlike the 7 which is anti-family with a loner vibe.`,
      7: `So you're a Life Path 7. One thing I must say now is that you have an incredible gift, but the gift also comes with multiple curses, so please read this without emotion and don't hate the messenger.`,
      8: `So you're a Lifepath 8. A lot of 8s are actually confused because they think that 8 is the number of money, but 8 is not the number of money… 8 is the number of abundance.`,
      9: `So you're a Life Path 9. 9 is one of the most misunderstood numbers out here; it's an extremely important number in the matrix. 9 is the number of completion and ending.`
    };

    return descriptions[number] || "Description not available for this number";
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full mt-8"
    >
      <div className="rounded-lg bg-white/5 border border-white/10">
        <ScrollArea className="h-[600px] w-full">
          <div className="p-6 md:p-8 lg:p-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white/90 mb-4">Your Lifepath Number</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-white/80 leading-relaxed whitespace-pre-line text-lg">
                    {getLifepathDescription(lifePath)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </motion.div>
  );
};

export default LifepathAnalysis;