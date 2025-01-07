import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "Understanding Life Path Number 33",
    description: "Discover the profound meaning and spiritual significance behind the master number 33 in numerology.",
    category: "Life Path",
    readTime: "5 min read",
    image: "/placeholder.svg"
  },
  {
    title: "The Power of Name Numerology",
    description: "Learn how your name influences your destiny and shapes your life's journey through ancient numerological wisdom.",
    category: "Name Analysis",
    readTime: "4 min read",
    image: "/placeholder.svg"
  },
  {
    title: "2024 Numerology Forecast",
    description: "Explore what the universal year 8 (2+0+2+4) means for your personal and professional growth.",
    category: "Forecasts",
    readTime: "6 min read",
    image: "/placeholder.svg"
  },
  {
    title: "Numerology in Relationships",
    description: "Understanding compatibility and relationship dynamics through the lens of numerological patterns.",
    category: "Relationships",
    readTime: "5 min read",
    image: "/placeholder.svg"
  },
  {
    title: "Sacred Geometry & Numerology",
    description: "Explore the fascinating connection between sacred geometry patterns and numerological principles.",
    category: "Advanced Topics",
    readTime: "7 min read",
    image: "/placeholder.svg"
  },
  {
    title: "Business Numerology Guide",
    description: "Learn how to use numerology to make better business decisions and choose auspicious dates.",
    category: "Business",
    readTime: "8 min read",
    image: "/placeholder.svg"
  }
]

const BlogPreview = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background/80 to-background w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Latest Insights
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our latest articles on numerology, spirituality, and personal growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <Link to="/blog" className="block">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-48"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-purple-400">
                      {post.category}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {post.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
