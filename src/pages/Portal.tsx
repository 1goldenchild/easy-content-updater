import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import CharacteristicsChart from "@/components/numerology/CharacteristicsChart";

const Portal = () => {
  // For now, we'll use a default lifePath value of 1
  // In a real application, this would come from user data or context
  const lifePath = 1;

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1">
        <div className="container py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
              Your Numerology Portal
            </h1>
            <ScrollArea className="h-[500px] w-full rounded-lg border border-white/10 bg-white/5 p-6">
              <div className="space-y-8">
                <p className="text-white/80">
                  Welcome to your personalized numerology portal. Here you can explore your unique numerological profile and discover insights about your life path.
                </p>
                {/* Add more portal content here */}
              </div>
            </ScrollArea>
          </motion.div>
        </div>
      </div>
      
      {/* Characteristics Chart positioned above footer */}
      <div className="container py-12 bg-gradient-to-b from-transparent to-[#1A1F2C]/50">
        <CharacteristicsChart isVisible={true} lifePath={lifePath} />
      </div>
    </div>
  );
};

export default Portal;