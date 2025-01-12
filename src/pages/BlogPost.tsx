import { useParams } from "react-router-dom"
import { motion } from "framer-motion"
import { Calendar, Clock } from "lucide-react"

const BlogPost = () => {
  const { slug } = useParams()

  // For now we'll hardcode the Rolex post content
  const post = {
    title: "Rolex secretly using numerology: The Secret Behind the 28 and 10:11 on the Iconic Timepiece",
    date: "March 15, 2024",
    readTime: "8 min read",
    mainImage: "/lovable-uploads/492894b9-a7c3-4389-a6d0-fbeb51868764.png",
    watchImages: [
      "/lovable-uploads/287d7ed6-e0c3-41de-b01e-f3d5a61d3ffb.png",
      "/lovable-uploads/2a1499db-c536-44fc-9609-843c064c0e76.png",
      "/lovable-uploads/69e9446c-9b3d-44b9-87f5-db9647e25dcf.png"
    ]
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="prose prose-invert lg:prose-xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#86736f] via-[#a39490] to-[#c4b5b1] text-transparent bg-clip-text">
          {post.title}
        </h1>
        
        <div className="flex items-center gap-4 text-[#86736f] mb-8">
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {post.date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </span>
        </div>

        <div className="mb-8">
          <img
            src={post.mainImage}
            alt="Rolex Store"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="space-y-6 text-gray-300">
          <p>
            When it comes to luxury and prestige, few brands resonate with success like Rolex. Beyond its impeccable craftsmanship and status as the ultimate symbol of achievement, Rolex uses a secret that many may not know about—numerology. In fact, Rolex has embedded certain numbers into their watches in a way that subtly aligns with wealth and prosperity.
          </p>

          <p>
            Let's take a deeper look at how Rolex incorporates numerology into their timepieces, especially through the strategic use of the number 28 in their marketing, and the powerful 10:11 on the dial—two numbers linked to abundance and success.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#a39490]">
            Why the Number 28? The Numerology of Wealth
          </h2>

          <p>
            In the world of numerology, 28 holds significant power. It is the number of wealth, tied to financial prosperity, material abundance, and success. And it's directly linked to some of the wealthiest and most influential people and entities in the world.
          </p>

          <p>
            So, why does Rolex showcase the number 28 in the images of their watches? The answer lies in subtle numerological influence. In Rolex marketing photos, the date window often highlights the 28th day of the month—and it's no accident. By showcasing this number, Rolex is tapping in the number 28 and showing it to you which also drives you to making purchases.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-8 bg-black/40 p-4 md:p-8 rounded-lg backdrop-blur-sm">
            {post.watchImages.map((watch, idx) => (
              <img
                key={idx}
                src={watch}
                alt={`Rolex Watch ${idx + 1}`}
                className="w-32 h-32 md:w-40 md:h-40 object-contain"
              />
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#a39490]">
            The Power of 28 in the World of Wealth
          </h2>

          <p>
            Some of the wealthiest figures of our time were born on the 28th of the month. Take Elon Musk, born on June 28, 1971, who is currently the richest person in the world, with a net worth frequently surpassing $416 billion. His immense wealth and groundbreaking companies, including Tesla and SpaceX, align perfectly with the numerological energy of the number 28.
          </p>

          <p>
            But it doesn't stop there. Bill Gates, the richest man of the previous decade, was also born on October 28, 1955. Gates co-founded Microsoft and became a pioneer in the tech industry. The success of both Musk and Gates reflects the numerological force of the number 28.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#a39490]">
            More Wealthy Entities Linked to the Number 28
          </h2>

          <p>
            It's not just individuals who benefit from the numerology of 28. Major global corporations and organizations also use this powerful number. Take Vanguard, the world's largest asset management firm, managing more than $10 trillion in assets. Vanguard was incorporated in a 28 day, a deliberate alignment with the energy of wealth.
          </p>

          <p>
            Similarly, Apple, the world's most valuable company with an estimated worth of $3.5 trillion, was also incorporated in a 28 day. Apple's dominance in the tech industry and its financial power is a direct testament to the success and influence of the number 28.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#a39490]">
            Rolex's Subtle Numerology: 28 and 10:11
          </h2>

          <p>
            Now, back to Rolex and the 28. When you look at a Rolex watch in marketing materials, you'll notice that the date window highlights the number 28. But that's not all. If you look carefully, Rolex also sets the time at 10:11, a powerful numerological sequence. In numerology, 111 is a number of manifestation, inspiration, and new beginnings—perfectly fitting for a brand that symbolizes elite success. The positioning of the time on the dial reflects the brand's alignment with manifesting wealth and success and also directly passing that force onto the customers.
          </p>

          <p className="mt-8 italic border-l-4 border-[#86736f] pl-4">
            If you're inspired by the idea of using numerology to attract success and wealth, why not discover how the numbers in your own life align with your goals? Click below to get your personal numerology analysis and learn how the power of numbers can guide you toward financial prosperity and personal achievement.
          </p>
        </div>
      </motion.article>
    </div>
  )
}

export default BlogPost
