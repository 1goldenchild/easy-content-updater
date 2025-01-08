import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Index from "./pages/Index"
import Analysis from "./pages/Analysis"
import Blog from "./pages/Blog"
import Sales from "./pages/Sales"
import CollectInfo from "./pages/CollectInfo"
import Portal from "./pages/Portal"
import EmailPreview from "./pages/EmailPreview"
import Checkout from "./pages/Checkout"

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/collect-info" element={<CollectInfo />} />
              <Route path="/analysis" element={<Analysis />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/sales/*" element={<Sales />} />
              <Route path="/portal" element={<Portal />} />
              <Route path="/email-preview" element={<EmailPreview />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  )
}

export default App