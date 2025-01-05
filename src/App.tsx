import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Index from "./pages/Index"
import Analysis from "./pages/Analysis"
import Blog from "./pages/Blog"
import Sales from "./pages/Sales"
import MatrixLoading from "./components/loading/MatrixLoading"

const queryClient = new QueryClient()

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {loading ? (
          <MatrixLoading onLoadComplete={() => setLoading(false)} />
        ) : (
          <BrowserRouter>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/analysis" element={<Analysis />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/sales/*" element={<Sales />} />
              </Routes>
              <Footer />
            </div>
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  )
}

export default App