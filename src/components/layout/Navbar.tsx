import { Menu } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-amber-200/80 via-purple-500/60 to-amber-200/80">
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
            <li className="w-full md:w-auto relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-200/20 via-purple-500/20 to-amber-200/20 rounded-md blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <Link 
                to="/collect-info" 
                className="w-full block relative px-4 sm:px-8 py-2 rounded-lg bg-gradient-to-br from-amber-200/20 to-purple-500/20 backdrop-blur-sm border border-amber-200/30 text-amber-100 hover:text-amber-50 transition-colors"
              >
                <span className="relative z-10 flex items-center">
                  Get Started
                </span>
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