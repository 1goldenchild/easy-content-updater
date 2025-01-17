import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { createClient } from '@supabase/supabase-js'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { supabase } from "@/integrations/supabase/client"
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
import Auth from "@/pages/Auth"
import { useAuth } from "@/hooks/useAuth"

// ScrollToTop component to handle scroll behavior
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

// Protected Route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { session, isLoading } = useAuth()
  const location = useLocation()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!session) {
    return <Navigate to="/auth" state={{ from: location }} replace />
  }

  return <>{children}</>
}

const App = () => {
  return (
    <SessionContextProvider supabaseClient={supabase}>
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
              <Route path="/auth" element={<Auth />} />
              <Route 
                path="/portal" 
                element={
                  <ProtectedRoute>
                    <Portal />
                  </ProtectedRoute>
                } 
              />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/refund" element={<Refund />} />
              <Route path="/support" element={<Support />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </SessionContextProvider>
  )
}

export default App