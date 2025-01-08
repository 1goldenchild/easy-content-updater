import { Button } from "@/components/ui/button"

interface VIPOptionProps {
  isVip: boolean
  onVipChange: (value: boolean) => void
}

const VIPOption = ({ isVip, onVipChange }: VIPOptionProps) => {
  return (
    <div className="border border-purple-500 rounded-lg p-4 bg-[#2A2F3C]/50">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-purple-400">⭐VIP CUSTOMER⭐</h3>
          <p className="text-sm text-gray-400">By Joining The VIP List You Get to Skip The Line And Receive Your Analysis Sooner!</p>
        </div>
        <div className="text-right">
          <div className="text-white mb-1">$11.00</div>
          <Button
            type="button"
            variant="outline"
            className={`border-purple-500 ${isVip ? 'bg-purple-500 text-white' : 'text-purple-500'}`}
            onClick={() => onVipChange(!isVip)}
          >
            {isVip ? '- Remove' : '+ Add'}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default VIPOption