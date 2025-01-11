import { Menu } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400">
            Numerology 33
          </span>
        </Link>

        {/* Mobile Navigation */}
        <button
          className="block md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Desktop Navigation */}
        <nav className={`absolute md:relative top-14 md:top-0 left-0 w-full md:w-auto bg-background md:bg-transparent border-b md:border-0 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="container md:w-auto flex flex-col md:flex-row items-start md:items-center gap-4 py-4 md:py-0">
            <li className="w-full md:w-auto">
              <Link 
                to="/collect-info" 
                className="block w-full md:w-auto bg-gradient-to-r from-[#1A1508] via-[#2A2311] to-[#1A1508] hover:from-[#2A2311] hover:via-[#3B3015] hover:to-[#2A2311] text-amber-200/90 font-semibold shadow-[0_0_15px_rgba(251,191,36,0.1)] transition-all duration-500 bg-[length:200%_auto] hover:bg-right-top hover:shadow-[0_0_20px_rgba(251,191,36,0.2)] border border-amber-900/30 rounded-md relative overflow-hidden px-4 py-2 text-center"
              >
                Get Started
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-900/10 to-transparent translate-x-[-200%] animate-shimmer" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar