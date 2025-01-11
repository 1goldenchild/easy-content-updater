import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Index from "@/pages/Index"
import Sales from "@/pages/Sales"
import CollectInfo from "@/pages/CollectInfo"
import Portal from "@/pages/Portal"
import Terms from "@/pages/Terms"
import Privacy from "@/pages/Privacy"
import Refund from "@/pages/Refund"
import Support from "@/pages/Support"
import Checkout from "@/pages/Checkout"

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Navigate to="/numerology-reading" replace />} />
            <Route path="/numerology-reading" element={<Index />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/collect-info" element={<CollectInfo />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/portal" element={<Portal />} />
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