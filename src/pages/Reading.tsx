import { lazy, Suspense } from "react"
import ReadingHero from "@/components/home/ReadingHero"
import Navbar from "@/components/layout/Navbar"
import { usePageTracking } from "@/hooks/usePageTracking"

// Lazy load components that are not immediately visible
const Benefits = lazy(() => import("@/components/home/Benefits"))
const SalesPitch = lazy(() => import("@/components/home/SalesPitch"))
const SecretKnowledge = lazy(() => import("@/components/home/SecretKnowledge"))
const Testimonials = lazy(() => import("@/components/home/Testimonials"))
const BlogSection = lazy(() => import("@/components/home/sections/BlogSection"))
const Footer = lazy(() => import("@/components/layout/Footer"))

const Reading = () => {
  usePageTracking();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="flex-1">
        <div id="hero">
          <ReadingHero />
        </div>
        
        <Suspense fallback={
          <div className="min-h-[400px] animate-pulse bg-muted/5" />
        }>
          <div id="benefits">
            <Benefits />
          </div>
        </Suspense>

        <Suspense fallback={
          <div className="min-h-[400px] animate-pulse bg-muted/5" />
        }>
          <div id="sales">
            <SalesPitch />
          </div>
        </Suspense>

        <Suspense fallback={
          <div className="min-h-[400px] animate-pulse bg-muted/5" />
        }>
          <div id="knowledge">
            <SecretKnowledge />
          </div>
        </Suspense>

        <Suspense fallback={
          <div className="min-h-[400px] animate-pulse bg-muted/5" />
        }>
          <div id="testimonials">
            <Testimonials />
          </div>
        </Suspense>

        <Suspense fallback={
          <div className="min-h-[400px] animate-pulse bg-muted/5" />
        }>
          <div id="blog">
            <BlogSection />
          </div>
        </Suspense>
      </main>

      <Suspense fallback={
        <div className="min-h-[200px] animate-pulse bg-muted/5" />
      }>
        <Footer />
      </Suspense>
    </div>
  )
}

export default Reading