import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Numerology from "./pages/Numerology";
import LifePathNine from "./pages/LifePathNine";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/numerology" element={<Numerology />} />
          <Route path="/lifepath-number-9" element={<LifePathNine />} />
        </Routes>
      </Router>
      <Toaster position="bottom-right" />
      <Analytics />
      <SpeedInsights />
    </QueryClientProvider>
  );
}

export default App;