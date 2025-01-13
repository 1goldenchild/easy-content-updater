import { Mail } from "lucide-react"

const NewsletterSection = () => {
  return (
    <div className="space-y-4">
      <h4 className="text-sm font-semibold bg-gradient-to-r from-amber-200 to-purple-500 bg-clip-text text-transparent">
        Stay Connected
      </h4>
      <p className="text-sm text-muted-foreground">
        Subscribe to receive numerology insights and updates.
      </p>
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-200/20 via-purple-500/20 to-amber-200/20 rounded-lg blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
        <div className="relative flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 text-sm rounded-l-lg bg-secondary border border-r-0 border-amber-200/20 focus:border-amber-200/40 focus:ring-2 focus:ring-amber-200/20 transition-all"
          />
          <button className="px-4 py-2 rounded-r-lg bg-gradient-to-br from-amber-200/20 to-purple-500/20 backdrop-blur-sm border border-amber-200/30 text-amber-100 hover:text-amber-50 transition-colors">
            <Mail className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewsletterSection