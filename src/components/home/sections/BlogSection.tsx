import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "Rolex secretly using numerology: The Secret Behind the 28 and 10:11",
    description: "Discover how Rolex incorporates powerful numerological principles in their iconic timepieces, particularly through the strategic use of numbers 28 and 10:11 in their marketing.",
    date: "March 15, 2024",
    readTime: "8 min read",
    mainImage: "/lovable-uploads/492894b9-a7c3-4389-a6d0-fbeb51868764.png",
    slug: "rolex-numerology"
  },
  {
    title: "Understanding Your Personal Year Number",
    description: "Learn how to calculate and interpret your personal year number for better decision-making.",
    date: "March 12, 2024",
    readTime: "4 min read",
    image: "/lovable-uploads/a48b0ec0-c027-4d4a-a992-435a3c309b00.png"
  },
  {
    title: "Numerology in Relationships",
    description: "Explore how numerology can help you understand and improve your relationships.",
    date: "March 10, 2024",
    readTime: "6 min read",
    image: "/lovable-uploads/fa5950c8-545a-4644-8d15-7796497be16d.png"
  },
  {
    title: "Career Choices Through Numbers",
    description: "Using numerology to guide your professional path and make better career decisions.",
    date: "March 8, 2024",
    readTime: "5 min read",
    image: "/lovable-uploads/d1990443-8db4-4e9b-94aa-997289290dda.png"
  },
  {
    title: "The Significance of Master Numbers",
    description: "Deep dive into master numbers 11, 22, and 33 and their spiritual significance.",
    date: "March 5, 2024",
    readTime: "7 min read",
    image: "/lovable-uploads/3f848f16-f163-4093-a327-4b4170e4a729.png"
  },
  {
    title: "Monthly Numerology Forecast",
    description: "Learn how to calculate and interpret your monthly numerology forecast.",
    date: "March 1, 2024",
    readTime: "4 min read",
    image: "/lovable-uploads/a48b0ec0-c027-4d4a-a992-435a3c309b00.png"
  }
];

const BlogSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background/80 to-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#86736f] via-[#a39490] to-[#c4b5b1] text-transparent bg-clip-text animate-text-shimmer inline-block">
              Latest Numerology Blogs
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our latest articles on numerology and spiritual growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Link to={`/blog/${post.slug}`}>
                <Card className="group h-full bg-card/50 backdrop-blur-sm border border-[#86736f]/20 hover:border-[#86736f]/40 transition-all duration-300">
                  <CardHeader className="p-0">
                    <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
                      <img
                        src={post.mainImage || post.image}
                        alt={post.title}
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-[#86736f] mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl mb-2 group-hover:text-white/90 transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mb-4">
                      {post.description}
                    </CardDescription>
                    <div className="flex items-center text-sm text-[#86736f] group-hover:text-[#a39490] transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;