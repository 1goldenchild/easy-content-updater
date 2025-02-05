/// <reference types="vite/client" />

interface Window {
  fbq: (event: string, action: string, params?: Record<string, any>) => void;
}