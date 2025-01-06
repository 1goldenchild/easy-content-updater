import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PartialEnergyAnalysisProps {
  partialEnergy: number;
  isVisible: boolean;
}

const PartialEnergyAnalysis = ({ partialEnergy, isVisible }: PartialEnergyAnalysisProps) => {
  if (!isVisible) return null;

  const getPartialEnergyDescription = (number: number): string => {
    const descriptions: { [key: number]: string } = {
      1: "So the number 1 is active, masculine, it's the opposite of the number 2, which is passive, feminine, it's the male energy, these people are the most aggressive of all the numbers, not necessarily in a bad way, although you have to channel that energy right because with that much ruthlessness if it's not directed in the right field it can lead to a bad outcome...",
      2: "So you're a Partial 2. 2 is the number of feminine energy, exuding compassion, care, and a natural inclination for diplomacy. Let's explore the captivating traits that define this remarkable number...",
      3: "So you're a Partial3. 3 is the number of the child, 1 is the masculine number, 2 is the feminine number, and 3 is the childish number. When we say 'oh, you're childish,' it's usually an insult, but in this case, it is not...",
      4: "So you're a Partial 4. 4 is the number of the hardest worker; individuals with 4 energy can work like no one else, especially if it's your Life Path number...",
      5: "So you're a PARTIAL 5. The 5 is the number of freedom. They love freedom like no other number...",
      6: "So you're a PARTIAL 6. 6 is the number of home and family; they love to settle down and have a family, unlike the 7 which is anti-family with a loner vibe...",
      7: "So you're a Partial 7. One thing I must say now is that you have an incredible gift, but the gift also comes with multiple curses, so please read this without emotion and don't hate the messenger...",
      8: "So you're a Partial 8. A lot of 8s are actually confused because they think that 8 is the number of money, but 8 is not the number of money… 8 is the number of abundance… Money is a man-made concept, but abundance isn't. In the time when we used to trade goods like spices, cows, etc., to sustain ourselves, the 8 would have generally been the one with the most of whatever was valuable at the time. The thing with 8s is that y'all don't have the same scarcity mindset that most people have. Most people have a scarcity mindset and they hate money, as a result, it changes their thought which, in turn, changes their actions and ends up changing the result of it all. To come back to the original point. Would you be wrong to say 8 is the number of money? It became the number of money, so not totally but at its core it's not. People with 8 on top of that love power; they love to be the boss and tell people what to do.\n\nYou wanna see a happy 8? Just look at an 8 commanding things and giving orders; you're gonna see a happy 8, especially with the male 8.\n\nAs an 8, you should be getting a lot of money and have some authority. 8s love authority.\n\nAnd they don't like to argue as in (why are you questioning my authority); that's why a lot of 8s have a love/hate relationship with the number 1 because they can respect the masculine boldness of the 1 but don't like to argue with them as 1s are very confrontational…\n\n8 is also the number of Karma, if you look at the number 8 it creates an infinity sign which has two aspects to it, first is the karma, what goes around comes around, if anybody tries to mess with an 8 karma will hit harder than any other number, y'all are extremely karmic…\n\nBut it goes in both senses, as an 8 you can't be doing bad things, and for 2 reasons. First is that karma will really hit you hard, fast and if not fast in the worst of moments. Secondly (not proven) but there is actually a theory which id not proven but I, as a numerologist who deeply analyzes the cycle of number, think it makes sense, is that if you believe in reincarnation that you gotta go thru the number 1,2,3,4,5,6,7 and learn all the leçon to then get to the number 8 and be quote on quote in a position of power to then mess around with that power and use it for bad and as a result you get hit back to the beginning of the cycle and then restart they the lifetime, and that's karma way of really teaching you the leçon, that's if you believe in reincarnation of course. which is information I give you and I think it's true but can't be proven just to clarify. To come back to the shape of the 8 in the different aspect like I was explaining earlier. 8 isn't just what goes around comes around, it's also as 2 zero with a separation which basically means that your gonna live an erratic/chaotic life, everything will always up and down, up and down are just the normals for 8s… but on the overall trajectory, it will be more on the up side as everything stabilize with time but 8s live the most chaotic life. People with the number 8 also are also very spiritual, just the fact that you're reading this right now proves the point, y'all have have as above so below energy, the ying Yang…. Another thing to keep in mind is that 8s have a hard time making decision, they are very undecisive but when they finally make a decision, they stick with that decision and go full mode into it. 8 is always a very artistic number which we don't hear often but yes, very artistic and you can see so by looking at people with 8 energy such as Michelangelo, Picasso, etc…\n\nThe next thing that Partial 8s must be extremely careful with is being a dictator, either they are great leaders or total dictator and that's on you to make the choice but I think you already know what to choose, karma is looking at you sideways right now ahah…\n\nPeople with 8 energy do extremely well with 4s, they have a similar mentality and they both like to command and order, very compatible energy.\n\nThe 6 is already a friendly number, and we talked about the love/hate relationship with the 1 earlier.\n\nYour enemy number is the number 5, they don't like authority type person and they are more freedom based, really is that they don't like you, although if you don't act in your main nature they can hang around with no problem but if let's say you're a boss and you wanna hire someone, a 5 would be the worst option.\n\nAlso, a secret is to watch the new people coming into your life, if they are 8s, it either means that some money will come or go or you will get some type of karma so that's one thing to look out for.\n\n8s in life really can do anything related to making a lot of money because it's not the definition of abundance, you don't have a particular field where you will do better as long as you're in a position of power.\n\nBut a lot of 8s go overboard into obtaining money and power that they neglect other aspects of life, 8s should not only focus on money but on 4 aspects, the first one is health, the second one is wealth, the third one is love, and the final one is happiness, if they can bring the other 3 aspects into their life and not just wealth they will live a very happy life.",
      9: "So you're a Partial 9. 9 is one of the most misunderstood numbers out here; it's an extremely important number in the matrix...",
      11: "As a Partial 11, firstly, the Partial 11 is a master number. The master number doesn't operate on the same frequency as others...",
      22: "The master number 22 is the number of the master builder. They are the second rarest number after the number 33, and they have an elevated master number frequency...",
      33: "The master number 33 is at the pinnacle of the number sequence. They are the master teachers, possessing the highest frequency among all numbers..."
    };

    return descriptions[number] || "Invalid partial energy number";
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
                <h3 className="text-2xl font-bold text-white/90 mb-4">Your Partial Energy</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-white/80 leading-relaxed whitespace-pre-line text-lg">
                    {getPartialEnergyDescription(partialEnergy)}
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

export default PartialEnergyAnalysis;