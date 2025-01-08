import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Index from "@/pages/Index"
import Checkout from "@/pages/Checkout"
import Upsell from "@/pages/Upsell"
import ContactInfo from "@/components/checkout/ContactInfo"
import PackageSelection from "@/components/checkout/PackageSelection"
import BillingInfo from "@/components/checkout/BillingInfo"
import StripeElements from "@/components/checkout/StripeElements"
import VIPOption from "@/components/checkout/VIPOption"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/upsell/1" element={<Upsell />} />
        <Route path="/upsell/2" element={<Upsell />} />
      </Routes>
    </Router>
  )
}

export default App
