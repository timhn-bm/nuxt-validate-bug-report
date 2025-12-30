// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	sourcemap: true,
	experimental: {
		defaults: {
			nuxtLink: {
				prefetch: false,
			},
		},
	},
});
