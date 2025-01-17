import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom"
import { useEffect } from "react"
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
import BlogPost from "@/pages/BlogPost"
import Blog from "@/pages/Blog"
import LifePathNine from "@/pages/LifePathNine"

// ScrollToTop component to handle scroll behavior
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Navigate to="/numerology/analysis" replace />} />
            <Route path="/numerology/analysis" element={<Index />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/collect-info" element={<CollectInfo />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/portal" element={<Portal />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/support" element={<Support />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/lifepath-number-9" element={<LifePathNine />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App