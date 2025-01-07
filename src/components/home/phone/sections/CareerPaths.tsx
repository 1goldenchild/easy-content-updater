import { motion } from "framer-motion";

const CareerPaths = () => {
  return (
    <div id="career" className="rounded-xl bg-gradient-to-br from-[#D946EF]/30 to-[#F97316]/30 p-4">
      <h3 className="text-sm font-semibold text-white mb-2">Career Paths</h3>
      <div className="space-y-2">
        {["Researcher", "Analyst", "Teacher", "Writer"].map((career) => (
          <div key={career} className="px-3 py-2 rounded-lg bg-white/5 text-sm text-white/80">
            {career}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerPaths;