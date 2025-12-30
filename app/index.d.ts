declare module "vue-router" {
	interface RouteMeta {
		customValidate?: () => boolean;
	}
}

export {};
