// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ['~/assets/css/main.css'],
	nitro: {
		preset: "vercel",
	  },
	runtimeConfig: {
		OPENAI_API_KEY: process.env.OPENAI_API_KEY
	},
	modules: ["nuxt-chatgpt"],
	chatgpt: {
		apiKey: process.env.OPENAI_API_KEY
	  },
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		}
	}
});
