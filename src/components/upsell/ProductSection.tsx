import { cn } from "@/lib/utils"

interface ProductSectionProps {
  children: React.ReactNode
  className?: string
}

export const ProductSection = ({ children, className }: ProductSectionProps) => (
  <div className={cn(
    "bg-[#2A2F3C] p-2 md:p-6 mx-auto w-full rounded-2xl relative overflow-hidden",
    className
  )}>
    <div className="absolute inset-[-1px] bg-gradient-to-br from-emerald-500/10 to-emerald-500/20 rounded-2xl -z-10 animate-pulse" />
    <div className="flex flex-col md:flex-row gap-6 max-w-[1200px] mx-auto bg-[#2A2F3C]/95 rounded-xl p-4 md:p-6 border border-emerald-500/10 shadow-[0_0_15px_rgba(52,211,153,0.1)]">
      {children}
    </div>
  </div>
)