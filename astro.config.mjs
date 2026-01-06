import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://sounderya22.github.io',
  base: '/my-portfolio',
  vite: {
    plugins: [tailwindcss()], // This is required for Tailwind v4
  },
});