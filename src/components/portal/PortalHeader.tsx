import { motion } from "framer-motion";

const PortalHeader = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10"
    >
      <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] mb-4">
        Your Numerology Portal
      </h2>
      <p className="text-white/80 text-lg">
        Enter your email to access your complete numerology reading and discover the hidden patterns in your life path.
      </p>
    </motion.div>
  );
};

export default PortalHeader;