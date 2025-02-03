import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Toaster } from "sonner";
import { AuthProvider } from "./components/auth/AuthProvider";
import "./index.css";

// Defer non-critical initialization
const init = () => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <AuthProvider>
        <App />
        <Toaster position="top-center" />
      </AuthProvider>
    </React.StrictMode>
  );
};

// Check if the document is already loaded
if (document.readyState === 'complete') {
  init();
} else {
  window.addEventListener('load', init);
}