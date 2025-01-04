import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  build: {
    outDir: "dist", // Default output directory for Vite, ensure this matches your deployment setup
  },
  server: {
    port: 3000, // Optional: Customize your dev server port
  },
  // Add base configuration for Vercel routing
  base: "/",
});
