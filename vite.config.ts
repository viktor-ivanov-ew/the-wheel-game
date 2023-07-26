/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
import { VitePluginFonts } from "vite-plugin-fonts";

export default defineConfig({
	cacheDir: "./node_modules/.vite/the-wheel-game",
	envPrefix: "NX",

	server: {
		port: 4200,
		host: "localhost",
	},

	preview: {
		port: 4300,
		host: "localhost",
	},

	plugins: [
		react(),
		viteTsConfigPaths({
			root: "./",
		}),
		VitePluginFonts({
			google: {
				families: [
					"Holtwood One SC",
					"Gluten"
				]
			}
		})
	],

	// Uncomment this if you are using workers.
	// worker: {
	//  plugins: [
	//    viteTsConfigPaths({
	//      root: './',
	//    }),
	//  ],
	// },

	test: {
		globals: true,
		cache: {
			dir: "./node_modules/.vitest",
		},
		environment: "jsdom",
		include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
	},
});
