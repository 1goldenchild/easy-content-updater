
import { Menu } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="relative w-10 h-10">
            {/* Circle background with gradient border */}
            <div className="absolute inset-0 rounded-full bg-[#86736f] animate-pulse"></div>
            {/* Inner circle with slight padding */}
            <div className="absolute inset-[2px] rounded-full bg-[#1A1F2C] flex items-center justify-center">
              {/* The "33" text with gradient */}
              <span className="text-xl font-black tracking-tighter text-amber-200/90">
                33
              </span>
            </div>
          </div>
        </Link>

        {/* Mobile Navigation */}
        <button
          className="block md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Desktop Navigation - Removed the Get Started button */}
        <nav className={`absolute md:relative top-14 md:top-0 left-0 w-full md:w-auto bg-background md:bg-transparent border-b md:border-0 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="container md:w-auto flex flex-col md:flex-row items-start md:items-center gap-4 py-4 md:py-0">
            {/* Get Started button removed */}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
