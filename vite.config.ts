import { defineConfig } from "vite"

export default defineConfig({
  resolve: {
    alias: {
      "@graphics/": `./src/script/graphics/`
    },
  },
})