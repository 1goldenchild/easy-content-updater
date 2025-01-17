import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import LifePathNine from "./pages/LifePathNine";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/lifepath-number-9" element={<LifePathNine />} />
          {/* Redirect root to lifepath-number-9 for now */}
          <Route path="/" element={<LifePathNine />} />
        </Routes>
      </Router>
      <Toaster position="bottom-right" />
      <Analytics />
      <SpeedInsights />
    </QueryClientProvider>
  );
}

export default App;