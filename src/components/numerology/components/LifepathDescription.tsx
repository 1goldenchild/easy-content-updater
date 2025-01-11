import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { lifepathDescriptions } from "../data/lifepathDescriptions";

interface LifepathDescriptionProps {
  lifePath: number;
}

const LifepathDescription = ({ lifePath }: LifepathDescriptionProps) => {
  const description = lifepathDescriptions[lifePath] || "Description not available for this number";

  return (
    <ScrollArea className="h-[600px] w-full">
      <div className="p-6 md:p-8 lg:p-12">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] mb-4">
              Your Lifepath Number
            </h3>
            <div className="prose prose-invert max-w-none">
              <p className="text-white/80 leading-relaxed whitespace-pre-line text-lg">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default LifepathDescription;