import { motion } from "framer-motion";
import { Star } from "lucide-react";

const DecorativeElements = ({ showMatrix }: { showMatrix: boolean }) => {
  return (
    <>
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${showMatrix ? 'opacity-20' : 'opacity-0'}`}
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Ctext x="10" y="15" font-family="monospace" font-size="15" fill="%238B5CF6" text-anchor="middle"%3E1%3C/text%3E%3C/svg%3E")',
          backgroundSize: '50px 50px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_70%)]" />
      
      <div className="w-full flex justify-center items-center">
        <div className="relative inline-flex justify-center items-center w-16 h-16">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500 rounded-full blur-xl opacity-30"
          />
          <div className="relative bg-gradient-to-r from-[#1A1F2C] to-[#221F26] p-4 rounded-full border border-purple-500/20 w-full h-full flex items-center justify-center">
            <Star className="w-8 h-8 text-purple-400" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DecorativeElements;