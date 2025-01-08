import { cn } from "@/lib/utils"

interface UpsellContainerProps {
  children: React.ReactNode
  className?: string
}

export const UpsellContainer = ({ children, className }: UpsellContainerProps) => (
  <div className={cn(
    "min-h-screen bg-[#121212] py-12",
    className
  )}>
    <div className="container max-w-4xl mx-auto px-4">
      <div className="bg-[#1A1F2C] p-4 w-full">
        {children}
      </div>
    </div>
  </div>
)