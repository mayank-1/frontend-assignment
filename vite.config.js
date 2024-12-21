import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Important for using global APIs like describe, it, expect
    environment: "jsdom", // Use jsdom for browser environment
    setupFiles: ["./src/setupTests.js"], // Optional setup file
  },
});
