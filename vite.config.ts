import { defineConfig } from "vite"

export default defineConfig({
	build: {
		outDir: 'examples'
	},
  resolve: {
    alias: {
      "@graphics/": `/src/script/graphics/`
    },
  },
})