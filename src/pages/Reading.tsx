
import { lazy, Suspense, useEffect } from "react"
import ReadingHero from "@/components/home/ReadingHero"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { usePageTracking } from "@/hooks/usePageTracking"

// Lazy load components that are not immediately visible
const SecretKnowledge = lazy(() => import("@/components/home/SecretKnowledge"))
const Benefits = lazy(() => import("@/components/home/Benefits"))
const SalesPitch = lazy(() => import("@/components/home/SalesPitch"))
const Testimonials = lazy(() => import("@/components/home/Testimonials"))
const BlogSection = lazy(() => import("@/components/home/sections/BlogSection"))

const Reading = () => {
  usePageTracking();

  useEffect(() => {
    // Track Facebook Pixel ViewContent event
    if (typeof window.fbq !== 'undefined') {
      console.log('Tracking Facebook Pixel ViewContent event');
      window.fbq('track', 'ViewContent');
    } else {
      console.warn('Facebook Pixel is not initialized');
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex-1">
        <div id="hero">
          <ReadingHero />
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
          <div id="knowledge">
            <SecretKnowledge />
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

export default Reading
