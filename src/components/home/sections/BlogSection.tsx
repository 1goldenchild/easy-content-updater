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
    title: "How China Uses Numerology to Power Success: The 2008 Beijing Olympics and Beyond",
    description: "Discover how China strategically used the power of the number 8, particularly during the 2008 Olympics opening ceremony at 8:08 PM on 8/8/2008, to fuel their meteoric rise.",
    date: "March 29, 2024",
    readTime: "8 min read",
    mainImage: "/lovable-uploads/a15fb902-5972-4403-b638-89b8760626e1.png",
    slug: "china-numerology"
  },
  {
    title: "The Hidden Numerology Behind Taylor Swift's Success",
    description: "Uncover how Taylor Swift's birth numbers and strategic use of numerology have contributed to her unprecedented success in the music industry.",
    date: "March 27, 2024",
    readTime: "9 min read",
    mainImage: "/lovable-uploads/73da4848-4fc6-412c-b1a9-0efc609335e3.png",
    slug: "taylor-swift-numerology"
  },
  {
    title: "Elon Musk's Numerological Blueprint: The Science Behind His Ventures",
    description: "Explore how Elon Musk's life path number and personal year cycles align with his major business decisions and technological breakthroughs.",
    date: "March 26, 2024",
    readTime: "11 min read",
    mainImage: "/lovable-uploads/69e9446c-9b3d-44b9-87f5-db9647e25dcf.png",
    slug: "elon-musk-numerology"
  }
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