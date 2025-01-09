import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Index from "@/pages/Index"
import Analysis from "@/pages/Analysis"
import Blog from "@/pages/Blog"
import Sales from "@/pages/Sales"
import Checkout from "@/pages/Checkout"
import CollectInfo from "@/pages/CollectInfo"
import EmailPreview from "@/pages/EmailPreview"
import Portal from "@/pages/Portal"
import Upsell from "@/pages/Upsell"
import Upsell2 from "@/pages/Upsell2"
import Terms from "@/pages/Terms"
import Privacy from "@/pages/Privacy"
import Refund from "@/pages/Refund"
import Support from "@/pages/Support"

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/collect-info" element={<CollectInfo />} />
            <Route path="/email-preview" element={<EmailPreview />} />
            <Route path="/portal" element={<Portal />} />
            <Route path="/upsell" element={<Upsell />} />
            <Route path="/upsell2" element={<Upsell2 />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App