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
            <li>
              <Link to="/collect-info" className="text-sm font-medium hover:text-amber-400 transition-colors">Get Started</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar