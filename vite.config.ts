import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Thelmer/", // 👈 VERY IMPORTANT for GitHub Pages
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
