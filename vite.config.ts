import { defineConfig } from "vite"

export default defineConfig({
	build: {
		outDir: 'examples',
	},
  base: '3D-sandbox-web/examples',
  resolve: {
    alias: {
      "@graphics/": `/src/script/graphics/`
    },
  },
})