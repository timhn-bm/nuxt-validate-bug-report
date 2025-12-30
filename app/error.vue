<template>
	<div>
		<h1>{{ error.statusCode }}</h1>
		<NuxtLink to="/">Go back home</NuxtLink>
		<NuxtLink to="/a">Go to a</NuxtLink>
	</div>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{ error: NuxtError }>();
</script>

<style scoped></style>
