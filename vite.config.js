import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: "/src/components",
      data: "/src/data",
      helpers: "/src/helpers",
      tabs: "/src/tabs",
      hooks: "/src/hooks",
    },
  },
});
