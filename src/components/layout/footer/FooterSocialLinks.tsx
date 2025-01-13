import { Youtube, Instagram } from "lucide-react"
import TikTokIcon from "../../icons/TikTokIcon"

const FooterSocialLinks = () => {
  return (
    <div className="flex items-center space-x-4">
      <a
        href="https://www.tiktok.com/@numerology_33"
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-200/20 to-purple-500/20 p-[1px] hover:scale-110 transition-transform group"
      >
        <div className="w-full h-full rounded-full bg-background flex items-center justify-center group-hover:bg-amber-950/50 transition-colors">
          <TikTokIcon className="w-4 h-4 text-amber-200/90" />
        </div>
      </a>
      <a
        href="https://www.youtube.com/@numerology-33"
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-200/20 to-purple-500/20 p-[1px] hover:scale-110 transition-transform group"
      >
        <div className="w-full h-full rounded-full bg-background flex items-center justify-center group-hover:bg-amber-950/50 transition-colors">
          <Youtube className="w-4 h-4 text-amber-200/90" />
        </div>
      </a>
      <a
        href="https://www.instagram.com/33.numerology33"
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-200/20 to-purple-500/20 p-[1px] hover:scale-110 transition-transform group"
      >
        <div className="w-full h-full rounded-full bg-background flex items-center justify-center group-hover:bg-amber-950/50 transition-colors">
          <Instagram className="w-4 h-4 text-amber-200/90" />
        </div>
      </a>
    </div>
  )
}

export default FooterSocialLinks