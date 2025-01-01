import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Numerology Insights</h3>
            <p className="text-sm text-muted-foreground">
              Discover your life's path through the ancient wisdom of numbers.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-foreground">Home</Link></li>
              <li><Link to="/analysis" className="text-sm text-muted-foreground hover:text-foreground">Analysis</Link></li>
              <li><Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">About Numerology</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">FAQ</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to receive numerology insights and updates.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-sm border rounded-md"
            />
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Numerology Insights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer