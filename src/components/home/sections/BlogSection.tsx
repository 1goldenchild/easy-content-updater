import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import BlogCard from "./blog/BlogCard";
import BlogHeader from "./blog/BlogHeader";

const blogPosts = [
  {
    title: "The Kardashian Empire: How They Used Numerology to Power Their Success",
    description: "Discover how the Kardashian-Jenner family used numerology, particularly the numbers 8, 11, and 22, to build their multi-billion dollar empire and global influence.",
    date: "April 1, 2024",
    readTime: "8 min read",
    mainImage: "/lovable-uploads/c62b9e91-15ac-4a47-b3af-580cc17a3756.png",
    slug: "kardashian-numerology"
  },
  {
    title: "How Bill Gates Uses Numerology to Shape His Success: A Look Into His Wealth, Companies, and Rivalry with Steve Jobs",
    description: "Explore how Bill Gates leveraged numerology, particularly the number 28, in building Microsoft and making strategic business decisions that shaped the tech industry.",
    date: "March 30, 2024",
    readTime: "10 min read",
    mainImage: "/lovable-uploads/20c580ea-6bb0-4ee6-b9b9-a65bfbd4c503.png",
    slug: "bill-gates-numerology"
  },
  {
    title: "How Jim Carrey Uses Numerology to Shape His Life and Career",
    description: "Discover how the legendary actor's fascination with numbers, particularly 23 and 33, has influenced his career choices and spiritual journey in Hollywood.",
    date: "March 28, 2024",
    readTime: "8 min read",
    mainImage: "/lovable-uploads/fbe09605-e28e-4bb2-98d1-5266c9efa916.png",
    slug: "jim-carrey-numerology"
  },
  {
    title: "The Secret Behind Rolex's Success: A Numerological Analysis",
    description: "Explore how Rolex strategically uses numerology in their pricing, model numbers, and launch dates to maintain their status as the world's most prestigious watch brand.",
    date: "March 29, 2024",
    readTime: "8 min read",
    mainImage: "photo-1460925895917-afdab827c52f",
    slug: "rolex-numerology"
  },
  {
    title: "How Elon Musk Uses Numerology to Get Rich: The Power of 8 and 28",
    description: "Discover how the world's richest man strategically uses numerology, particularly the numbers 8 and 28, to build his fortune through Tesla, SpaceX, and Twitter.",
    date: "March 20, 2024",
    readTime: "10 min read",
    mainImage: "photo-1485833077593-4278bba3f11f",
    slug: "elon-musk-numerology"
  },
  {
    title: "How Michael Jackson used the Power of Numerology: The Influence of the Number 7 on His Career",
    description: "Discover how the King of Pop strategically used numerology, particularly the number 7, to shape his artistic vision and create a lasting legacy that changed music forever.",
    date: "March 27, 2024",
    readTime: "10 min read",
    mainImage: "/lovable-uploads/787349e3-6668-40c9-90db-3dd2d0f8d6ef.png",
    slug: "michael-jackson-numerology"
  },
];

const BlogSection = () => {
  const isMobile = useIsMobile();
  const visiblePosts = isMobile ? blogPosts.slice(0, 3) : blogPosts;
  const hasMorePosts = blogPosts.length > visiblePosts.length;

  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
      <div className="container px-4 md:px-6 relative">
        <BlogHeader />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visiblePosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
        
        {hasMorePosts && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link 
              to="/blog"
              className="inline-flex items-center px-6 py-3 rounded-full bg-[#E5B8A6]/10 hover:bg-[#E5B8A6]/20 text-[#E5B8A6] hover:text-white transition-all duration-300"
            >
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;