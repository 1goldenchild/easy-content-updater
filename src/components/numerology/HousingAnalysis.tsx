import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HousingAnalysisProps {
  chineseZodiac: string;
  isVisible: boolean;
}

const HousingAnalysis = ({ chineseZodiac, isVisible }: HousingAnalysisProps) => {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 p-6 bg-card rounded-lg border"
    >
      <h2 className="text-2xl font-semibold flex items-center gap-2">
        <Home className="w-6 h-6" />
        Energetic Properties of Houses
      </h2>
      
      <Button 
        variant="outline" 
        className="w-full"
      >
        Read More
      </Button>
    </motion.div>
  );
};

export default HousingAnalysis;