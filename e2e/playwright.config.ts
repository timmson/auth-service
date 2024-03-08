import {defineConfig} from "@playwright/test"

export default defineConfig({
	testDir: "./test",
	testMatch: "**.test.ts",

	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 1 : undefined,
	reporter: "html",

	use: {
		baseURL: "http://localhost:8080/",
		trace: "on-first-retry",
	},

	projects: [
		{
			name: "common",
			use: {
				launchOptions: {
					args: ["--start-maximized"]
				},
				viewport: null
			},
		},
	],

})
