import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/components/auth/AuthProvider";
import Index from "./pages/Index";
import Portal from "./pages/Portal";
import CollectInfo from "./pages/CollectInfo";
import CollectReadingInfo from "./pages/CollectReadingInfo";
import Support from "./pages/Support";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Refund from "./pages/Refund";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import LifepathNumberNine from "./pages/LifepathNumberNine";
import Reading from "./pages/Reading";
import Auth from "./pages/Auth";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portal" element={<Portal />} />
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
      </AuthProvider>
    </Router>
  );
};

export default App;