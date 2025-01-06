import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      {/* Gradient Separator */}
      <div className="w-full h-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8B5CF6]/5 to-[#D946EF]/10" />
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(102.3deg, rgba(147,39,143,0.05) 5.9%, rgba(234,172,232,0.1) 64%, rgba(246,219,245,0.05) 89%)',
            filter: 'blur(2px)'
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_var(--tw-gradient-stops))] from-[#9b87f5]/10 via-transparent to-transparent" />
      </div>

      <footer className="border-t border-purple-500/10 bg-gradient-to-b from-background/80 to-background backdrop-blur-lg">
        <div className="container mx-auto py-8">
          <div className="flex flex-col items-center">
            <Link to="/" className="text-lg font-semibold text-white">Home</Link>
            <Link to="/about" className="text-lg font-semibold text-white">About</Link>
            <Link to="/contact" className="text-lg font-semibold text-white">Contact</Link>
          </div>
          <p className="mt-4 text-sm text-gray-400">© 2023 Numerology Insights. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
