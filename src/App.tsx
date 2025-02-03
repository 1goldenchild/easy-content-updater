import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AuthProvider } from "@/components/auth/AuthProvider";

// Lazy load all routes
const Index = lazy(() => import("./pages/Index"));
const Portal = lazy(() => import("./pages/Portal"));
const MyNumerology = lazy(() => import("./pages/MyNumerology"));
const CollectInfo = lazy(() => import("./pages/CollectInfo"));
const CollectReadingInfo = lazy(() => import("./pages/CollectReadingInfo"));
const Support = lazy(() => import("./pages/Support"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Refund = lazy(() => import("./pages/Refund"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const LifepathNumberNine = lazy(() => import("./pages/LifepathNumberNine"));
const Reading = lazy(() => import("./pages/Reading"));
const Auth = lazy(() => import("./pages/Auth"));

// Loading fallback
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/portal" element={<Portal />} />
            <Route path="/mynumerology" element={<MyNumerology />} />
            <Route path="/collect-info" element={<CollectInfo />} />
            <Route path="/collect-reading-info" element={<CollectReadingInfo />} />
            <Route path="/support" element={<Support />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/lifepath-number-9" element={<LifepathNumberNine />} />
            <Route path="/reading" element={<Reading />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </Suspense>
      </AuthProvider>
    </Router>
  );
};

export default App;