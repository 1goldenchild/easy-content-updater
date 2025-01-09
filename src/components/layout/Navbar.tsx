import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400">
            Numerology 33
          </span>
        </Link>
      </div>
    </header>
  )
}

export default Navbar