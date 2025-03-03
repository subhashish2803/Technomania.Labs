import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/", // Ensure correct base path for assets
  server: {
    allowedHosts: "all", // Allow all hosts (fixes issues when using ngrok or external networks)
  },
  
});
