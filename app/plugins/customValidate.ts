export default defineNuxtPlugin(() => {
	const router = useRouter();
	const app = useNuxtApp();

	// Only called for client-side navigation
	router.afterEach((to, from) => {
		const customValidate = to.meta.customValidate;

		if (customValidate) {
			if (!customValidate()) {
				showError({
					status: 404,
					fatal: true,
				});
			}
		}
	});

	// Only for server-side navigation
	router.beforeResolve((to) => {
		if (import.meta.client && !app.isHydrating) return;

		const customValidate = to.meta.customValidate;
		if (customValidate) {
			if (!customValidate()) {
				throw createError({
					status: 404,
					fatal: true,
				});
			}
		}
	});
});
