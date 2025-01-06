import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LifepathAnalysisProps {
  lifePath: number;
  isVisible: boolean;
}

const LifepathAnalysis = ({ lifePath, isVisible }: LifepathAnalysisProps) => {
  if (!isVisible) return null;

  const getLifepathDescription = (number: number): string => {
    const descriptions: { [key: number]: string } = {
      33: "The Lifepath master number 33 is at the pinnacle of the number sequence. They are the master teachers, possessing the highest frequency among all numbers...",
      22: "The master number 22 is the number of the master builder. They are the second rarest number after the number 33, and they have an elevated master number frequency...",
      11: "As a Lifepath 11, firstly, the Lifepath 11 is a master number. The master number doesn't operate on the same frequency as others...",
      1: "So the Lifepath 1 is active, masculine, the opposite of Lifepath 2, which is passive, feminine...",
      2: "As a Lifepath 2, you embody feminine energy and natural intuition. You're diplomatic, nurturing, and excel in supportive roles...",
      3: "So you're a Life Path 3. 3 is the number of the child, 1 is the masculine number, 2 is the feminine number, and 3 is the childish number...",
      4: "So you're a Life Path 4. 4 is the number of the hardest worker; individuals with 4 energy can work like no one else...",
      5: "So you're a Life Path 5. The 5 is the number of freedom. They love freedom like no other number...",
      6: "So you're a Life Path 6. 6 is the number of home and family; they love to settle down and have a family...",
      7: "So you're a Life Path 7. One thing I must say now is that you have an incredible gift, but the gift also comes with multiple curses...",
      8: "So you're a Lifepath 8. A lot of 8s are actually confused because they think that 8 is the number of money...",
      9: "So you're a Life Path 9. 9 is one of the most misunderstood numbers out here..."
    };

    return descriptions[number] || "Invalid lifepath number";
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