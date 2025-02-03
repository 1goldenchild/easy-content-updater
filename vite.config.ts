import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Create separate chunks for major dependencies
          if (id.includes('node_modules')) {
            if (id.includes('react/') || id.includes('react-dom/')) {
              return 'react-vendor';
            }
            if (id.includes('framer-motion')) {
              return 'animations';
            }
            if (id.includes('@radix-ui/')) {
              return 'ui-components';
            }
            if (id.includes('lucide-react') || id.includes('date-fns')) {
              return 'utils';
            }
            return 'vendor'; // Other dependencies
          }
          // Split app code into logical chunks
          if (id.includes('/components/numerology/')) {
            return 'numerology';
          }
          if (id.includes('/components/home/')) {
            return 'home';
          }
        }
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode !== 'development',
        drop_debugger: mode !== 'development',
        pure_funcs: mode !== 'development' ? ['console.log'] : []
      }
    }
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom',
      'framer-motion'
    ]
  }
}));