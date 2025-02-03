import { lazy, Suspense } from "react"
import Hero from "@/components/home/Hero"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { useIsMobile } from "@/hooks/use-mobile"

// Lazy load components
const SecretKnowledge = lazy(() => import("@/components/home/SecretKnowledge"))
const Benefits = lazy(() => import("@/components/home/Benefits"))
const SalesPitch = lazy(() => import("@/components/home/SalesPitch"))
const Testimonials = lazy(() => import("@/components/home/Testimonials"))
const BlogSection = lazy(() => import("@/components/home/sections/BlogSection"))

// Optimized loading placeholder
const LoadingPlaceholder = () => {
  const isMobile = useIsMobile()
  
  return (
    <div className={`min-h-[${isMobile ? '200px' : '400px'}] flex items-center justify-center`}>
      <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
}

const Index = () => {
  const isMobile = useIsMobile()

  return (
    <>
      <Navbar />
      <div className="flex-1">
        {/* Hero is not lazy loaded as it's above the fold */}
        <div id="hero">
          <Hero />
        </div>
        
        {/* Use Intersection Observer for better performance */}
        <Suspense fallback={<LoadingPlaceholder />}>
          <div id="benefits" className="lazy-section">
            <Benefits />
          </div>
        </Suspense>

        <Suspense fallback={<LoadingPlaceholder />}>
          <div id="sales" className="lazy-section">
            <SalesPitch />
          </div>
        </Suspense>

        <Suspense fallback={<LoadingPlaceholder />}>
          <div id="knowledge" className="lazy-section">
            <SecretKnowledge />
          </div>
        </Suspense>

        <Suspense fallback={<LoadingPlaceholder />}>
          <div id="testimonials" className="lazy-section">
            <Testimonials />
          </div>
        </Suspense>

        <Suspense fallback={<LoadingPlaceholder />}>
          <div id="blog" className="lazy-section">
            <BlogSection />
          </div>
        </Suspense>
      </div>
      <Footer />
    </>
  )
}

export default Index