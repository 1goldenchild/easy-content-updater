import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

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
  }
]

const BlogPreview = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background/80 to-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Latest Insights
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore the ancient wisdom of numerology through our latest articles
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-card/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:border-primary/20 transition-colors">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 md:top-4 md:left-4">
                    <span className="px-2 py-1 md:px-3 md:py-1 text-[10px] md:text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-3 md:p-6">
                  <div className="text-xs md:text-sm text-muted-foreground mb-1 md:mb-2">
                    {post.readTime}
                  </div>
                  <h3 className="text-sm md:text-xl font-semibold mb-1 md:mb-2 group-hover:text-purple-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs md:text-base text-muted-foreground mb-2 md:mb-4 line-clamp-2 md:line-clamp-none">
                    {post.description}
                  </p>
                  <Link 
                    to="/blog" 
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors text-xs md:text-base"
                  >
                    Read More <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-lg bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 transition-colors text-sm md:text-base"
          >
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogPreview