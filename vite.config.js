import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // Ensure correct base path for assets
  server: {
    allowedHosts: "all", // Allow all hosts (fixes issues when using ngrok or external networks)
  },
});
