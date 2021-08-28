<template>
	<div class="bg-white shadow-md mt-3 rounded-md py-5">
		<div v-if="hasHeader" class="px-5">
			<slot name="header" />
		</div>
		<vs-divider v-if="hasHeader" />
		<div class="px-5">
			<slot name="body" />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		hasHeader: {
			type: Boolean,
			default: true,
		},
	},
};
</script>

<style></style>
