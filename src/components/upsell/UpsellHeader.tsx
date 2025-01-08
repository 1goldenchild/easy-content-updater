import { cn } from "@/lib/utils"

interface UpsellHeaderProps {
  className?: string
}

export const UpsellHeader = ({ className }: UpsellHeaderProps) => (
  <div className={cn(
    "text-center mb-8 max-w-[800px] mx-auto",
    className
  )}>
    <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold tracking-tight bg-gradient-to-r from-white via-purple-500 to-white bg-[length:200%_auto] bg-clip-text text-transparent animate-[shine_8s_linear_infinite] relative mb-4">
      Special One-Time <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Offer!</span>
    </h1>
    <p className="text-white font-semibold text-[clamp(1rem,3vw,1.125rem)] max-w-[600px] mx-auto px-1">
      Enhance Your Numerology Reading with Advanced Money Manifestation Secrets
    </p>
  </div>
)