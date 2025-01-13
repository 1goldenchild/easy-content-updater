import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
    title: "How Michael Jackson used the Power of Numerology: The Influence of the Number 7 on His Career",
    description: "Discover how the King of Pop strategically used numerology, particularly the number 7, to shape his artistic vision and create a lasting legacy that changed music forever.",
    date: "March 27, 2024",
    readTime: "10 min read",
    mainImage: "/lovable-uploads/787349e3-6668-40c9-90db-3dd2d0f8d6ef.png",
    slug: "michael-jackson-numerology"
  },
  {
    title: "How Steve Jobs Used Numerology to Shape His Success: The Power of 28, 9, and Apple's Legacy",
    description: "Discover how Apple's co-founder strategically used numerology, particularly the numbers 28 and 9, to build the world's most valuable company worth $3.5 trillion.",
    date: "March 25, 2024",
    readTime: "12 min read",
    mainImage: "/lovable-uploads/73da4848-4fc6-412c-b1a9-0efc609335e3.png",
    slug: "steve-jobs-numerology"
  },
  {
    title: "How Elon Musk Uses Numerology to Get Rich: The Power of 8 and 28",
    description: "Discover how the world's richest man strategically uses numerology, particularly the numbers 8 and 28, to build his fortune through Tesla, SpaceX, and Twitter.",
    date: "March 20, 2024",
    readTime: "10 min read",
    mainImage: "/lovable-uploads/4c2bf36a-524f-4700-86f4-fcb7d217d5fd.png",
    slug: "elon-musk-numerology"
  },
  {
    title: "Rolex secretly using numerology: The Secret Behind the 28 and 10:11",
    description: "Discover how Rolex incorporates powerful numerological principles in their iconic timepieces, particularly through the strategic use of numbers 28 and 10:11 in their marketing.",
    date: "March 15, 2024",
    readTime: "8 min read",
    mainImage: "/lovable-uploads/492894b9-a7c3-4389-a6d0-fbeb51868764.png",
    slug: "rolex-numerology"
  }
];

const Blog = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-background/80 to-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#86736f] via-[#a39490] to-[#c4b5b1] text-transparent bg-clip-text animate-text-shimmer inline-block">
              Numerology Blog
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore our latest articles on numerology and spiritual growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/blog/${post.slug}`}>
                <Card className="group h-full bg-card/50 backdrop-blur-sm border border-[#86736f]/20 hover:border-[#86736f]/40 transition-all duration-300">
                  <CardHeader className="p-0">
                    <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
                      <img
                        src={post.mainImage}
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
    </div>
  );
};

export default Blog;