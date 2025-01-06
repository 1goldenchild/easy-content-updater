import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      {/* Gradient Separator with improved visual design */}
      <div className="w-full h-32 relative overflow-hidden">
        {/* Base gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-900/20 to-pink-900/30" />
        
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl transform -translate-y-1/2" />
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl transform -translate-y-1/2" />
        </div>
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: 'linear-gradient(102.3deg, rgba(147,39,143,0.05) 5.9%, rgba(234,172,232,0.1) 64%, rgba(246,219,245,0.05) 89%)',
            filter: 'blur(2px)'
          }}
        />
        
        {/* Top radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_var(--tw-gradient-stops))] from-purple-400/10 via-transparent to-transparent" />
      </div>

      <footer className="border-t border-purple-500/10 bg-gradient-to-b from-background/80 to-background backdrop-blur-lg">
        <div className="container mx-auto py-8">
          <div className="flex flex-col items-center space-y-4">
            <Link to="/" className="text-lg font-semibold text-white hover:text-purple-300 transition-colors">Home</Link>
            <Link to="/about" className="text-lg font-semibold text-white hover:text-purple-300 transition-colors">About</Link>
            <Link to="/contact" className="text-lg font-semibold text-white hover:text-purple-300 transition-colors">Contact</Link>
          </div>
          <p className="mt-6 text-sm text-gray-400 text-center">© 2023 Numerology Insights. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer