<template>
	<div class="flex flex-col">
		<div v-for="(coin, index) in coins" :key="index">
			{{ coin }}
		</div>
	</div>
</template>

<script>
export default {
	props: {
		coins: {
			type: Array,
			default: () => []
		}
	}
};
</script>

<style></style>
