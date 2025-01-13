import { motion } from "framer-motion";

const BlogHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="bg-gradient-to-r from-[#E5B8A6] via-[#D4A391] to-[#C38E7C] text-transparent bg-clip-text animate-text-shimmer inline-block">
          Latest Numerology Blogs
        </span>
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Explore our latest articles on numerology and spiritual growth
      </p>
    </motion.div>
  );
};

export default BlogHeader;