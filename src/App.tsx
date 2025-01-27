import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Portal from "./pages/Portal";
import CollectInfo from "./pages/CollectInfo";
import Checkout from "./pages/Checkout";
import Sales from "./pages/Sales";
import Support from "./pages/Support";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Refund from "./pages/Refund";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import LifepathNumberNine from "./pages/LifepathNumberNine";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/collect-info" element={<CollectInfo />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/support" element={<Support />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/lifepath-number-9" element={<LifepathNumberNine />} />
      </Routes>
    </Router>
  );
};

export default App;