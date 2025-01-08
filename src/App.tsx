import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Index from "@/pages/Index"
import Sales from "@/pages/Sales"
import Analysis from "@/pages/Analysis"
import Blog from "@/pages/Blog"
import CollectInfo from "@/pages/CollectInfo"
import Portal from "@/pages/Portal"
import EmailPreview from "@/pages/EmailPreview"
import Checkout from "@/pages/Checkout"
import { Toaster } from "@/components/ui/sonner"
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/sales/*" element={<Sales />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/collect-info" element={<CollectInfo />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/email-preview" element={<EmailPreview />} />
        <Route path="/checkout/:step" element={<Checkout />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App