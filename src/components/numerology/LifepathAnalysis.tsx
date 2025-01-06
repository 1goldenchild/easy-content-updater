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
      33: "The Lifepath master number 33 is at the pinnacle of the number sequence. They are the master teachers, possessing the highest frequency among all numbers. As a 33, you have an innate ability to inspire and guide others towards their highest potential. Your life mission involves selfless service and spreading wisdom that uplifts humanity...",
      22: "The master number 22 is the number of the master builder. They are the second rarest number after the number 33, and they have an elevated master number frequency. As a 22, you possess extraordinary potential to manifest grand visions into reality. You combine practical abilities with intuitive insights to create lasting structures and systems that benefit society...",
      11: "As a Lifepath 11, firstly, the Lifepath 11 is a master number. The master number doesn't operate on the same frequency as others. You possess heightened spiritual awareness and intuitive abilities. Your life purpose involves illuminating the path for others through your unique insights and understanding of higher truths...",
      1: "So the Lifepath 1 is active, masculine, the opposite of Lifepath 2, which is passive, feminine. You are a natural leader with strong initiative and pioneering spirit. Your life purpose involves developing independence, originality, and the courage to forge new paths. You're here to learn self-reliance and leadership...",
      2: "As a Lifepath 2, you embody feminine energy and natural intuition. You're diplomatic, nurturing, and excel in supportive roles. Your life purpose involves developing cooperation, partnerships, and finding balance in relationships. You're here to teach the importance of harmony and collaboration...",
      3: "So you're a Life Path 3. 3 is the number of the child, 1 is the masculine number, 2 is the feminine number, and 3 is the childish number. You possess natural creativity and expressive abilities. Your life purpose involves bringing joy, inspiration, and beauty to the world through your creative talents...",
      4: "So you're a Life Path 4. 4 is the number of the hardest worker; individuals with 4 energy can work like no one else. Your life purpose involves building stable foundations and creating order from chaos. You're here to teach the value of discipline, hard work, and reliability...",
      5: "So you're a Life Path 5. The 5 is the number of freedom. They love freedom like no other number. Your life purpose involves embracing change and adventure while teaching others about adaptability and personal freedom. You're here to experience life fully and inspire others to break free from limitations...",
      6: "So you're a Life Path 6. 6 is the number of home and family; they love to settle down and have a family. Your life purpose involves nurturing, healing, and creating harmony in domestic and community settings. You're here to teach the importance of responsibility and unconditional love...",
      7: "So you're a Life Path 7. One thing I must say now is that you have an incredible gift, but the gift also comes with multiple curses. Your life purpose involves seeking deeper truths and spiritual wisdom. You're here to develop your analytical mind while maintaining a connection to spiritual insights...",
      8: "So you're a Lifepath 8. A lot of 8s are actually confused because they think that 8 is the number of money. Your life purpose involves mastering the material world while maintaining spiritual balance. You're here to learn about power, authority, and the responsible use of resources...",
      9: "So you're a Life Path 9. 9 is one of the most misunderstood numbers out here. Your life purpose involves humanitarian service and universal love. You're here to learn about completion, letting go, and serving humanity with wisdom gained from experience..."
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