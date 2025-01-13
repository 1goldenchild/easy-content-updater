import { Link } from "react-router-dom"

const FooterLinks = () => {
  return (
    <div className="space-y-4">
      <h4 className="text-sm font-semibold bg-gradient-to-r from-amber-200 to-purple-500 bg-clip-text text-transparent">
        Legal
      </h4>
      <nav className="flex flex-col space-y-2">
        <Link to="/terms" className="text-sm text-muted-foreground hover:text-amber-200/90 transition-colors">
          Terms & Conditions
        </Link>
        <Link to="/privacy" className="text-sm text-muted-foreground hover:text-amber-200/90 transition-colors">
          Privacy Policy
        </Link>
        <Link to="/refund" className="text-sm text-muted-foreground hover:text-amber-200/90 transition-colors">
          Refund Policy
        </Link>
        <a 
          href="/sitemap.xml" 
          className="text-sm text-muted-foreground hover:text-amber-200/90 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sitemap
        </a>
      </nav>
    </div>
  )
}

export default FooterLinks