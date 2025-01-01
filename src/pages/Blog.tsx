import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const Blog = () => {
  const posts = [
    {
      title: "Understanding Your Life Path Number",
      description: "A comprehensive guide to calculating and interpreting your life path number.",
      date: "March 15, 2024",
      category: "Guides",
      imageUrl: "placeholder.svg"
    },
    {
      title: "The Power of Name Numerology",
      description: "How your name influences your destiny according to numerology.",
      date: "March 12, 2024",
      category: "Education",
      imageUrl: "placeholder.svg"
    },
    {
      title: "Numerology in Relationships",
      description: "Using numerology to understand compatibility and improve relationships.",
      date: "March 10, 2024",
      category: "Relationships",
      imageUrl: "placeholder.svg"
    }
  ]

  return (
    <div className="flex-1 py-12">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight mb-8">Numerology Blog</h1>
          <div className="grid gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="h-48 w-full object-cover md:h-full"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-muted-foreground">{post.date}</span>
                        <span className="text-sm text-purple-600">{post.category}</span>
                      </div>
                      <CardTitle>{post.title}</CardTitle>
                      <CardDescription>{post.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                        Read More →
                      </button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog