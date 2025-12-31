import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      appType: 'spa',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        // Ensure client-side routes like /app don’t get resolved to /App.tsx on macOS
        {
          name: 'autofounder-spa-fallback',
          configureServer(server) {
            server.middlewares.use((req, _res, next) => {
              const url = req.url || '';

              // Always treat /app as a client-side route. On case-insensitive filesystems,
              // Vite can otherwise resolve /app -> /App.tsx and serve JS to the browser.
              const method = (req.method || 'GET').toUpperCase();
              if ((method === 'GET' || method === 'HEAD') && /^\/app(?:[/?#]|$)/.test(url)) {
                req.url = '/';
              }

              next();
            });
          },
        },
        react(),
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
