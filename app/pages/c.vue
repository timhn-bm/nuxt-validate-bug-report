<template>
	<div>welcome to page b</div>
</template>

<script setup lang="ts">
import * as faker from "@faker-js/faker";

// THIS WORKS AS EXPECTED. THE URL UPDATES to /c when we try to navigate to this page
// The only issue is that we fetch the JS chunk associated to this page even though it's not necessary
definePageMeta({
	customValidate: () => false,
});

console.log("hello from c.vue");
console.log(faker.faker.person.firstName());
</script>
