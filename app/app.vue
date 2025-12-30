<script setup lang="ts"></script>

<template>
	<!-- Edit this file to play around with Nuxt but never commit changes! -->
	<div>
		Nuxt Playground

		<NuxtPage />

		<div style="display: flex; gap: 10px">
			<NuxtLink to="/">Home</NuxtLink>
			<NuxtLink to="/a">Page A</NuxtLink>
			<NuxtLink to="/b">Page B (reproduce bug)</NuxtLink>
			<NuxtLink to="/c"
				>Page C (works as expected thanks to customValidate
				plugin)</NuxtLink
			>
		</div>
	</div>
</template>

<style scoped></style>
