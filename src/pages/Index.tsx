
import { lazy, Suspense } from "react"
import Hero from "@/components/home/Hero"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

// Lazy load components that are not immediately visible
const Benefits = lazy(() => import("@/components/home/Benefits"))
const SalesPitch = lazy(() => import("@/components/home/SalesPitch"))
const Testimonials = lazy(() => import("@/components/home/Testimonials"))
const BlogSection = lazy(() => import("@/components/home/sections/BlogSection"))

const Index = () => {
  return (
    <>
      <Navbar />
      <div className="flex-1">
        {/* Hero is not lazy loaded as it's above the fold */}
        <div id="hero">
          <Hero />
        </div>
        
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <div id="benefits">
            <Benefits />
          </div>
        </Suspense>

        <Suspense fallback={<div className="min-h-[400px]" />}>
          <div id="sales">
            <SalesPitch />
          </div>
        </Suspense>

        <Suspense fallback={<div className="min-h-[400px]" />}>
          <div id="testimonials">
            <Testimonials />
          </div>
        </Suspense>

        <Suspense fallback={<div className="min-h-[400px]" />}>
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
