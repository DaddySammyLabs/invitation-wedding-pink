import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
      "@components": path.resolve(import.meta.dirname, "./src/components"),
      "@pages": path.resolve(import.meta.dirname, "./src/pages"),
      "@assets": path.resolve(import.meta.dirname, "./src/assets"),
      "@utils": path.resolve(import.meta.dirname, "./src/utils"),
    },
  },
});
