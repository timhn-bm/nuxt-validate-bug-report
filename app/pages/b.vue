<template>
	<div>welcome to page b</div>
</template>

<script setup lang="ts">
// THIS DOES NOT WORK AS EXPECTED. THE URL DOES NOT UPDATE to /b when we try to navigate to this page
definePageMeta({
	validate: () => false,
});

console.log("hello from b.vue");
</script>
