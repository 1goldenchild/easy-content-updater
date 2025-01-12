import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = {
  "elon-musk-numerology": {
    title: "How Elon Musk Uses Numerology to Get Rich: The Power of 8 and 28",
    content: `
      <div class="space-y-6">
        <p class="text-lg leading-relaxed">Elon Musk is one of the most successful and innovative entrepreneurs of our time. But beyond his groundbreaking work with Tesla, SpaceX, and his ventures into the world of cryptocurrency, there's a fascinating aspect to his success that many people overlook: numerology. Yes, the world's richest man has been strategically leveraging the power of numbers, specifically the number 28 and 8 to fuel his meteoric rise. Let's break down how numerology has played a key role in his wealth-building journey.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4 bg-gradient-to-r from-[#86736f] via-[#a39490] to-[#c4b5b1] text-transparent bg-clip-text">Elon Musk's Numerology Lotto: The Power of 28</h2>
        <p class="text-lg leading-relaxed">Elon Musk was born on June 28, 1971, and as anyone who knows numerology can tell you, 28 is a highly significant number. In numerology, 28 is the number of wealth, success, and abundance. It's the number of those who are destined for financial prosperity. The number 28 is a powerful combination of 2 and 8, and together they bring great potential for material achievement.</p>
        
        <div class="bg-card/50 backdrop-blur-sm border border-[#86736f]/20 rounded-lg p-6 my-8">
          <ul class="list-disc list-inside space-y-3 text-lg">
            <li><span class="text-[#a39490]">Number 2</span> represents cooperation, partnership, and balance</li>
            <li><span class="text-[#a39490]">Number 8</span> symbolizes material wealth, business success, and power</li>
          </ul>
        </div>

        <p class="text-lg leading-relaxed">Put the raw emotions of the number 2 and ruthless drive of the 8 together, and you have the perfect formula for building a fortune, which Musk has done brilliantly. As of now, Elon Musk's net worth is estimated at a staggering $416 billion, making him the richest person in the world, largely due to his work with Tesla, SpaceX, and his various ventures.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4 bg-gradient-to-r from-[#86736f] via-[#a39490] to-[#c4b5b1] text-transparent bg-clip-text">Elon Musk and the Power of the Number 8</h2>
        <p class="text-lg leading-relaxed">Elon Musk's business moves also align with numerology in very calculated ways. Take, for example, his purchase of Twitter for $44 billion in 2022. Why 44 billion? 44 reduces to 8 (4 + 4 = 8), and 8 is the number of wealth, business acumen, and material power.</p>
        
        <div class="bg-card/50 backdrop-blur-sm border border-[#86736f]/20 rounded-lg p-6 my-8">
          <p class="text-lg italic text-[#a39490]">8 is also called the "number of money" because it represents the flow of financial energy. Musk's decision to buy Twitter for exactly 44 billion wasn't just a random figure—it was a move backed by what I called cosmic intelligence or what you might call numerology.</p>
        </div>

        <h2 class="text-2xl font-bold mt-8 mb-4 bg-gradient-to-r from-[#86736f] via-[#a39490] to-[#c4b5b1] text-transparent bg-clip-text">The Master Number 22 and Elon Musk's Twitter Strategy</h2>
        <p class="text-lg leading-relaxed">Another interesting numerological aspect of Musk's Twitter journey is the role of 22, the Master Number associated with visionary leadership and material success. The premium subscription to Twitter is priced at $22. Why 22? Because 22 is a Master Number that is all about ambition and building a legacy.</p>

        <h2 class="text-2xl font-bold mt-8 mb-4 bg-gradient-to-r from-[#86736f] via-[#a39490] to-[#c4b5b1] text-transparent bg-clip-text">The 2022 Twitter Deal: A Perfect 22 Energy</h2>
        <p class="text-lg leading-relaxed">Musk's purchase of Twitter didn't just happen at any random time. He closed the deal in 2022, which is an extraordinary year in numerology because it has an inherent 22 energy (2+0+2+2 = 6, which has strong ties to 2 and 4).</p>

        <h2 class="text-2xl font-bold mt-8 mb-4 bg-gradient-to-r from-[#86736f] via-[#a39490] to-[#c4b5b1] text-transparent bg-clip-text">The Numerology of Musk's Success: A Calculated Formula for Wealth</h2>
        <p class="text-lg leading-relaxed">Looking at Elon Musk's rise to the top through the lens of numerology, it's clear that numbers have played an integral role in shaping his journey. From his birth on the 28th, which is a wealthy number, to his $44 billion Twitter acquisition (a number connected to 8), to the $8 subscription fee and $22 premium charge, Musk has consistently aligned his business decisions with the energetic patterns of success.</p>

        <div class="bg-gradient-to-r from-[#86736f]/10 via-[#a39490]/10 to-[#c4b5b1]/10 backdrop-blur-sm border border-[#86736f]/20 rounded-lg p-8 my-8">
          <p class="text-xl font-semibold text-center mb-4">Ready to discover your numerological path to success?</p>
          <p class="text-lg text-center mb-6">Get your personal numerology analysis today and unlock the power of numbers in your life.</p>
          <div class="flex justify-center">
            <Link to="/" className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-[#86736f] to-[#c4b5b1] rounded-lg hover:opacity-90 transition-opacity">
              Get Your Reading Now
            </Link>
          </div>
        </div>
      </div>
    `,
    image: "/lovable-uploads/4c2bf36a-524f-4700-86f4-fcb7d217d5fd.png",
    date: "March 20, 2024",
    readTime: "10 min read"
  },
  "rolex-numerology": {
    title: "Rolex secretly using numerology: The Secret Behind the 28 and 10:11",
    content: `
      <p>Discover how Rolex incorporates powerful numerological principles in their iconic timepieces, particularly through the strategic use of numbers 28 and 10:11 in their marketing.</p>
      <p>This fascinating exploration reveals the hidden meanings behind Rolex's most significant numbers and how they contribute to the brand's legendary success.</p>
    `,
    image: "/lovable-uploads/492894b9-a7c3-4389-a6d0-fbeb51868764.png",
    date: "March 15, 2024",
    readTime: "8 min read"
  },
  "understanding-personal-year": {
    title: "Understanding Your Personal Year Number",
    content: `
      <p>Learn how to calculate and interpret your personal year number for better decision-making.</p>
      <p>This comprehensive guide will help you navigate your personal numerology cycle and make the most of each year's unique energy.</p>
    `,
    image: "/lovable-uploads/a48b0ec0-c027-4d4a-a992-435a3c309b00.png",
    date: "March 12, 2024",
    readTime: "4 min read"
  },
  "numerology-relationships": {
    title: "Numerology in Relationships",
    content: `
      <p>Explore how numerology can help you understand and improve your relationships.</p>
      <p>Discover the compatibility between different life path numbers and how to use this knowledge to strengthen your connections.</p>
    `,
    image: "/lovable-uploads/fa5950c8-545a-4644-8d15-7796497be16d.png",
    date: "March 10, 2024",
    readTime: "6 min read"
  },
  "career-choices": {
    title: "Career Choices Through Numbers",
    content: `
      <p>Using numerology to guide your professional path and make better career decisions.</p>
      <p>Learn how your personal numbers can indicate your ideal career path and help you achieve professional success.</p>
    `,
    image: "/lovable-uploads/d1990443-8db4-4e9b-94aa-997289290dda.png",
    date: "March 8, 2024",
    readTime: "5 min read"
  },
  "master-numbers": {
    title: "The Significance of Master Numbers",
    content: `
      <p>Deep dive into master numbers 11, 22, and 33 and their spiritual significance.</p>
      <p>Understand the unique properties and challenges associated with these powerful numerological combinations.</p>
    `,
    image: "/lovable-uploads/3f848f16-f163-4093-a327-4b4170e4a729.png",
    date: "March 5, 2024",
    readTime: "7 min read"
  },
  "monthly-forecast": {
    title: "Monthly Numerology Forecast",
    content: `
      <p>Learn how to calculate and interpret your monthly numerology forecast.</p>
      <p>Get insights into the energetic influences affecting each month and how to work with them effectively.</p>
    `,
    image: "/lovable-uploads/a48b0ec0-c027-4d4a-a992-435a3c309b00.png",
    date: "March 1, 2024",
    readTime: "4 min read"
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="container px-4 py-8">
        <p className="text-center text-lg">Blog post not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl px-4 py-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-[#86736f] hover:text-[#a39490] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#86736f] via-[#a39490] to-[#c4b5b1] text-transparent bg-clip-text">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-[#86736f] mb-8">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <div className="relative h-[400px] md:h-[500px] w-full mb-8 rounded-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
          </div>

          <div 
            className="prose prose-invert prose-headings:text-[#a39490] prose-a:text-[#86736f] hover:prose-a:text-[#a39490] prose-p:text-gray-300"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.article>
      </div>
    </div>
  );
};

export default BlogPost;