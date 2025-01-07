import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CollectInfo from "./pages/CollectInfo";
import Analysis from "./pages/Analysis";
import EmailPreview from "./pages/EmailPreview";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/collect-info" element={<CollectInfo />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/email-preview" element={<EmailPreview />} />
      </Routes>
    </Router>
  );
};

export default App;
