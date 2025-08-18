import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://script.google.com", // nơi thật (GAS)
        changeOrigin: true, // giả mạo origin để tránh bị chặn
        rewrite: (path) => path.replace(/^\/api/, ""), // bỏ prefix /api
      },
    },
  },
});
