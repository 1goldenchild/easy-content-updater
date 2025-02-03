import { lazy, Suspense } from "react"
import Hero from "@/components/home/Hero"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

// Lazy load components with loading fallbacks
const SecretKnowledge = lazy(() => import("@/components/home/SecretKnowledge"))
const Benefits = lazy(() => import("@/components/home/Benefits"))
const SalesPitch = lazy(() => import("@/components/home/SalesPitch"))
const Testimonials = lazy(() => import("@/components/home/Testimonials"))
const BlogSection = lazy(() => import("@/components/home/sections/BlogSection"))

// Loading placeholder component
const LoadingPlaceholder = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
)

const Index = () => {
  return (
    <>
      <Navbar />
      <div className="flex-1">
        {/* Hero is not lazy loaded as it's above the fold */}
        <div id="hero">
          <Hero />
        </div>
        
        <Suspense fallback={<LoadingPlaceholder />}>
          <div id="benefits">
            <Benefits />
          </div>
        </Suspense>

        <Suspense fallback={<LoadingPlaceholder />}>
          <div id="sales">
            <SalesPitch />
          </div>
        </Suspense>

        <Suspense fallback={<LoadingPlaceholder />}>
          <div id="knowledge">
            <SecretKnowledge />
          </div>
        </Suspense>

        <Suspense fallback={<LoadingPlaceholder />}>
          <div id="testimonials">
            <Testimonials />
          </div>
        </Suspense>

        <Suspense fallback={<LoadingPlaceholder />}>
          <div id="blog">
            <BlogSection />
          </div>
        </Suspense>
      </div>
      <Footer />
    </>
  )
}

export default Index