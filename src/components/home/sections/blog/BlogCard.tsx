import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPost {
  title: string;
  description: string;
  date: string;
  readTime: string;
  mainImage: string;
  slug: string;
}

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard = ({ post, index }: BlogCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link to={`/blog/${post.slug}`}>
        <Card className="group h-full overflow-hidden bg-card/50 backdrop-blur-sm border border-[#E5B8A6]/20 hover:border-[#E5B8A6]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#E5B8A6]/5">
          <CardHeader className="p-0">
            <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
              <img
                src={post.mainImage}
                alt={post.title}
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </CardHeader>
          <CardContent className="p-6 relative">
            <div className="flex items-center gap-4 text-sm text-[#E5B8A6] mb-3">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <CardTitle className="text-xl mb-2 group-hover:text-[#E5B8A6] transition-colors duration-300">
              {post.title}
            </CardTitle>
            <CardDescription className="text-muted-foreground mb-4 line-clamp-2">
              {post.description}
            </CardDescription>
            <div className="flex items-center text-sm text-[#E5B8A6] group-hover:text-[#D4A391] transition-colors">
              Read More
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default BlogCard;