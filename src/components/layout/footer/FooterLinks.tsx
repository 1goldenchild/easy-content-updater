import { Link } from "react-router-dom"

const FooterLinks = () => {
  return (
    <div className="space-y-4">
      <h4 className="text-sm font-semibold bg-gradient-to-r from-amber-200 to-purple-500 bg-clip-text text-transparent">
        Legal
      </h4>
      <nav className="flex flex-col space-y-2">
        <Link 
          to="/terms" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-sm text-muted-foreground hover:text-amber-200/90 transition-colors"
        >
          Terms & Conditions
        </Link>
        <Link 
          to="/privacy" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-sm text-muted-foreground hover:text-amber-200/90 transition-colors"
        >
          Privacy Policy
        </Link>
        <Link 
          to="/refund" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-sm text-muted-foreground hover:text-amber-200/90 transition-colors"
        >
          Refund Policy
        </Link>
        <a 
          href="/sitemap.xml" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-amber-200/90 transition-colors"
        >
          Sitemap
        </a>
      </nav>
    </div>
  )
}

export default FooterLinks